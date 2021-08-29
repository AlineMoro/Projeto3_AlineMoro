let path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    {body, validationResult} = require('express-validator'),
    multer = require('multer'),
    User = require('./model/user'),
    app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
const mongo_url = 'mongodb://localhost:27017/teste3';
const upload = multer({dest: './uploads'});

mongoose.connect(mongo_url, function(err) {
    if(err)
        throw err;
    else
        console.log('Conectado ao banco ' + mongo_url);
});

app.post('/registrar', [
    body('userEmail').isEmail().withMessage("Precisa ser um e-mail"),
    body('userEmail').isLength({min: 3}).withMessage("O e-mail precisa ter mais de 3 caracteres"),
    body('userSenha').isLength({min: 3}).withMessage("A senha precisa ter mais de 3 caracteres")
], (req, res) => {
    var {userEmail, userSenha} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }
    else{
        var user = new User({userEmail, userSenha});

        user.save(err => {
            if(err)
                res.status(400).send("Usuário já cadastrado");
            else{
                res.redirect('/');
            }
        });
    }
});


app.post('/autenticar', [
    body('userEmail').isEmail().withMessage("Precisa ser um e-mail"),
    body('userEmail').isLength({min: 3}).withMessage("O e-mail precisa ter mais de 3 caracteres"),
    body('userEmail').custom(value => {
        if(!value){
            return mongoose.Promise.reject("E-mail é obrigatório")
        }
        return true;
    }),
    body('userSenha').isLength({min: 3}).withMessage("A senha precisa ter mais de 3 caracteres")
], (req, res) => {
    var {userEmail, userSenha} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()});
    }

    User.findOne({userEmail, userSenha}, (err, user) => {
        if(err)
            res.status(400).send("Erro ao autenticar usuário");
        else if (!user){
            res.status(400).send("Usuário ou senha incorreto");
        }
        else{
            res.cookie('user = ' + JSON.stringify(user));
            res.redirect('/');
        }
    });
});

app.post('/upload', upload.array('nome', 'preco','file'), (req, res) => {
    console.log(res.status);
    res.send('Upload feito com sucesso');
});

app.listen(5000, () => {
    console.log('server started');
});

module.exports = app;