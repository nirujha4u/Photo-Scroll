const gallery=document.querySelector(".gallery");
const bckbtn=document.getElementById("bckbtn");
const nxtbtn=document.getElementById("nxtbtn");

bckbtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= 600;
})

nxtbtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += 600; 
})

gallery.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    gallery.scrollLeft+=evt.deltaY;
    gallery.style.scrollBehavior = "auto";

})