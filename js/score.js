/*
    ########################################
    ##                                    ##
    ## Título: Quem quer ser milionário?  ##
    ##                                    ##
    ########################################
    ##                                    ##
    ## Descrição: Website inspirado no    ##
    ## programa televisivo "Quem quer     ##
    ## ser milionário", projeto           ##
    ## desenvolvido no âmbito da Unidade  ##
    ## Curricular de Programação Web      ##
    ## Cliente, como trabalho de          ##
    ## avaliação Nº2.                     ##
    ##                                    ##
    ########################################
    ##                                    ##
    ## Autor: Nuno Lopes                  ##
    ##                                    ##
    ########################################
    ##                                    ##
    ## Data: 25/07/2021                   ##
    ##                                    ##
    ########################################

*/

var score_board_body = document.getElementById("score_board_body");

var users = JSON.parse(localStorage.getItem("users"));

var troca, temp, length = users.length;

var str = "";


//carregar 15 utilizadores com a melhor pontuação e mostra na tabela
do{

    troca = 0;

    for(var i = 1; i < length; i++){

        if(users[i-1].score < users[i].score){
    
            temp = users[i-1];
    
            users[i-1] = users[i];
    
            users[i] = temp;

            troca = 1;
    
        }
    
    
    }

    length--;

}while(troca);

for(var i = 0; i < 15; i++){

    switch(i){

        case 0:

            str += '<tr><td class="first-place">'+ (i+1) +'º lugar</td>';
            break;

        case 1:

            str += '<tr><td class="second-place">'+ (i+1) +'º lugar</td>';
            break;

        case 2:

            str += '<tr><td class="third-place">'+ (i+1) +'º lugar</td>';
            break;

        default:

            str += '<tr><td>'+ (i+1) +'º lugar</td>';
            break;

    }

    if(i < users.length){

        str += '<td>'+ users[i].username +'</td><td>'+ users[i].score +' perguntas</td></tr>';
        
    }else{

        str += '<td></td><td></td></tr>';

    }

}

score_board_body.innerHTML = str;