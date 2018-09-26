import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ValueComponent } from './value/value.component';
import { LogComponent } from './log/log.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'log', component: LogComponent },
  { path: 'sinup', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    LogComponent,
    HomeComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    LogComponent
  ]
})

export class AppModule { }


