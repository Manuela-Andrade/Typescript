import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Foto } from './foto.model';

@Component({
  selector: 'pho-fotolist',
  templateUrl: './fotolist.component.html',
})
export class FotolistComponent implements OnInit {
  
  //Array de objetos
  imagens: Foto[]=[];
  //Injeção de dependencia é quando solicitamos uma ferramenta.
  //Toda injeção de dependencia deve ser feita no () do constructor
  //Toda ferramenta precisa de alguém para usa-la (ex: esse alguem é a variável http (manuela))
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Foto[]>('http://localhost:3000/imagem').subscribe(caixa => this.imagens =caixa);
  }

}
