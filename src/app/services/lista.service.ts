import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private lista:Lista[] = [
    {
      id: "1",
      alias: "alias1",
      owner: "owner1",
      fecha: "1941-11-01"
    },
    {
      id: "2",
      alias: "alias2",
      owner: "owner2",
      fecha: "2020-11-01"
    },
    {
      id: "3",
      alias: "alias3",
      owner: "owner3",
      fecha: "2021-11-01"
    },
    {
      id: "4",
      alias: "alias4",
      owner: "owner4",
      fecha: "2022-11-01"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }
  

  getLista(){
    return this.lista
  }

  getItem(idx: string){
    return this.lista[idx];
  }
  

}
 

export interface Lista{
  id: string;
  alias: string;
  owner: string;
  fecha: string;
};
