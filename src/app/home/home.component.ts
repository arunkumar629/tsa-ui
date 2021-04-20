import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: any=null;
filename:any;
constructor(private router: Router, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }
   	 onChange(event:any) :any{
        this.file = event.target.files[0];
    }
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        if(this.file.name!=null){
        this.filename=this.file.name;
        }
        localStorage.setItem('file',this.filename);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
                    // Short link via api response
                    this.shortLink = event.link;
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
generateChart(){
this.router.navigate(['/chart']);
}

generateStatistics(){
this.router.navigate(['/statistics']);
}

}