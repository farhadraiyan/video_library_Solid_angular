import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminloginComponent } from './body/adminlogin/adminlogin.component';
import { VideolistingAdminComponent } from './body/videolisting-admin/videolisting-admin.component';
import { UpdateVideoComponent } from './body/videolisting-admin/update-video/update-video.component';
import { AddVideoComponent } from './body/videolisting-admin/add-video/add-video.component';
import { VideolistingUsersComponent } from './body/videolisting-users/videolisting-users.component';
import { ReserveVideoComponent } from './body/videolisting-users/reserve-video/reserve-video.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    AdminloginComponent,
    VideolistingAdminComponent,
    UpdateVideoComponent,
    AddVideoComponent,
    VideolistingUsersComponent,
    ReserveVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
