import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DeshbordComponent } from './deshbord/deshbord.component';
import { IboComponent } from './ibo/ibo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { DataPopupComponent } from './data-popup/data-popup.component';
import { DataShowComponent } from './data-show/data-show.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IboFormComponent } from './ibo-form/ibo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductComponent } from './product/product.component';
import { ClientInsertComponent } from './client-insert/client-insert.component';
import { ResearchComponent } from './research/research.component';
import { InsertResComponent } from './insertRes/insert-res.component';
import { ResearchEditComponent } from './research-edit/research-edit.component';
import { IboEditComponent } from './ibo-edit/ibo-edit.component';
import { EmployListComponent } from './employ/employ-list/employ-list.component';
import { EmployAddComponent } from './employ/employ-add/employ-add.component';
import { EmployUpdateComponent } from './employ/employ-update/employ-update.component';
import { EmployAllDataComponent } from './employ/employ-all-data/employ-all-data.component';

@NgModule({
  declarations: [
    AdminComponent,
    DeshbordComponent,
    IboComponent,
    FooterComponent,
    HeaderComponent,
    ClientsComponent,
    DataPopupComponent,
    DataShowComponent,
    IboFormComponent,
    ProductComponent,
    ClientInsertComponent,
    ResearchComponent,
    InsertResComponent,
    ResearchEditComponent,
    IboEditComponent,
    EmployListComponent,
    EmployAddComponent,
    EmployUpdateComponent,
    EmployAllDataComponent,
  ],
  entryComponents: [
    DataPopupComponent,
    DataShowComponent, 
    IboFormComponent,
    InsertResComponent,
    ClientInsertComponent,
    ResearchEditComponent,
    IboEditComponent,
    EmployAllDataComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialDesignModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  exports:[MatPaginatorModule]
})
export class AdminModule {}
