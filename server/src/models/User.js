// Export a function that takes sequelize and DataTypes
// Returns/defines a "User" model
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        email: {
        type: DataTypes.STRING,
        unique: true
        },
        password: DataTypes.STRING
    })
}