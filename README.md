# Node-e-commerce

This is a sample application that demonstrates an E-commerce website using the EJS Template and NodeJS. The application
loads products using MongoDB database and displays them. Users can click on any product to get more information
including pricing, description, add to cart, they can select items and add them to their shopping cart,they you visit
carts page and place their order which redirects user to a payment portal, once the payment is done user will redirect
to orders page where he can download his invoice.

## Live Demonstration

The E-commerce demo can be [viewed online here](https://ejs-node-e-commerce.herokuapp.com/).

## Getting Started

To get started you can simply clone this `node-e-commerce` repository and install the dependencies.

Clone the `node-e-commerce` repository using git:

```bash
git clone https://github.com/msmmanoj/node-e-commerce.git
cd node-e-commerce
```

Install dependencies with this command:

```bash
npm install
```
Before running the application need to generate a couple of api keys and copy those into nodemon.json 

create Twilio sendgrid API key here [viewed online here](https://app.sendgrid.com/).

create Stripe API key here [viewed online here](https://dashboard.stripe.com/).

### nodemon.json env variable structure

```
{
  "env": {
    "MONGO_DB_NAME": "provide your mongo db name",
    "MONGO_PASSWORD": "provide your mongo db password",
    "MONGO_USER": "provide your mongo db user name",
    "SEND_GRID_API_KEY": "sendgrid API KEY",
    "ADMIN_MAIL_ID": "provide your sendgrid mail id",
    "STRIPE_KEY": "Stripe API Key"
  }
}
```

Run the application with this command:
```bash
npm run dev
```

## Application Dependencies

* EJS
  #### Used EJS Template for generating HTML markup with plain JavaScript
* Node.js
  #### Used NodeJS express framework for building backend
* Mongo DB (Mongoose)
  #### Used mongoose ODM to manage relationships between data and for creating model classes
* Twilio SendGrid
  #### Used Twilio SendGrid for backend mail services
* Stripe
  #### Used Stripe APIs to accept payments, send payouts, and manage businesses online.
* pdfkit
  #### Used for generating Order invoice documents
* multer
  #### Used Multer for handling multipart/form-data

## Future Releases
* Working on moving from EJS Templates to React
* Integrate NodejS testing framework
* Enable Auto deployment

## Author

**Malepati Manoj**
* [github/msmmanoj](https://github.com/msmmanoj)

## License
Copyright © 2021 [Malepati Manoj](https://github.com/msmmanoj)
