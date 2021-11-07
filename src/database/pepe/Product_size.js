module.exports = (sequelize, DataTypes) => {
    let alias = "Product_sizes";
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
    let config = {
        tableName: 'product_sizes',
        timestapms: false
    }
    
    const Product_size = sequelize.define(alias, cols, config);
    Product_size.associate = function (models) {
        Product_size.belongsTo(models.Product_order, {
            as: "product_size",
            foreignKey: "product_size_id",
        });
    };
    
    return Product_size
};