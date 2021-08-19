function func4(){
    alert("Você entra na biblioteca e João te apresenta um teste de lógica e te promete uma vida tranquila e feliz na cidade se você acertar a questão, se você errar você pode pegar alguns livros da biblioteca para estudar em seu quarto e realizar o teste posteriormente. Antes de começar você pode dar uma olhada em alguns livros. 1- Olhar livros 2- Realizar teste")
    var escolha=prompt("Qual sua escolha?")
    while(escolha!=='1' && escolha!=='2')
    {
    var escolha=prompt("Qual sua escolha?")
    }

        if(escolha ==='1')
        {   alert("Você procura livros de lógica, matemática e história.Em um dos livros que comentam sobre a arquitetura da cidade você encontra a planta do lugar onde está,Basicamente é um lugar com quartos para os presos, um jardim onde você vê uma saída, um lago e um refeitório que possui uma saída de emergência")
            alert('Com um lápis que estava na prateleira você escreve um bilhete informando suas descobertas e o coloca em um livro para que alguem tenha a chance de escapar como você')
            alert("Agora vamos ao teste!")
            location.replace('../Questao2.html')
        
        }
        else if(escolha==='2')
        {
        location.replace('../Questao2.html')
        
        }
    }
    