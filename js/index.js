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

//Mostrar o conteúdo caso o Javascript esteja habilitado
document.querySelector(".js-unavailable").style.display = "block";


var link_home = document.getElementById("link_home");
var link_game = document.getElementById("link_game");
var link_score = document.getElementById("link_score");
var link_questions = document.getElementById("link_questions");

function toogleActive(link1, link2, link3, link4){

    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.add("active");

}

//trocar a classe active para o link home
link_home.addEventListener("click", function(event){

    toogleActive(link_game, link_score, link_questions, link_home);

}, false);

//trocar a classe active para o link game
link_game.addEventListener("click",  function(event){
    
    toogleActive(link_home, link_score, link_questions, link_game);

}, false);

//trocar a classe active para o link score
link_score.addEventListener("click",  function(event){
    
    toogleActive(link_home, link_game, link_questions, link_score);

}, false);

//trocar a classe active para o link questions
link_questions.addEventListener("click",  function(event){
    
    toogleActive(link_home, link_game, link_score, link_questions);

}, false);


