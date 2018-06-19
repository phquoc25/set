import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';
import { Match } from '../../models/match';

/**
 * Generated class for the MatchListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'match-list',
  templateUrl: 'match-list.html'
})
export class MatchListComponent {

  @Input('matches') matches;
  // matches: Match[];

  constructor() {
    // const currentTime = new Date();
    // const teamA: Team = new Team('a', 'a');
    // const match1 = new Match(currentTime, new Team("a", 'Germany'), new Team("a", 'Mexico'), 0, 1);
    // const match2 = new Match(currentTime, new Team("a", 'Portugal'), new Team("a", 'Spain'), 3, 3);
    // this.matches = [match1, match2];
  }

  matchSelected(match: Match) {

  }
}
