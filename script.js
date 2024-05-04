const modal = document.querySelector(".modal");
const allArrow = document.querySelectorAll(".arrow");
const subMenu = document.querySelectorAll(".subMenu-icon");
const iconChild = document.querySelectorAll(".submenu-iconChild");
const iconChild2 = document.querySelector(".submenu-iconChild2");

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
    if( subMenu[index].getAttribute("data-state") === "closed"){
        subMenu[index].setAttribute("data-state","open");
        iconChild[index].setAttribute("data-state","open");
        iconChild[index].toggleAttribute("hidden");
       
    }else{
        subMenu[index].setAttribute("data-state","closed");
        iconChild[index].setAttribute("data-state","closed");
        
        setTimeout(() => {
            iconChild[index].toggleAttribute("hidden");
            
        }, 300);
    }
    return openArrowIcon(allArrow[index]);
}
function openArrow2(){
    if( subMenu[2].getAttribute("data-state") === "closed"){
        subMenu[2].setAttribute("data-state","open");
        iconChild2?.setAttribute("data-state","open");
        iconChild2?.toggleAttribute("hidden");
    }else{
        subMenu[2].setAttribute("data-state","closed");
        iconChild2?.setAttribute("data-state","closed");
        setTimeout(() => {
            
            iconChild2?.toggleAttribute("hidden");
        }, 300);
    }
    return openArrowIcon(allArrow[2]);
}


