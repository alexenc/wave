const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const middlewares = require("../middlewares/auth.js");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// buy a ticket

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Ticket",
          },
          unit_amount: 1500,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3001/",
    cancel_url: "http://localhost:3001/",
  });

  res.redirect(303, session.url);
  res.status(200).json(session.url);
});

module.exports = router;
