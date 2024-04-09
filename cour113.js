/*
bom 113
--session storage
--setItem(key,value)
--getTtem(key)
--removeItem("key")
--clear()      supp tout les trucs
--key*/

// locale storge preserve mes donne mm quand je ferme la fenetre 
//session non



/* infos 
--new tab= new session
--duplicate tab =copy session
--new tab with same Url = new session 
---> sma ki nhl whda yrouh les info mais ki ndir duplicate nrml dir copy 
*/

/*
window.localStorage.setItem("color","red")
window.sessionStorage.setItem("color","blue")
*/
/***************la deffirence enter les 2 ******* */
//mntn quand jfais reload 3adi yb9aw doka han9fl page 
// local va rester mais session ete deja suprrimer 




///exmpale poue lutilisation mital ktb wahd ismou w dar reload donc rahoul les donnes ta3ou 

document.querySelector(".name").onblur= function() {
    window.localStorage.setItem("name", this.value)
  //  console.log(this.value)
}// ki nktb ismi w nkhrj w ncliki haka f nimport qulle blasa hayktbi ismi f console


