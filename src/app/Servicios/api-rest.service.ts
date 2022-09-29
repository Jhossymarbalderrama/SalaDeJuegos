import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  urlApi : any;

  constructor(
    public httpclient : HttpClient
  ) {

  }

  setURL(url: string){
    this.urlApi = url;
  }

  callAPI():Observable<any>{
    return this.httpclient.get(this.urlApi);
    // return this.httpclient.get('https://palabras-aleatorias-public-api.herokuapp.com/random');
    //return this.httpclient.get('https://palabras-aleatorias-public-api.herokuapp.com/multiple-random');
    //return this.httpclient.get('https://palabras-aleatorias-public-api.herokuapp.com/animal/random');
  }
}
