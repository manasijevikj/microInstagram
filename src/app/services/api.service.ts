import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IPhoto } from '../models/IPhoto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi: string = 'http://jsonplaceholder.typicode.com/photos';
  photos!: IPhoto[];
  curentPhoto!: IPhoto;

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<IPhoto[]> {
    return this.http
      .get<IPhoto[]>(this.urlApi)
      .pipe(catchError(this.handleError));

    // tap((data) => console.log('All', JSON.stringify(data)))
  }

  getPhoto(id: number): Observable<IPhoto | undefined> {
    return this.getPhotos().pipe(
      map((photos: IPhoto[]) => photos.find((p) => p.id === id))
    );
  }

  updatePhoto(photo: IPhoto): Observable<IPhoto> {
    let options = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' }),
    };
    return this.http.put<IPhoto>(`${this.urlApi}/${photo.id}`, photo, options);
  }

  deletePhoto(id: number): Observable<IPhoto> {
    return this.http.delete<IPhoto>(`${this.urlApi}/${id}`);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
