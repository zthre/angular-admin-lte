import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { exit } from 'process';
import { ListaItem } from '../interface/listaItem';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private listaItems: any[] = [
    {
      id: '1234',
      alias: 'Alias1',
      owner: 'Owner1',
      fecha: 'DD/MM/YYYY'
    },
    {
      id: '1235',
      alias: 'Alias2',
      owner: 'Owner2',
      fecha: 'DD/MM/YYYY'
    },
    {
      id: '1236',
      alias: 'Alias3',
      owner: 'Owner3',
      fecha: 'DD/MM/YYYY'
    },
    {
      id: '1237',
      alias: 'Alias4',
      owner: 'Owner4',
      fecha: 'DD/MM/YYYY'
    },
    {
      id: '12348',
      alias: 'Alias5',
      owner: 'Owner5',
      fecha: 'DD/MM/YYYY'
    }
  ];


  constructor() {
    console.log(":D");
  }

  public getLista(){
    return this.listaItems;
  }

  public getItemById(id: string){
    let resultado: ListaItem;
    console.log(this.listaItems);
    this.listaItems.forEach(item =>{
        if(item.id == id){
          resultado = item;
          console.log("Es: ");
          console.log(item);
        }

       }
    );
    return resultado;
  }


  public borrarItem(id:string){
    let item: ListaItem;
    let index: number;
    item = this.getItemById(id);
    index = this.listaItems.indexOf(item);
    this.listaItems.splice(index,1);
  }

  public agregarItem(nuevoItem: ListaItem){
    let item: ListaItem;
    let resultado: boolean;
    item = this.getItemById(nuevoItem.id);
    if(item == null){
      this.listaItems.push(nuevoItem);
      resultado = true;
    }else{
      resultado = false;
    }
    console.log("nueva lista", this.listaItems);
    return resultado;
  }

}
