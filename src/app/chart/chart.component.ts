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
baseUrl:string='http://localhost:5000/static/';
img:string="_basic.jpg";
  constructor(private router: Router, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
//alert(localStorage.getItem('file'));
this.filename=localStorage.getItem('file').toString();
this.filename=this.filename.slice(0,-4)
this.baseUrl=this.baseUrl.concat(this.filename.toString());
this.filename=this.baseUrl.concat(this.img.toString());

  }

}
