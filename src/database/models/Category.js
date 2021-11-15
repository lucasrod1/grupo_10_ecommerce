module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        tableName: 'category',
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models){
        // Aca no seria hasMany? Una categoria tiene varios productos - REVISAR
        Category.hasMany(models.Products, {
            as: "products",  // Este alias es lo que utilizamos cuando lo llamamos para incluirlo en el "include".
            foreignKey: "category_id"
        })
    }
    
    return Category
};