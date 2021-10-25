import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //   template: `
  //     <button (click)="gotoUsers()">go to Users</button>
  //     <button (click)="goHome()">go to Home</button>
  //     <button (click)="goDashboard()">go to Dashboard</button>
  //     <router-outlet></router-outlet>
  //   `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';
  name = 'Angular ' + VERSION.major;
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  gotoUsers() {
    this.router.navigate(['/users']);
  }
  goHome() {
    this.router.navigate(['/home']);
  }
  goDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
