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
    
    return Product_colors
};