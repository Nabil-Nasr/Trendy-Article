let mode=document.querySelector(`.mode`)
let root=document.querySelector(`:root`)

{// ================== Add dark-mode ===================
if(localStorage.mode == "dark-mode")
    root.classList.add(localStorage.mode)
else
    root.classList.add("light-mode")

mode.addEventListener("click", (eve)=>{
    eve.preventDefault();
    if(root.classList.contains(`light-mode`)){
        localStorage.mode="dark-mode";
        root.classList.replace("light-mode", "dark-mode")
    }else{
        localStorage.mode="light-mode";
        root.classList.replace("dark-mode","light-mode")
    }
})
}

