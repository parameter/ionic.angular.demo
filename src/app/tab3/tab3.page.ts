import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() { }

}
