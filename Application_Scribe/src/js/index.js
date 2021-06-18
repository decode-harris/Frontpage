/*
    Note Taking Application

    global variables :
        -create [ new note button ]
        -save [ save note button ] 
        -form [ form note element ]
        -list [ notes append element ]

    click events :
        -create [ create a new note ]
        -save [ save the current note ]

    app functions :
        -createNotes [ create note component ]
        -defaultProperties [ set application default properties ]
    
*/

// form [ form ] selector
const form = document.querySelector('#form');

// ul [ list ] selector
const list = document.querySelector('#list')

// button [ create ] selector
const create = document.querySelector('#create');

// click event [ create ] button
create.addEventListener('click', ()=> {

    // validate display property [ form ]
    if (form.style.display != 'flex') {
        form.style.display = 'flex';
    }
    else {
        // alert helper
        alert('note is already active');
    }
});

// button [ save ] selector
const save = document.querySelector('#save');

// click event [ save ] button
save.addEventListener('click', (e)=> {

    e.preventDefault();

    // validate form display properties
    if (form.style.display != 'none') {

        // assign form display back to default [ none ]
        form.style.display = 'none';

        // test
        console.log('form has been removed');

    }
    
    // init function [ createNotes ]
    createNotes();

});

// select form input elements
let title = document.querySelector('#title');
let text = document.querySelector('#text');

// function [ createNotes ]
createNotes = () => {

    // test data pass-through
    console.log(title.value);
    console.log(text.value);

    // create the note element
    let note = document.createElement('li');
    let noteTitle = document.createElement('h4');
    let noteText = document.createElement('p');

    // select all [ notes ] list element
    let notes = document.querySelectorAll('.notes');
    note.className = 'notes';

    // assign input values to note elements
    noteTitle.innerHTML = title.value;
    noteText.innerHTML = text.value;

    // test notes length
    console.log('notes length : ' + notes.length);

    // validate number of notes appended to list element
    if (notes.length >= 0 && notes.length <= 5) {

        // set title & text inputs back to default
        title.innerHTML = '';
        text.innerHTML = '';
        
        // attach title & text values to note element
        note.appendChild(noteTitle);
        note.appendChild(noteText);

        // attach the note element to the list HTML grid element
        list.appendChild(note);

        // test
        console.log('Notes : IF = assigning note element');

        return
    }
    else {
        alert('too many notes have been created');
    }
    
    // test PROCESS
    console.log('createNotes : active');
}

// function [ defaultProperties ]
defaultProperties = () => {

    // remove page elements
    form.style.display = 'none';
    
    // test PROCESS
    console.log('defaultProperties :  active');

}
// int function [ defaultProperties ]
defaultProperties();


