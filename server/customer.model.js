module.exports = (sequelize,Sequelize)=>{
    const Customer = sequelize.define('customer',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        firstName:{
            type:Sequelize.STRING
        },
        lastName:{
            type:Sequelize.STRING
        },
        address:{
            type:Sequelize.STRING
        },
        age:{
            type:Sequelize.INTEGER
        }
    });
    return Customer;
}