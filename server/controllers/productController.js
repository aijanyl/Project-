const productService = require("../services/productService");

class productController {
  static getAll = async (req, res, next) => {
    try {
      let { page, limit, q } = req.query;
      page = page || 1;
      limit = limit || 6;
      const offset = page * limit - limit;
      const products = await productService.getAll(req.query);

      return res.json(products);
    } catch (error) {
      next(error);
    }
  };

  static getOne = async (req, res, next) => {
    try {
      const { id } = req.params;

      const oneProduct = await productService.getOne(id);
      return res.json(oneProduct);
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    console.log(req.body);
    try {
      const { name, type, price, image, description } = req.body;
      await productService.create(name, type, price, image, description);
      return res.json({ message: "created" });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, type, price, image, description } = req.body;

      const updatedProduct = {
        id,
        name,
        type,
        price,
        image,
        description,
      };

      await productService.update(updatedProduct);
      return res.json({ message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await productService.delete({ id });
      return res.json({ message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = productController;
