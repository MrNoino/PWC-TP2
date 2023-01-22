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


var input_username = document.getElementById("username");

var message_body = document.getElementById("message");

var message_cancel = document.getElementById("message_cancel");

var play_btn = document.getElementById("play");

var help1 = document.getElementById("help1");

var help2 = document.getElementById("help2");

var options_btns = document.getElementsByName("option");

var current_user = {};

var current_score = 0;

var compass_interval;

var current_questions = [];

var current_index_question = 0;

var audio;

var timer_interval;

var continue_btn = document.getElementById("continue");

var quit_btn = document.getElementById("quit");

//função para retornar o utilizador de acordo com a pesquisa
function getUser(search){

    var users = localStorage.getItem("users");

    if(users == null)

        return {};

    
    users = JSON.parse(users);

    for(var i = 0; i < users.length; i++){

        if(users[i].username.toLowerCase() === search.toLowerCase()){

            return users[i];

        }

    }   

    return {};

}

//função para adicionar um utilizador à local storage
function addUser(user){

    var users = localStorage.getItem("users");

    if(users == null)

        return [];

    
    users = JSON.parse(users);

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

}

//evento click para cancelar o registo de um novo jogador
message_cancel.addEventListener("click", function(){

    current_user = {};
    clearInterval(compass_interval);
    message_body.innerHTML = "";
    message_cancel.innerHTML = "";
    play_btn.disabled = false;
    input_username.disabled = false;


}, false);

// evento click do botão de jogar
play_btn.addEventListener("click", function(){

    message_body.innerHTML = "";

    if(input_username.value.length < 3){

        message_body.style.color = "#FF8C00";
        message_body.innerHTML = "O nome de utilizador tem de ter pelo menos 3 carateres.";
        return;

    }

    this.disabled = true;

    input_username.disabled = true;

    

    current_user = getUser(input_username.value);

    
    //se nao encontrou o utilizador dalhe 10 segundos e depois regista o utilizador
    if(Object.keys(current_user).length === 0){

        var segundos = 10;
        message_body.style.color = '#FFFF00';

        compass_interval = setInterval( function(){

        
            message_body.innerHTML = 'Utilizador não encontrado, criando uma nova conta em '+ segundos +' segundos. ';
            message_cancel.innerHTML = ' Cancelar';
    
            segundos--;

            if(segundos < 0){
                clearInterval(compass_interval);

                current_user = {

                    username: input_username.value,
                    score: 0

                };

                addUser(current_user);

                message_body.style.color = "#00FF00"
                message_body.innerHTML = 'Utilizador registado com sucesso.';

                message_cancel.innerHTML = '';

                setTimeout(function(){

                    message_body.innerHTML = '';
            
                }, 15000);

                current_questions = randomQuestions();

                play(current_questions, current_index_question);

            }

        }, 1000);

    }else{

        timeout = 5000;
        segundos = 5;

        message_body.style.color = "#00FF00"

        compass_interval = setInterval(function(){

            message_body.innerHTML = 'Utilizador encontrado, inciando jogo em '+ segundos +' segundos. ';
            segundos--;

            if(segundos < 0){

                clearInterval(compass_interval);

                message_body.innerHTML = '';

                current_questions = randomQuestions();

                play(current_questions, current_index_question);

            }

        }, 1000);

    }

}, false);

//função para dar a ajuda de 50:50
help1.addEventListener("click", function(){

    var count = 0, random_index;
    
    do{

        random_index = Math.floor(Math.random() * options_btns.length);

        if(current_questions[current_index_question].options[random_index].answer == undefined){

            if(options_btns[random_index].style.display != "none"){

                options_btns[random_index].style.display = "none";
                count++;

            }


        }

    }while(count < 2); 

    this.style.opacity = "0.3";
    this.disabled = true;

}, false);

//função para dar a ajuda de telefonar a um amigo
help2.addEventListener("click", function(){

    for(var i = 0; i < current_questions[current_index_question].options.length; i++){

        if(current_questions[current_index_question].options[i].answer != undefined){

            options_btns[i].style.background = "#90EE90";
            break;

        }

    }

    this.style.opacity = "0.3";
    this.disabled = true;

}, false);

//função para retornar perguntas aleatorias
function randomQuestions(){

    var questions = JSON.parse(localStorage.getItem("questions"));

    var randomQuestions = [];

    var current_level = 1, randomIndex, flag;

    while (randomQuestions.length < 15){

        if(randomQuestions.length >= 3 && randomQuestions.length < 6)
            current_level = 2;

        if(randomQuestions.length >= 6 && randomQuestions.length < 9)
            current_level = 3;

        if(randomQuestions.length >= 9 && randomQuestions.length < 12)
            current_level = 4;

        if(randomQuestions.length >= 12 && randomQuestions.length < 15)
            current_level = 5;

        do{

            flag = 0;

            randomIndex = Math.floor(Math.random() * questions.length);

            if(questions[randomIndex].level == current_level){

                if(!randomQuestions.includes(questions[randomIndex])){

                    randomQuestions.push(questions[randomIndex]);
                    flag = 1;

                }

            }

        }while(!flag);  

    }

    var randomOptions = [];

    for(var i = 0; i < questions.length; i++){


        while(randomOptions.length < questions[i].options.length){

            do{

                flag = 0;
        
                randomIndex = Math.floor(Math.random() * questions[i].options.length);
    
                if(!randomOptions.includes(questions[i].options[randomIndex])){
                
                    randomOptions.push(questions[i].options[randomIndex]);
                    flag = 1;
    
                }
        
            }while(!flag);

        }
        

        questions[i].options = randomOptions;

        randomOptions = [];

    }

    return randomQuestions;

}

