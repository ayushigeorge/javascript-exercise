const closed= document.querySelector('.closed');
const opened= document.querySelector('.opened');

closed.addEventListener('click',()=> {
    if (open.classList.constains('opened')){
        open.classList.add('active');
        close.classList.remove('active');
    }
});

opened.addEventListener('click',()=>{
    if (open.classList.contains('closed')){
        close.classList.add('active');
        open.classList.remove('active');
    }
});
