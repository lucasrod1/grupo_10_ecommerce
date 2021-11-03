module.exports = (sequelize, DataTypes) => {
    const ProductSize = sequelize.define("Product_sizes",
    {
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
    });

    return ProductSize
};