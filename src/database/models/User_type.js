module.exports = (sequelize, DataTypes) => {
    let alias = 'User_type';
    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    };
    
    const User_type = sequelize.define(alias, cols); 

    return User_type
};