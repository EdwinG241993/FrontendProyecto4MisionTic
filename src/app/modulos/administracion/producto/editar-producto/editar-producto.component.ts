import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  id: string = "";

  fgValidador: FormGroup = this.fb.group({
    'idProducto': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'existencias': ['', [Validators.required]],
    'disponible': ['', [Validators.required]],
    'imagen': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params["idProducto"];
    this.BuscarProducto();
  }

  BuscarProducto() {
    this.servicioProducto.ObtenerProductoId(this.id).subscribe((datos: ModeloProducto) => {
      this.fgValidador.controls["idProducto"].setValue(datos.idProducto);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["existencias"].setValue(datos.existencias);
      this.fgValidador.controls["disponible"].setValue(datos.disponible);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
    })
  }

  EditarProducto() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = this.fgValidador.controls["precio"].value;
    let existencias = this.fgValidador.controls["existencias"].value;
    let disponible = this.fgValidador.controls["disponible"].value;
    let imagen = this.fgValidador.controls["imagen"].value;

    let p = new ModeloProducto();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.existencias = existencias;
    p.disponible = disponible;
    p.imagen = imagen;
    p.idProducto = this.id;

    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto actualizado correctamente");
      this.router.navigate(["/administracion/listar-producto"]);
    }, (error: any) => {
      alert("Error! no se pudo actualizar el producto");
    })
  }
}
