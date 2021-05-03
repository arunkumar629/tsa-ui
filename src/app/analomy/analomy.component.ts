import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-analomy',
  templateUrl: './analomy.component.html',
  styleUrls: ['./analomy.component.css']
})
export class AnalomyComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
let name=localStorage.getItem('file');
    this.http.get('//localhost:5000/anomaly/'+name).subscribe((data: any)=>{
      
//alert(data);  
    });
  }

}
