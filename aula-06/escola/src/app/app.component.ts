import { Component, Input } from '@angular/core';
import { Aluno } from './aluno/aluno.model';

@Component({
  selector: 'esc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  alunos: Aluno[] = [
                      {nome:'Manuela Andrade', nota: 5, situacao: 'Aprovado', aprovado: false},
                      {nome:'Ariane Liberato', nota: 8, situacao: 'Aprovado', aprovado: true},
                      {nome:'Pedro', nota: 10, situacao: 'Aprovado', aprovado: true}
  ];
  title = 'escola';
  //p =
}




