module.exports = (sequelize, DataTypes) => {
    const Product_colors = sequelize.define("Product_colors",
        {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    });
    
    Product_colors.associate = function (models) {
        Product_colors.hasMany(models.Product_order, {
            as: "products_color",
            foreignKey: "product_color_id",
        });
    }

    return Product_colors
};