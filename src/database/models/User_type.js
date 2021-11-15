module.exports = (sequelize, DataTypes) => {
    let alias = 'User_type';
    let cols ={
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

    let config = {
        tableName: 'user_type',
        timestapms: false,
    } 

    const User_type = sequelize.define(alias, cols, config);
    User_type.associate = function (models) {
        User_type.hasMany(models.User, {
            as: "User_Type",
            foreignKey: "user_type_id"
        })
    };

    return User_type
};