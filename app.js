 let userscore = document.querySelector("#user-score");
 let Computerscore = document.querySelector("#Computer-score");
 let choices = document.querySelectorAll(".choice");
 let msg = document.querySelector("#msg");


 let userscorepar = 0;
 let Computersscorepar = 0;
 const  Computerchoice = () =>{
    const options= ["rock" ," paper" ,"scissors"];
    const random1 = Math.floor(Math.random()* 3);
      return options[random1]

} 

const gamedrw = ()=>{
    console.log("game are draw.")
     msg.innerText = "Game are draw , Play Again"
     msg.style.backgroundColor = "blue"
}

showwiner = (userwin21 , userchoice , Computerchoice1)=>{
    if(userwin21){
        userscorepar++
        userscore.innerText = userscorepar; 
        msg.innerHTML = `You Win, Your ${userchoice}, Beat ${Computerchoice1}`;
        msg.style.backgroundColor = "green"
    } else {
        Computersscorepar++
        Computerscore.innerText = Computersscorepar; 
    console.log("you lose ")
    msg.innerText =`You lose  ${Computerchoice1}  Beats ${userchoice} ` 
    msg.style.backgroundColor = "red"
    }
}

const playGame = (userchoice) =>{
    console.log(userchoice);
    const Computerchoice1 = Computerchoice() ; 
    console.log( " computer",  Computerchoice1 )
if( userchoice === Computerchoice1)
{
    gamedrw()
}
else {
    let userwin21 = true ;
    if(userchoice === "rock"){
        userwin21 = Computerchoice1 === "paper" ? false :  true
    }
    else if(userchoice === "paper"){
        
        userwin21 = Computerchoice1 === "scissors" ? false :  true
    }
    else {
        
        userwin21 = Computerchoice1 === "rock" ? false :  true
    }
    showwiner(userwin21 , userchoice , Computerchoice1)

}
}

 choices.forEach( (choice) =>{
    console.log(choice)
    choice.addEventListener('click' , ()=>{
       
       const userchoice = choice.getAttribute("ID")
       playGame(userchoice)
    //    playGame()
    })
 })