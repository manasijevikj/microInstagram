import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhoto } from 'src/app/models/IPhoto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  photo: IPhoto | undefined; // kje ima kasnenje so !
  errorMessage = '';
  id: number = Number(this.route.snapshot.paramMap.get('id'));
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

  onBack(): void {
    this.router.navigate(['/photos']);
  }

  onEdit(): void {
    this.router.navigate(['/photos/edit/', this.photo?.id]);
  }

  onDelete(): void {
    this.apiService.deletePhoto(this.id).subscribe(
      () => {
        console.log('Successfuly deleted photo');
      },
      () => console.log('Failed to delete photo')
    );
    this.router.navigate(['home']);
  }
}
