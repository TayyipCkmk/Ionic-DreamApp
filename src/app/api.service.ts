import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string = 'http://microwebservice.net/ecodation/25Ocak/gokhan/ruyalar_servis.php'

  constructor(private http:HttpClient) { }


  ruyaUrl(kelime):Observable<any>{
    return this.http.get(this.url +"?kelime_al="+ kelime);
  }
}
