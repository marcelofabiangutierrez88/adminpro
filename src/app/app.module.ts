import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES } from './app.routes';


//MODULOS
import { PagesModule } from './pages/pages.module';

//temp
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//SERVICIOS
import { ServiceModule } from './services/service.module';

 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    RegisterComponent,
    AppComponent,
    LoginComponent

    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
