import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showModal = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNewMatchClicked(): void {
    // this.router.navigateByUrl('/humanos');
    this.showModal = !this.showModal;
  }

}
