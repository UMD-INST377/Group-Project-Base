export default (database, DataTypes) => {
    const Themes = database.define(
      'Themes',
      {
        theme_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        theme: {
          type: DataTypes.STRING
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Themes;
  };