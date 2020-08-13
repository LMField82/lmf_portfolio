const express = require('express');
//const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
const PORT = 8080;

// Configuring our data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(express.static("app/public"));
// app.post('/about', (req, res) => {
//     const { email, subject, text } = req.body;
//     console.log('Data: ', req.body);

//     sendMail(email, subject, text, function(err, data) {
//         if (err) {
//             res.status(500).json({ message: 'Internal Error' });
//         } else {
//             res.status({ message: 'Email sent!!!' });
//         }
//     });
// });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, () => log('Server is starting on PORT,', PORT));