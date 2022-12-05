import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IMovie } from './imovie';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  

  constructor(private http:HttpClient) { }

  getMovie(id: string):Observable<Array<IMovie>>{
    return this.http.get<Array<IMovie>>(`https://638492184ce192ac605bc39a.mockapi.io/Movie/${id}`);
  }
}


