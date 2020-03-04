import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PageConnectionComponent } from './page-connection.component';



@NgModule({
  imports: [
   IonicModule, 
   CommonModule, 
   FormsModule, 
   ExploreContainerComponentModule,
   RouterModule.forChild([{ path:'', component:PageConnectionComponent}])
  ],
  declarations: [PageConnectionComponent]
})
export class PageConnectionModule { }
