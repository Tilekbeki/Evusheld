const btn = document.querySelector('.HowDoesItWork_Video_Wrapper'),
video = document.querySelector('iframe');
function hidebtn (){
    btn.style.display = "none";
}

btn.addEventListener('click', ()=>{
    btn.classList.add('fade');
    const interval = setTimeout(hidebtn, 1000)
    video.src +='?rel=0&autoplay=1';

})

video.addEventListener('click', (e)=>{
    if (e.target === video) {
        btn.classList.add('fade');
        btn.style.display = "none";
        video.src +='?rel=0&autoplay=1';
    }
})