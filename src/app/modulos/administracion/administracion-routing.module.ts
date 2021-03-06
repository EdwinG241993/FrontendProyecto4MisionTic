import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdminComponent } from './administrador/buscar-admin/buscar-admin.component';
import { CrearAdminComponent } from './administrador/crear-admin/crear-admin.component';
import { EditarAdminComponent } from './administrador/editar-admin/editar-admin.component';
import { EliminarAdminComponent } from './administrador/eliminar-admin/eliminar-admin.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
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
  },

  //Rutas Producto
  {
    path: 'crear-producto',
    component: CrearProductoComponent
  },
  {
    path: 'editar-producto/:idProducto',
    component: EditarProductoComponent
  },
  {
    path: 'listar-producto',
    component: BuscarProductoComponent
  },
  {
    path: 'buscar-producto',
    component: BuscarProductoComponent
  },
  {
    path: 'eliminar-producto/:idProducto',
    component: EliminarProductoComponent
  },

  //Rutas Cliente
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente/:idCliente',
    component: EditarClienteComponent
  },
  {
    path: 'listar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'eliminar-cliente/:idCliente',
    component: EliminarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
