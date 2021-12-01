const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

//Create server
const app = express();

connectDB();

app.use(cors());

app.use(express.json({ extended: true }));

const port = process.env.PORT || 3000;

//Routes
app.use("/v1/user", require("./routes/users.js"));
app.use("/v1/event", require("./routes/events.js"));
app.use("/v1/checkout", require("./routes/checkout.js"));

app.listen(port, "0.0.0.0", () => {
  console.log(`server running on port ${port}`);
});
