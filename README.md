## Description
Nest application with Categories and Products.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Completed Tasks
- [x] Setup Nest app
- [x] Create Category entity
- [x] Create Product entity
- [x] Connect with Mongo DB
- [x] Configure Port and DB connection
- [x] Implement entities Category and Product
    ```
    Category
    title: "Category-1"
    products: ["product_id_1", "product_id_2", "product_id_2"]
    
    Product
    title: "Product-1"
    price: 2000
    category: "category_id_1"
    ``` 
- [x] Implement REST API
    ```
    [GET, POST]             /categories
    [GET, PATCH, DELETE]    /categories/<category_id>
    [GET, POST]             /categories/<category_id>/products
    [GET, PATCH, DELETE]    /categories/<category_id>/products/<product_id>
    
    [GET, POST]             /products
    [GET, PATCH, DELETE]    /products/<product_id>
    ```
