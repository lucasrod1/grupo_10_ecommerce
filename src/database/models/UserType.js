module.exports = (sequelize, dataTypes) => {
    let alias = 'userType';
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
    
    const UserType = sequelize.define(alias, cols); 

    return UserType
};