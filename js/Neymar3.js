function ney6(){
    
    var escolha=prompt("Você entra em campo e demonstra suas habilidades futebolísticas, a multidão vai ao delírio, sso milhares de barões e atletas como você que não sabem o destino que os aguarda. Mas por um momento a multidão está entretida com um lance do jogo e você apesar de ser o centro das atenções vê a chance de fugir. 1-Fugir 2-Continuar jogando")
    while(escolha!=='1' && escolha!=='2')
    {
    var escolha=prompt("Qual sua escolha?")
    }

        if(escolha ==='1')
        {   alert("Você cai relembrando seus tempos de jogador e é preso e executado")
        location.replace('../Game_over.html')
        
        }
        else if(escolha==='2')
        {alert("Você continua jogando na esperança de que dias melhores virão, mas seu destino é a morte, pelo menos vocÊ conseguirá salvar alguém")
        location.replace('../Game_over.html')
        
        }
    }
    
    
  

        
    