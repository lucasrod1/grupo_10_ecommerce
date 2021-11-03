module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category",
    {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    });

    return Category
};