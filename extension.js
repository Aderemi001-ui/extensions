let circle=document.querySelectorAll('.circle')
let rectangle=document.querySelectorAll('.rectangle')
let round=document.querySelectorAll('.round')
let extension=document.querySelectorAll('.extension')

function switchOn1(){
    circle[0].style.marginLeft="35px"
    rectangle[0].style.backgroundColor="#c7221a"
    round[0].style.backgroundColor="#c7221a"
    extension[0].style.border="1px solid white"
}
function switchOff1(){
    circle[0].style.marginLeft="0px"
    rectangle[0].style.backgroundColor="gray"
    round[0].style.backgroundColor="gray"
    extension[0].style.border="None"
}
function switchOn2(){
    circle[1].style.marginLeft="35px"
    rectangle[1].style.backgroundColor="#c7221a"
    round[1].style.backgroundColor="#c7221a"
     extension[1].style.border="1px solid white"
}
function switchOff2(){
    circle[1].style.marginLeft="0px"
    rectangle[1].style.backgroundColor="gray"
    round[1].style.backgroundColor="gray"
     extension[1].style.border="None"
}
function switchOn3(){
    circle[2].style.marginLeft="35px"
    rectangle[2].style.backgroundColor="#c7221a"
    round[2].style.backgroundColor="#c7221a"
   extension[2].style.border="1px solid white" 
}
function switchOff3(){
    circle[2].style.marginLeft="0px"
    rectangle[2].style.backgroundColor="gray"
    round[2].style.backgroundColor="gray"
     extension[2].style.border="None"
}
function switchOn4(){
    circle[3].style.marginLeft="35px"
    rectangle[3].style.backgroundColor="#c7221a"
    round[3].style.backgroundColor="#c7221a"
     extension[3].style.border="1px solid white" 
}
function switchOff4(){
    circle[3].style.marginLeft="0px"
    rectangle[3].style.backgroundColor="gray"
    round[3].style.backgroundColor="gray"
      extension[3].style.border="None"
}
function switchOn5(){
    circle[4].style.marginLeft="35px"
    rectangle[4].style.backgroundColor="#c7221a"
    round[4].style.backgroundColor="#c7221a"
     extension[4].style.border="1px solid white" 
}
function switchOff5(){
    circle[4].style.marginLeft="0px"
    rectangle[4].style.backgroundColor="gray"
    round[4].style.backgroundColor="gray"
      extension[4].style.border="None"
}
function switchOn6(){
    circle[5].style.marginLeft="35px"
    rectangle[5].style.backgroundColor="#c7221a"
    round[5].style.backgroundColor="#c7221a"
      extension[5].style.border="1px solid white" 
}
function switchOff6(){
    circle[5].style.marginLeft="0px"
    rectangle[5].style.backgroundColor="gray"
    round[5].style.backgroundColor="gray"
      extension[5].style.border="None"
}
function switchOn7(){
    circle[6].style.marginLeft="35px"
    rectangle[6].style.backgroundColor="#c7221a"
    round[6].style.backgroundColor="#c7221a"
      extension[6].style.border="1px solid white" 
}
function switchOff7(){
    circle[6].style.marginLeft="0px"
    rectangle[6].style.backgroundColor="gray"
    round[6].style.backgroundColor="gray"
       extension[6].style.border="None"
}
function switchOn8(){
    circle[7].style.marginLeft="35px"
    rectangle[7].style.backgroundColor="#c7221a"
    round[7].style.backgroundColor="#c7221a"
     extension[7].style.border="1px solid white"  
}
function switchOff8(){
    circle[7].style.marginLeft="0px"
    rectangle[7].style.backgroundColor="gray"
    round[7].style.backgroundColor="gray"
      extension[7].style.border="None"
}
function switchOn9(){
    circle[8].style.marginLeft="35px"
    rectangle[8].style.backgroundColor="#c7221a"
    round[8].style.backgroundColor="#c7221a"
         extension[8].style.border="1px solid white"  
   
}
function switchOff9(){
    circle[8].style.marginLeft="0px"
    rectangle[8].style.backgroundColor="gray"
    round[8].style.backgroundColor="gray"
      extension[8].style.border="None"
}
function switchOn10(){
    circle[9].style.marginLeft="35px"
    rectangle[9].style.backgroundColor="#c7221a"
    round[9].style.backgroundColor="#c7221a"
     extension[9].style.border="1px solid white"  
}
function switchOff10(){
    circle[9].style.marginLeft="0px"
    rectangle[9].style.backgroundColor="gray"
    round[9].style.backgroundColor="gray"
    extension[9].style.border="None"
}
function switchOn11(){
    circle[10].style.marginLeft="35px"
    rectangle[10].style.backgroundColor="#c7221a"
    round[10].style.backgroundColor="#c7221a"
     extension[10].style.border="1px solid white"  
}
function switchOff11(){
    circle[10].style.marginLeft="0px"
    rectangle[10].style.backgroundColor="gray"
    round[10].style.backgroundColor="gray"
    extension[10].style.border="None"
}
function switchOn12(){
    circle[11].style.marginLeft="35px"
    rectangle[11].style.backgroundColor="#c7221a"
    round[11].style.backgroundColor="#c7221a"
    extension[11].style.border="1px solid white"   
}
function switchOff12(){
    circle[11].style.marginLeft="0px"
    rectangle[11].style.backgroundColor="gray"
    round[11].style.backgroundColor="gray"
     extension[11].style.border="None"
}
let body=document.querySelector('.body')
let moon = document.querySelector('#moon')
let svg2=document.querySelector('#svg2')
let sun= document.querySelector('#sun')

