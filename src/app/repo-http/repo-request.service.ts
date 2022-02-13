import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  user!:User;
  repo!:Repo

  private userName!: string
  private repoName!:string
  private clientid!:" 6c69630dff9503ee16ec"
  private clientsecret!:"ede1df9c090a73d85914f2745524d7036b254602 "
  getUser!: Response | undefined
  getRepo!: Repo | undefined;

  constructor(private http: HttpClient) {
    console.log("service is now working")
       this.user= new User("","",0,0,"","",0,"", new Date())
       this.repo = new Repo("","","",new Date(),"","")
   }


    searchName(){

      interface ApiResponse{
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

     let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<Response>("https://api.github.com/users/" + this.userName + "?clientid=" + this.clientid
      + "&clientsecret=" + this.clientsecret + environment.apiUrl).toPromise().then(Response=>{
        this.getUser = Response
        resolve();
      },(error) => {
        console.log(error);
        reject();
      })
     })
    }


    searchRepos() {

      interface Repos{
        name: string;
        html_url: string;
        description: string;
        forks: number;
        atcherCounted: number;
        language: string;
        createDate: Date;
        repos_url:string
      }
      return new Promise<void>((resolve, reject) => {
        this.http.get<Repos>('https://api.github.com/users/' + this.repoName + '/repos?order=created&sort=asc?access_token=' + environment.apiUrl)
        .toPromise().then(
          (results) => {
            this.getRepo = results;
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
      });
    }
  }


   
