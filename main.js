const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');
const submitButtElem = document.getElementById('submitButt');

function activateDeletes() {
    const deleteButt = document.getElementsByClassName('deleteButt');
    for(let i = 0; i < deleteButt.length; i++) {
        const elem = deleteButt[i];
        elem.addEventListener('click', function(e) {
            const clicked = e.target;
            clicked.parentNode.parentNode.remove();
        })
    }
}

let toDo = ''
let notes = '';


submitButtElem.addEventListener('click', function(e) {
    e.preventDefault();
    toDo = toDoInputElem.value;
    notes = notesInputElem.value;
    toDoCardMaker(toDo, notes);
})

function printToDom(string, div) {
    document.getElementById(div).innerHTML += string;
}

function toDoCardMaker(doIt, takeNotes) {
    let toDoString = 
    `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${doIt}</h5>
            <p class="card-text">${takeNotes}</p>
            <a href="#" class="btn btn-primary deleteButt">Delete</a>
        </div>
    </div>`;
    printToDom(toDoString, 'toDoCards')
    activateDeletes();
}