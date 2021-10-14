import express from "express";
import { WELCOME } from "./constants.js";
import router from "./routes/city.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.get("/", (req, res) => {
  res.json(WELCOME);
});

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
