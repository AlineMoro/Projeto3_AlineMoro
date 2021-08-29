let path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    axios = require('axios'),
    User = require('./model/user'),
    app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
const mongo_url = 'mongodb://localhost:27017/teste3';

mongoose.connect(mongo_url, function(err) {
    if(err)
        throw err;
    else
        console.log('Conectado ao banco ' + mongo_url);
});

app.post('/registrar', (req, res) => {
    var {userEmail, userSenha} = req.body;

    var user = new User({userEmail, userSenha});

    user.save(err => {
        if(err)
            res.status(400).send("Erro ao registrar");
        else{
            //res.status(200).send("Usuário registrado");
            res.redirect('/');
        }
    });
});

app.post('/autenticar', (req, res) => {
    var {userEmail, userSenha} = req.body;
    User.findOne({userEmail, userSenha}, (err, user) => {
        if(err)
            res.status(400).send("Erro ao autenticar usuário");
        else if (!user){
            res.redirect('/');
        }
            
            //res.status(400).send("Usuário não cadastrado");
        else{
            res.cookie('user = ' + JSON.stringify(user));
            res.redirect('/');
        }
    });
});

app.listen(5000, () => {
    console.log('server started');
});

module.exports = app;