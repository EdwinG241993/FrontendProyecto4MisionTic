import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVendedor } from 'src/app/modelos/vendedor.modelo';
import { VendedorService } from 'src/app/servicios/vendedor.service';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent implements OnInit {

  id: string = "";

  fgValidador: FormGroup = this.fb.group({
    'idVendedor': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'correoElec': ['', [Validators.required]],
    'telFijo': ['', [Validators.required]],
    'telMovil': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioVendedor: VendedorService,
    private router: Router,
    private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params["idVendedor"];
    this.BuscarVendedor();
  }

  BuscarVendedor() {
    this.servicioVendedor.ObtenerVendedorId(this.id).subscribe((datos: ModeloVendedor) => {
      this.fgValidador.controls["idVendedor"].setValue(datos.idVendedor);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["correoElec"].setValue(datos.correoElec);
      this.fgValidador.controls["telFijo"].setValue(datos.telFijo);
      this.fgValidador.controls["telMovil"].setValue(datos.telMovil);
    })
  }

  EditarVendedor() {
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
    v.idVendedor = this.id;

    this.servicioVendedor.ActualizarVendedor(v).subscribe((datos: ModeloVendedor) => {
      alert("Vendedor actualizado correctamente");
      this.router.navigate(["/administracion/listar-vendedor"]);
    }, (error: any) => {
      alert("Error! no se pudo actualizar el Usuario Vendedor");
    })
  }
}
