import { Component, OnInit } from '@angular/core';
import { BloggerService } from '../services/blogger.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
// import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  siteInfo;
  searchTerm: string;
  nextPageToken: string = "";
  posts: any[] = [];
  truncatedPostText: string;
  morePosts: boolean = false;
  isOnline: boolean;
  date: string[];
  method:string = "";

  constructor(
    private bloggerService: BloggerService,
    public router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.bloggerService.getBlogInfo().subscribe((data) => {
      this.siteInfo = data;
      console.log(this.siteInfo);
    });
    this.getAll();
  }
  reset() {
    this.posts = [];
    this.nextPageToken = "";
    this.morePosts = false;
    this.method = "";
  }
  setValuesAfterFetch(res) {
    if (res.nextPageToken != undefined) {
      this.nextPageToken = res.nextPageToken;
      this.morePosts = true;      
    }
    else if (res.items.length < 10) {
      this.morePosts = false;      
    }    
  }
  getAll() {
    this.reset();
    this.bloggerService.getAllPosts("all","").subscribe((res) => {
      console.log(res);
      this.posts = res.items;
      this.setValuesAfterFetch(res);
    });
  }
  nextPage(token) {
    if (this.morePosts) {
      this.bloggerService.getAllPosts(this.method,token).subscribe((res) => {
        console.log(res);
        res.items.forEach(p => {
          this.posts.push(p);
        });        
        /* let ids:string [] = [];
        this.posts.forEach(post => ids.push(post.id));
        ids = [...new Set(ids)];
        console.log(ids);
        for (let index = 0; index < ids.length; index++) {
          for (let i = 0; i < res.items.length; i++) {
            if(ids[index] != res.items[i].id) {
              this.posts.push(res.items[i]);
              ids.push(res.items[i].id);
            }
              
          }                  
        } */                            
        // this.posts = [...new Set(this.posts)];        
        this.setValuesAfterFetch(res);        
      });
    }
  }

  truncateWithEllipses(text, max) {
    return text.substr(0, max - 1) + (text.length > max ? '...' : '');
  }

  async gotoPost(item) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    this.presentLoading(loading);
    //this.interstial();
    loading.dismiss();

    let navigationExtras: NavigationExtras = {
      state: {
        post: item
      }
    };
    this.router.navigate(['/post'], navigationExtras);
  }
  async presentLoading(loading) {
    return await loading.present();
  }
  getPostsBySearch() {
    this.reset();
    //if multiple words, replace space with %20
    let term = encodeURIComponent(this.searchTerm.trim());
    this.bloggerService.useSearchTerm = term;
    this.bloggerService.getAllPosts("search","").subscribe((res) => {
      this.posts = res.items;
      this.setValuesAfterFetch(res);
      this.method = "search";
    });
  }
  postByLabel(label) {
    this.reset();
    //if multiple words, replace space with +
    let labelFixed = label.trim().replace(/\s/g, '+');
    this.bloggerService.useLabel = labelFixed;
    this.bloggerService.getAllPosts("label","").subscribe((res) => {
      this.posts = res.items;
      this.setValuesAfterFetch(res);
      this.method = "label";
    });
  }

  doRefresh(event) {
    this.getAll();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  heroImgUrl = (val: string) => {
    if (val.match(/\<img(.*?)\/>/) != null) {
      let url = val.match(/\<img(.*?)\/>/)[1];
      url = url.match(/src\=\"(.*?)"/)[1].toString();
      return url;
    }
    else console.log("url not found.");
  }
  trunc = (val: string) => {
    let e = val.replace(/(<([^>]+)>)/ig, '');
    e = this.truncateWithEllipses(e, 100);
    return e;
  }

  parseCheck(val: string) {
    if (val.match(/\<img(.*?)\/>/) != null) {
      let url = val.match(/\<img(.*?)\/>/)[1];
      url = url.match(/src\=\"(.*?)"/)[1].toString();
      console.log(url);
    }
    let e = val.replace(/(<([^>]+)>)/ig, '');
    e = this.truncateWithEllipses(e, 200);
    console.log(e);
    /* else if (val.match(/\/div>(.*?)\<br/) != null) {
      let e = val.match(/\>(.*?)\</)[1].toString();
      e = this.truncateWithEllipses(e, 200);
      console.log(e);
    } */
  }

}
