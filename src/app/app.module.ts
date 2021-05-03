
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AnalomyComponent } from './analomy/analomy.component';
import { TrendComponent } from './trend/trend.component';
import { ChartComponent } from './chart/chart.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProphetComponent } from './prophet/prophet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    AnalomyComponent,
    TrendComponent,
    ChartComponent,
    StatisticsComponent,
    ProphetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
