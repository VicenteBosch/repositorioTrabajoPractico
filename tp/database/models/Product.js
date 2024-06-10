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
        
      }

    
     
    
    };
  
    let config = {
      tableName: 'productos',
      timestamps: false,
      underscored: true,
    };
  
    let Product = Sequelize.define(alias, cols, config);
  
      Product.associate = function(models) {

          Product.belongsTo( models.User , {

            as: "user", 
            foreignKey: "id_usuarios", 
            timestamps: "false",
            underscored: "true"


          });
          Product.hasMany( models.Comment , {

            as: "comment", 
            foreignKey: "id",  
            timestamps: "false",
            underscored: "true"


          }



          )


      }


  
    return Product;

  };
  