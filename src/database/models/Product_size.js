module.exports = (sequelize, DataTypes) => {
    const Product_size = sequelize.define("Product_sizes",
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

    Product_size.associate = function (models) {
        Product_size.belongsTo(models.Product_order, {
            as: "product_size",
            foreignKey: "product_size_id",
        });
    };

    return Product_size
};