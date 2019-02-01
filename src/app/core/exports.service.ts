import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Exports } from './models/export';

@Injectable({
  providedIn: 'root'
})
export class ExportsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Exports[]> {
    return this.http.get<Exports[]>('http://localhost:3000/exports');
  }
}
