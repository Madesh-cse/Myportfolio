
let header = document.querySelector('.navbar');

document.addEventListener('scroll',() =>{
    
    const header = document.querySelector('.navbar');

    if(window.scrollY > 0){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})

var typed = new Typed('#typing-text', {
    strings: ['MADESH M','FRONT-END DEVELOPER'],
    typeSpeed: 10,
    backSpeed:50,
    loop:true
  });

  const tabs = document.querySelectorAll('[data-tab-target]');

  const content = document.querySelectorAll('[data-tab-content]');

  tabs.forEach((tab)=>{

    tab.addEventListener('click',() =>{


        const target = document.querySelector(tab.dataset.tabTarget)
        content.forEach((tabcontent)=>{
            tabcontent.classList.remove('active')
        })

        tabs.forEach((tab)=>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')

       target.classList.add('active') 
    })
  })

  function updateProgress(progress) {
    var progressBar = document.querySelector('.progress');
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%'; // Optional: Display percentage
}

updateProgress(60);