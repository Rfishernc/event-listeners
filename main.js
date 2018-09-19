const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');
const submitButtElem = document.getElementById('submitButt');

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
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`;
    printToDom(toDoString, 'toDoCards')
}