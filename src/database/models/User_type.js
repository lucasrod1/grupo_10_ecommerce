module.exports = (sequelize, DataTypes) => {
    const User_type = sequelize.define("User_type",
    {
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
    });

    User_type.associate = function (models) {
        User_type.hasMany(models.User, {
            as: "user_Type",
            foreignKey: "user_type_id"
        })
    };

    return User_type
};