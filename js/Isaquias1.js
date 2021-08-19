function func1(){
    var escolha=prompt("Qual sua escolha?")
    while(escolha!=='1' && escolha!=='2')
    {
    var escolha=prompt("Qual sua escolha?")
    }

        if(escolha ==='1')
        {   alert("O bilhete te revela que essa é uma sociedade controlada por barões que detem o que sobrou de recursos naturais da humanidade e você precisa fugir de alguma forma.Você um dia já foi um atleta de alto desempenho e será testado se também tem raciocínio lógico.Se conseguir responder a pergunta será enviado para a cidade e 'cultivado' como doador de órgãos para a casta de barões, você precisa fugir.De repente alguem aparece na porta")
            func2()
        
        }
        else if(escolha==='2')
        {alert("Você voltou a dormir e não saberá o fim da história.Fim de jogo!")
        location.replace('../Game_over.html')
        
        }
    }
    
    
    function func2(){
        var escolha=prompt("Olá meu nome é João você foi selecionado dentre muitas pessoas para viver na nossa cidade, você possui a saptidões físicas, mas será que possui as intelectuais? Por favor venha comigo.1-Seguir Jõao 2-Empurrá-lo e sair correndo")
        while(escolha!=='1' && escolha!=='2')
        {
        var escolha=prompt("Qual sua escolha?")
        }
            if(escolha ==='1')
            { func3()
          
            }
            else if(escolha==='2')
            {
                alert('Você saiu correndo, mas guardas armados te mataram.Você morreu')
            location.replace('../Game_over.html')
            
            }        

        }

        function func3(){
            
               
                 location.replace('../Isaquias/Isaquias2.html')
              
               
            }
    