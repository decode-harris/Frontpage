// note [ header ]
let headerNote = document.querySelector('#header-note');
headerNote.style.display = 'none';
console.log(headerNote);

// note [ footer ]
let notesFooter = document.querySelector('#footer-note');
notesFooter.style.display = 'none';
console.log(notesFooter);

// title [ form ]
let form = document.querySelector('#form');
form.style.display = 'none';

// button create selector
const create = document.querySelector('#create');

create.addEventListener('click', ()=> {

    if (form.style.display != 'flex') {
        form.style.display = 'flex';
    }

    // init [ createTitle ] function
    createTitle();

});

// function [ createTitle ]
createTitle = () => {

    // title form input element selector
    let title = document.querySelector('#title');

    // form [ enter ] button selector
    let enter = document.querySelector('#enter');

    // click event [ enter ] button
    enter.addEventListener('click', (e)=> {

        // prevent form submit
        e.preventDefault();

        if (title.value === '' || title.value === null) {

            // alert helper
            alert('please set a title to create note');
        }
        else {

            // remove title form from view
            form.style.display = 'none';
            
            // init [ createNotes ] function
            createNotes();
        }

    });

}

// function [ createNotes ]
createNotes = () => {

    // unordered list attachment selector
    const list = document.querySelector('#list');

    // form title input selector
    let title = document.querySelector('#title');
    console.log('title as : ' + title.value);

    // select all current item elements
    let items = document.querySelectorAll('.items');

    console.log('number of items : ' + items.length)


    // validate amount of item elements
    if (items.length >= 0 && items.length <= 8) {

        // create note elements
        let noteItems = document.createElement('li');
        let noteTitle = document.createElement('h3');
        let noteText = document.createElement('p');

        // note element attributes
        noteText.className = 'text';
        noteItems.className = 'items';
        noteTitle.className = 'title';
        noteTitle.innerHTML = title.value
        noteText.innerHTML = 'start typing here...'

        // append title & text elements to note
        noteItems.appendChild(noteTitle)
        noteItems.appendChild(noteText)

        // set the text input element to focus for current user
        noteText.focus();

        // append newly created note to list element
        list.appendChild(noteItems);
    }
    else {

        // helper alert
        alert('too many notes have been created!');
    }
    
    // init function [ editNotes ]
    editNotes();

    // init function [ deleteNotes ]
    deleteNotes();
}

// function [ editNotes ]
editNotes = () => {

    let notes = document.querySelectorAll('.items');

    // forEach [ notes ]
    notes.forEach(element => {

        // click event [ notes ]
        element.addEventListener('click', ()=> {

            // set editing ID
            let editing = 'editing';    

            // validate element ID against editing value
            if (element.id != editing) {

                // assign element ID as editing value
                element.id = editing;
            }
            else {

                // revert element ID to default [ empty string ]
                element.id = '';
            }
        });
        
    });
    

    // select all note [ titles ] elements
    let titles = document.querySelectorAll('.title'); 

    // forEach [ titles ]
    titles.forEach(element => {

        // click event [ titles ]
        element.addEventListener('click', ()=> {

            // assign content editable as true
            element.setAttribute('contenteditable', true);

            // test
            console.log('notes title element clicked');

        });

    });

    // select all note [ texts ] elements
    let texts = document.querySelectorAll('.text');

    // forEach [ texts ]
    texts.forEach(element => {

        // click event [ texts ]
        element.addEventListener('click', ()=> {

            // assign content editable as true
            element.setAttribute('contenteditable', true);

            // remove placeholder text from HTML
            element.innerHTML = '';

            // focus the text area
            element.focus();

            // test
            console.log('notes text element clicked');

        });

    });

}

// function [ deleteNotes ]
deleteNotes = () => {

    // select all notes inside unordered list element
    let items = document.querySelectorAll('.items');

    // forEach [ notes ]
    items.forEach(element => {

        // click event [ notes ] element
        element.addEventListener('click', ()=> {

            


            // test
            console.log('items element clicked');

        });
    });


}