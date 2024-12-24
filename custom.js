const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const form1 = document.querySelector('.form-1');
const form2 = document.querySelector('.form-2');
const form3 = document.querySelector('.form-3');

next1.addEventListener("click",() =>{
    form1.style.display = "none";
    form2.style.display = "block";
});
next2.addEventListener("click",() =>{
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "block";
});
back1.addEventListener("click",() =>{
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
});
back2.addEventListener("click",() =>{
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
});
