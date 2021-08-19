    function escolha1(){
    var escolha=prompt("Qual sua escolha?")
    while(escolha!=='1' && escolha!=='2')
    {
    var escolha=prompt("Qual sua escolha?")
    }

        if(escolha ==='1')
        {
            escolha2()
        
        }
        else if(escolha==='2')
        {
        location.replace('../Game_over.html')
        
        }
    }
    
    
    function escolha2(){
        var escolha=prompt("há uma chave na mesa e um caderno, a porta está trancada e você sente que precisa sair daqui. 1-Pegar a chave 2-Voltar pra cama")
        while(escolha!=='1' && escolha!=='2')
        {
        var escolha=prompt("Qual sua escolha?")
        }
            if(escolha ==='1')
            { escolha3()
          
            }
            else if(escolha==='2')
            {
                alert('Você voltou para sua cama e passará o resto dos seus dias sem saber o que aconteceu.Fim de jogo!')
            location.replace('../Game_over.html')
            
            }        

        }
    

        function escolha3(){
            var escolha=prompt("Você pega a chave e vai em direção a porta, ao chegar na porta você vê pela fresta que está em um lugar onde existe um corredor.A porta não abre com a chave e de repende a porta é aberta pelo lado de fora. Uma pessoa entra: 1-Quem é você? 2-Empurrar a pessoa e sair correndo")
            while(escolha!=='1' && escolha!=='2')
            {
            var escolha=prompt("Qual sua escolha?")
            }
                if(escolha ==='1')
                {
                    escolha4()
                
                }
                else if(escolha==='2' )
                {
                    alert("Você foi morta por soldados que vigiam os corredores, mas antes de morrer viu que existem vários quartos como o seu, infelizmente morta você não consegue descobrir o final dessa história")
                location.replace('../Game_over.html')
            
                }
            

            }
        
            // O CÓDIGO QUEBRA AQUI, O NAVEGADOR NÃO CONSEGUE ACESSAR MARTA2 quando tem uma funçao e um location ele le a função

            function escolha4(){
                var escolha=prompt('Bom dia meu nome é João, como passou a noite?,não se lembra de nada não é? Seu nome é Marta e você já foi uma atleta de alto desempenho.Você está aqui porque foi selecionada para viver na nossa cidade as aptidões atléticas você possui agora precisamos saber das intelectuais.Venha comigo. 1- Seguir João 2-Não quero ir ')
                while(escolha!=='1' && escolha!=='2')
                {
                var escolha=prompt("Qual sua escolha?")
                }
                    if(escolha ==='1')

                    {   alert('Você segue João e está em um corredor com vários quartos iguais ao seu, você não pergunta nada e apenas  o segue até chegarem em um saguão com portas maiores,ele te guia até uma porta de madeira mais larga que as outras')
                        location.replace('../Marta/Marta2.html')
                        
                    
                    }
                    else if(escolha==='2' )
                    { alert('Você ficou confinado no seu quarto sem saber o que houve com o mundo')
                    
                    location.replace('../Game_over.html')
                
                    }
                
    
                }
               
                    
                
         