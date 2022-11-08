import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pho-fotolist',
  templateUrl: './fotolist.component.html',
})
export class FotolistComponent implements OnInit {
  
  //Array de objetos
  imagens = [
    {
      img: "https://cdn.pixabay.com/photo/2022/10/24/14/48/forest-7543646_960_720.jpg",
      titulo: "Floresta",
      numero: 1
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/10/09/02/16/haunted-house-7508035_960_720.jpg",
      titulo: "Casa assombrada",
      numero: 2
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
      titulo: "Lago",
      numero: 3
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg",
      titulo: "Casa do Lago",
      numero: 4
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg",
      titulo: "Ilha",
      numero: 5
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
