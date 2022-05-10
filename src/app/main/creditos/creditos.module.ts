import { NgModule } from '@angular/core';
import { AuthGuard } from '../../auth/helpers/auth.guards';
import { CoreCommonModule } from '../../../@core/common.module';
import { RouterModule } from '@angular/router';
import { ContentHeaderModule } from '../../layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule } from '@angular/forms';
import { CoreTouchspinModule } from '../../../@core/components/core-touchspin/core-touchspin.module';
import { CoreSidebarModule } from '../../../@core/components/core-sidebar/core-sidebar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CardSnippetModule } from '../../../@core/components/card-snippet/card-snippet.module';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';


import { CreditosPreaprobadosComponent } from './creditos-preaprobados/creditos-preaprobados.component';

const routes = [
  { path: '', redirectTo: 'creditosPreAprobados', pathMatch: 'full' },
  {
    path: 'creditosPreAprobados',
    component: CreditosPreaprobadosComponent,
    // data: { roles: [Role.BigPuntos] },
    canActivate: [AuthGuard]
    // data: { animation: 'auth' }
  },

];

@NgModule({
  declarations: [
    CreditosPreaprobadosComponent,
  ],
  imports: [
    CoreCommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    SwiperModule,
    FormsModule,
    CoreTouchspinModule,
    CoreSidebarModule,
    NgbModule,
    Ng2FlatpickrModule,
    CardSnippetModule,
    ShareIconsModule,
    ShareButtonsModule
  ],
  exports: [
    CreditosPreaprobadosComponent
  ]
})
export class CreditosModule { }
