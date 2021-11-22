export default (database, DataTypes) => {
  const Inspections = database.define(
    'Food_Inspection',
    {
      establishment_id: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING
      },
      inspection_date: {
        type: DataTypes.STRING
      },
      inspection_results: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      zip: {
        type: DataTypes.INTEGER
      },
      address_line_1: {
        type: DataTypes.STRING
      },
      address_line_2: {
        type: DataTypes.STRING
      },
      food_from_approved_source: {
        type: DataTypes.STRING
      },
      food_protected_from_contamination: {
        type: DataTypes.STRING
      },
      ill_workers_restricted: {
        type: DataTypes.STRING
      },
      proper_hand_washing: {
        type: DataTypes.STRING
      },
      cooling_time_and_temperature: {
        type: DataTypes.STRING
      },
      cold_holding_temperature: {
        type: DataTypes.STRING
      },
      hot_holding_temperature: {
        type: DataTypes.STRING
      },
      cooking_time_and_temperature: {
        type: DataTypes.STRING
      },
      reheating_time_and_temperature: {
        type: DataTypes.STRING
      },
      hot_and_cold_running_water_provided: {
        type: DataTypes.STRING
      },
      proper_sewage_disposal: {
        type: DataTypes.STRING
      },
      no_bare_hand_contact: {
        type: DataTypes.STRING
      },
      adequate_hand_washing_facilities: {
        type: DataTypes.STRING
      },
      rodent_and_insects: {
        type: DataTypes.STRING
      },
      food_contact_surfaces_and_equipment: {
        type: DataTypes.STRING
      },
      inspection_type: {
        type: DataTypes.STRING
      },
      owner: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  Inspections.removeAttribute('id');
  return Inspections;
};

