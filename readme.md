# MongoDB Relationship Examples using Mongoose

This repository demonstrates various relationship types in MongoDB using Mongoose, a MongoDB object modeling tool designed for Node.js.

## Overview

The repository contains code samples that illustrate different types of relationships between entities in a MongoDB database:

1. **One-to-Many (Single Data):** Demonstrates a relationship between a `User` and their multiple `Post`s.

2. **One-to-Many (Few Data):** Illustrates a relationship between a `User` and their multiple `Address`es.

3. **One-to-Many (Many Data):** Displays a relationship between a `Customer` and their multiple `Order`s.

## Code Samples

### One-to-Many (Single Data)

- `User` is related to multiple `Post`s using the `ref` field in the `postSchema`. A `User` can have multiple associated `Post`s.

### One-to-Many (Few Data)

- `User` contains multiple `Address`es within an array. Each `Address` is embedded within the `User` document.

### One-to-Many (Many Data)

- `Customer` has multiple `Order`s, stored by referencing the `Order` model within the `orders` array.


## Dependencies

- Node.js
- MongoDB
- Mongoose

