# ProShop eCommerce Platform
A full stack ecommerce website build from scratch using MERN & redux

This project is deployed on heroku [Click to Vist and Test](https://proshop-mern-app-piyush.herokuapp.com/)

## Screenshots

[Click to view more Screenshots](https://github.com/piyush-21082001/ecommerce_mern/tree/master/uploads/screenshots)


![screenshot](https://github.com/piyush-21082001/ecommerce_mern/blob/master/uploads/screenshots/home_page_ss.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = your secret key
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```
