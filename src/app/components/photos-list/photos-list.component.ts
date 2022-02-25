import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPhoto } from 'src/app/models/IPhoto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
})
export class PhotosListComponent implements OnInit, OnDestroy {
  photos!: IPhoto[];
  errorMessage: string = '';
  sub!: Subscription;

  totalLength: any;
  page: number = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.sub = this.apiService.getPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
        this.totalLength = this.photos.length;
        console.log(this.totalLength);
      },

      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
