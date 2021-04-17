import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AnalomyComponent } from './analomy/analomy.component';
import { TrendComponent } from './trend/trend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    AnalomyComponent,
    TrendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
