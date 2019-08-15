# Solidus util

The goal of this project is not to replace Spree / Solidus

## Solidus search

Including a toolset to extend Solidus core in Node.js

- Index all products to elasticsearch via solidus api
- Index 1 product to elasticsearch via solidus api
- Api endpoint for Storefront (you can choose what ever stack)

### TODO

- [ ] Include a benchmark between a Solidus api (around 10 req/s) in Rails vs Elasticsearch (1k req/s)

## Solidus images

Utils to push all images to S3 & serve via Cloudfront. It supports:

- Sync all images to S3
- Transform image on the fly using Cloudinary like syntax

## Solidus Dashboard

What's in that better than current Solidus Dashboard?

- Edit on the table, you don't need to switch context
- The filter is improved to filter more fields: full text, price, properties, options, ...
- Advance bulk edit
- Export / Import data from Excel
