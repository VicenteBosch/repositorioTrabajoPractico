module.exports = function (Sequelize, dataTypes) {

    let alias = 'User';
  
    let cols = {
      id_usuarios: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      nombre: {
        type: dataTypes.STRING,
        
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
      }
    };
  
    let config = {
      tableName: 'usuarios',
      timestamps: false,
      underscored: true,
    };
  
    let User = Sequelize.define(alias, cols, config);
  
     User.associate = function(models) {

          User.hasMany( models.Product , {

            as: "product", 
            foreignKey: "id_productos", 
            timestamps: "false",
            underscored: "true"


          }


          )

          User.hasMany(models.Comment, {

            as: "comment",
            foreignKey: "id",
            timestamps: "false",
            underscored: "true"
          })
      }


  
    return User;

  };
  