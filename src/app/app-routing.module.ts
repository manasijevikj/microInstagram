import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoDetailsGuard } from './guards/photo-details.guard';

const routes: Routes = [
  { path: 'photos', component: PhotosListComponent },
  { path: 'photos/add', component: AddPhotoComponent },
  {
    path: 'photos/:id',
    canActivate: [PhotoDetailsGuard],
    component: PhotoDetailsComponent,
  },
  { path: 'photos/edit/:id', component: EditPhotoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
