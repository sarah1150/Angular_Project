import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus.component';

@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutusComponent }]),
  ],
  exports: [AboutusComponent],
})
export class AboutUsModule {}
