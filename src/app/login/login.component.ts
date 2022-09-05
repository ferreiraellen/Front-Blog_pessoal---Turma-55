import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Userlogin } from '../model/Userlogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin: Userlogin = new Userlogin


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit()  {
    window.scroll(0,0)
  }

login (){
  this.auth.login(this.userlogin).subscribe((resp: Userlogin) =>{
    this.userlogin = resp


    environment.token = this.userlogin.token
    environment.nome = this.userlogin.nome
    environment.foto = this.userlogin.foto
    environment.id = this.userlogin.id

    

    this.router.navigate(['/inicio'])
  }, erro =>{
    if(erro.status == 500 || erro.status == 400){
      alert('Usuário ou senha está incorreto!')
  }
  })
}
}
