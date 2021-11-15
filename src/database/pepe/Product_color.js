module.exports = (sequelize, DataTypes) => {
    let alias = "Product_colors";
    let cols = {
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
    };
    let config = {
        tableName: 'product_colors',
        timestamps: false
    }
    
    const Product_colors = sequelize.define(alias, cols, config);
    Product_colors.associate = function (models) {
        Product_colors.hasMany(models.Product_order, {
            as: "products_color",
            foreignKey: "product_color_id",
        });
    }
    
    return Product_colors
};