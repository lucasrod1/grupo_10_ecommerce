module.exports = (sequelize, DataTypes) => {
const Product_order = sequelize.define("Product_order",
    {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        products_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        product_quantity: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        price_total: {
            type: DataTypes.FLOAT(10),
            allowNull: false
        },
        products_color_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        products_sizes_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        active_flag: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
    });

    Product_order.associate = function (models) {
        Product_order.hasMany(models.Order_summary, {
            as: "product_order",
            foreignKey: "product_order_id"
        })
        Product_order.belongsTo(models.Product, {
            as:"products",
            foreignKey:"products_id",
        });
        Product_order.belongsTo(models.Product_color, {
            as:"products_color", 
            foreignKey:"product_color_id",
        });
        Product_order.belongsTo(models.Product_size, {
            as:"product_size",
            foreignKey:"product_size_id",
        });
    }
    return Product_order
};