import { Component, OnInit, Input } from '@angular/core';
import { ListaItem } from '../../../interface/listaItem';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from '../../../services/lista.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private listaService: ListaService) { 
                this.activatedRoute.params.subscribe( params =>{
                  console.log("ID: " + params['id']);
                  this.detalle = this.listaService.getItemById( params['id'] );

              });              
              }
  
  

  ngOnInit(): void {
  }

}
