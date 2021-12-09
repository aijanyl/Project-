const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAll);
router.post("/", productController.create);
router.get("/:id", productController.getOne);
router.patch("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
