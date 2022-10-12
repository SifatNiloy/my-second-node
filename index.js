const express = require('express')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('I am excited to learn node and express')
})
const users = [
    { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '01440400' },
    { id: 1, name: 'shabnoor', email: 'shabnoor@gmail.com', phone: '0144345600' },
    { id: 2, name: 'mousumi', email: 'mousumi@gmail.com', phone: '014463450' },
    { id: 3, name: 'suchorita', email: 'shuchorita@gmail.com', phone: '01454600' },
    { id: 4, name: 'sonya', email: 'sonya@gmail.com', phone: '014345560' },
    { id: 5, name: 'susmita', email: 'susmita@gmail.com', phone: '01443453400' },
]
app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli')
})
app.listen(port, () => {
    console.log('listening to port', port)
})