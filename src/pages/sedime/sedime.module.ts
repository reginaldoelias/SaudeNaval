import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SedimePage } from './sedime';

@NgModule({
  declarations: [
    SedimePage,
  ],
  imports: [
    IonicPageModule.forChild(SedimePage),
  ],
})
export class SedimePageModule {}
