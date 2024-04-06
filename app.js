'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className =  document.body.className;
    if(className == "light-theme"){
        this.textContent = "dark";
    }
    else{
        this.textContent = "light";
    }
    console.log('Actual Class Name: ' + className);
})