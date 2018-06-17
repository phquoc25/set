import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Match } from '../../models/match';
import { Team } from '../../models/team';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  matches: any;
  constructor(public navCtrl: NavController) {
    const currentTime = new Date();
    const teamA: Team = new Team('a', 'a');
    const match1 = new Match(currentTime, new Team("a", 'Germany'), new Team("a", 'Mexico'), null, null)
    const match2 = new Match(currentTime, new Team("a", 'Portugal'), new Team("a", 'Spain'), null, null);
    this.matches = 'matches';
  }

}
