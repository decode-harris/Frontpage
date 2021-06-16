function createList() {

    // test calculation values
    console.log('createList  : payment = ' + payment.value);
    console.log('createList  : description =  ' + description.value);
    console.log('createList  : expense =  ' + expense.value);

    // create input value element attachment
    let text = document.createElement('p');
    let number = document.createElement('p');

    // create a new list item 
    let item = document.createElement('li');
    
    // provide the new list item with the classname of items
    item.setAttribute('class', 'items');

    // apply text value to newly created text element
    text.innerHTML = description.value;
    text.className = 'name';
    number.innerHTML = expense.value;
    number.className = 'cost';

    // attach the current expense type & cost inside the list variable
    item.appendChild(text);
    item.appendChild(number);

    // append the new list item to the current application page
    data.appendChild(item);

    // init function [ editList ]
    editList();
    

    if (data.firstChild === '' || data.firstChild === null) {

        // test
        console.log('createList : data firstChild test = ' + data.firstChild);
    }
    
    // get current form values
    
    
    
    // test data conversion
    console.log('createList : ' + remaining.value);

    // let remaining = document.querySelector('#remaining');

    remaining.innerHTML = (payment.value - expense.value);

    console.log('createList : remaining = ' + remaining.innerHTML);
    

    // revert description & expense form values to an empty string [ refresh ]
    description.innerHTML = '';
    expense.innerHTML = '';

    return

}