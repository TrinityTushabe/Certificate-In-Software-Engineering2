const express = require('express');
const Customer = require('../models/formmodel')
const router = express.Router();
const session = require('express-session');






router.get('/form', (req, res)=>{
    res.render('form.pug')
});

router.post('/regcustomer', async(req, res) => {
    try{
        const customer = new Customer(req.body);
        await customer.save();
        console.log(req.body);
        res.redirect('/api/form') // redirect to home page
       
    }catch(error){
        res.status(400).render('form')
        console.log(error)
        //we redirect a path we render a file

    }

});

module.exports = router;