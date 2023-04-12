const appearence = document.querySelector(".appearence");

appearence.addEventListener('click', (e)=>{
    e.target.classList.toggle('appearence');
    document.body.classList.toggle('dark');
})