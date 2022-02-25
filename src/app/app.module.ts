import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
import { DeletePhotoComponent } from './components/delete-photo/delete-photo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http'; //da proveram
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotosListComponent,
    PhotoDetailsComponent,
    AddPhotoComponent,
    EditPhotoComponent,
    DeletePhotoComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
