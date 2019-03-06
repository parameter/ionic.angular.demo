import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab3Page } from './tab3.page';

import { FirebaseUIModule } from 'firebaseui-angular';

import { UserService } from '../services/user.service';
import { ProfileService } from '../services/profile.service';
import { ProfileListComponent } from '../components/profile-list/profile-list.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AngularFireStorageModule } from '@angular/fire/storage';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatIconModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FirebaseUIModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule
  ],
  declarations: [
    Tab3Page,
    ProfileListComponent
  ],
  providers: [
    UserService,
    ProfileService
  ]
})
export class Tab3PageModule {}
