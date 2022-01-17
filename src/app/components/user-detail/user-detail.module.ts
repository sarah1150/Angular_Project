import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: UserDetailComponent }]),
  ],
  exports: [UserDetailComponent],
})
export class UserDetailModule {}
