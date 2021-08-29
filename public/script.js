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
         
                if(email === '' || senha === '') {
                    //console.log("Erro")
                    text4.className = 'text4-empty'
                    text4.innerHTML = '<h3 class="msg_error">Preencha todos os campos</h3>'
                }
                else if((email.length > 0 && email.length < 3) || (senha.length > 0 && senha.length < 3)) {
                    //console.log("Erro")
                    text4.className = 'text4-length'
                    text4.innerHTML = '<h3 class="msg_error">Campo(s) inválido(s)</h3>'
                }
                else if((email != '' && senha != '') && (email.length >= 3 && senha.length >= 3)){
                    text4.className = 'text4-error'
                    text4.innerHTML = '<h3 class="msg_error">Usuário ou senha inválido</h3>'
                }
        

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
            consulta = document.createElement('div')
            input_pesquisa = document.createElement('input')
            send_pesquisa = document.createElement('input')
    
        div_oferta.innerHTML = '<h2>Com PicPay você tem acesso exclusivo às promoções dos seus jogos favoritos</h2>'
        div_oferta.appendChild(text4)
        text4.className = 'text4-success'
        text4.innerHTML = '<h3 class="msg_error">Login efetuado com sucesso!</h3>'
        div_oferta.className = 'div-oferta'
    
        section.appendChild(consulta)
        consulta.className = 'div-consulta'
        consulta.appendChild(input_pesquisa)
        input_pesquisa.className = 'pesquisa'
        input_pesquisa.placeholder = 'Qual jogo você deseja encontrar?'
        consulta.appendChild(send_pesquisa)
        send_pesquisa.type = 'submit'
        send_pesquisa.value = 'Pesquisar'
        send_pesquisa.className = 'send-pesquisa'
    }
    
    //Após logar
    /*
    if(document.cookie != '') {
        main_text.className = 'main-text-login'
        text1.innerHTML = '<h2>Você já está logado. Clique em "Entrar" para continuar.</h2>'
        text1.className = 'text1-logado'
        text2.innerHTML = ''
        text3.className = 'text3-login'
        text3.innerHTML = ''
        div_button.className = 'div-button-login'
        div_button.innerHTML = '<a href="#">Entrar</a>'
    }*/
   
    /*div_button.addEventListener('click', entrar)
    function entrar() {
        //console.log("Entrou")
        if(document.cookie == ''){



            
            
            //Mensagens de erro antes de submeter o AJAX
            if(email === '' || senha === '') {
                //console.log("Erro")
                text4.className = 'text4-empty'
                text4.innerHTML = '<h3 class="msg_error">Preencha todos os campos</h3>'
            }
            else if((email.length > 0 && email.length < 3) || (senha.length > 0 && senha.length < 3)) {
                //console.log("Erro")
                text4.className = 'text4-length'
                text4.innerHTML = '<h3 class="msg_error">Campo(s) inválido(s)</h3>'
            }
            else if((email != '' && senha != '') && (email.length >= 3 && senha.length >= 3)){
                text4.className = 'text4-error'
                text4.innerHTML = '<h3 class="msg_error">Usuário ou senha inválido</h3>'
            }
        }

        let delay = setTimeout(function() { //Delay para garantir que os dados de cookie já terão sido armazenados, não sendo necessário clicar de novo em "entrar"
            if(document.cookie != '') {
                console.log(document.cookie)
                var div_oferta = document.querySelector('.main-text-login'),
                    section = document.querySelector('.div-section1'),
                    consulta = document.createElement('div')
                    input_pesquisa = document.createElement('input')
                    send_pesquisa = document.createElement('input')
    
                div_oferta.innerHTML = '<h2>Com PicPay você tem acesso exclusivo às promoções dos seus jogos favoritos</h2>'
                div_oferta.appendChild(text4)
                text4.className = 'text4-success'
                text4.innerHTML = '<h3 class="msg_error">Login efetuado com sucesso!</h3>'
                div_oferta.className = 'div-oferta'
    
                section.appendChild(consulta)
                consulta.className = 'div-consulta'
                consulta.appendChild(input_pesquisa)
                input_pesquisa.className = 'pesquisa'
                input_pesquisa.placeholder = 'Qual jogo você deseja encontrar?'
                consulta.appendChild(send_pesquisa)
                send_pesquisa.type = 'submit'
                send_pesquisa.value = 'Pesquisar'
                send_pesquisa.className = 'send-pesquisa'
    
                var lista = document.createElement('ul'),
                    jogo_erro = document.createElement('h3')
    
                send_pesquisa.addEventListener('click', pesquisar)
                function pesquisar() {
                    var titulo = document.querySelector('.pesquisa').value
                    //console.log("Pesquisa")
                    axios.get('https://www.cheapshark.com/api/1.0/deals?title=' + titulo)
                    .then(jogo)
                    function jogo(jogo) {
                        console.log(jogo)
                        lista.innerHTML = ''
    
                        //Mensagem de erro para jogo não encontrado
                        if(jogo.data.length == 0) {
                            consulta.appendChild(jogo_erro)
                            jogo_erro.innerHTML = 'Jogo não encontrado'
                        }
                        
                        for(var i = 0; i <= jogo.data.length && i < 20; i++){
                            if(jogo.data[i].isOnSale == 1) {
                                var li = document.createElement('li'),
                                    img = document.createElement('img'),
                                    link = document.createElement('p')
    
                                jogo_erro.innerHTML = ''
                                consulta.appendChild(lista)
                                lista.className = 'lista-jogos'
                                li.innerHTML = '<p><span>Título: "</span>' + jogo.data[i].title + '"</p><p><span>Preço normal: </span>U$' + jogo.data[i].normalPrice + '</p>'
                                img.src = jogo.data[i].thumb
                                link.innerHTML = '<a href="https://www.cheapshark.com//search#q:' + jogo.data[i].title + '">Clique aqui e compare as ofertas</a>'
                                lista.appendChild(li)
                                li.appendChild(link)
                                li.appendChild(img)
                            }
                        }
                    }
                }
            }
        }, 1300)
    }
}*/