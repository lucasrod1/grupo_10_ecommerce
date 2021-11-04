module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
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
    };
    let config = {
        tableName: 'User',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
        User.belongsTo(models.User_type, {
            as: 'User_type',
            foreignKey: 'user_type_id'
        })
    }
    return User
};