import { Component, OnInit } from '@angular/core';
import { BloggerService } from '../../services/blogger.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  blogInfo;

  constructor(private bloggerService: BloggerService) {

  }

  ngOnInit() {
    this.bloggerService.getBlogInfo().subscribe((data) => {
      this.blogInfo = <any>data;
      console.log(`${this.blogInfo.name} has ${this.blogInfo.posts.totalItems} items. Its Locale (language) is ${this.blogInfo.locale.language}`);
    });
  }
  dateFormat = (currentValue:string) => {
    let dateFinal = new Date(currentValue);    
    return dateFinal.toLocaleString();
  }

}
