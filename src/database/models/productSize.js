module.exports = (sequelize, dataTypes) => {
    let alias = 'productSize';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_sizes: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
    };
    
    const ProductSize = sequelize.define(alias, cols); 

    ProductSize.associate = function (models) {
        ProductSize.belongsTo(models.Size, {
           as:"size", 
           foreignKey:"id_sizes"
        })
   }

    return ProductSize
};