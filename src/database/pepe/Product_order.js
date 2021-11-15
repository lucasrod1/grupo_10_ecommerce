module.exports = (sequelize, DataTypes) => {
    let alias = "Product_order";
    let cols = {
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
    };
    let config = {
        tableName: 'product_order',
        timestamps: false
    }
    
    const Product_order = sequelize.define(alias, cols, config);
    Product_order.associate = function (models) {
        Product_order.belongsTo(models.Order_summary, {
            as: "order_summary",
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