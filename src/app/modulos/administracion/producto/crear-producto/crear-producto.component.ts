import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'existencias': ['', [Validators.required]],
    'disponible': ['', [Validators.required]],
    'imagen' : ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProducto() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let existencias = parseInt(this.fgValidador.controls["existencias"].value);
    let disponible = this.fgValidador.controls["disponible"].value;
    let imagen = this.fgValidador.controls["imagen"].value;

    let p = new ModeloProducto();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.existencias = existencias;
    p.disponible = disponible;
    p.imagen = imagen;

    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto agregado correctamente");
      this.router.navigate(["/administracion/listar-producto"]);
    }, (error: any) => {
      alert("Error! no se pudo agregar el producto");
    })
  }
}