function moonTheme(){
    body.style.background ="linear-gradient(to top, white 10% , grey )"
   
}
function nightfall(){
    body.style.background ="linear-gradient(to bottom, #040918 10% , #091540 )"
   
}

let active=document.querySelector('#active')
let inactive = document.querySelector('#inactive')
let all=document.querySelector('#all')

function brighten1(){
    active.style.backgroundColor="#2f364b"
    active.style.border="none"
    all.style.backgroundColor="#c7221a"
    inactive.style.backgroundColor="#2f364b"
}
function brighten2(){
    active.style.backgroundColor="#c7221a"
    active.style.border="none"
    all.style.backgroundColor="#2f364b"
    inactive.style.backgroundColor="#2f364b"
}
function brighten3(){
     active.style.backgroundColor="#2f364b"
    active.style.border="none"
    all.style.backgroundColor="#2f364b"
    inactive.style.backgroundColor="#c7221a"
}


function deleter1(){
    extension[0].remove()

}
function deleter2(){
    extension[1].remove()

}
function deleter3(){
    extension[2].remove()

}
function deleter4(){
    extension[3].remove()

}
function deleter5(){
    extension[4].remove()

}
function deleter6(){
    extension[5].remove()

}
function deleter7(){
    extension[6].remove()

}
function deleter8(){
    extension[7].remove()

}
function deleter9(){
    extension[8].remove()

}
function deleter10(){
    extension[9].remove()

}
function deleter11(){
    extension[10].remove()

}
function deleter12(){
    extension[11].remove()

}
let arrayExtension=Array.from(extension)

let narray=[]
let darray=[]

function activate(){
   const gray = arrayExtension.filter((item,index)=> item.style.border !=="1px solid white").map((item,index)=>{
    item.style.display = "none"
    
   })
 const orange = arrayExtension.filter((item,index)=> item.style.border ==="1px solid white").map((item,index)=>{
    item.style.display = "block"
   })
   console.log(gray)
   narray=gray
  console.log(narray)
   console.log(orange)
   darray=orange
  console.log(darray)

    }
  function deactivate(){
    const orange = arrayExtension.filter((item,index)=> item.style.border ==="1px solid white").map((item,index)=>{
    item.style.display = "none"
   })
    const gray = arrayExtension.filter((item,index)=> item.style.border !=="1px solid white").map((item,index)=>{
    item.style.display = "block"
   })
    console.log(gray)
   narray=gray
  console.log(narray)
   console.log(orange)
   darray=orange
  console.log(darray)
  }
  function All(){
    arrayExtension.map((item,index)=>{
        item.style.display="block"
    })
  }

