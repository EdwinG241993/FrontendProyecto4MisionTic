import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendedorService } from 'src/app/servicios/vendedor.service';

@Component({
  selector: 'app-eliminar-vendedor',
  templateUrl: './eliminar-vendedor.component.html',
  styleUrls: ['./eliminar-vendedor.component.css']
})
export class EliminarVendedorComponent implements OnInit {

  id: string = "";

  constructor(private servicioVendedor: VendedorService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = this.route.snapshot.params["idVendedor"]
     }

  ngOnInit(): void {
    let confirmacion = confirm("¿De verdad desea eliminar el vendedor?");
    if(confirmacion){
      this.EliminarVendedor();
    }else{
      this.router.navigate(["administracion/listar-vendedor"]);
    }
  }

  EliminarVendedor(){
    this.servicioVendedor.EliminarVendedor(this.id).subscribe((datos:any)=>{
      alert("Vendedor eliminado correctamente");
      this.router.navigate(["administracion/listar-vendedor"]);
    });
  }
}
