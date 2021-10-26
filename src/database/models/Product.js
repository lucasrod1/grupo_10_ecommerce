module.exports = (sequelize, dataTypes) => {
    let alias = 'products';
    let cols = {
        id: {
            type: dataTypes.INT(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(45),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT(255),
            allowNull: false
        },
        image: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        id_category: {
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
    };

    const Products = sequelize.define(alias, cols); 

    Products.associate = function (models) {
        Products.belongsTo(models.Category, {
           as:"category", 
           foreignKey:"id_category"
        });
        Products.belongsTo(models.ColorProduct, {
            as:"colorProduct", 
            foreignKey:"id_colorProduct"
        });
        Products.belongsToMany(models.ProductSize, {
            as:"productSize", 
            foreignKey:"id_productSize"
        });
    }

    return Products
};