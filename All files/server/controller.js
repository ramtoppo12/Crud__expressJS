const { Customer } = require("./db.config");

//creating database into the users

exports.createCustomer = (req,res)=>{
    let customer ={};
    try{
        customer.firstName = req.body.firstName;
        customer.lastName = req.body.lastName;
        customer.address = req.body.address;
        customer.age = req.body.age;

        Customer.create(customer,{attributes:['id','firstname','address','age']}).then(result=>{
            res.status(200).json(result);
        });


    }catch(err){
        console.log(err)
    }
}

//get particular user or customer

exports.getCustomer = (req,res)=>{
    try {
        Customer.findByPk(req.params.id,{
        attributes:["id","firstname","lastname","address","age"]
    }).then(customer=>{
        res.status(200).json(customer);
    })
    } catch (error) {
        console.log(error)
    }
}

//get all info from database
exports.allCustomers = (req,res)=>{
    try {
        Customer.findAll(req.params.id,{
        attributes:["id","firstname","lastname","address","age"]
    }).then(customers=>{
        res.status(200).json(customers);
    })
    } catch (error) {
        console.log(error)
    }
}


//update users or customers

exports.updateCustomer = async (req,res)=>{
try {


    let customerID = req.params.id;
    let customer = await Customer.findByPk(customerID);
    if(!customer){
        res.status(404).json({
            message:`Does Not exist a customer width id=${customerID}`,
            error:"404",
        });
    }else{
        let updatedObject = {
            firstName:req.body.firstName,
            lastName:req.body.lasttName,
            address:req.body.address,
           age:req.body.age,
        }
        let result = await Customer.update(updatedObject,{
            returing:true,
            where:{id:req.body.id},
            attributes:['id','firstName','lastName','address','age']
        })
    

    if(!result){
        res.status(500).json({
            message:"Error -> Can not update customer",
            error:error.message
        })
    }else{
    res.status(200).json(result);
    }
}

} catch (error) {
    console.log(error)
}
}


// deleteing users from database

exports.deleteCustomer = async (req,res)=>{
try {
     let customerID = req.params.id;
    let customer = await Customer.findByPk(customerID);
    if(!customer){
        res.status(404).json({
            message:`Does Not exist a customer width id=${customerID}`,
            error:"404",
        });
    }else{
        await customer.destroy();
        res.status(200).json({
            success:true,
            message:`Successfully deleted customer with id=${customerID}`,
        })
    }
} catch (error) {
    console.log(error)
}
}