module.exports = (sequelize, dataTypes) => {
    let alias = 'productOrder';
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
        id_products: {
            type: dataTypes.INT(10),
            allowNull: false
        },
        productQuantity: {
            type: dataTypes.INT(10),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT(),
            allowNull: false
        },
        id_colorProduct: {
            type: dataTypes.INT(10),
            allowNull: false
        },
        id_productSize: {
            type: dataTypes.INT(10),
            allowNull: false
        },
        active_flag: {
            type: dataTypes.INT(1),
            allowNull: false
        },
    };

    const ProductOrder = sequelize.define(alias, cols); 

    ProductOrder.associate = function (models) {
        ProductOrder.belongsTo(models.User, {
           as:"users", 
           foreignKey:"id_users"
        });
        ProductOrder.belongsTo(models.Product, {
            as:"products", 
            foreignKey:"id_products"
        });
        ProductOrder.belongsTo(models.ColorProduct, {
            as:"colorProduct", 
            foreignKey:"id_colorProduct"
        });
        ProductOrder.belongsTo(models.ProductSize, {
            as:"productSize", 
            foreignKey:"id_productSize"
        });
    }
    return ProductOrder
};