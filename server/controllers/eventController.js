const Event = require("../models/Event.js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.joinEvent = async (req, res) => {
  const eventId = req.params.idEvent;

  const token = req.header("token");

  const data = jwt.decode(token);

  try {
    !eventId && res.status(404).json("not event");

    const event = await Event.findById(eventId);

    !event && res.status(404).json("event not found");

    if (event.isActive == false) {
      res.status(404).json("event inactive");
    }

    const user = await User.findById(data.id).select("-password -email");

    //check if user is already signed in the event
    const checkIfUserIsSinged = (event, user) => {
      const userId = user._id.toString();
      console.log(userId);

      for (let i = 0; i < event.peopleList.length; i++) {
        if (event.peopleList[i]._id.toString() == userId) {
          throw "you are already in the event";
        }
      }
      return false;
    };

    checkIfUserIsSinged(event, user);

    let userTickets = user.tickets;

    //check if user has tickets and update his balance
    if (userTickets < 1) {
      throw "you have not tickets";
    }
    const newUserTickets = userTickets - event.cost;
    await user.update({ tickets: newUserTickets });
    await event.update({ $push: { peopleList: user } });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.exitEvent = async (req, res) => {
  const eventId = req.params.idEvent;

  const token = req.header("token");

  const data = jwt.decode(token);

  try {
    const event = await Event.findById(eventId);
    const user = await User.findById(data.id);

    //check if user is already signed in the event
    const checkIfUserIsSinged = (event, user) => {
      const userId = user._id;

      for (let i = 0; i < event.peopleList.length; i++) {
        event.peopleList[i]._id == userId;
        return true;
      }
      throw "you are not in the event";
    };

    checkIfUserIsSinged(event, user);
    let userTickets = user.tickets;
    const newUserTickets = userTickets + event.cost;
    await user.update({ tickets: newUserTickets });
    await event.update({ $pull: { peopleList: { _id: user._id } } });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getActiveEvents = async (req, res) => {
  try {
    const activeEvents = await Event.find({ isActive: true });
    res.status(200).json(activeEvents);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSingleEvent = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const events = await Event.find({ _id: id });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error);
  }
};
