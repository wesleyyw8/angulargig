import { Component, OnInit } from '@angular/core';
import { GameBrowserService } from './game-browser.service';
import { Game } from './game';

@Component({
  selector: 'app-game-browser',
  templateUrl: './game-browser.component.html',
  styleUrls: ['./game-browser.component.less']
})
export class GameBrowserComponent implements OnInit {
  games: Game[];
  errorMessage: string;
  isDesc: boolean;
  constructor(private gameBrowserService: GameBrowserService) { }

  ngOnInit() {
    this.gameBrowserService.getGames().subscribe(
      (games: Game[]) => {
        this.games = games;
      },
      (err: any) => this.errorMessage = err.error
    );
  }
  sort() {
    this.isDesc = !this.isDesc; //change the direction    
    const direction = this.isDesc ? 1 : -1;
    console.log(this.isDesc);
    this.games.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1 * direction;
      }
      else if (a.Name > b.Name) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

}
