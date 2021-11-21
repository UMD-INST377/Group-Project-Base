export default (database, DataTypes) => {
    const Arenas = database.define(
        'arenas',
        {
            arena_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            city: {
                type: DataTypes.STRING
            },
            state: {
                type: DataTypes.STRING
            },
            country: {
                type: DataTypes.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    );
    return Arenas;
};