import { Component, OnInit } from '@angular/core';
import {ListaService} from '../../../app/services/lista.service'


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor( private _listaService:ListaService) { 
    console.log("constructor");
  }

  lista:any[] = [];
  popup : boolean =false;
  index : number;

  callpopup(index:any){
    this.popup=true;
    this.index = index;
  }

  eliminar(index:any){
    this.lista.splice(index, 1);
    console.log(this.lista.length);
  }


  ngOnInit(): void {
    this.lista = this._listaService.getLista();
    console.log(this.lista);

  }

}
