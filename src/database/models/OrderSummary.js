module.exports = (sequelize, dataTypes) => {
    let alias = 'orderSummary';
    let cols = {
        id: {
            type: dataTypes.INT(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_users: {
            type: dataTypes.INT(10),
            allowNull: false
        },
        id_productOrder: {
            type: dataTypes.INT(10),
            allowNull: false
        },
        orderAmmount: {
            type: dataTypes.FLOAT(10),
            allowNull: false
        },
        shippingAddress: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        orderDate: {
            type: dataTypes.DATE(),
            allowNull: false
        },
    };
  
    const OrderSummary = sequelize.define(alias, cols); 

    OrderSummary.associate = function (models) {
        OrderSummary.belongsTo(models.User, {
           as:"user", 
           foreignKey:"id_users"
        });
        OrderSummary.belongsToMany(models.ProductOrder, {
            as:"productOrder", 
            foreignKey:"id_productOrder"
         })
   }

    return OrderSummary
};