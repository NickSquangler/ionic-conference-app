import {Page, NavParams} from 'ionic/ionic';
import {ConferenceData} from '../providers/conference-data';


@Page({
  templateUrl: 'app/timeline-filter/timeline-filter.html'
})
export class TimelineFilterPage {

  constructor(confData: ConferenceData, navParams: NavParams) {
    this.tracks = [];
    let filteredTracks = navParams.data;

    confData.getTracks().then(trackNames => {

      trackNames.forEach(trackName => {
        this.tracks.push({
          name: trackName,
          isChecked: (filteredTracks.indexOf(trackName) < 0)
        });
      });

    });
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to filter by
    let excludeTracks = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.close(excludeTracks);
  }
}