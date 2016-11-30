import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, WorkRoutingModule, SharedModule],
  declarations: [WorkComponent],
  exports: [WorkComponent],
  providers: [NameListService]
})
export class WorkModule { }
