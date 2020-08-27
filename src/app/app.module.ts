import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LZStringModule, LZStringService } from 'ng-lz-string';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, LZStringModule   ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}, LZStringService]
})
export class AppModule { }
