import { from } from 'rxjs/observable/from';
import 'rxjs/add/operator/pluck';

from([
    {first: 'Mary', last: 'Simon', age: 65 },
    {first: 'Jane', last: 'The virgin', age: 25 },
    {first: 'Marc', last: 'Antony', age: 42 }
])

    .pluck('age')
    .subscribe((x:any) => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    node.classList.add('list-group-item');
    document.getElementById("output").appendChild(node);
}