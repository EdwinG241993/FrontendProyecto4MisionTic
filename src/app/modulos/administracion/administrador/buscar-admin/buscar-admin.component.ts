import { Component, OnInit } from '@angular/core';
import { ModeloAdministrador } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-buscar-admin',
  templateUrl: './buscar-admin.component.html',
  styleUrls: ['./buscar-admin.component.css']
})
export class BuscarAdminComponent implements OnInit {

  listadoRegistros: ModeloAdministrador[] = [];

  constructor(private adminServicio: AdministradorService) { }

  ngOnInit(): void {
    this.ObtenerListadoAdmin();
  }

  ObtenerListadoAdmin(){
    this.adminServicio.ObtenerAdmin().subscribe((datos: ModeloAdministrador[])=>{
      this.listadoRegistros = datos;
    })
  }
}
