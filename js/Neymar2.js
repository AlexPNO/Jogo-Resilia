function ney3(){
    alert("Você foi capturado! Apesar das suas habilidades furtivas um guarda conseguiu te capturar e te levou para o centro de detenção da cidade, onde atletas como você são confinados e ficam presos servindo de diversão e doador de órgãos para os barões")
    var escolha=prompt("Você é trancafiano em um quarto e ouve outro prisioneiro. 1- Escutar o prisioneiro 2- Não ouvir?")
    while(escolha!=='1' && escolha!=='2')
    {
    var escolha=prompt("Qual sua escolha?")
    }

        if(escolha ==='1')
        {   alert("O prisioneiro te conta que esse centro detem atletas por um tempo indefinido e para viver na cidade é necessário passar por um teste de lógica.Você compartilha as informações que possui do mundo externo e os dois chegam a conclusão de que tem que avisar outros prisioneiros para que eles consigam fugir.Assim você decide escrever um bilhete")
            ney4()
        
        }
        else if(escolha==='2')
        {alert("Você toma uma atitude passiva e desiste de tudo, já qu efoi capturado")
        location.replace('../Game_over.html')
        
        }
    }
    
    
    function ney4(){
        var escolha=prompt("Você escreve o seu bilhete e o esconde embaixo da cama, um homem aparece na porta e te chama para o estádio, você será o entretenimento dos barões e jogará no time da cidade ao longo de sua estadia. 1- Acompanhar 2- Se recusar a ir")
        // while(escolha.toLowerCase!=='sim' && escolha.toLowerCase!=='não')
            if(escolha ==='1')
            { ney5()
          
            }
            else if(escolha==='2')
            {
                alert('Você se recusa a ser diversão de um barão e continua no seu quarto até o fim dos seus dias')
            location.replace('../Game_over.html')
            
            }        

        }

        function ney5(){
            // while(escolha.toLowerCase!=='sim' && escolha.toLowerCase!=='não')
               
                 location.replace('../Neymar/Neymar3.html')
              
               
            }
    