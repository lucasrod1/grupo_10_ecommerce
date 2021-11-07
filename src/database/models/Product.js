module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
    let cols = {
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
        description: {
            type: DataTypes.TEXT(255),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT(),
            allowNull: false
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }
    
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
           as:"category", 
           foreignKey:"category_id"
        });
        //SE COMENTA HASTA QUE NO ESTE ARMADO EL CARRITO DE COMPRAS Y AGREGADO Orede_summary, Product_order, Product_color, Product_size.
    //     Product.belongsTo(models.Product_order, {
    //         as: "products",
    //         foreignKey: "products_id",
    // });
 };

    return Product
};