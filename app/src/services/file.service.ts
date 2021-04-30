import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  downloadFile(): any {
		return this.http.get('http://localhost:4200/upload', {responseType: 'blob'});
  }
}
