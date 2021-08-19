
function escolha5(){
    
    alert('Aqui está o teste, não se sinta pressionada, você pode consultar os livros e chegar na resposta')
    var escolha=prompt('1-Investigar os livros antes de responder o teste 2-Ir direto para o teste')
    while(escolha!=='1' && escolha!=='2')
    {
    var escolha=prompt("Qual sua escolha?")
    }
        if(escolha ==='1')
        {
            alert("Ao investigar os livros da biblioteca, você procura por livros de história para saber onde está e porque foi selecionada para viver nessa cidade.Você descobre que a cidade para qual está sendo selecionada é um paraíso perfeito com comida, entretenimento e onde você poderia exercitar suas aptidões físicas e mentais ao longo de uma vida tranquila.E você acha isso maravilhoso")
            alert("Em um dos livros você esncontra um bilhete alarmante dizendo que tudo isso é uma farsa e que a pessoa descobriu que na verdade essa cidade é uma fachada para a existência de uma sociedade de super ricos que seleciona atletas para viverem de maneira saudavel e servirem como doadores de órgãos para essa casta de barões. A única saída desse destino é ao acertar a questão e depois de ser levado para um jardim, encontrar uma passagem subterrânea próximo a uma orquídea.")  

            alert("Pronta pra prova? Lá vai a questão: ")

            location.replace('../Questao1.html')
        
        }
        else if(escolha==='2' )
        {
            alert("Pronta pra prova? Lá vai a questão: ")
       location.replace('../Questao1.html')
    
        }
    

    }


    function escolha6(){
        
        var escolha=prompt('Digite sua resposta')

        while(escolha!=='1' && escolha!=='2')
        {
        var escolha=prompt("Qual sua escolha?")
        }

            if(escolha ==='1')
            {
            alert('Você acertou venha comigo!Vou te levar a um jardim onde fica a entrada da cidade!')    
            location.replace('./Marta/Marta3.html')
            }
            else if(escolha==='2' )
            {
            prompt('Você acertou venha comigo! Vou te levar ao portal onde fica a entrada da cidade!')
           location.replace('Game_over.html')
        
            }
        

        }

    
        function escolha7(){
        
            var escolha=prompt('Digite sua resposta')
            while(escolha!=='1' && escolha!=='2')
            {
            var escolha=prompt("Qual sua escolha?")
            }
                if(escolha ==='1')
                {
                alert('Você acertou venha comigo!Vou te levar a um jardim onde fica a entrada da cidade!')    
                location.replace('../Marta3.html')
                }
                else if(escolha==='2' )
                {
                prompt('Você acertou venha comigo! Vou te levar ao portal onde fica a entrada da cidade!')
               location.replace('Game_over.html')
            
                }
            }