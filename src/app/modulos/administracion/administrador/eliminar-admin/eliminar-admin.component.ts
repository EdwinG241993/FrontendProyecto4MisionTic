import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-eliminar-admin',
  templateUrl: './eliminar-admin.component.html',
  styleUrls: ['./eliminar-admin.component.css']
})
export class EliminarAdminComponent implements OnInit {

  id: string = "";

  constructor(private servicioAdministardor: AdministradorService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = this.route.snapshot.params["idAdministrador"]
     }

  ngOnInit(): void {
    let confirmacion = confirm("¿De verdad desea eliminar el administrador?");
    if(confirmacion){
      this.EliminarAdmin();
    }else{
      this.router.navigate(["administracion/listar-admin"]);
    }
  }

  EliminarAdmin(){
    this.servicioAdministardor.EliminarAdmin(this.id).subscribe((datos:any)=>{
      alert("Administrador eliminado correctamente");
      this.router.navigate(["administracion/listar-admin"]);
    });
  }
}
