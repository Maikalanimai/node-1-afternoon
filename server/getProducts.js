const products = require("../products.json");

module.exports = {
  getProducts: (req, res) => {
    if (req.query.price) {
      const items = products.filter(
        val => val.price >= parseInt(req.query.price)
      );
      return res.status(200).send(items);
    }
    return res.status(200).send(products);
  }
};
