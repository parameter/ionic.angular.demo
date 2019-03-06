import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Page } from './tab1.page';
import { ProfileComponent } from '../components/profile/profile.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { FileSizePipe } from '../components/file-upload/file-size.pipe';

import { FirebaseUIModule } from 'firebaseui-angular';

import { UserService } from '../services/user.service';
import { ProfileService } from '../services/profile.service';

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
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
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
    Tab1Page,
    ProfileComponent,
    FileUploadComponent,
    FileSizePipe
  ],
  providers: [
    UserService,
    ProfileService
  ]
})
export class Tab1PageModule {}
