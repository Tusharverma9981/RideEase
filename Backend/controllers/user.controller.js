const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const {validationResult} = require('express-validator');

module.exports.registerUser = async (req, res,next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password} = req.body;
    const {firstname,lastname} = fullname;
   // console.log('Data received in createUser:', { firstname, lastname, email, password })
    //console.log('Extracted fullname:', fullname); 

    const hashedPassword = await userModel.hashPassword(password);

    // const user = await userService.createUser({
    //     fullname: {
    //         firstname: fullname.firstname,
    //         lastname: fullname.lastname
    //     },
    //     email,
    //     password:hashedPassword
    // });

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });
    

    const token = await user.generateAuthToken();

    res.status(201).json({user,token});

    

}