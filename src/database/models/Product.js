module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products",
    {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT(255),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT(),
            allowNull: false
        }
    });

    Products.associate = function (models) {
        Products.belongsTo(models.Category, {
           as:"category", 
           foreignKey:"category_id"
        });
    Products.belongsTo(models.Product_order, {
        as: "products",
        foreignKey: "products_id",
    });
    };

    return Products
};