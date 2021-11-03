module.exports = (sequelize, DataTypes) => {
    let alias = 'order_summary';
    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        users_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        order_ammount: {
            type: DataTypes.FLOAT(10),
            allowNull: false
        },
        shipping_address: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        order_date: {
            type: DataTypes.DATE(),
            allowNull: false
        },
        product_order_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
    };
    
    const Order_summary = sequelize.define(alias, cols); 
    
    Order_summary.associate = function (models) {
        Order_summary.belongsTo(models.User, {
           as:"user", 
           foreignKey:"users_id"
        });
        Order_summary.belongsTo(models.Product_order, {
            as:"product_order", 
            foreignKey:"id_productOrder"
         })
   }

    return Order_summary
};