/*
BOM[Browser Obj Mode]
Local Storage
--setItem(key,value)
--getTtem(key)
--removeItem("key")
--clear()      supp tout les trucs
--key
-----info----
--no expiration time
-- HTtp and 
--private tab --> yro7
*/

// hadi kcghl endi site ana endi collection de coleurs/styles ecruiture howa ybdl donc hadouk nhathm f storge
//howa bclick event ykhyr w ystelha f page



/*******Set*********************************** */

//methode 1 
window.localStorage.setItem("color","#F00")
//methode 2 je donne le nom de key bed
window.localStorage.fontWeight="bold";
window.localStorage["fontSize"]="20px";

/*******Get**********************************/
//il a besoin que le key 

//3 methodes
console.log(window.localStorage.getItem("color"))//F00
console.log(window.localStorage.color)//F00
console.log(window.localStorage["color"])//F00

/*******Remove**********************************/
//window.localStorage.removeItem("color")//hna deja jai suprr le coloeur donc ya pas de rouge arrire

//window.localStorage.clear()//all keys


/*******Get key**********************************/
//ymdli idex t
console.log(window.localStorage.key(0))// fontsize

//Set Color In page

document.body.style.backgroundColor=window.localStorage.getItem("color")

console.log(window.localStorage)
console.log(typeof(window.localStorage))
//tari9at listikhdam setItem


