const express = require("express");
const cors  = require("cors");
const { router } = require("./Routes/UserRoutes.js");


const app = express();
app.use(express.json());
app.use(cors());

//routes configuration
app.use("/", router);

//start server
app.listen("3000", () => {
  console.log("server started on port 3000");
});
