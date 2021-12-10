import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearAdminComponent } from './administrador/crear-admin/crear-admin.component';
import { EditarAdminComponent } from './administrador/editar-admin/editar-admin.component';
import { EliminarAdminComponent } from './administrador/eliminar-admin/eliminar-admin.component';
import { BuscarAdminComponent } from './administrador/buscar-admin/buscar-admin.component';
import { BuscarVendedorComponent } from './vendedor/buscar-vendedor/buscar-vendedor.component';
import { CrearVendedorComponent } from './vendedor/crear-vendedor/crear-vendedor.component';
import { EditarVendedorComponent } from './vendedor/editar-vendedor/editar-vendedor.component';
import { EliminarVendedorComponent } from './vendedor/eliminar-vendedor/eliminar-vendedor.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearAdminComponent,
    EditarAdminComponent,
    EliminarAdminComponent,
    BuscarAdminComponent,
    BuscarVendedorComponent,
    CrearVendedorComponent,
    EditarVendedorComponent,
    EliminarVendedorComponent,
    BuscarClienteComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
