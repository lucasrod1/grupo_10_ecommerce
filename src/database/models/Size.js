module.exports = (sequelize, dataTypes) => {
    let alias = 'sizes';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        size: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
    };
 
    const Sizes = sequelize.define(alias, cols); 

    return Sizes
};