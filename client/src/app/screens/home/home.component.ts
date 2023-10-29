import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  entertainmentSignal!: Observable<Event[]>;
  workshopSignal!: Signal<Event[]>;

  constructor(private events : EventsService) {}

  ngOnInit(){
    this.filterEvents();
  }

  filterEvents() {
    this.entertainmentSignal = this.events.loadAllEvents();
    console.log(this.entertainmentSignal.subscribe((value) => console.log('Value emitted:', value)));
}
}
//let's try using signals here and see what happens