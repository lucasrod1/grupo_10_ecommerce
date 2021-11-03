module.exports = (sequelize, DataTypes) => {
const ProductOrder = sequelize.define("Product_order",
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

    ProductOrder.associate = function (models) {
        ProductOrder.belongsTo(models.Product, {
            as:"products",
            foreignKey:"products_id"
        });
        ProductOrder.belongsTo(models.Product_color, {
            as:"products_colors", 
            foreignKey:"product_color_id"
        });
        ProductOrder.belongsTo(models.Product_size, {
            as:"product_size",
            foreignKey:"product_size_id"
        });
    }
    return ProductOrder
};