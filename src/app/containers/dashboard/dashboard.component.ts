import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { MatchesService } from 'src/app/services/matches/matches.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showModal = false;
  matches: any;
  constructor(
    private router: Router,
    private matchService: MatchesService
  ) {
    this.matchService.getMatches().subscribe((response: any) => {
      this.matches = response;
    });
    console.log(this.matches)
  }

  ngOnInit(): void {
  }

  onNewMatchClicked(): void {
    this.showModal = !this.showModal;
  }

}
