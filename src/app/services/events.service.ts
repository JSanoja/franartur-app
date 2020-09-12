import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public eventEmit$: EventEmitter<{
    name:string,
    action:string
  }>;
  constructor() { 
    this.eventEmit$ = new EventEmitter();
  }
  public emmit(name:string, action:string): void {
    this.eventEmit$.emit({name:name, action:action});
}
}
