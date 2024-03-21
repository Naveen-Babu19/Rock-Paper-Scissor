let playingElement=document.getElementById("player1Choices");
let ourChoiceElement=document.getElementById("ourchoice");
let displayWin=document.getElementById("displayWin");
let CompChoice=document.getElementById("CompChoice");
let imageUser=document.getElementById("imageUser"),userChoice,botChoice;
let winning=document.getElementById("winning"),rdmGene=3,rounds=0,wholeWinner="";

function dispNone(){
  playingElement.classList.add("none");
  ourChoiceElement.classList.remove("none");
  displayWin.classList.remove("none");
  CompChoice.classList.remove("none");
}
function reDisp(){
  playingElement.classList.remove("none")
  ourChoiceElement.className="ourChoice none";
  displayWin.className="displayWin none";
  CompChoice.className="CompChoice none"
  imageUser.className="";
}
function imageChanging(gameIm){
  rounds+=1;
  let imageList=["paper","scissor","rock","spock","lizard"];
  userChoice=gameIm.id;
  imageUser.classList.add(imageList[imageList.indexOf(userChoice)],"dispImagechoice");
  randmImg();
}
function randmImg(){
  let imageList=["paper","scissor","rock","spock","lizard"];
  botChoice=imageList[Math.floor(Math.random()*rdmGene)];
  console.log("user,bot "+ userChoice,botChoice)
  let rdmImg=document.getElementById("rdmImage");
  rdmImg.className=imageList[imageList.indexOf(botChoice)]+" dispImagechoice";
}
function rulesToggle(){
  let rulebut=document.getElementById("rules");
  rulebut.classList.toggle("none");
}
function gameCheck(){
  if (((userChoice == "rock") && (botChoice == "scissor")) || ((userChoice == "rock") && (botChoice == "lizard")) || ((userChoice == "paper") && (botChoice == "rock")) || ((userChoice == "paper") && (botChoice == "spock")) || ((userChoice == "scissor") && (botChoice == "paper")) || ((userChoice == "scissor") && (botChoice == "lizard")) || ((userChoice == "lizard") && (botChoice == "paper")) || ((userChoice == "lizard") && (botChoice == "spock")) || ((userChoice == "spock") && (botChoice == "rock")) || ((userChoice == "spock") && (botChoice == "scissor"))) {
    winning.innerText="You win";
  }
  else if (userChoice === botChoice) {
    winning.innerText="Draw";
  }
  else {
    winning.innerText="Computer win";
  }
  score();
}
function score(){
  let bot=parseInt(document.getElementById("botScoreNum").innerText)+1;
  let score=parseInt(document.getElementById("scoreNum").innerText)+1;
  if(winning.innerText=="You win"){
    document.getElementById("scoreNum").innerText=score
  }
  else if(winning.innerText=="Computer win"){
    document.getElementById("botScoreNum").innerText=bot;
  }
  finalCheck();
}
function finalCheck(){
  let bot=parseInt(document.getElementById("botScoreNum").innerText);
  let score=parseInt(document.getElementById("scoreNum").innerText);
  if(rounds>=5){
    ourChoiceElement.className="ourChoice none";
    displayWin.className="displayWin none";
    CompChoice.className="CompChoice none";
    document.getElementById("playagain").classList.remove("none");
    if(score>bot){
      wholeWinner="Player";
      document.getElementById("win").classList.remove("none");
    }
    else if(score<bot){
      wholeWinner="bot";
      document.getElementById("lose").classList.remove("none");
    }
    else{
      document.getElementById("matchDraw").classList.remove("none");
    }
  }
}
function refreshPage(){
  if(wholeWinner=="bot"){
    document.getElementById("lose").classList.add("none");
  }
  else if(wholeWinner=="Player"){
    document.getElementById("win").classList.add("none");
  }
  else{
    document.getElementById("matchDraw").classList.add("none");
  }
  document.getElementById("playagain").classList.add("none");

  document.getElementById("scoreNum").innerText=0;
  document.getElementById("botScoreNum").innerText=0;
  document.getElementById("player1Choices").classList.remove("none");
}
function threegame(){
  refreshPage();
  let ourChoice=document.getElementById("ourchoice").className
  if(!(ourChoice.includes("none"))){
    document.getElementById("ourchoice").classList.add("none");
    document.getElementById("displayWin").classList.add("none");
    document.getElementById("CompChoice").classList.add("none");
  }
  document.getElementById("spockLet").classList.add("none");
  document.getElementById("lizardLet").classList.add("none");
  document.getElementById("spock").classList.add("none");
  document.getElementById("lizard").classList.add("none");
  document.getElementById("player1Choices").classList.remove("bgpentagon");
  document.getElementById("player1Choices").classList.add("bgTriangle");
  document.getElementById("paper").classList.remove("marginPaper1");
  document.getElementById("paper").classList.add("marginPaper2");
  document.getElementById("scissor").classList.remove("marginScissor1");
  document.getElementById("scissor").classList.add("marginScissor2");
  document.getElementById("rock").classList.remove("marginRock1");
  document.getElementById("rock").classList.add("marginRock2");
  rdmGene=3;
}
function fivegame(){
  refreshPage();
  let ourChoice=document.getElementById("ourchoice").className
  if(!(ourChoice.includes("none"))){
    document.getElementById("ourchoice").classList.add("none");
    document.getElementById("displayWin").classList.add("none");
    document.getElementById("CompChoice").classList.add("none");
  }
  document.getElementById("spockLet").classList.remove("none");
  document.getElementById("lizardLet").classList.remove("none");
  document.getElementById("spock").classList.remove("none");
  document.getElementById("lizard").classList.remove("none");
  document.getElementById("player1Choices").classList.remove("bgTriangle");
  document.getElementById("paper").classList.remove("marginPaper2");
  document.getElementById("scissor").classList.remove("marginScissor2");
  document.getElementById("rock").classList.remove("marginRock2");
  document.getElementById("player1Choices").classList.add("bgpentagon");
  document.getElementById("paper").classList.add("marginPaper1");
  document.getElementById("scissor").classList.add("marginScissor1");
  document.getElementById("rock").classList.add("marginRock1");
  rdmGene=5
}