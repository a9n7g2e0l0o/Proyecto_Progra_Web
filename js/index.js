
// sombra del header 

const sombra = document.getElementById("sombraID");

window.onscroll = function (){
    // la pocicion del scroll en determinado momento
    var scroll = document.documentElement.scrollTop;
    if(scroll > 100){//40
        sombra.style.height ="0.1px";
    }else if(scroll < 100){
        sombra.style.height = "40px";
    }
}

/**********Ejecutando funciones**********/

// de busqueda 
document.getElementById("main-searchID").addEventListener("click",showSearch);

document.getElementById("xTimesID").addEventListener("click",hideSearchShopping);

// cuenta de usuario
document.getElementById("main-userID").addEventListener("click",showUserMail);

document.getElementById("main-user__SquareCloseID").addEventListener("click",hideUserMail);

/****************Buscador de contenido*************** */

const searchShopping = document.getElementById("main-search__shoppingID");
// oscuro
const  coverSearch = document.getElementById("cover-searchID");
// icon de X
const xTime = document.getElementById("xTimesID")

var inputSearch = document.getElementById("inputSearch");

// show search
   
function showSearch () {
    searchShopping.style.top = "0px";
    coverSearch.style.display ="flex";
    xTime.style.display ="flex";
    inputSearch.focus();
}

// function ocultar

function hideSearchShopping (){
    coverSearch.style.display = "none";
    searchShopping.style.top = "-200px";
    xTime.style.display = "none";
    
}

/*** ************Cuenta de usuario****************** */

const userMail = document.getElementById("main-user__accountID");

// show user
function showUserMail () {
    coverSearch.style.display ="flex";
    userMail.style.display ="flex";
}

// hidden user
function hideUserMail () {
    coverSearch.style.display = "none";
    userMail.style.display ="none";
}