module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INT(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: dataTypes.VARCHAR(45),
            allowNull: false
        },
        lastName: {
            type: dataTypes.VARCHAR(45),
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(120),
            allowNull: false
        },
        password: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        id_userType: {
            type: dataTypes.INT(10),
            allowNull: false
        },
        avatarImage: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
    };
    // let config = {
    //     timestamps: true,
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at',
    //     deletedAt: false
    // }
    // const Actor = sequelize.define(alias, cols, config); 
    const User = sequelize.define(alias, cols); 

    // User.associate = function (models) {
    //     User.belongsToMany(models., {
            
    //     })
    // }

    return User
};