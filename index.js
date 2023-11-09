const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id:1,
            name:"Ankit Singh"
        },
        {
            id:2,
            name:"Rishu Singh"
        },
        {
            id:3,
            name:"Riolog Singh"
        },

    ])
})

app.listen(4244, () => {
    console.log("API RUNNING");
});