require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const authRouter = require("./routes/auth.routes")
const productRouter = require("./routes/product.routes")
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
