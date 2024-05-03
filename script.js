const modal = document.querySelector(".modal");
const arrowIcon = document.querySelector(".arrow");
const allArrow = document.querySelectorAll(".arrow");

function onOpenModal(){
    modal?.classList.remove('disabled'); 
}
function onCloseModal(){
    modal?.classList.add('disabled'); 
}

function openArrow(icon){
    if(icon?.classList.contains("clickArrow")){
        icon?.classList.remove("clickArrow")
        icon?.classList.add("clickArrowOut");
    }else{
        icon?.classList.add("clickArrow");
        icon?.classList.remove("clickArrowOut")
    }   
}
function openArrow1(){
    return openArrow(allArrow[0]);
}
function openArrow2(){
    return openArrow(allArrow[1]);
}
function openArrow3(){
    return openArrow(allArrow[2]);
}
function openArrow4(){
    return openArrow(allArrow[3]);
}
function openArrow5(){
    return openArrow(allArrow[4]);
}

