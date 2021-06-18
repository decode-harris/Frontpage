const newButton = document.querySelector('#newBtn');

newButton.addEventListener('click', ()=> {

    // init [ createNote ] function
    createNote();

});

// function [ createNote ]
createNote = () => {

    // create li element
    let note = document.createElement('li');
    // assign note class name to [ note ]
    note.className = 'note';

    // select unordered [ list ] element
    const list = document.querySelector('#list');
    
    // append note to list element
    list.appendChild(note);


}

