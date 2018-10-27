import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule, MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
     MatInputModule,
     MatFormFieldModule,
     MatSelectModule,
     MatToolbarModule,
     MatCardModule,
     MatGridListModule,
     MatMenuModule,
     MatIconModule,
     MatTableModule,
     MatPaginatorModule,
     MatButtonModule,
     MatSidenavModule,
      MatListModule,
      MatTabsModule,
      MatTooltipModule
  ],
   exports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatCardModule, MatGridListModule
     , MatMenuModule, MatIconModule, MatTableModule, MatPaginatorModule, MatButtonModule,MatSidenavModule,MatListModule,MatTabsModule, MatTooltipModule],
  declarations: []
})
export class MaterialModule { }
