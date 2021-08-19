function func5(){
        
    var escolha=prompt('Digite sua resposta')
    while(escolha!=='1' && escolha!=='2' && escolha!=='3' && escolha!=='4')
    {
    var escolha=prompt("Qual sua escolha?")
    }

        if(escolha ==='1')
        {
        alert('Você acertou venha comigo!Vou te levar ao refeitório para que antes de entrar na cidade você esteja bem alimentado!')    
        location.replace('./Isaquias/Isaquias3.html')
        }
        else if(escolha!=='1' )
        {
        alert('Você errou volte para o seu quarto e estude mais!Mas no fim você fica preso no seu quarto e ser um doador de órgãos quando algum barão precisar dos seus órgãos')
        
       location.replace('Game_over.html')
    
        }
    

    }
    function func6(){
        
        alert('Ao entrar no refeitório você encontra um banquete para você, a 100 metros você vê a saída de emergência')
        var escolha =prompt('1- Fugir 2-Ficar para o banquete')
        while(escolha!=='1' && escolha!=='2')
            {
            var escolha=prompt("Qual sua escolha?")
            }

    
            if(escolha ==='1')
            {
            alert('Você conseguiu fugir')    
            location.replace('../Marta/Fim.html')
            }
            else if(escolha==='2' )
            {
            alert('Você comeu um banquete maravilhoso e ser um doador de órgãos quando algum barão precisar dos seus órgãos')
            
           location.replace('../Game_over.html')
        
            }
        
    
        }

