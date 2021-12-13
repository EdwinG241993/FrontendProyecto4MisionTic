import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  
  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correoElec': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCliente() {
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let correoElec = this.fgValidador.controls["correoElec"].value;
    let telefono = this.fgValidador.controls["telefono"].value;

    let c = new ModeloCliente();
    c.nombres = nombres;
    c.apellidos = apellidos;
    c.direccion = direccion;
    c.correoElec = correoElec;
    c.telefono = telefono;

    this.servicioCliente.CrearCliente(c).subscribe((datos: ModeloCliente) => {
      alert("Te registraste como cliente");
      this.router.navigate(["/administracion/eliminar-cliente"]);
    }, (error: any) => {
      alert("Error! Fallo el registro");
    })
  }
}
