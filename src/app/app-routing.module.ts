import { UserComponent } from './home/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { AuthGuard } from './home/user/auth-guard.service';
import { GameBrowserComponent } from './game-browser/game-browser.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },

      {
        path: 'userDetails',
        canActivate: [AuthGuard],
        component: UserComponent
      },
      { path: 'gameBrowser', component: GameBrowserComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
