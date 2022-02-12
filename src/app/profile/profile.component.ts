
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

  users!:User
  repos!:Repo
  
  

  constructor(private myservice:RepoRequestService,private http:HttpClient) { 
    

  }

  ngOnInit(): void {

     interface ApiResponse{
       url : string
       html_url:string
       followers:number
       following:number
       avatar_url:string
       login:string
       repos:number
       createDate:Date
     }
    
  this.http.get<ApiResponse>("https://api.github.com/users/").subscribe(data =>{
     //successful api request
     this.users = new User(data.url,data.html_url,data.followers,data.following
      ,data.avatar_url,data.login,data.repos,data.createDate)
  })
  

      interface Response{
        name:string
        html_url:string
        description:string
        createDate:Date
        language:string

      }

      this.http.get<Response>("http://api.github.com/users/").subscribe(data =>{

      this.repos = new Repo(data.name,data.html_url,data.description,data.createDate,data.language)
      })

    }


  }