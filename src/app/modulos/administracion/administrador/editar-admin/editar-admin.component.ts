import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAdministrador } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.css']
})
export class EditarAdminComponent implements OnInit {

  id: string = "";

  fgValidador: FormGroup = this.fb.group({
    'idAdministrador': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correoElec': ['', [Validators.required]],
    'telFijo': ['', [Validators.required]],
    'telMovil': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioAdmin: AdministradorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["idAdministrador"];
    this.BuscarAdmin();
  }

  BuscarAdmin(){
    this.servicioAdmin.ObtenerAdminId(this.id).subscribe((datos: ModeloAdministrador)=>{
    this.fgValidador.controls["idAdministrador"].setValue(datos.idAdministrador);
    this.fgValidador.controls["nombres"].setValue(datos.nombres);
    this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
    this.fgValidador.controls["direccion"].setValue(datos.direccion);
    this.fgValidador.controls["correoElec"].setValue(datos.correoElec);
    this.fgValidador.controls["telFijo"].setValue(datos.telFijo);
    this.fgValidador.controls["telMovil"].setValue(datos.telMovil);
    });
  }

  EditarAdmin() {
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let correoElec = this.fgValidador.controls["correoElec"].value;
    let telFijo = this.fgValidador.controls["telFijo"].value;
    let telMovil = this.fgValidador.controls["telMovil"].value;

    let a = new ModeloAdministrador();
    a.nombres = nombres;
    a.apellidos = apellidos;
    a.direccion = direccion;
    a.correoElec = correoElec;
    a.telFijo = telFijo;
    a.telMovil = telMovil;
    a.idAdministrador = this.id;

    this.servicioAdmin.ActualizarAdmin(a).subscribe((datos: ModeloAdministrador) => {
      alert("Administrador actualizado correctamente");
      this.router.navigate(["/administracion/listar-admin"]);
    }, (error: any) => {
      alert("Error! no se pudo actualizar el Usuario Adminsitrador");
    })
  }
}
