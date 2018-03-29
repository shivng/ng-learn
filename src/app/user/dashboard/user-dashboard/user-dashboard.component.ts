import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent implements AfterViewInit {
	colors = ['RED', 'CYAN', 'BLUE'];
	@ViewChild('tref') trefText;

	ngAfterViewInit(): void {
		console.log(this.trefText.nativeElement.textContent);
		this.trefText.nativeElement.textContent = 'set new value';
	}

	getData(mob : number, stat : string, cnt: string) {
		console.log(mob);
		console.log(stat);
		console.log(cnt);
	}
}
