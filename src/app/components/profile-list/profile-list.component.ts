import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileListComponent implements OnInit {

  profiles: Array<any>;

  constructor(private profileService: ProfileService) { }

  living_factors = {
    '4': 'rainbow-flag.svg',
    '5': 'house.svg',
    '6': 'apartments.svg',
    '7': 'animals.svg',
    '8': 'forest.svg',
    '9': 'tram.svg'
  };

  ngOnInit() {

    this.profileService.getProfiles().subscribe(profiles => {
      this.profiles = profiles.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        var _living_factors = [];
        data.living_factors.forEach((item,i) => {
          if(typeof this.living_factors[item] !== 'undefined') {
            _living_factors.push(this.living_factors[item]);
          }
        });
        data.living_factors = _living_factors || [];
        return { id, ...data };
      });
    });

  }

  _iconImg(fact) {
    return typeof this.living_factors[fact] !== 'undefined' ? this.living_factors[fact] : '';
  }

  profilePic(url) {
    return url || 'assets/icon/person.png';
  }

}
