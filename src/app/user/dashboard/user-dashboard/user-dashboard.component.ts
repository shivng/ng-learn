import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent implements AfterViewInit {
  @ViewChild('tref', { read: ElementRef })
  tref: ElementRef;

  ngAfterViewInit(): void {
    this.tref.nativeElement.textContent = 'set new value';
    console.log(this.tref.nativeElement.textContent);
  }
}
