import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  recuperarListaDeUsers(){}
  getAll() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }


  getId(id: number){
    return this.http.get ("https://jsonplaceholder.typicode.com/users"+id)
  }

}

 