module.exports = (sequelize, dataTypes) => {
    let alias = 'colorProduct';
    let cols = {
        id: {
            type: dataTypes.INT(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_colors: {
            type: dataTypes.VARCHAR(45),
            allowNull: false
        },
    };
    
    const ColorProduct = sequelize.define(alias, cols); 

    ColorProduct.associate = function (models) {
        ColorProduct.belongsToMany(models.Color, {
           as:"colors", 
           foreignKey:"id_colors"
        })
   }

    return ColorProduct
};