module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: { type: DataTypes.STRING, allowNull: false }
  })

  Board.associate = function(models) {
    models.Board.hasMany(models.TaskList)
  }

  return Board
}
