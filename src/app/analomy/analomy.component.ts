import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-analomy',
  templateUrl: './analomy.component.html',
  styleUrls: ['./analomy.component.css']
})
export class AnalomyComponent implements OnInit {
filename:any;
filename_cluster:any;
filename_cof:any;
filename_iforest:any;
filename_knn:any;
filename_lof:any;
filename_svm:any;
filename_sod:any;
filename_histogram:any;
baseUrl:string='http://localhost:5000/static/';
img:string="_abod.jpg";
img_cluster:string="_cluster.jpg";
img_cof:string="_cof.jpg";
img_iforest:string="_iforest.jpg";
img_knn:string="_knn.jpg";
img_lof:string="_lof.jpg";
img_svm:string="_svm.jpg";
img_sod:string="_sod.jpg";
img_histogram:string="_histogram.jpg";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
this.filename=localStorage.getItem('file');
let name=this.filename;
this.filename=this.filename.slice(0,-4)
this.baseUrl=this.baseUrl.concat(this.filename.toString());
this.filename=this.baseUrl.concat(this.img.toString());
this.filename_cluster=this.baseUrl.concat(this.img_cluster.toString());
this.filename_cof=this.baseUrl.concat(this.img_cof.toString());
this.filename_iforest=this.baseUrl.concat(this.img_iforest.toString());
this.filename_knn=this.baseUrl.concat(this.img_knn.toString());
this.filename_lof=this.baseUrl.concat(this.img_lof.toString());
this.filename_svm=this.baseUrl.concat(this.img_svm.toString());
this.filename_sod=this.baseUrl.concat(this.img_sod.toString());
this.filename_histogram=this.baseUrl.concat(this.img_histogram.toString());
    this.http.get('//localhost:5000/anomaly/'+name).subscribe((data: any)=>{
      
//alert(data);  
    });
  }

}
