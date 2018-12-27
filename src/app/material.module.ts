import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
    imports: [MatBadgeModule, MatButtonModule,
        MatToolbarModule, MatIconModule, MatSidenavModule],
    exports: [MatBadgeModule, MatButtonModule, MatSidenavModule,
        MatToolbarModule, MatIconModule]
})
export class MaterialModule {}
