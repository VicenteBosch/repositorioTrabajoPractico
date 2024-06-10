module.exports = function (Sequelize, dataTypes) {

    let alias = 'Product';
  
    let cols = {
      id_producto: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      nombre_producto: {
        type: dataTypes.STRING,
        
      },
      nombre_archivo_imagen: {
        type: dataTypes.STRING,
        
      },
      descripcion_producto: {
        type: dataTypes.STRING,
        
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
      tableName: 'productos',
      timestamps: true,
      underscored: true,
    };
  
    let Product = Sequelize.define(alias, cols, config);
  
     /* Product.associate = function(models) {

          Product.belongsTo( models.User , {

            as: "user", 
            foreignKey: "id_usuario", 
            timestamps: "false",
            underscored: "true"


          }


          )


      }*/


  
    return Product;

  };
  