const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const middlewares = require("../middlewares/auth.js");

//create a new event
router.post(
  "/create",
  middlewares.verifyTokenAndAdmin,
  eventController.createEvent
);

//user join a event (id -> event id)
router.put(
  "/join/:idEvent",
  middlewares.verifyTokenAndAuth,
  eventController.joinEvent
);

// exit a event

router.put(
  "/exit/:idEvent",
  middlewares.verifyTokenAndAuth,
  eventController.exitEvent
);

//Get all events

router.get("/", eventController.getAllEvents);

//get active events

router.get("/active", eventController.getActiveEvents);

module.exports = router;
