import { NgModule } from "@angular/core";
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';

//temp
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';





@NgModule({
    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficaDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
       

    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        GraficaDonaComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
        
    ]
})


export class PagesModule{}
    
