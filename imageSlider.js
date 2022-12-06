
function controller(n){
    flag=flag+n;
    slideShow(flag);
}
function slideShow(num){
    let slides=document.getElementsByClassName('slide');
    if(flag<0){
        flag=flag+slides.length;
        num=flag;
    }
    if(flag==slides.length){
        flag=0;
        num=0;
    }
    for(let i of slides){
        i.style.display="none";
    }
    slides[num].style.display="block";
}
let flag=0;
slideShow(flag);