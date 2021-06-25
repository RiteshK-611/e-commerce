const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IPMKXBvET1KMuiVGdvjcYY9QQfHlY0sfwIaz0zcsktT0GulUPrmw7K3RBZbrjsumcvWJHSicxbDzV7tkZqOoekF002uCU30kP');

// API

// - App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('hello world ! valla!!'));

app.post('/payments/create', async (req, res) => {
  if (req.method === "POST") {
    try {
      const total = req.query.total;

      // console.log("Payment Request Received for this amount ===> ", total)

      const paymentIntent = await stripe.paymentIntents.create({
        description: 'Amazon Clone Buy trying hard',
        shipping: {
          name: 'Jenny Rosen',
          address: {
            line1: '510 Townsend St',
            postal_code: '98140',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
          },
        },
        amount: total,
        currency: 'usd',
        payment_method_types: ['card'],
      });

      res.status(200).send({
          clientSecret: paymentIntent.client_secret,
        });
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed")
  }
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/e-commerce-site-89d25/us-central1/api