module.exports = (sequelize, DataTypes) => {
    let alias = 'Product_colors';
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

    const Product_colors = sequelize.define(alias, cols);

    return Product_colors
};