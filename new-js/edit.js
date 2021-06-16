function editList() {

    let items = document.querySelectorAll('#data .items');

    let name = document.querySelectorAll('.name');
    let cost = document.querySelectorAll('.cost');

    items.forEach(element => {
        element.addEventListener('click', ()=> {

            this.name = name;
            console.log(this.name);
            element.setAttribute('contenteditable', true);

            if (element.contentEditable != true) {

                // show user which section they are editing
                element.style.background = 'black';
                element.style.color = 'white';
            }
            else {
                element.style.background = 'white';
                element.style.color = 'black';
                
            }
            
            // test
            console.log('user has clicked the editable list element');
            
        });
        element.addEventListener('mouseout', ()=> {

            expense.value = this.name.value;

            let remaining = document.querySelector('#remaining');
            remaining = ( remaining - cost.value ); 
            

            // revert list element back to default state [ not editing ]
            element.style.background = 'white';
            element.style.color = 'black';

            // test
            console.log('mouse has left editable element');
        })
    });
}

