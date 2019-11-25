import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { MatToolbarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationService } from './services/location.service';
import { LocationIndexComponent } from './components/location/location-index/location-index.component';
import { LocationCreateComponent } from './components/location/location-create/location-create.component';
import { LocationDetailComponent } from './components/location/location-detail/location-detail.component';
import { LocationEditComponent } from './components/location/location-edit/location-edit.component';
import { LocationDeleteComponent } from './components/location/location-delete/location-delete.component';
import { OutfitDetailsComponent } from './components/Outfit/outfit-details/outfit-details.component';
import { OutfitsService } from './services/outfits.service';
import { ActionsService } from './services/actions.service';
import { OutfitCreateComponent } from './components/outfit/outfit-create/outfit-create.component';
import { OutfitEditComponent } from './components/Outfit/outfit-edit/outfit-edit.component';
import { OutfitDeleteComponent } from './components/outfit/outfit-delete/outfit-delete.component';
import { ActionDetailComponent } from './components/action/action-detail/action-detail.component';
import { ActionEditComponent } from './components/action/action-edit/action-edit.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {AuthService} from 'src/app/services/auth.service';
import { LoginComponent } from './components/login/login.component'; 


const routes = [
    {
  path: 'location', children:[
    {path: '', component: LocationIndexComponent},
    {path: 'create', component: LocationCreateComponent},
    {path: 'detail/:id', component: LocationDetailComponent},
    {path: 'edit/:id', component: LocationEditComponent},
    {path: 'delete/:id', component: LocationDeleteComponent}
  ]
},
{
  path: 'Outfit', children:[
    {path:'detail/:id', component:OutfitDetailsComponent},
    {path: 'create', component: OutfitCreateComponent},
    {path: 'edit/:id', Component: OutfitEditComponent},
    {path: 'delete/:id', component: OutfitDeleteComponent}
  ]
},
{
  path: 'Action', children:[
    {path: 'detail/:id', component: ActionDetailComponent},
    {path: 'edit/:id', component: ActionEditComponent},
  ]
},
   {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: RegistrationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationIndexComponent,
    LocationCreateComponent,
    LocationDetailComponent,
    LocationEditComponent,
    LocationDeleteComponent,
    OutfitDetailsComponent,
    OutfitCreateComponent,
    OutfitEditComponent,
    OutfitDeleteComponent,
    ActionDetailComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
     MatButtonModule,
    BrowserAnimationsModule

  ],
  providers: [
  LocationService,
  OutfitsService,
  ActionsService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }