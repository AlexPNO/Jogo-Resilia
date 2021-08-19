function escolha7(){
        
    var escolha=prompt('Digite sua resposta')

        if(escolha ==='1')
        {
        alert('Você acertou venha comigo!Vou te levar a um jardim onde fica a entrada da cidade!')    
        location.replace('../Marta3.html')
        }
        else if(escolha==='2' )
        {
        alert('Você acertou venha comigo! Vou te levar ao portal onde fica a entrada da cidade!')
       location.replace('Game_over.html')
            alert("Você errou a questão e ficará presa até o fim dos seus dias,João te enganou para que você não oferecesse resistência e te entregou aos guardas")
        }
    }