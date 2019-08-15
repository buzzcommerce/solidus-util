# Solidus Search

## Indexing

### Reports

- It tooks 24.43s to upload 2,681 products from `local solidus api` to `external elasticsearch server`

## Searching

- `raw elsaticsearch api` able to serve up to 2,811 req/s compare to 12 req/s (200x) from `solidus api` (all tests is running via localhost - `solidus api` on rails only run using 1 single thread; elasticsearch use multiple thread)

### TODO

- [ ] Search endpoint
- [ ] Add Mappings
