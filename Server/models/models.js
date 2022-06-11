const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Patient = sequelize.define( 'PATIENTS',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    secondName: {type: DataTypes.STRING,allowNull:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Employee = sequelize.define( 'EMPLOYEES',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,allowNull:false},
    surname: {type: DataTypes.STRING,allowNull:false},
    secondName: {type: DataTypes.STRING,allowNull:true},
    //img: {type: DataTypes.STRING,allowNull:false}
})

const Organization = sequelize.define( 'ORGANIZATIONS',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,allowNull:false}
})

const Service = sequelize.define( 'SERVICES',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,allowNull:false}
})

const Post = sequelize.define( 'POSTS',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING,allowNull:false}
})

const Card = sequelize.define( 'CARDS',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Case = sequelize.define( 'CASES',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date:{type: DataTypes.DATE,allowNull:false},
    isOpen:{type:DataTypes.BOOLEAN,allowNull:false}
})

Patient.hasMany(Card)
Card.belongsTo(Patient)

Organization.hasMany(Card)
Card.belongsTo(Organization)

Employee.hasMany(Case)
Case.belongsTo(Employee)

Service.hasMany(Case)
Case.belongsTo(Service)

Organization.hasMany(Case)
Case.belongsTo(Organization)

Card.hasMany(Case)
Case.belongsTo(Card)

Post.hasMany(Employee)
Employee.belongsTo(Post)

Organization.hasMany(Employee)
Employee.belongsTo(Organization)

Organization.hasMany(Patient)
Patient.belongsTo(Organization)

module.exports={
    Patient,
    Employee,
    Organization,
    Service,
    Post,
    Card,
    Case
}