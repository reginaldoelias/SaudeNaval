import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuiaMedicoPage } from './guia-medico';

@NgModule({
  declarations: [
    GuiaMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(GuiaMedicoPage),
  ],
})
export class GuiaMedicoPageModule {}
