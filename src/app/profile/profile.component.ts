
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:User
  repos!:Repo
  
  

  constructor(private myservice:RepoRequestService,private http:HttpClient) { 
    // this.myservice.searchName()

  }

  ngOnInit(): void {

    this.myservice.searchName();
    this.user = this.myservice.user
    this.myservice.searchRepos()
    this.repos = this.myservice.repo

     interface ApiResponse{
       name:string
       bio: string;
       url : string
       html_url:string
       followers:number
       following:number
       avatar_url:string
       login:string
       repos:number
       createDate:Date
       location:string
     }
    
  this.http.get<ApiResponse>("https://api.github.com/users/").subscribe(data =>{
     //successful api request
     this.user = new User(data.name,data.url,data.html_url,data.followers,data.following
      ,data.avatar_url,data.login,data.bio,data.repos,data.location,data.createDate)
  })
  

      interface Response{
        name:string
        html_url:string
        description:string
        createDate:Date
        language:string
        repos_url:string

      }

      this.http.get<Response>("http://api.github.com/users/").subscribe(data =>{

      this.repos = new Repo(data.name,data.html_url,data.description,data.createDate,data.language,data.repos_url)
      })

    }
    
    

  }