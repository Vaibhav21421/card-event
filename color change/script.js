const bg = document.querySelector("#pg1");
const btn= document.querySelector("button");
var getrandom = ()=>{
    return Math.floor(Math.random()*254 +1)
}
bg.addEventListener("click",function(){

    bg.style.backgroundColor=`rgb(${getrandom()},${getrandom()},${getrandom()})`
})