module.exports = (sequelize, dataTypes) => {
    let alias = 'category';
    let cols = {
        id: {
            type: dataTypes.INT(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(45),
            allowNull: false
        },
    };
    
    const Category = sequelize.define(alias, cols); 

    return Category
};