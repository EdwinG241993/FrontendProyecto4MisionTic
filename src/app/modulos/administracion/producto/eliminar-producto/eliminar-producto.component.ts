import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {
  
  id: string = "";

  constructor(private servicioProducto: ProductoService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = this.route.snapshot.params["idProducto"]
     }

  ngOnInit(): void {
    let confirmacion = confirm("¿De verdad desea eliminar el producto?");
    if(confirmacion){
      this.EliminarProducto();
    }else{
      this.router.navigate(["administracion/listar-producto"]);
    }
  }

  EliminarProducto(){
    this.servicioProducto.EliminarProducto(this.id).subscribe((datos:any)=>{
      alert("Producto eliminado correctamente");
      this.router.navigate(["administracion/listar-producto"]);
    }, (error:any)=>{
      alert("No se pudo eliminar el producto")
    });
  }
}
