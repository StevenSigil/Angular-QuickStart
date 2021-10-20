import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    // When button is clicked (throw)...
    console.log(555);
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    // Subscribe to this for reactions to click (catch)...
    return this.subject.asObservable();
  }
}
