document.addEventListener('scroll',() =>{
    const header = document.querySelector('header');

    if(window.scrollY > 0){

        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
})

// let typed = new typed(".auto-type",{

//     strings:["programmer","designeer","Madesh"],
//     typeSpeed:150,
//     backSpeed:150,
//     loop:true
// })

var typed = new Typed('#typing-text', {
    strings: ['Madesh','forent-end developer'],
    typeSpeed: 50,
  });

