import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideolistServiceService } from '../../../videolist-service.service';
import { NgForm } from '@angular/forms';
import { Videos } from '../../videolisting-users/videos.model';
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  selctedFile: File = null;

  videos: Videos[];
  defImgUrl: string = "../../../../assets/default.png";//this default image url
  fileName = "default.png";
  constructor(private http: HttpClient, private videoservice: VideolistServiceService) { }

  ngOnInit() {
    this.videoservice.currentVideo.subscribe(vidArr => this.videos = vidArr);

  }
  onFileSelect(event) {
    this.selctedFile = <File>event.target.files[0];
    this.fileName = this.selctedFile.name;//assign filename on user selct
  }
  addvideo(form: NgForm, gen, star, stat) {
    this.videos.push(new Videos(form.value.title, form.value.runtime, gen.value, star.value, form.value.director, stat.value, this.fileName))
    this.videoservice.changeVideo(this.videos);
  }

  // onUpload()
  // {
  //   const file=new FormData();
  //   file.append('image', this.selctedFile, this.selctedFile.name);
  //   this.http.post("../../../../assets", file)
  //   .subscribe(res=>{
  //     console.log("done");
  //   })
  // }

}
