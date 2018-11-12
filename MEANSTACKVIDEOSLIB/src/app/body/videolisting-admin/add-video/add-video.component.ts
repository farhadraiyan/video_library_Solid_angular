import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VideolistServiceService} from '../../../videolist-service.service';
import { NgForm } from '@angular/forms';
import {Videos} from '../../videolisting-users/videos.model';
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  selctedFile:File=null;
  fileName="";
  videos:Videos[];
  constructor(private http:HttpClient, private videoservice:VideolistServiceService) { }

  ngOnInit() {
    this.videoservice.currentVideo.subscribe(vidArr=>this.videos=vidArr)
  }
  onFileSelect(event)
  {
this.selctedFile=<File>event.target.files[0];
this.fileName=this.selctedFile.name;
console.log(this.fileName);
  }
  addvideo(form:NgForm, gen,star,stat)
  {
    this.videos.push(new Videos(form.value.title,form.value.runtime, gen.value,star.value,form.value.director,stat.value,this.selctedFile.name))

    this.videoservice.changeVideo(this.videos);
    console.log(this.selctedFile.name);


  }

  onUpload()
  {
    const file=new FormData();
    file.append('image', this.selctedFile, this.selctedFile.name);
    this.http.post("../../../../assets", file)
    .subscribe(res=>{
      console.log("done");
    })
  }

}
