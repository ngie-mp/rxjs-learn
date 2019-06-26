import { Observable, Subscription } from 'rxjs';

let subscription = Subscription;

var observable = Observable.create((observer: any) => {
    try {
        observer.next('hey guys!')
        observer.next('how are you?')
        setInterval(() => {
            observer.next('Good !')
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

setTimeout(() => {
    observer.unsubscribe();
}, 6000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}