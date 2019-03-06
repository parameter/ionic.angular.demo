import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileService } from '../../services/profile.service';
import { FormsModule, FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireList } from '@angular/fire/database';
import _ from 'underscore';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  private profile: Object;

  profileForm: FormGroup;

  // In how many months do you need to find a place? 
  time_frames: Array<any> = [
    { name: 'Söker aktivt, behöver boende snarast',  selected: false, val: '1' },
    { name: 'Söker boende om 1 - 3 månader',  selected: false, val: '3' },
    { name: 'Söker boende om 3 - 6 månader',  selected: false, val: '6' },
    { name: 'Söker boende om 6+ månader',  selected: false, val: '7' }
  ];

  // cost per month -spans
  cost_monthly: Array<any> = [
    { name: '2000 - 3000',  selected: false, val: '1' },
    { name: '3000 - 4000',  selected: false, val: '2' },
    { name: '4000+',  selected: false, val: '3' }
  ];

  // tags for types of living 
  living_factors: Array<any> = [
    { name: 'HBTQ',  selected: false, val: '4', icon: 'rainbow-flag.svg' },
    { name: 'Hus / Villa',  selected: false, val: '5', icon: 'house.svg' },
    { name: 'Lägenhet',  selected: false, val: '6', icon: 'apartments.svg' },
    { name: 'Djur',  selected: false, val: '7', icon: 'animals.svg' },
    { name: 'Natur',  selected: false, val: '8', icon: 'forest.svg' },
    { name: 'Pendling',  selected: false, val: '9', icon: 'tram.svg' }
  ];

  constructor(
    public afAuth: AngularFireAuth,
    private profileService: ProfileService,
    public formBuilder: FormBuilder
  ) { }

  subscribeToProfile() {
    this.profileService.getProfile().subscribe(profile => {
      this.updateForm(profile);
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe( user => {
      this.profileService.saveUid(user.uid);
      this.subscribeToProfile();
    });

    this.profileForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      pic: this.formBuilder.control(''),
      time_frames: new FormArray([]),
      location: this.formBuilder.control(''),
      cost_monthly: this.formBuilder.control(null),
      living_factors: new FormArray([]),
    });

    this._addArray('time_frames');
    this._addArray('living_factors');

  }

  _addArray(name) {
    this[name].map((o, i) => {
      const control = new FormControl(false);
      (this.profileForm.controls[name] as FormArray).push(control);
    });
  }

  updateForm(profile) {

    console.log(profile.pic);
    
    // name
    this.profileForm.get('name').setValue(profile.name);

    // pic
    this.profileForm.get('pic').setValue(profile.pic);

    // time_frames
    this.time_frames.forEach((item,i) => {
      if (this.arrayContains(profile.time_frames,item.val)) {
        this.profileForm.get('time_frames')['controls'][i].setValue(true);
      } else {
        this.profileForm.get('time_frames')['controls'][i].setValue(false);
      }
    });

    // cost_monthly
    this.profileForm.get('cost_monthly').setValue(profile.cost_monthly);

    // living_factors
    this.living_factors.forEach((item,i) => {
      if (this.arrayContains(profile.living_factors,item.val)) {
        this.profileForm.get('living_factors')['controls'][i].setValue(true);
      } else {
        this.profileForm.get('living_factors')['controls'][i].setValue(false);
      }
    });

  }

  arrayContains(arr,val) {
    return _.filter(arr, function(item) { 
      return item == val; 
    }).length;
  }

  addFormControlArray(items) {
    const array = items.map((item, i) => {
      return this.formBuilder.control(false);
    });

    return this.formBuilder.array(array);
  }

  saveForm() {
    if (this.profileForm.dirty && this.profileForm.valid) {

      var data = this.profileForm.getRawValue();

      var _time_frames= [];
      data.time_frames.forEach((item,i) => {
        if (item == true) {
          _time_frames.push(this.time_frames[i].val);
        }
      });
      data.time_frames = _time_frames;

      var _living_factors = [];
      data.living_factors.forEach((item,i) => {
        if (item == true) {
          _living_factors.push(this.living_factors[i].val);
        }
      });
      data.living_factors = _living_factors;

      this.profileService.saveProfile(data);
    }
  }

}


