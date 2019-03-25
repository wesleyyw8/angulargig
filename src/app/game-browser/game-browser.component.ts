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
  constructor(private gameBrowserService: GameBrowserService) { }

  ngOnInit() {
    this.gameBrowserService.getGames().subscribe(
      (games: Game[]) => {
        this.games = games;
      },
      (err: any) => this.errorMessage = err.error
    );
  }

}
