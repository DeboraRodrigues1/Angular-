import { Component, OnInit } from '@angular/core';

import { Tarefa } from '../model/Tarefas';
import { ListawebService } from '../service/listaweb.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

export class TarefasComponent implements OnInit {

  //criei meu objeto de negocios
  minhaTarefa: Tarefa[];

  // injetando o serviço
  constructor(private servicoLista: ListawebService) {
  }

  ngOnInit() {
    console.log("Chamando funcao que recupera a lista");
    this.obterTodasAsTarefas();
    console.log("Espero que tenha dado certo");
    console.log(this.minhaTarefa);
  }

  //so vou criar um metodo para invocar o revoço
  public obterTodasAsTarefas() {
    this.servicoLista.obterTarefas().subscribe((resultado: Tarefa[]) => { this.minhaTarefa = resultado; });

  }

}
