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
    file: any= null; // Variable to store file
constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }
   	 onChange(event:any) :any{
        this.file = event.target.files[0];
    }
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
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
}