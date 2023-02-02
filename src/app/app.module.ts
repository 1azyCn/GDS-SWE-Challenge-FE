import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './page/upload/upload.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './page/error/error.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { FilterComponent } from './components/filter/filter.component';
import { TableComponent } from './components/table/table.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoginComponent,
    ErrorComponent,
    SideNavComponent,
    DashboardComponent,
    FilterComponent,
    TableComponent,
    PopUpComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
