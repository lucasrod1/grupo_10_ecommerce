module.exports = (sequelize, dataTypes) => {
    let alias = 'colors';
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
    
    const Color = sequelize.define(alias, cols); 

    return Color
};