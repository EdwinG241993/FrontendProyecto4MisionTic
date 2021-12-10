import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdminComponent } from './administrador/buscar-admin/buscar-admin.component';
import { CrearAdminComponent } from './administrador/crear-admin/crear-admin.component';
import { EditarAdminComponent } from './administrador/editar-admin/editar-admin.component';
import { EliminarAdminComponent } from './administrador/eliminar-admin/eliminar-admin.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { BuscarVendedorComponent } from './vendedor/buscar-vendedor/buscar-vendedor.component';
import { CrearVendedorComponent } from './vendedor/crear-vendedor/crear-vendedor.component';
import { EditarVendedorComponent } from './vendedor/editar-vendedor/editar-vendedor.component';
import { EliminarVendedorComponent } from './vendedor/eliminar-vendedor/eliminar-vendedor.component';

const routes: Routes = [

  //Rutas Administrador
  {
    path: 'crear-admin',
    component: CrearAdminComponent
  },
  {
    path: 'editar-admin/:idAdministrador',
    component: EditarAdminComponent
  },
  {
    path: 'listar-admin',
    component: BuscarAdminComponent
  },
  {
    path: 'buscar-admin',
    component: BuscarAdminComponent
  },
  {
    path: 'eliminar-admin/:idAdministrador',
    component: EliminarAdminComponent
  },

  //Rutas Vendedor
  {
    path: 'crear-vendedor',
    component: CrearVendedorComponent
  },
  {
    path: 'editar-vendedor/:idVendedor',
    component: EditarVendedorComponent
  },
  {
    path: 'listar-vendedor',
    component: BuscarVendedorComponent
  },
  {
    path: 'buscar-vendedor',
    component: BuscarVendedorComponent
  },
  {
    path: 'eliminar-vendedor/:idVendedor',
    component: EliminarVendedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
