module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    index: DataTypes.INTEGER,
    type: {
      type: DataTypes.ENUM,
      values: ['feature', 'bugFix', 'update', 'research', 'content']
    },
    duration: DataTypes.INTEGER,
    severity: {
      type: DataTypes.ENUM,
      values: ['hight', 'medium', 'low']
    }
  })

  Card.associate = function(models) {
    models.Card.belongsTo(models.TaskList, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Card
}
