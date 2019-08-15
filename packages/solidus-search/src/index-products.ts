import { Client } from '@elastic/elasticsearch'
import got from 'got'
import pMap from 'p-map'
import yargs from 'yargs'

const { esUri, esIndex, solidusUri, solidusToken } = yargs
  .string('esUri')
  .demandOption('esUri')
  .string('esIndex')
  .demandOption('esIndex')
  .string('solidusUri')
  .demandOption('solidusUri')
  .string('solidusToken')
  .demandOption('solidusToken').argv

async function getTotalPages(): Promise<number> {
  const result = await got(`${solidusUri}/api/products`, {
    headers: {
      Authorization: `Bearer ${solidusToken}`,
    },
  })
  const { products, pages } = JSON.parse(result.body)
  console.log(products)
  return pages
}

async function getProducts(page: number): Promise<any[]> {
  const result = await got(`${solidusUri}/api/products?page=${page}`, {
    headers: {
      Authorization: `Bearer ${solidusToken}`,
    },
  })
  const { products } = JSON.parse(result.body)
  return products
}

const es = new Client({ node: esUri })

async function run() {
  const totalPages = await getTotalPages()
  await pMap(
    new Array(totalPages).fill(0).map((_, idx) => idx + 1),
    async page => {
      const products = await getProducts(page)
      const body = products.reduce(
        (acc: any[], v) => [...acc, { index: { _index: esIndex } }, v],
        [],
      )
      const { body: result } = await es.bulk({
        body,
      })
      console.log(result)
    },
    { concurrency: 1 },
  )
}

run()
