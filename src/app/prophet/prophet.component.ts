import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prophet',
  templateUrl: './prophet.component.html',
  styleUrls: ['./prophet.component.css']
})
export class ProphetComponent implements OnInit {
filename:any;
baseUrl:string='http://localhost:5000/static/';
img:string="_prophetPredict.jpg";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
this.filename=localStorage.getItem('file');
let name=this.filename;
this.filename=this.filename.slice(0,-4)
this.baseUrl=this.baseUrl.concat(this.filename.toString());
this.filename=this.baseUrl.concat(this.img.toString());

    this.http.get('//localhost:5000/prophet/'+name).subscribe((data: any)=>{

    });
  }

}
