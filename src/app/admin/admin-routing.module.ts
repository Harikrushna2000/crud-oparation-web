import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guarde/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ClientsComponent } from './clients/clients.component';
import { DataPopupComponent } from './data-popup/data-popup.component';
import { DataShowComponent } from './data-show/data-show.component';
import { DeshbordComponent } from './deshbord/deshbord.component';
import { EmployListComponent } from './employ/employ-list/employ-list.component';
import { IboComponent } from './ibo/ibo.component';
import { ProductComponent } from './product/product.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [
  {
    path: 'admin/admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'deshbord', pathMatch: 'full' },
      { path: 'deshbord', component: DeshbordComponent },
      { path: 'ibo', component: IboComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'datapop', component: DataPopupComponent },
      { path: 'datashow', component: DataShowComponent },
      { path: 'product', component: ProductComponent },
      { path: 'research', component: ResearchComponent },
      { path: 'employ', component: EmployListComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
