import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './home/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './home/user/user.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserComponent,
    GameBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
