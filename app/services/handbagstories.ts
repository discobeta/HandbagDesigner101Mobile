import {Injectable} from 'angular2/core';  
import {Http, Headers} from 'angular2/http';

@Injectable()
export class HandbagService {  
    constructor(private http: Http) {
    }

    getStories(page,count,type) {
        let stories = this.http.get(`https://handbagdesigner101.com/story/mobile/${page}/${count}/${type}`);
        return stories;
    }
}