import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

  constructor(public http: HttpClient) { }
  
  title: string;  
  private apiKey = "AIzaSyBI0QPsnXDKe0Y0J3jJZhnIEJNmGo0phZs";  
  useLabel = "";
  useSearchTerm = "";

  getBlogInfo() {
    let url = `https://www.googleapis.com/blogger/v3/blogs/byurl?key=${this.apiKey}&url=https://lithindi.blogspot.com/`;
    return this.http.get<any>(url);
  }

  getAllPosts(method:string,token:string) {    
    //&maxResults=10    
    let url = "";
    if(method=="all" || method=="")
      url = `https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts?key=${this.apiKey}`;
    else if(method=="label")
      // url = `https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts/search?q=label:"${this.useLabel}"&key=${this.apiKey}`;
      url = `https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts?labels=${this.useLabel}&key=${this.apiKey}`;
    else if(method=="search")
      url = `https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts/search?q=${this.useSearchTerm}&key=${this.apiKey}`;    
    if(token===undefined || token=="")    {
      console.log(url);
      return this.http.get<any>(url);    
    }
      
    else {
      url += "&pageToken="+token;
      console.log(url);
      return this.http.get<any>(url);
    }          
  }

  getPost(id:string) {
    //https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts/4288160622062804044?key=${this.apiKey}
  }

  getPostsByLabel(label:string) {
    this.useLabel = label;
	//working perfect. PageToken issue solved. https://stackoverflow.com/questions/54248434/how-to-get-blog-posts-by-label-in-blogger-api
	//https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts?labels=%E0%A4%85%E0%A4%AB%E0%A4%B8%E0%A4%BE%E0%A4%A8%E0%A5%87&pageToken=CgkIChiA3oW61y0Q6_mGkYDy6bZm&key=AIzaSyBI0QPsnXDKe0Y0J3jJZhnIEJNmGo0phZs
	
    /* let url = `https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts/search?q=label:"${label}"&key=${this.apiKey}`;    
    return this.http.get<any>(url);     */
  }

  searchPosts(term:string) {
    this.useSearchTerm = term;
    /* let url = `https://www.googleapis.com/blogger/v3/blogs/7380739601283005675/posts/search?q=${term}&key=${this.apiKey}`;    
    return this.http.get<any>(url);         */
  }

  getComments(url:string) {
    let finalUrl = `${url}?key=${this.apiKey}`;    
    return this.http.get<any>(finalUrl);    
  }
  
  getApiKey() {
    return '' + this.apiKey;
  }
  fetchPosts() {
    
  }


}
