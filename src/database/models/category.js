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

    Category.associate = function (models) {
        Category.belongsTo(models.Products, {
            as: "category",
            foreignKey: "category_id"
        });
    };

    return Category
};