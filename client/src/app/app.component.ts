import { Component, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  //check observable v signal 
  answer = 42;

  answer1 = signal(42);
  answer2  = new Observable<number>((observer) => {
    observer.next(42);
  })

  ngOnInit(){
    console.log(this.answer1());
    this.answer2.subscribe((value) => console.log('Value emitted:', value));
  }
  

}
