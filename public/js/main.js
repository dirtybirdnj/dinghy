'use strict'

let btnNewEvent = document.getElementById('btnNewEvent');
let btnResumeEvent = document.getElementById('btnResumeEvent');
let btnShutdown = document.getElementById('btnShutdown');
let btnBack = document.getElementById('btnBackHome');
let btnEndEvent = document.getElementById('btnEndEvent');
let outputDiv = document.getElementById('output');

if(btnNewEvent){

    btnNewEvent.addEventListener('click', (event) => {

        event.preventDefault();
        
        fetch('http://localhost:3000/events', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
        .then(function(response) {
        return response.json();
        })
        .then(function(myJson) {
        //outputDiv.innerHTML = 'Fetch Response: ' + JSON.stringify(myJson);
        window.location.href = '/device/event';
        });
        

    });

}

if(btnResumeEvent){

    btnResumeEvent.addEventListener('click', (event) => {

        event.preventDefault();
        window.location.href = '/device/event';
    
    });

}


if(btnBack){

    btnBack.addEventListener('click', (event) => {

        event.preventDefault();
        window.location.href = '/device/home';
            
    });

}

if(btnEndEvent){
    
    btnEndEvent.addEventListener('click', (event) => {

    fetch('http://localhost:3000/events/end', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    //outputDiv.innerHTML = 'Fetch Response: ' + JSON.stringify(myJson);
    window.location.href = '/device/home';
    });

    });

}

if(btnShutdown){
    btnShutdown.addEventListener('click', (event) => {
        event.preventDefault();
        outputDiv.innerHTML = 'Shutdown not implemented yet';    
    });
}

// if(btnShutdown){

//     btnShutdown.addEventListener('click', (event) => {

//         event.preventDefault();
//         outputDiv.innerHTML = 'Shutting down';
        

//     });

// }


Mousetrap.bind('tab', () => {

    console.log('WE GOT TAB');
    let activeBtn = document.querySelector('.btn-primary');
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });    
    activeBtn.dispatchEvent(event);

})

Mousetrap.bind('up', () => {

    let selectedButton = document.querySelector('.btn-primary');
    let sibID = selectedButton.previousElementSibling.id;
    let prevBtn = document.getElementById(sibID);
    

    if(prevBtn){
        selectedButton.classList.remove('btn-primary');
        selectedButton.classList.add('btn-outline');
        
        prevBtn.classList.remove('btn-primary');
        prevBtn.classList.add('btn-primary');
    }

})

Mousetrap.bind('down', () => {

    let selectedButton = document.querySelector('.btn-primary');
    let sibID = selectedButton.nextElementSibling.id;
    let nextBtn = document.getElementById(sibID);
    
    if(nextBtn){    
        selectedButton.classList.remove('btn-primary');
        selectedButton.classList.add('btn-outline');
        
        nextBtn.classList.remove('btn-primary');
        nextBtn.classList.add('btn-primary');
    }

})
