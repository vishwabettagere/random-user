const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get('/fetch-users', async function(req, res){
    try {
        console.log("fetching the users")
        const payload = await userController.fetchUsers();
        console.log(payload)
        res.status(200).send(payload);
    } catch (error) {
       res.status(500).send(error);
    }
    
});

router.get('/user-details', async function(req, res){
    try {
        const payload = await userController.getUsers();
        res.status(200).send(payload);
    } catch (error) {
       console.log("Promise got errored =>", error); 
       res.status(500).send(error);
    }
    
});

router.delete('/delete-users', async function(req, res){
    try {
        
    } catch (error) {
       res.status(500).send(error);
    }
    
});

module.exports = router;