import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ForecastComponent} from './forecast/forecast.component';
import {AnalomyComponent} from './analomy/analomy.component';
import {TrendComponent} from './trend/trend.component';
import {ChartComponent} from './chart/chart.component';
const routes: Routes = [
  { path: '',component: HomeComponent}, 
  { path: 'forecast',component: ForecastComponent}, 
  { path: 'chart',component: ChartComponent}, 
  { path: 'analomy',component: AnalomyComponent}, 
  { path: 'trend',component: TrendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
