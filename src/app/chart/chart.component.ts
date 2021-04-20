import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
filename:any;
filename_sma:any;
filename_wma:any;
filename_ewma:any;
baseUrl:string='http://localhost:5000/static/';
img:string="_basic.jpg";
img_sma:string="_sma.jpg";
img_wma:string="_wma.jpg"
img_ewma:string="_ewma.jpg"
  constructor(private router: Router, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
//alert(localStorage.getItem('file'));
this.filename=localStorage.getItem('file');
this.filename=this.filename.slice(0,-4)
this.baseUrl=this.baseUrl.concat(this.filename.toString());
this.filename=this.baseUrl.concat(this.img.toString());
this.filename_sma=this.baseUrl.concat(this.img_sma.toString());
this.filename_wma=this.baseUrl.concat(this.img_wma.toString());
this.filename_ewma=this.baseUrl.concat(this.img_ewma.toString());

  }

}
