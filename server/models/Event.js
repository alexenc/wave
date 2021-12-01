const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: function () {
      return Date.now() + 3600 * 1000 * 24;
    },
  },
  peopleList: {
    type: Array,
    default: [],
  },
  cost: {
    type: Number,
    default: 1,
  },
  teachers: {
    type: Array,
    default: [],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Event", EventSchema);
