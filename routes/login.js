var express = require('express');
var router = express.Router();
var fs = require('fs');
var account = require('../model/accountstruct.js');

let accountData = fs.readFileSync('./account.json');
let siteAccounts = JSON.parse(accountData);
const accountString = JSON.stringify(siteAccounts)

/* Create Account */
router.get('/', function(req, res, next) {
    //Using the data model boxer from boxerstructure.js
    account.email = req.body.email;
    account.password = req.body.password;   
    
    for(var x = 0; x < accountString.length; x++){
        if(account.email == accountString[x].email & account.password == accountString[x].password ){
            console.log("login is successful");
            x = accountString.length;
        } else{
            console.log("login was not succesful");
            x = accountString.length;
        }
    }
    
    res.render('index');
  });

module.exports = router;
