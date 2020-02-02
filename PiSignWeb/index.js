const express = require('express');
const app = express();
const axios = require('axios');

let arr = [];

app.use(express.urlencoded())
app.use(express.json())
app.set('view engine', 'ejs');

app.get('/loggedIn', (req, res) => {
        res.render('loggedIn');
})

app.get('/checkIfLoggedIn', (req, res) => {
        console.log(arr);
        var found = false;
        for (var i = 0; i < arr.length; i++) {
                if (arr[i].ip == req.connection.remoteAddress && arr[i].website == '13.235.43.83:4000') {
                        found = true;
                        break;
                }
        }
        if(found) {
                res.send({done: 'done'})
        } else {
                res.status(400).send({done: 'no'})
        }
});

app.get('*', (req, res) => {
        const url = encodeURI('https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=pisign/13.235.43.83:4000/' + req.connection.remoteAddress)
        arr = [];
        res.render('home', { imgsrc: url })
});

app.post('/login', (req, res) => {
        arr.push(req.body);
        console.log(arr);
        res.send('OK');
});



// app.post('*', (req, res) => {
//         const data = req.body.data;
//         const url = encodeURI('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+data)
// 	axios.get(url)
// 	.then(data => res.render('home', {imgsrc: data.data}))
// 	.catch(err => console.log(err));
// });

app.listen(4000, () => {
        console.log(arr);
        console.log('Listening');
});

