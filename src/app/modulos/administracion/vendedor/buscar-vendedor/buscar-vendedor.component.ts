import { Component, OnInit } from '@angular/core';
import { ModeloVendedor } from 'src/app/modelos/vendedor.modelo';
import { VendedorService } from 'src/app/servicios/vendedor.service';

@Component({
  selector: 'app-buscar-vendedor',
  templateUrl: './buscar-vendedor.component.html',
  styleUrls: ['./buscar-vendedor.component.css']
})
export class BuscarVendedorComponent implements OnInit {

  listadoRegistros: ModeloVendedor[] = [];

  constructor(private vendedorServicio: VendedorService) { }

  ngOnInit(): void {
    this.ObtenerListadoVendedor();
  }

  ObtenerListadoVendedor() {
    this.vendedorServicio.ObtenerVendedor().subscribe((datos: ModeloVendedor[]) => {
      this.listadoRegistros = datos;
    })
  }

}
