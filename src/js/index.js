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

// select all [ notes ] list element
let notes = document.querySelectorAll('.notes');

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

    // prevent form submit
    e.preventDefault();

    // init [ validateForm ] function
    validateForm();

});

// function [ validateForm ]
validateForm = () => {

    // select title & text values
    let title = document.querySelector('#title');
    let text = document.querySelector('#text');

    if (title.value === '' || title.value === null && text.value === '' || text.value === null) {
        // init [ deleteNote ] function
        deleteNote();
        // test
        console.log('validate : delete note');
    }
    else {
        // init [ createNotes ] function
        createNotes();
        // get title & text values
        console.log('title : ' + title.value +  ' , ' + 'text : ' + text.value);
        // test
        console.log('validate : create note');
    }

    // test PROCESS
    console.log('function : validate');
}

// function [ createNotes ]
createNotes = () => {

    // validate form display properties
    if (form.style.display != 'none') {
        // assign form display back to default [ none ]
        form.style.display = 'none';
        // test
        console.log('validate : form elements removed');
    }

    // select title & text values
    let title = document.querySelector('#title');
    let text = document.querySelector('#text');

    // test data pass-through
    console.log('create : title = ' + title.value);
    console.log('create : text = ' + text.value);

    // test notes length & creation
    console.log('notes length : ' + notes.length);

    // validate number of notes appended to list element
    if (notes.length >= 0 && notes.length <= 5) {

        // create the note element
        let note = document.createElement('li');
        let noteTitle = document.createElement('h4');
        let noteText = document.createElement('p');

        // assign note attributes & classes
        note.className = 'notes';
        noteTitle.className = 'title';
        noteText.className = 'text';
        
        // assign input values to note elements
        noteTitle.innerHTML = title.value;
        noteText.innerHTML = text.value;

        // attach title & text values to note element
        note.appendChild(noteTitle);
        note.appendChild(noteText);

        // attach the note element to the list HTML grid element
        list.appendChild(note);


        // init [ editNotes ] function
        editNotes();

        // set form input values back to default [ empty string ]
        title.value = '';
        text.value = '';

        // test
        console.log('notes num : ' + notes.length);

    }
    else {
        alert('too many notes have been created');
    }

    // test PROCESS
    console.log('function : CREATE NOTES');

}

// function [ editNotes ] 
editNotes = () => {

    // selct all [ notes ] elements
    let notes = document.querySelectorAll('.notes');

    // setup notes foreach loop
    notes.forEach(element => {

        // click event [ notes ]
        element.addEventListener('click', ()=> {

            // set an editing variable
            let editing = 'editing';
            // set element ID to editing value
            element.id = editing;

            if (save.id != 'edit') {
                
                save.id = 'edit';

                let editTitle = document.querySelector('#editing .title');
                let editText = document.querySelector('#editing .text');

                // set edited title values to HTML
                editTitle.innerHTML = title.value;
                editText.innerHTML = text.value;

                // test
                console.log(editTitle);
                console.log(editText);

                // test
                console.log('title as : ' + editTitle.value);
                
            }
            if (element.id === editing) {
                editing.style.display = 'none';
                element.id = '';

            }
            else {
                
                // test
                console.log('');
                
            }
            
            // re-assign form display back to visible [ flex ]
            form.style.display = 'flex';
            save.id = 'edit';

            
            
            

            
            // test
            console.log('edit element : ' + text.value);

            // selected edit title element
            let editTitle = document.querySelectorAll('#editing .title');
            // selected edit text element
            let editText = document.querySelectorAll('#editing .text');
            // apply selected edit title element
            editTitle.innerHTML = title.value;
            // apply selected edit text element
            editText.innerHTML = text.value;
            
            // select [ edit ] button once created
            let edit = document.querySelector('#edit');
            console.log('edit notes : event btn = ' + edit);

            // click event [ edit ] button
            edit.addEventListener('click', (e)=> {

                // prevent form submit
                e.preventDefault();

                // init [ validateForm ] function
                validateForm();

            });

            // test
            console.log('function : EDIT NOTES');
        });
    });

}

// function [ deleteNote ] 
deleteNote = () => {

    // select form input elements
    let title = document.querySelector('#title');
    let text = document.querySelector('#text');

    // let emptyTitle = document.querySelectorAll('.title');
    // let emptyText = document.querySelectorAll('.text');

    // test
    console.log('function : delete note');

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


