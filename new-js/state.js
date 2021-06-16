// application page view selectors
let frontpage = document.querySelector('#frontpage');
let application = document.querySelector('#application');
let production = document.querySelector('#production');

/*
    function [ setState ]

    provides state management to application pages
    enables swipe capibilities for mobile & tablet devices
    disable swipe for desktop && enable onclick events
*/
function setState() {   

    // set current state id as an empty string
    let id = '';

    // set default state [ frontpage view ]
    let content = document.querySelectorAll('.content');

    // forEach [ content ] section
    content.forEach(element => {

        // remove all element from state view
        element.style.display = 'none';
    
    });
}

// init function [ setState ]
setState();

// function [ stateListener ] : listen for state change on user click
function stateListener() {

    // navigation link selector elements [ click events ]
    let link_frontpage = document.querySelector('#link-home');
    let link_application = document.querySelector('#link-app');
    let link_prodution = document.querySelector('#link-prod');

    // validate the homepage view [ frontpage ]
    if(frontpage.style.display != 'flex') {

        // display the default view [ frontpage ]
        frontpage.style.display = 'flex';
    }

    // event [ frontpage link ]
    link_frontpage.addEventListener('click', ()=> {

        // reset current state [ clear sections ]
        setState();

        // validate the application state [ frontpage view ]
        if (frontpage.style.display != 'flex') {
            frontpage.style.display = 'flex';
        }
        else {
            frontpage.style.display = 'none';
        }

    });

    // event [ application link ]
    link_application.addEventListener('click', ()=> {

        // reset current state [ clear sections ]
        setState();

        // validate the application state [ application view ]
        if (application.style.display != 'flex') {
            application.style.display = 'flex';
        }
        else {
            application.style.displa= 'none';
        }

    });

    // event [ production link ]
    link_prodution.addEventListener('click', ()=> {

        // reset current state [ clear sections ]
        setState();

        // validate the production state [ production view ]
        if (production.style.display != 'flex') {
            production.style.display = 'flex';
        }
        else {
            production.style.display = 'none';
        }

    });

} // function [ stateListener ] end

// init function [ stateListener ]
stateListener();