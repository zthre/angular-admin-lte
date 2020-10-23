import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListaService} from '../../services/lista.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:any = {};

  constructor(private activateRoute: ActivatedRoute,
              private _listaService: ListaService
              ){ 
    this.activateRoute.params.subscribe(params =>{
      this.item= this._listaService.getItem(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
