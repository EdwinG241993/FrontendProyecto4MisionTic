import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVendedor } from 'src/app/modelos/vendedor.modelo';
import { VendedorService } from 'src/app/servicios/vendedor.service';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.css']
})
export class CrearVendedorComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correoElec': ['', [Validators.required]],
    'telFijo': ['', [Validators.required]],
    'telMovil': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioVendedor: VendedorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVendedor() {
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let correoElec = this.fgValidador.controls["correoElec"].value;
    let telFijo = this.fgValidador.controls["telFijo"].value;
    let telMovil = this.fgValidador.controls["telMovil"].value;

    let v = new ModeloVendedor();
    v.nombres = nombres;
    v.apellidos = apellidos;
    v.direccion = direccion;
    v.correoElec = correoElec;
    v.telFijo = telFijo;
    v.telMovil = telMovil;

    this.servicioVendedor.CrearVendedor(v).subscribe((datos: ModeloVendedor) => {
      alert("Vendedor agregado correctamente");
      this.router.navigate(["/administracion/listar-vendedor"]);
    }, (error: any) => {
      alert("Error! no se pudo agregar el Usuario Vendedor");
    })
  }
}

