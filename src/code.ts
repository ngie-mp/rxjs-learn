import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/share';

let subscription = Subscription;

var observable = Observable.create((observer: any) => {
    try {
        observer.next('hey guys!')
        observer.next('how are you?')
        setInterval(() => {
            observer.next('im good!')
        }, 1000)
    } catch(err) {
        observer.error(err);
    }
}).share();

 var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

// var observer2 = observable.subscribe(
//     (x:any) => addItem(x)
// ); 

// observer.add(observer2);

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x:any) => addItem('From subscriber 2'+x)
    );
}, 1000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    node.classList.add('list-group-item');
    document.getElementById("output").appendChild(node);
}