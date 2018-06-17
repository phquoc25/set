import { Team } from "./team";

export class Match {
    private startTime: Date;
    private teamA: Team; 
    private teamB: Team;
    private teamAScore: number;
    private teamBScore: number;
    constructor(startTime: Date, teamA: Team, 
        teamB: Team, teamAScore: number, teamBScore: number) {
            this.startTime = startTime;
            this.teamA = teamA;
            this.teamB = teamB;
            this.teamAScore = teamAScore;
            this.teamBScore = teamBScore;
    }
}