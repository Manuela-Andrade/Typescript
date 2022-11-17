import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pho-fotoform',
  templateUrl: './fotoform.component.html',
})
export class FotoformComponent implements OnInit {

  formulario!:FormGroup;

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      imagem:[''],
      titulo:['']
    });
  }
  
   //Metodo de Cadastro
  cadastrar(form: any){
    console.log(form.value);
  } 
  
}
 
