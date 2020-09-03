import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {BloggerService} from '../../services/blogger.service';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  public post: any;
  comments: any[] = [];

  constructor(
    private bloggerService: BloggerService,
    private route: ActivatedRoute, 
    private router: Router,
    private browserTab: BrowserTab
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = this.router.getCurrentNavigation().extras.state.post;      
    });
    console.log(this.post);                
    this.bloggerService.getComments(this.post.replies.selfLink).subscribe((data) => {
      this.comments.push(...data.items);
      console.log(this.comments);
    });        
  }

  changeFontSize(val) {
    var txt = document.getElementById("post-content");
    var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + val) + 'px';
  }
  interstitial() {
    /* var randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (randomnumber == 2) {
      this.admob.interstitial.config({
        isTesting: false,
        id: 'ca-app-pub-9293070686220717/7452632736'
      })
      this.admob.interstitial.prepare()
      this.admob.interstitial.show() */
    }  

  loadComments(url) {
    this.bloggerService.getComments(url).subscribe((data) => {
      this.comments = data.items;
      console.log(this.comments);
    });    
  }

  openUrl() {
    let url = `${this.post.url}#comments`;
    this.browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        this.browserTab.openUrl(url);
      } else {
        // open URL with InAppBrowser instead or SafariViewController
      }
    });
  }

  dateFormat = (currentValue:string) => {
    let dateFinal = new Date(currentValue);    
    return dateFinal.toLocaleString();    
  }  

  timeRequired = (val:string) => {
    var count = val.replace( /(<([^>]+)>)/ig, '').split(' ').length;
					var wordsperminute = 233;
					var readingtime = count / wordsperminute;
          readingtime = +readingtime.toFixed(1);
          console.log({readingtime});
          return readingtime.toString();
  }

  grabDate = (val:string) => {
    let dateFinal = new Date(val);
    return dateFinal.toDateString();   
    
  }  

}