module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    index: { type: DataTypes.INTEGER, allowNull: false },
    type: {
      type: DataTypes.ENUM,
      values: ['feature', 'bugFix', 'update', 'research', 'content'],
      allowNull: false
    },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    severity: {
      type: DataTypes.ENUM,
      values: ['hight', 'medium', 'low'],
      allowNull: false
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
