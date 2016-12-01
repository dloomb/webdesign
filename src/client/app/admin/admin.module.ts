import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, SharedModule],
  declarations: [AdminComponent],
  exports: [AdminComponent],
  providers: [NameListService]
})
export class AdminModule { }
