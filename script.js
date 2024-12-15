let menulist=document.getElementById("menulist")
menulist.style.maxHeight="0px";

function toggleMenu(){
  if(menulist.style.maxHeight=="0px"){
    menulist.style.maxHeight="300px";
  }
  else{
    menulist.style.maxHeight="0px";
  }
}
const star=document.querySelectorAll(".star i");

star.forEach((stars,index1)=>{
stars.addEventListener("click", () =>{
console.log('clicked');
  
  star.forEach((stars,index2)=>{
    console.log(index2);
index1 >= index2 ? stars.classList.add("active") : stars.classList.remove("active");
  });
});
});


const button=document.getElementsByClassName(".but")

button.addEventListener("click", dosomething)
function dosomething(){
  alert("Succesfully searched");
}

const but=document.getElementsByTagName("button")

but.addEventListener("click", dosomething)
function dosomething(){
  alert("Successfully Submitted");
}