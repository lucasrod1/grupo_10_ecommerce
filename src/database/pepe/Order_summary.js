module.exports = (sequelize, DataTypes) => {
    let alias = "Order_summary";
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
    let config = {
        tableName: 'order_summary',
        timestamps: false
    }
    
    const Order_summary = sequelize.define(alias, cols, config);
    Order_summary.associate = function (models) {
        Order_summary.hasMany(models.User, {
           as:"user", 
           foreignKey:"users_id"
        });
        Order_summary.belongsTo(models.Product_order, {
            as:"product_order", 
            foreignKey:"product_order_id"
         })
   }

    return Order_summary
};