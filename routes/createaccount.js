var express = require('express');
var router = express.Router();
var fs = require('fs');
var account = require('../model/accountstruct.js');


/* Create Account */
router.post('/', function(req, res, next) {
    //Using the data model boxer from boxerstructure.js
    account.email = req.body.email;
    account.password = req.body.password;   
    const PASSLENGTH = 8; 
    if(account.password >= PASSLENGTH){
        let accountData = fs.readFileSync('./account.json');
        let siteAccounts = JSON.parse(accountData);
        console.log(account);
        siteAccounts.push(account);

        const accountString = JSON.stringify(siteAccounts)
        fs.writeFile('./account.json', accountString, err => {
            //error handling if, issue arises with file, else output to successfully wrote file
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('Successfully wrote file');
            }
        });
        res.render('login', account);

    }else{
        console.log("The password needs to be longer than 8 characters");
    }

  });

module.exports = router;
