import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor( private authService: AuthService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}
