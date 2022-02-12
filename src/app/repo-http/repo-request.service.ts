import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { rejects } from 'assert';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  getUsers!:User;
  getRepos!:Repo

  private username!: string;
  private clientid!:" 6c69630dff9503ee16ec"
  private clientsecret!:"ede1df9c090a73d85914f2745524d7036b254602 "
  getUser: Response | undefined;

  constructor(private http: HttpClient) {
       this.getUsers= new User("","",0,0,"","",0, new Date())
       this.getRepos = new Repo()
   }


    searchName(){
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
      this.http.get<Response>(environment.apiUrl).toPromise().then(Response=>{
        this.getUser = Response
        resolve();
      },(error) => {
        console.log(error);
        reject();
      })
     })
    }


   getProfileInfo(){
     return this.http.get<Object("https://api.github.com/users/" +this.username + "?clientid=" + this.clientid
     + "&clientsecret=" + this.clientsecret)
     .map((res: { json: () => any; }) => res.json());
   }
}
