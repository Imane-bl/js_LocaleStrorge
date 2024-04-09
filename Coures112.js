console.log("cours112***************************************************")

// BOM
//local storge practice

let list=document.querySelectorAll("ul li");

let expdiv=document.querySelector("div")

//add condition ida kayn loun ndifou ida la ndir haja khlaf
//window.localStorage.clear() yafficher no pour confirmer

if(window.localStorage.getItem("color")){
    //add color to div 
    expdiv.style.backgroundColor=window.localStorage.getItem("color")
   //remove action
   list.forEach( (li) => {
    li.classList.remove("active")//ki ncliki eliha ymsh class lactive  
   })
   //add active class to current color 
   document.querySelector(`[data-color="${window.localStorage.getItem("color") }" ]`).classList.add("active")
   //kcghlt je lui dit data-color=red  

   //resum hna ldit ela green add active class a apres refrech twli green 
}else{ //ysibli loun li by default 
    
   

}

list.forEach( (li) => {
    li.addEventListener("click", (e)=>{
   // console.log(e.currentTarget.dataset.color)
 
   
    //add active class to current elm
    
        e.currentTarget.classList.add("active")//ki nclicki add class="active" kol wahd whdou
       // li.classList.add("active")//ki ndir gaka hayzid fihm bkl frd khatra 
    

       //ADD CURRENT TO LOCAL STROGE 
    window.localStorage.setItem("color",e.currentTarget.dataset.color)
    //kol manclicki elih ydir update llcolor


    //ChANGE DIV BACKGROUND COLOR
  //  expdiv.style.backgroundColor=e.currentTarget.dataset.color
    //ki ncliki ela red haywli dicv red 


  })
})
// ici quand je click ela less caree hayaffiche li ktbtha f blasa gahdik