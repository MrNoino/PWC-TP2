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

var str;

var display_questions = document.getElementById("display_questions");

//função para mostrar todas as perguntas presentes na local storage
function displayQuestions(){

    str = "";
    var questions = JSON.parse(localStorage.getItem("questions"));

    for(var i = 0; i < questions.length; i++){

        str += `<div class="col-md-1 col-lg-2 col-xl-3 mt-3"></div>
                <div class="col-9 col-md-7 col-lg-6 col-xl-5 mt-3">
                    `+ questions[i].question +`
                </div>

                <div class="col-3 col-md-2 col-xl-1 mt-3">

                    <button name="remove" class="remove-btn" value="`+ questions[i].id +`">Remover</button>

                </div>
                
                <div class="col-xl-3 mt-3"></div>`;
        

    }

    display_questions.innerHTML = str;

    var remove_btns = document.getElementsByName("remove");

    for(var i = 0; i < remove_btns.length; i++){

        remove_btns[i].addEventListener("click", function(){

            var questions = JSON.parse(localStorage.getItem("questions"));

            for(var j = 0; j < questions.length; j++){

                if(this.value == questions[j].id){

                    questions.splice(j, 1);
                    break;

                }

            }

            localStorage.setItem("questions", JSON.stringify(questions));

            displayQuestions();

        }, false);

    }

}

displayQuestions();



var add_btn = document.getElementById("add_new_question");

var question = document.getElementById("new_question");

var level = document.querySelector('input[name="level"]:checked');

var answer = document.getElementById("answer");

var option1 = document.getElementById("option1");

var option2 = document.getElementById("option2");

var option3 = document.getElementById("option3");

//evento click para adicionar uma questão ao local storage
add_btn.addEventListener("click", function(){

    if(!question.value || !answer.value || !option1.value || !option2.value || !option3.value){

        alert("Campos vazios.");

        return;

    }

    var questions = JSON.parse(localStorage.getItem("questions"));

    

    var current_question = {

        id: questions.length + 1,
        question: question.value,
        options: [
            {
                id: -1,
                answer: true,
                value: answer.value
            },
            {
                id: -1,
                value: option1.value
            },
            {
                id: -1,
                value: option2.value
            },
            {
                id: -1,
                value: option3.value
            }
        ],
        level: level.value

    };

    var randomID;

    for(var i = 0; i < current_question.options.length; i++){


        do{

            flag = 0;
    
            randomID = Math.floor(Math.random() * current_question.options.length);

            randomID++;

            for(var j = 0; j < current_question.options.length; j++){

                if(randomID == current_question.options[j].id){
            
                    flag = 1;
                    break;
    
                }

            }
    
        }while(flag);

        current_question.options[i].id = randomID;


    }

    questions.push(current_question);

    localStorage.setItem("questions", JSON.stringify(questions));


    question.value = "";

    answer.value = "";

    option1.value = "";

    option2.value = "";

    option3.value = "";

    displayQuestions();

}, false);