const knex = require('knex');
const knexfile = require('../knexfile');

class ProductController {
  async list(ctx) {
    const res = await knex(knexfile)('product').select('name', 'price', 'image');

    ctx.body = {
      result: 'ok',
      ret: res
    };
  }

  async get(ctx) {
    const productId = ctx.params.id;

    const res = await knex(knexfile)('product').select('*').where('id', productId);

    ctx.body = {
      result: 'ok',
      ret: {
        name: res[0].name,
        price: res[0].price,
        description: res[0].description,
        image: res[0].image
      }
    };
  }
}

module.exports = ProductController;