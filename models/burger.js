module.exports = function(sequelize, DataTypes)
{
    var Burger = sequelize.define("burgers", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false,
      //Even though the plural is the default I wanted to be explicit
      //as well as remember how to do it in the future
      freezeTableName: true,

        // define the table's name
      tableName: 'burgers',
    });

    return Burger;
};
