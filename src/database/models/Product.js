module.exports = (sequelize, DataTypes) => {
    let alias = 'Products';
    let cols = {
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
    };

    const Products = sequelize.define(alias, cols); 

    Products.associate = function (models) {
        Products.belongsTo(models.Category, {
           as:"category", 
           foreignKey:"category_id"
        });
    }

    return Products
};