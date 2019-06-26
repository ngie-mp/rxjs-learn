import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';

var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
}) 

var observable2 = Observable.create((observer:any) => {
    observer.next('Whats up?')
}) 

var newObs = merge(observable, observable2)

newObs.subscribe((x:any) => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    node.classList.add('list-group-item');
    document.getElementById("output").appendChild(node);
}