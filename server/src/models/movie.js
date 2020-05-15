const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');

class Movie extends Model {}

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    },
    cinemaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    modelName: 'Movie'
});

module.exports = Movie;
