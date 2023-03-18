import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import postRoutes from "./routes/postRoutes.js";

// middle ware
app.use(express.json());

app.use("/posts", postRoutes);

// global error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
