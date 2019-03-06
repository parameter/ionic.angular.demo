import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  uid: string;

  constructor(public afs: AngularFirestore) {} 

  init() {
    
  }

  saveProfile(profile) {
    return this.afs.collection('profiles').doc(this.uid).set(profile);
  }

  fetchProfile() {
    return this.afs.collection('profiles').doc(this.uid).valueChanges();
  }

  updateProfile(id,profile) {
    return this.afs.collection('profiles').doc(this.uid).ref.update(profile);
  }

  updateProfilePic(picName) {
    return this.afs.collection('profiles').doc(this.uid).update({ pic: picName });
  }

  saveUid(uid) {
    this.uid = uid;
    this.init();
  }

  getProfile(): Observable<any> {
    return this.fetchProfile();
  }

  getProfiles(): Observable<any> {
    return this.afs.collection('profiles').snapshotChanges();
  }

}
