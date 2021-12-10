import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdminComponent } from './administrador/buscar-admin/buscar-admin.component';
import { CrearAdminComponent } from './administrador/crear-admin/crear-admin.component';
import { EditarAdminComponent } from './administrador/editar-admin/editar-admin.component';
import { EliminarAdminComponent } from './administrador/eliminar-admin/eliminar-admin.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
