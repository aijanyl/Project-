const express = require("express");
const router = express();
const productRoutes = require("./productRoutes");

router.use("/products", productRoutes);

module.exports = router;
