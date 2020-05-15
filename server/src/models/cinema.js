const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');

class Cinema extends Model {}

Cinema.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Cinema'
});

module.exports = Cinema;
