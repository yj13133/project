const moment = require('moment-timezone');
const knex = require('knex');
const knexfile = require('../knexfile');

class OrderController {
  async create(ctx) {
    const {
      product_id: productId,
      buyer_name: buyerName,
      quantity
    } = ctx.request.body;

    const orderAt = moment().tz('Asia/Taipei').format();
    const product = await knex(knexfile)('product').select('*').where('id', productId);
    const afterQuantity = product[0].quantity - quantity;

    if (afterQuantity < 0) {
      const order = await knex(knexfile)('order').insert({
        product_id: productId,
        buyer_name: buyerName,
        quantity,
        status: -1,
        at: orderAt
      });

      ctx.body = {
        result: 'error',
        ret: {
          order_id: order[0],
          status: -1,
          quantity: quantity
        }
      };
    } else {
      const order = await knex(knexfile)('order').insert({
        product_id: productId,
        buyer_name: buyerName,
        quantity,
        status: 1,
        at: orderAt
      });

      await knex(knexfile)('product').where('id', productId).update({ quantity: afterQuantity });

      ctx.body = {
        result: 'ok',
        ret: {
          order_id: order[0],
          status: 1,
          quantity: quantity
        }
      };
    }
  }
}

module.exports = OrderController;