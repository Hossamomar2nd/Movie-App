import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesesService {
  apiKey: string = "03861000422926c11be27fbb2aea0030";
  constructor(private http: HttpClient) { }
  getAllSeries() {
    return this.http.get(`http://localhost:3001/movies`);
  }

  getSeriesDetails(id: number) {
    return this.http.get(`http://localhost:3001/movieDetails/${id}`);
  }
}
