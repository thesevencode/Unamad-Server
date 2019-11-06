const express = require('express');

const config = require('./server/config');

const { connectMongo } = require('./database');


config(express()).then(app => {
    app.listen(app.get('port'), () => {
        console.log('Server on port ', app.get('port'));
    })
});

// connectMongo()
//     .then(db => {

//         console.log('DB is  connected');

//         app.listen(app.get('port'), () => {
//             console.log('Server on port ', app.get('port'));
//         })

//     })
//     .catch(err => console.log(err));