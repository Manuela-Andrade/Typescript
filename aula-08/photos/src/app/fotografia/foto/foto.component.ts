import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'pho-foto',
  templateUrl: './foto.component.html',
})
export class FotoComponent implements OnInit {
  
  @Input() imagem = "";


  //Título da Página

  /* 
  tituloPagina = "Minhas Fotos";
  controle = true;
  nomeButton = "Fotos Pares"; */
  
  constructor() { }

  ngOnInit(): void {
  }
  //Método do botão
 /*  mudar(){

    this.controle = !this.controle;

    if(this.nomeButton == "Fotos Pares"){
      this.nomeButton = "Todas Imagens"
    }else{
      this.nomeButton = "Fotos Pares"
    }
  } */
  
  }
  
