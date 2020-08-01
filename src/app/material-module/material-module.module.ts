import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const allMaterialModules: any[] = [
  MatButtonModule,
  MatInputModule
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    allMaterialModules
  ],
  exports: [
    allMaterialModules
  ]
})
export class MaterialModuleModule { }
