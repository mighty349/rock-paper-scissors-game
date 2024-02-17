let choices=document.querySelectorAll(".attr");
var comp=["scissor","rock","paper"];
choices.forEach(choice=>{
    choice.addEventListener("click",event=>{
        let user=event.target.getAttribute("value");
        let n=Math.floor(Math.random()*3);
        let computer=comp[n];
        event.target.classList.add("new");
        setTimeout(function(){
          event.target.classList.remove("new");
        },150)
        document.getElementById("you").textContent=`your choice is :${user}`
           document.getElementById("computer").textContent=`computer choice is :${computer}`;
        if(user=="scissor" && computer=="rock")
        {
           document.getElementById("res").textContent="computer wins";
        }
        else if(user=="rock" && computer=="paper")
        {
            document.getElementById("res").textContent="computer wins";
        }
        else if(user=="paper" && computer=="scissor")
        {
            document.getElementById("res").textContent="computer wins";
        }
        else if(computer==user)
        {
            document.getElementById("res").textContent="Draw";
        }
        else
        {
            document.getElementById("res").textContent="user wins";
        }
    })
})