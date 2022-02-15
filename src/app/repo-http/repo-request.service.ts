import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  // user!: User;
  // repo!: Repo
  // apiToken: any
  

  private userName!: string
  private clientid!: "6c69630dff9503ee16ec"
  private clientsecret!: "ede1df9c090a73d85914f2745524d7036b254602 "
  

  constructor(private http: HttpClient) {
    // console.log("service is now working")
    // this.user = new User("", "", "", 0, 0, "", "", "", 0, "", new Date())
    // this.repo = new Repo("", "", "", new Date(), "", "")
    this.userName = "Marsh-sudo"
 
}
  
  searchName(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientid
    + "&client_secret=" + this.clientsecret);
    map((res: { json: () => any }) => res.json());
  }


  searchRepos() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.userName +
        '/repos?client_id=' +
        this.clientid +
        '&client_secret=' +
        this.clientsecret
    );
    map((res: { json: () => any }) => res.json());

  }
  updateProfile(personName:string){
    this.userName = personName

  }



}