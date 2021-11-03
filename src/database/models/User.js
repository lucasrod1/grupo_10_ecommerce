module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",
    {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(120),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        user_type_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        avatarImage: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    });

    User.associate = function (models) {
         User.belongsToMany(models.UserType, {
            as:"userType", 
            foreignKey:"user_type_id"
         })
    };

    return User
};