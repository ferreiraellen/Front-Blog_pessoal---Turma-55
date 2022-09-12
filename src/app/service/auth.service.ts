import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { Userlogin } from '../model/Userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router :Router

  ) { }

  login(userlogin: Userlogin): Observable<Userlogin>{
    return this.http.post<Userlogin>('  https://blpessoal.herokuapp.com/usuarios/logar', userlogin)
  }

  cadastro(user:User): Observable<User>{
    return this.http.post<User>(' https://blpessoal.herokuapp.com/usuarios/cadastrar', user)

  }
  atualizar(user:User): Observable<User>{
    return this.http.put<User>(' https://blpessoal.herokuapp.com/usuarios/atualizar', user)

  }

  getByIdUser(id:number): Observable<User>{
    return this.http.get<User>(` https://blpessoal.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok =true
    }
    return ok
  }
}
