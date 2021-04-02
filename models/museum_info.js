export default (sequelize, DataTypes) => {
    const MuseumInfo = sequelize.define(
        'Museum_info',
        {
          museum_id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          museum_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_url: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_phone_num: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_entry_fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false            
          },
          museum_open_time: {
            type: DataTypes.DATE, // Is DATETIME equivalent to MySql TIME datatype ?
            allowNull: false,
            primaryKey: false            
          },
          date_museum_opened: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_capacity: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false            
          },
          museum_parent: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_close_time: {
            type: DataTypes.DATE, 
            allowNull: false,
            primaryKey: false            
          },
          museum_budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false            
          },
          museum_address: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_city: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false            
          },
          museum_zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: false
          },
          ada_id: {
            type: DataTypes.INTEGER, // Is this a primary key aswell ?
            allowNull: false,
            primaryKey: true            
          }
        },
        { freezeTableName: true, timestamps: false }
      );
      return DietaryRestrictions;
};
