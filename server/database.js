var Sequelize = require("sequelize")
sequelize = new Sequelize("postgres://kyzknczubmguvb:48240502102308fa9b5dbd6eedfe0a002240b5e393df6eb49130fa8cdbb84a2f@ec2-174-129-225-160.compute-1.amazonaws.com:5432/dbifdmc6spisn9", {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})
sequelize.authenticate()
sequelize.sync()
  .then(() => { console.log("Success !") })
  .catch((err) => { console.log(err) })

  const idols = sequelize.define('idols', {
    image:Sequelize.TEXT,
    name:Sequelize.TEXT,
    born:Sequelize.TEXT,
    bloodType:Sequelize.TEXT,
    breast:Sequelize.TEXT,
    waist:Sequelize.TEXT,
    hips:Sequelize.TEXT,
    height:Sequelize.TEXT,
})
function readAll(callback){
    idols.findAll({raw:true})
    .then(data=>{callback(data)})
}
module.exports = {
    readAll,
}