function ney1(){
    var escolha=prompt("Qual sua escolha?")
    while(escolha!=='1' && escolha!=='2')
    {
    var escolha=prompt("Qual sua escolha?")
    }

        if(escolha ==='1')
        {   alert("Você está indo para a cidade em sua motoca com sua gangue e os soldados que defendem a cidade já aparecem para repelir a sua gangue")
            ney2()
        
        }
        else if(escolha==='2')
        {alert("Você não invadiu a cidade e mudou a rota, mas um dia os seus recursos irão acabar e o confronto será inevitável.Fim de jogo")
        location.replace('../Game_over.html')
        
        }
    }
    
    
    function ney2(){
        var escolha=prompt("Você encontra uma brecha nas defesas inimigas e avisa seus amigos que irá atacar 1- Descer da moto para se esconder e invadir? 2-Invadir de moto e tudo")
        //validador quebrando
        while(escolha!=='1' && escolha!=='2')
        {
        var escolha=prompt("Qual sua escolha?")
        }
            if(escolha ==='1')
            {   alert('Você se escondeu e de fininho conseguiu entrar na cidade')
              location.replace('../Neymar/Neymar2.html')
          
            }
            else if(escolha==='2')
            {
                alert('Você foi que nem um louco para entrar na cidade de moto e levou um tiro no pescoço.Você morreu')
            location.replace('../Game_over.html')
            
            }        

        }

      