import {Page} from 'ionic-angular';
import {HandbagService} from '../../services/handbagstories';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [HandbagService]
})
export class Page1 {

  constructor(private _service: HandbagService) {

  }

  public foundStories
  public page = 1
  public count = 20
  public storyType = 'designer'

  onPageWillEnter() {
    this._service.getStories(this.page,this.count,this.storyType).subscribe(
        data => {
            this.foundStories = data.json();
        },
        err => console.error(err),
        () => console.log('getStories completed')
    );
  }

}