//função para mostrar a pergunta e opções
function displayGame(question, numberQuestion){

    document.getElementById("question_title").innerHTML = "Pergunta Nº " + numberQuestion;

    document.getElementById("question").innerHTML = question.question;

    help1.style.display = "block";
    help2.style.display = "block";

    for(var i = 0; i < options_btns.length; i++){

        options_btns[i].disabled = false;
        options_btns[i].innerHTML = question.options[i].value;
        options_btns[i].value = question.options[i].id;
        options_btns[i].style.display = "block";

    }

}

//função para esconder a interface do jogo
function hideGame(){

    //habilitar o input username e o botao play 
    play_btn.disabled = false;
    input_username.disabled = false;

    document.getElementById("question_title").innerHTML = "";

    document.getElementById("question").innerHTML = "";

    document.getElementById("timer").innerHTML = "";

    help1.style.display = "none";
    help2.style.display = "none";

    for(var i = 0; i < options_btns.length; i++){

        options_btns[i].innerHTML = "";
        options_btns[i].value = "";
        options_btns[i].style.display = "none";
        options_btns[i].style.backgroundColor = "#FFFFFF";
        options_btns[i].style.color = "#0000FF";

    }

    
    document.getElementById("quit").style.display = "none";
    document.getElementById("continue").style.display = "none";

    input_username.value = "";

    current_index_question = 0;
    current_score = 0;

}

function timer(){

    segundos = 59;
    audio = new Audio("./audio/suspense.mp3");
    audio.volume = 0.05;
    audio.play();

    document.getElementById("timer").innerHTML = "00:60";
    
    timer_interval = setInterval( function(){

        if(segundos > 9)

            document.getElementById("timer").innerHTML = "00:" + segundos;

        else

            document.getElementById("timer").innerHTML = "00:0" + segundos;

        segundos--;

        if(segundos < 0){
            
            audio.pause();
            audio = new Audio("./audio/wrong_answer.mp3");
            audio.volume = 0.05;
            audio.play();
            clearInterval(timer_interval);
            document.getElementById("quit").style.display = "block";
            for(var j = 0; j < options_btns.length; j++){

                options_btns[j].disabled = true;

            }

        }
            

    }, 1000);

}

function play(questions, index){


    displayGame(questions[index], index+1);

    timer();

}

//eventos click das opções de resposta
for(var i = 0; i < options_btns.length; i++){

    options_btns[i].addEventListener("click", function(){

        for(var j = 0; j < current_questions[current_index_question].options.length; j++){

            if(current_questions[current_index_question].options[j].answer != undefined){

                options_btns[j].style.backgroundColor = "green";
                options_btns[j].style.color = "white";

            }

            if(current_questions[current_index_question].options[j].id == Number(this.value)){

                audio.pause();
                clearInterval(timer_interval);

                if(current_questions[current_index_question].options[j].answer == undefined){

                    audio = new Audio("./audio/wrong_answer.mp3");
                    audio.volume = 0.05;
                    audio.play();
                    options_btns[j].style.backgroundColor = "red";
                    options_btns[j].style.color = "white";

                }else{

                    current_score++;
                    audio = new Audio("./audio/correct_answer.mp3");
                    audio.volume = 0.05;
                    audio.play();
                    document.getElementById("continue").style.display = "block";

                }

            }


        }

        for(var j = 0; j < options_btns.length; j++){

            options_btns[j].disabled = true;

        }

        document.getElementById("quit").style.display = "block";
        

    }, false);

}

//evento para continuar o jogo
continue_btn.addEventListener("click", function(){

    audio.pause();

    document.getElementById("quit").style.display = "none";
    document.getElementById("continue").style.display = "none";

    for(var i = 0; i < options_btns.length; i++){

        options_btns[i].disabled = false;
        options_btns[i].style.backgroundColor = "#FFFFFF";
        options_btns[i].style.color = "#0000FF";

    }

    current_index_question++;

    if(current_index_question < 15){
        
        
        play(current_questions, current_index_question);

    }else{

        alert('Parabéns, ganhou o "O quem quer ser milionário?"!!!');
        saveScore(current_score, current_user);
        hideGame();

    }

    


}, false);

//função para atualizar score caso seja superior
function saveScore(current_score, current_user){

    //gravar score caso seja superior
    if(current_score > current_user.score){

        

        var users = JSON.parse(localStorage.getItem("users"));

        current_user.score = current_score;

        for(var i = 0; i < users.length; i++){

            if(users[i].username === current_user.username){
    
                users[i] = current_user;
    
                localStorage.setItem("users", JSON.stringify(users));
    
            }

        }

    }

}

//evento para terminar o jogo
quit_btn.addEventListener("click", function(){

    audio.pause();
    saveScore(current_score, current_user);

    //esconder o jogo
    hideGame()

    

}, false);



