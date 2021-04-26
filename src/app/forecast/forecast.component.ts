import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
forecastDetails:any;
	
filename:any;
baseUrl:string='http://localhost:5000/static/';
img:string="_forecast.jpg";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
this.filename=localStorage.getItem('file');
let name=this.filename;
this.filename=this.filename.slice(0,-4)
this.baseUrl=this.baseUrl.concat(this.filename.toString());
this.filename=this.baseUrl.concat(this.img.toString());

    this.http.get('//localhost:5000/forecast/'+name).subscribe((data: any)=>{
      this.forecastDetails = data;
//alert(this.forecastDetails.accuracy);  
    });

  }

}
