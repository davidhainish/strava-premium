import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalHeaderComponent } from './global-header/global-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    GlobalHeaderComponent
  ],
  exports: [
    GlobalHeaderComponent
  ]
})
export class SharedFeatureGlobalHeaderModule {}
