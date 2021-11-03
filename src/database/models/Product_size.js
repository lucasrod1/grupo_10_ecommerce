module.exports = (sequelize, DataTypes) => {
    let alias = 'Product_sizes';
    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_sizes: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
    };
    
    const ProductSize = sequelize.define(alias, cols);

    return ProductSize
};