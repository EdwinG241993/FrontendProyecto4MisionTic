import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { ModeloAdministrador } from 'src/app/modelos/administrador.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correoElec': ['', [Validators.required]],
    'telFijo': ['', [Validators.required]],
    'telMovil': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioAdmin: AdministradorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarAdmin() {
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

    this.servicioAdmin.CrearAdmin(a).subscribe((datos: ModeloAdministrador) => {
      alert("Administrador agregado correctamente");
      this.router.navigate(["/administracion/listar-admin"]);
    }, (error: any) => {
      alert("Error! no se pudo agregar el Usuario Adminsitrador");
    })
  }
}
