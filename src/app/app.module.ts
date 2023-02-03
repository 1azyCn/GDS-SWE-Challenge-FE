import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material UI
import {MatTableModule} from '@angular/material/table';

// Page Components
import { UploadComponent } from './page/upload/upload.component';
import { LoginComponent } from './page/login/login.component';
import { ErrorComponent } from './page/error/error.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

// Resuable Component
import { FilterComponent } from './components/filter/filter.component';
import { TableComponent } from './components/table/table.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

//Layout
import { SideNavComponent } from './layout/side-nav/side-nav.component';
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
    HeaderComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
