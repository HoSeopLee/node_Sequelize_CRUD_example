const models = require('./models');

const getProducts = () => {
  const product1 = await models.Products.findByPk(1);
  console.log(product1.dataValues);

  const product3 = await models.Products.findByPk(3);
  console.log(product3.dataValues);
};

getProducts();
