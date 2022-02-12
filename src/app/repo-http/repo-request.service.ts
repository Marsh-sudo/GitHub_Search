import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  getUsers!:User;
  getRepos!:Repo

  private username!: string;
  private clientid!:" 6c69630dff9503ee16ec"
  private clientsecret!:"ede1df9c090a73d85914f2745524d7036b254602 "
  getUser!: Response | undefined
  getRepo!: Repo | undefined;

  constructor(private http: HttpClient) {
       this.getUsers= new User("","",0,0,"","",0, new Date())
       this.getRepos = new Repo("","","",new Date(),"")
   }


    searchName(username : string){
      interface ApiResponse{
        url:string,
        html_url:string,
        avatar_url:string,
        login:string,
        followers:number,
        following:number,
        repos:number,
        createDate:Date,

      }

     let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<Response>("https://api.github.com/users/" + username + "?clientid=" + this.clientid
      + "&clientsecret=" + this.clientsecret + environment.apiUrl).toPromise().then(Response=>{
        this.getUser = Response
        resolve();
      },(error) => {
        console.log(error);
        reject();
      })
     })
    }


    searchRepos(searchName: string) {

      interface Repos{
        name: string;
        html_url: string;
        description: string;
        forks: number;
        atcherCounted: number;
        language: string;
        createDate: Date;
      }
      return new Promise<void>((resolve, reject) => {
        this.http.get<Repos>('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?access_token=' + environment.apiUrl)
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


   
