const { Observable } = require('rxjs')

const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000)
})


observable.subscribe({
    next: (value) => console.log(`next: ${value}`),
    error: (err) => console.log(`error: ${err}`),
    complete: () => console.log(`complete`)
})


setTimeout(() => {

    observable.subscribe({
        next: (value) => console.log(`next2: ${value}`),
        error: (err) => console.log(`error2: ${err}`),
        complete: () => console.log(`complete2`)
    })
}, 1000 * 10)