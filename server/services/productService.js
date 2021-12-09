const { Product } = require("../models/index");
const { Op } = require("sequelize");
const {
  buildQueryPagination,
  buildQuerySorting,
  buildQueryWhere,
} = require("./helpers.js");

class productService {
  static getAll = async (query) => {
    const params = { ...query };
    const queryPagination = buildQueryPagination(params);
    const querySorting = buildQuerySorting(params);
    const queryWhere = buildQueryWhere(params);

    return await Product.findAndCountAll({
      ...queryPagination,
      ...querySorting,
      where: queryWhere,
    });
  };

  static getOne = async (id) => {
    const oneProduct = await Product.findOne({
      where: { id },
    });

    return oneProduct;
  };

  static create = async (name, type, price, image, description) => {
    await Product.create({ name, type, price, image, description });
  };

  static update = async ({ id, name, type, price, image, description }) => {
    const product = await Product.findOne({ where: { id } });
    // name = name || product.name;
    // type = type || product.type;
    // price = price || product.price;
    // image = image || product.image;
    // description = description || product.description

    await Product.update(
      { name, type, price, image, description },
      { where: { id } }
    );
  };

  static delete = async ({ id }) => {
    Product.destroy({ where: { id } });
  };
}

module.exports = productService;
