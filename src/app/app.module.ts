import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticateService } from './service/Authenticate.service';
import { TokenIntercepterService } from './service/token-intercepter.service';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { NeclacesComponent } from './Category/neclaces/neclaces.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNoteFoundComponent,
    NeclacesComponent,
    ProfileComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticateService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
