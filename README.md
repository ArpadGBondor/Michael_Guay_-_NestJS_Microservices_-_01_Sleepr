# Michael Guay - NestJS Microservices: Build & Deploy a Scaleable Backend - 01 - Sleepr

## Udemy - [Michael Guay - NestJS Microservices: Build & Deploy a Scaleable Backend](https://www.udemy.com/course/nestjs-microservices-build-deploy-a-scaleable-backend/)

- Section 1: Introduction
- Section 2: Common Library
- Section 3: Authentication
- Section 4: Payments

## Deployed

- Not deployed yet

## Used Tools:

- Backend:
  - NestJS
    - Microservices
    - MongoDB - Mongoose

## How to run:

- Run in docker
  - `docker-compose up`
- Access endpoints through an API testing tool, like Postman:
  - [Postman requests](./Michael%20Guay%20-%20NestJS%20Microservices.postman_collection.json)

## Mayor changes:

- Not yet.

## Environment variables:

- auth: `apps/auth/.env`
  - MONGODB_URI=mongodb://mongo:27017/sleepr
    - connects to mongo image in docker-compose
  - JWT_SECRET=R30j3GPiQKr+BsRLsNdRauqVxEIYt/3ICWUARtGoBnosjN6JYq3SzuiCK4Y4Tup9
    - random string generated with `openssl rand -base64 48`
  - JWT_EXPIRATION=3600
  - HTTP_PORT=3001
  - TCP_PORT=3002
- reservations: `apps/reservations/.env`
  - MONGODB_URI=mongodb://mongo:27017/sleepr
    - connects to mongo image in docker-compose
  - PORT=3001
  - AUTH_HOST=auth
  - AUTH_PORT=3002
  - PAYMENTS_HOST=payments
  - PAYMENTS_PORT=3003
- payments: `apps/reservations/.env`
  - PORT=3003
  - STRIPE_SECRET_KEY
    - get your key from [Stripe](https://stripe.com/)

## The instructor's solution:

- The source code of the instructor's solution is in [this Github repo](https://github.com/mguay22/sleepr)
