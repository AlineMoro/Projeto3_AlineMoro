var login_btn = document.querySelector('.div-login'),
    text1 = document.querySelector('.text1'),
    text2 = document.querySelector('.text2'),
    text3 = document.querySelector('.text3'),
    div_button = document.querySelector('.div-button'),
    main_text = document.querySelector('.main-text'),
    div_button_cadastrar = document.createElement('div'),
    text4 = document.createElement('div');

    //Apenas uma vez, para fazer o login
    if(document.cookie == '') {
        main_text.className = 'main-text-login'
        text1.innerHTML = '<h2>Cliente PicPay possui ofertas exclusivas!</h2><form action="/autenticar" method="post" class="form"><label>Email</label><input type="text" id="userEmail" name="userEmail" placeholder="ex: nome_sobrenome@hotmail.com"><label>Senha</label><input type="password" id="userSenha" name="userSenha" placeholder="*********"><div><input class="entrar" type="submit" value="Entrar"></div><form>'
        text1.className = 'text1-login'
        text2.innerHTML = ''
        text3.className = 'text3-login'
        text3.innerHTML = ''
        div_button.className = 'logando'
        div_button.innerHTML = ''
        main_text.appendChild(div_button_cadastrar)
        div_button_cadastrar.className = 'div-button-cadastrar'
        div_button_cadastrar.innerHTML = '<a href="#">Fazer cadastro</a>'
        main_text.appendChild(text4)
        text4.className = 'text4'

        var email = document.querySelector('#userEmail').value,
            senha = document.querySelector('#userSenha').value,
            entrar = document.querySelector('.entrar');
         

        div_button_cadastrar.addEventListener('click', function() {
            main_text.className = 'main-text-login'
            text1.innerHTML = '<h2>Cliente PicPay possui ofertas exclusivas!</h2><form action="/registrar" method="post" class="form"><label>Email</label><input type="text" id="userEmail" name="userEmail" placeholder="ex: nome_sobrenome@hotmail.com"><label>Senha</label><input type="password" id="userSenha" name="userSenha" placeholder="*********"><div><input class="cadastrar" type="submit" value="Cadastrar"></div><form>'
            text1.className = 'text1-login'
            text2.innerHTML = ''
            text3.className = 'text3-login'
            text3.innerHTML = ''
            div_button.className = 'logando'
            div_button.innerHTML = ''
            main_text.appendChild(div_button_cadastrar)
            div_button_cadastrar.className = 'div-button-cadastrar'
            div_button_cadastrar.innerHTML = '<a href="#">Fazer cadastro</a>'
            main_text.appendChild(text4)
            text4.className = 'text4'
        });
    }

    if(document.cookie != '') {
        main_text.className = 'main-text-login'
        text1.innerHTML = '<h2>O usuário já está logado!</h2>'
        text1.className = 'text1-login'
        text2.innerHTML = ''
        text3.className = 'text3-login'
        text3.innerHTML = ''
        div_button.className = 'logando'
        div_button.innerHTML = ''
        
        var div_oferta = document.querySelector('.main-text-login'),
            section = document.querySelector('.div-section1'),
            consulta = document.createElement('div'),
            form_jogo = document.createElement('form');
    
        div_oferta.innerHTML = '<h2>Com PicPay você tem acesso exclusivo às promoções dos seus jogos favoritos</h2>'
        div_oferta.appendChild(text4)
        text4.className = 'text4-success'
        text4.innerHTML = '<h3 class="msg_error">Login efetuado com sucesso!</h3>'
        div_oferta.className = 'div-oferta'
        section.appendChild(consulta)
        consulta.className = 'div-consulta'
        consulta.appendChild(form_jogo)
        form_jogo.innerHTML = '<form action="/upload" method="post" enctype="multipart/form-data"><input type="text" name="nome" class="pesquisa" placeholder="Nome do jogo"><input type="text" name="preco" class="pesquisa" placeholder="Preço"><input type="file" name="file" class="file"><input type="submit" class="send-pesquisa" value="Postar"></form>'
    }
