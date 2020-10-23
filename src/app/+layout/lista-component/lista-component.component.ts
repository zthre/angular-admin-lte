import { Component, AfterViewInit , OnInit} from '@angular/core';

import * as Prism from 'prismjs';

import { ListaService } from '../../services/lista.service';
import { ListaItem } from '../../interface/listaItem';



@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html'
})
export class ListaComponent  implements AfterViewInit, OnInit {

  lista: ListaItem[] = [];


  constructor(private listaService: ListaService){

  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnInit(){
    this.lista = this.listaService.getLista();
    console.log(this.lista);
    console.log('Init');
  }


  public borrarItem(id:string){
    let index:number;
    this.lista.forEach((item, indice, array) => {
      if(item.id == id){
        index = indice;
      }
    }
    );
    //Borrar item
    this.lista.splice(index,1);
    console.log("Nuevo arreglo: ", this.lista);
  }



}
