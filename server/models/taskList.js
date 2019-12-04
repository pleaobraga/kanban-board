module.exports = (sequelize, DataTypes) => {
  const TaskList = sequelize.define('TaskList', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: { type: DataTypes.STRING, allowNull: false }
  })

  TaskList.associate = function(models) {
    models.TaskList.hasMany(models.Card)
    models.TaskList.belongsTo(models.Board, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    })
  }

  return TaskList
}


