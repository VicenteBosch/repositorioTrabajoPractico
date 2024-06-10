module.exports = function (Sequelize, dataTypes) {

    let alias = 'User';
  
    let cols = {
      id_usuarios: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      email: {
        type: dataTypes.STRING,
        
      },
      contraseña: {
        type: dataTypes.STRING,
        
      },
      fecha_de_nacimiento: {
        type: dataTypes.DATE,
        
      },

      dni: {
        type: dataTypes.INTEGER
      },
      foto_de_perfil: {
        type: dataTypes.STRING
      },

      createdAt: {
        type: dataTypes.DATE,
        
      },
      updatedAt: {
        type: dataTypes.DATE,
        
      },
      deletedAt: {
        type: dataTypes.DATE,
       
      },
    };
  
    let config = {
      tableName: 'usuarios',
      timestamps: true,
      underscored: true,
    };
  
    let User = Sequelize.define(alias, cols, config);
  
     /* Product.associate = function(models) {

          Product.belongsTo( models.User , {

            as: "user", 
            foreignKey: "id_usuario", 
            timestamps: "false",
            underscored: "true"


          }


          )


      }*/


  
    return User;

  };
  