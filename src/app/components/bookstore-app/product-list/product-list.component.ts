import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros = [
    {
      id:'1',
      name:'Amigo Imaginario',
      price:30,
      quantity:10,
      category:'Suspense',img:'AmigoImaginario'
    },
    {
      id:'2',name:'O Iluminado',price:10,quantity:1,category:'Infantil',img:'Iluminado'
    },
    {
      id:'3',name:'Silencio dos Inocentes',price:20,quantity:5,category:'Terror',img:'SilencioInocentes'
    },
    {
      id:'4',name:'O romance do inverno',price:120,quantity:15,category:'Romance',img:'Romance'
    }
    
  ]

 /*  livros:Book= {
    id:'1',
    name:'Livro 01',
    price:10,
    quantity:2,
    category:'string',
    img:'string'
  } */
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.livros)


  }
}
