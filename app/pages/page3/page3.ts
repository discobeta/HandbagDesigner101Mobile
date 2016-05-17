import {Page, InfiniteScroll} from 'ionic-angular';
import {HandbagService} from '../../services/handbagstories';

@Page({
  templateUrl: 'build/pages/page3/page3.html',
  providers: [HandbagService]
})
export class Page3 {

  constructor(private _service: HandbagService) {

  }

  public foundStories
  public page = 1
  public count = 20
  public storyType = 'street'
  public temporaryStories = []

  goToStory(link) {
  	window.open('http://handbagdesigner101.com'+link, '_blank', 'location=yes');
  }

  loadMoreStories() {
    this._service.getStories(this.page,this.count,this.storyType).subscribe(
        data => {
            this.foundStories = data.json()
        },
        err => console.error(err),
        () => console.log('loadMoreStories completed')
    )
    if (this.foundStories[19]) {
    	this.page = this.page + 1
    } else {
    	this.page = 1
    }
    
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    this._service.getStories(this.page,this.count,this.storyType).subscribe(
        data => {
        	this.temporaryStories = data.json();
        },
        err => console.log(err),
        () => console.log('loadMoreStories completed')
    )

	for (var i = 0; i < this.temporaryStories.length; i++) {
		this.foundStories.push( this.temporaryStories[i] );
	}
	this.page = this.page + 1;
    
    infiniteScroll.complete();

	if (this.foundStories.length > 90) {
		infiniteScroll.enable(false);
	}
    
  }

  onPageWillEnter() {
  	this.page = 1
    this._service.getStories(this.page,this.count,this.storyType).subscribe(
        data => {
            this.foundStories = data.json();
        },
        err => console.log(err),
        () => console.log('getStories completed')
    );
    
  }

}
