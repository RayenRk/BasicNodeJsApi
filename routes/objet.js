const express = require("express");
const post = express.Router();

post.get('/all', (req, res) => {
    const user1 = {
        id: 1,
        firstName: "Rayen",
        lastname: "Rakkad"
    };

    const user2 = {
        id: 2,
        firstName: "Radhwen",
        lastname: "Rakkad"
    };

    res.send([user1, user2]);
});

post.get('/all/:id', (req, res) => {

    console.log(req.params.id);

    const user1 = {
        id: 1,
        firstName: "Rayen",
        lastname: "Rakkad"
    };

    const user2 = { 
        id: 2,
        firstName: "Majdy",
        lastname: "Bouzidi"
    };

    const user3 = {
        id: 3,
        firstName: "Riadh",
        lastname: "Naceur"
    }

    if (parseInt((req.params.id)) === user1.id){
        
        res.send(user1);
    } else if (parseInt((req.params.id)) === user2.id){
        res.send(user2);
    } else if (parseInt((req.params.id)) === user3.id){
        res.send(user3);
    } else {
        res.send("User not Found");
    }
});

module.exports = post;