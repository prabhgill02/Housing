import { AlertifyService } from 'src/app/services/Alertify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string;
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.loggedinUser = localStorage.getItem('token');

    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success('Successfully logged out!!');
  }
}
