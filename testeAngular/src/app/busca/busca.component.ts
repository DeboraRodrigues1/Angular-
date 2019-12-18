import { Component, OnInit } from '@angular/core';
import { UserService }  from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  private idBusca: number;
  private _user: User = null;

  constructor(private userSrv: UserService) { }

  ngOnInit() {}

  private pesquisa(){
    this.userSrv.getId(this.idBusca).subscribe(res: User) =>
    {this._user = res;})
  }

}
