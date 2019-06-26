import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

Observable.create((observer:any) => {
    observer.next('Hey guys!')
}) 
    .map((val:any) => val.toUpperCase())
    .subscribe((x:any) => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    node.classList.add('list-group-item');
    document.getElementById("output").appendChild(node);
}