import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  loadAllEvents() : Observable<Event[]> {
    const observable = this.http.get<Event[]>('http://localhost:9000/api/events').pipe(map(res=> (res as any).payload));
    return observable
  }

  /*filterByCategory(category:string) : Signal<Event[]>{
  }*/
}
//toSignal subscribes to the Observable immediately 