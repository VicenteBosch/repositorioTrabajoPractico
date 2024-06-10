module.exports = function (Sequelize, dataTypes) {
    let alias = 'Comment';
  
    let cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      texto_comentario: {
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
      tableName: 'comentarios',
      timestamps: true,
      underscored: true,
    };
  
    let Comment = Sequelize.define(alias, cols, config);
  
    Comment.associate = function (models) {
      Comment.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'id_producto',
        timestamps: false,
        underscored: true,
      });
  
      Comment.belongsTo(models.User, {
        as: 'user', 
        foreignKey: 'id_usuarios',
        timestamps: false,
        underscored: true,
      });
    };
  
    return Comment;
  };
  