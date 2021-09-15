const db = require("../model");
const { ORDER } = require("../model/Object/ORDER");
const { ORDER_DETAIL } = require("../model/Object/ORDER_DETAIL");
const _OrderService_ = {


  DeleteOrderById: async (id) => {
    const t = await db.database.transaction();
    try {
       await ORDER.destroy(
        {
         where: { Id: id }
        },
        { transaction: t }
      );
      await ORDER_DETAIL.destroy(
        {
         where: { OrderId: id }
        },
        { transaction: t }
      );
      await t.commit();
      return true
    } catch (error) {

      await t.rollback();
      console.log(error)
      return false;
    }
  },
};

module.exports = _OrderService_