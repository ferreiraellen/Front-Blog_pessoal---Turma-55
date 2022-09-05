import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { Userlogin } from '../model/Userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userlogin: Userlogin): Observable<Userlogin>{
    return this.http.post<Userlogin>(' https://blpessoal.herokuapp.com/usuarios/logar', userlogin)
  }

  cadastro(user:User): Observable<User>{
    return this.http.post<User>('https://blpessoal.herokuapp.com/usuarios/cadastrar', user)


  }
}
