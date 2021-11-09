module.exports = (sequelize, DataTypes) => {
    let alias = "Products";   // El nombre es en singular y este nombre es el que hace referencia al nombre del modelo (podemos llamarlo por ej db.Product)
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
        tableName: 'products',  // No es necesario definirlo si el alias tiene el mismo nombre que la tabla en al base de datos (Si esta en ingles y admeas es singular).
        timestamps: false
    }
    
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "category", // Este alias es lo que utilizamos cuando lo llamamos para incluirlo en el "include".
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