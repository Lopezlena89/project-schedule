const modal = document.querySelector(".modal");
const arrowIcon = document.querySelector(".arrow");
const allArrow = document.querySelectorAll(".arrow");
const subMenu = document.querySelectorAll(".subMenu-icon");
function onOpenModal(){
    modal?.toggleAttribute("hidden");
}
function onCloseModal(){
    modal?.toggleAttribute("hidden");
}

function openArrowIcon(icon){
    if(icon?.classList.contains("clickArrow")){
        icon?.classList.remove("clickArrow")
        icon?.classList.add("clickArrowOut");
    }else{
        icon?.classList.add("clickArrow");
        icon?.classList.remove("clickArrowOut")
    }   
}
function openArrow(index){
    console.log(index)
    if( subMenu[index].getAttribute("data-state") === "closed"){
        subMenu[index].setAttribute("data-state","open");
        
    }else{
        subMenu[index].setAttribute("data-state","closed");
    }
    return openArrowIcon(allArrow[index]);
}

