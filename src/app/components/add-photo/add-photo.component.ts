import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from 'src/app/models/IPhoto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
})
export class AddPhotoComponent implements OnInit {
  photo: IPhoto = {
    albumId: 1,
    id: 1,
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  onSave(): void {
    console.log('Proverka ' + this.photo.id);
    // this.uploadPhoto(this.photo);
    this.router.navigate(['/home']);
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }

  // uploadPhoto(photo: IPhoto) {
  //   this.apiService.uploadPhoto(photo).subscribe(
  //     () => {
  //       console.log('Successfuly uploaded photo');
  //     },
  //     () => console.log('Failed to uploaded photo')
  //   );
  //   this.router.navigate(['home']);
  // }
}
