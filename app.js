let even = document.querySelector(".prev");
console.log(even);


const mouseover = ()=>{
    even.style.zIndex= "1";  
}

const mouseout = ()=>{
        even.style.zIndex= "3"
}

even.addEventListener("mouseover", mouseover)
even.addEventListener("mouseout", mouseout)