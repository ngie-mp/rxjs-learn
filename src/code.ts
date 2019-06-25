import { Observable } from 'rxjs/Observable';

var observable = Observable.create((observer: any) => {
    observer.next('hey guys!')
});


observable.subscribe((x:any) => console.log(x));