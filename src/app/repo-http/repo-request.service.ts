import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  getUsers!:User;
  getRepos!:Repo

  private username!: string;
  private clientid!:" 6c69630dff9503ee16ec"
  private clientsecret!:"ede1df9c090a73d85914f2745524d7036b254602 "

  constructor(private http: HttpClient) {
       this.getUsers= new User("","",0,0,"","",0, new Date())
       this.getRepos = new Repo()
   }



   

   getProfileInfo(){
     return this.http.get<Response>("https://api.github.com/users/" +this.username + "?clientid=" + this.clientid
     + "&clientsecret=" + this.clientsecret)
   }
}
