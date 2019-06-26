import { AsyncSubject } from 'rxjs/AsyncSubject';

var subject = new AsyncSubject()

subject.subscribe(
    data => addItem('Observer #1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {   
    var observer2 = subject.subscribe(
        data => addItem('Observer #2: '+ data)
    )
    subject.complete();
}, 500);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    node.classList.add('list-group-item');
    document.getElementById("output").appendChild(node);
}