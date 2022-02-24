import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from 'src/app/models/IPhoto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css'],
})
export class EditPhotoComponent implements OnInit {
  photo: IPhoto | undefined;
  errorMessage = '';
  successMessage = '';

  editedPhoto: IPhoto = {
    albumId: 1,
    id: Number(this.route.snapshot.paramMap.get('id')),
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID:' + id);
    if (id) {
      this.getPhoto(id);
    }
  }

  getPhoto(id: number): void {
    this.apiService.getPhoto(id).subscribe({
      next: (photo) => (this.photo = photo),
      error: (err) => (this.errorMessage = err),
    });
  }

  updatePhoto(photo: IPhoto): void {
    this.apiService.updatePhoto(photo).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSave(): void {
    console.log('Proverka ' + this.editedPhoto.id);
    this.updatePhoto(this.editedPhoto);
    //povik do api za da napravime put i napravi guard zemi go idto tuka za da mozes da sejfnes
    this.router.navigate(['/photos']);
  }

  onCancel(): void {
    this.router.navigate(['/photos', this.editedPhoto.id]);
  }
}
