module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(120),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        id_userType: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        avatarImage: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    };
    
    const User = sequelize.define(alias, cols); 

    User.associate = function (models) {
         User.belongsTo(models.UserType, {
            as:"userType", 
            foreignKey:"id_userType"
         })
    }

    return User
};