import { Observable, Subscription } from 'rxjs';
import { isNumber } from 'util';

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
});

 var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

var observer2 = observable.subscribe(
    (x:any) => addItem(x)
); 

observer.add(observer2);

setTimeout(() => {
    observer.unsubscribe();
}, 6000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    node.classList.add('list-group-item');
    document.getElementById("output").appendChild(node);
}