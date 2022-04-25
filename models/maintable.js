export default (sequelize, DataTypes) => {
  const maintable = sequelize.define(
    'mytable',
    {
      FIELD1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      artists: {
        type: DataTypes.STRING(37),
        allowNull: false,
      },
      albums: {
        type: DataTypes.STRING(67),
        allowNull: false,
      },
      artist_links: {
        type: DataTypes.STRING(74),
        allowNull: false,
      },
      album_links: {
        type: DataTypes.STRING(137),
        allowNull: false,
      },
      label: {
        type: DataTypes.STRING(33),
        allowNull: false,
      },
      release_country: {
        type: DataTypes.STRING(23),
        allowNull: true,
      },
      total_artist_albums: {
        type: DataTypes.DECIMAL(6, 1),
        allowNull: true,
      },
      first_release_links: {
        type: DataTypes.STRING(117),
        allowNull: false,
      },
      number_of_songs: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: false,
      },
      average_song_length: {
        type: DataTypes.DECIMAL(18, 16),
        allowNull: true,
      },
      users_have: {
        type: DataTypes.DECIMAL(7, 1),
        allowNull: false,
      },
      users_want: {
        type: DataTypes.DECIMAL(7, 1),
        allowNull: false,
      },
      user_rating: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      median_price: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: true,
      },
      styles: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      genres: {
        type: DataTypes.STRING(70),
        allowNull: false,
      },
      number_for_sale: {
        type: DataTypes.DECIMAL(5, 1),
        allowNull: true,
      },
      versions: {
        type: DataTypes.DECIMAL(5, 1),
        allowNull: false,
      },
      spotify_monthly_listeners: {
        type: DataTypes.DECIMAL(10, 1),
        allowNull: true,
      },
      time_since_sold: {
        type: DataTypes.DECIMAL(6, 1),
        allowNull: true,
      },
      years_after_first_album: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: true,
      },
      years_since_any_album: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: true,
      },
      years_since_release: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: true,
      },
      Classic_Rock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Pop_Rock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Prog_Rock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Heavy_Metal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Folk: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      New_Wave: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Electronic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Hip_Hop: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Blues: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      Jazz: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Funk: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Soundtrack: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return maintable;
};
