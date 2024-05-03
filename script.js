

const banner = document.querySelector(".banner");
const mainTag = document.querySelector("main");
const codeModal =`
    <svg onclick="onCloseModal()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" class="close"  width="35" height="35"><path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path></svg>
`;

function onOpenModal(){
    const newNode = document.createElement("div");
    const childNode = document.createElement("div");
    childNode.setAttribute("class","modal-menu");
    newNode.setAttribute("class","modal");
    newNode.appendChild(childNode);
    childNode.innerHTML = codeModal;
    mainTag?.insertBefore(newNode,banner);
}
function onCloseModal(){
    const modal = document.querySelector(".modal");
    modal?.remove();
   

}


