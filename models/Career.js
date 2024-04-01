const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Career = sequelize.define("career", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey: true
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  birthday:{
    type:Sequelize.DATE,
    allowNull:false
  },
  url:{
    type: Sequelize.STRING,
    allowNull:false
  },
  birthplace:{
    type: Sequelize.STRING,
    allowNull:false
  },
  career:{
    type: Sequelize.STRING,
    allowNull:false
  },
  matches:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  score:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  fifties:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  centuries:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  wickets:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  average:{
    type: Sequelize.DOUBLE,
    allowNull:false
  }
});

module.exports=Career;