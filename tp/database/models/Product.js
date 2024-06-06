module.exports = function (sequelize, DataTypes) {

    let alias = 'Product';
  
    let cols = {
      id_producto: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_usuarios: {
        type: DataTypes.INTEGER,

      },
      nombre_producto: {
        type: DataTypes.STRING,
        
      },
      descripcion_producto: {
        type: DataTypes.STRING,
        
      },
      nombre_archivo_imagen: {
        type: DataTypes.STRING,
        
      },
      createdAt: {
        type: DataTypes.DATE,
        
      },
      updatedAt: {
        type: DataTypes.DATE,
        
      },
      deletedAt: {
        type: DataTypes.DATE,
       
      },
    };
  
    let config = {
      tableName: 'productos',
      timestamps: true,
      underscored: true,
    };
  
    let Product = sequelize.define(alias, cols, config);
  
  
    return Product;

  };
  