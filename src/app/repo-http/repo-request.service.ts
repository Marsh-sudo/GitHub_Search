import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  user!: User;
  repo!: Repo
  apiToken: any
  

  private userName!: string
  private repoName!: string
  //  private clientid!: "6c69630dff9503ee16ec"
  // private clientsecret!: "ede1df9c090a73d85914f2745524d7036b254602 "
  getUser!: Response | undefined
  getRepo!: Repo | undefined;
  url = "https://api.github.com/users/"

  constructor(private http: HttpClient) {
    // console.log("service is now working")
    this.user = new User("", "", "", 0, 0, "", "", "", 0, "", new Date())
    this.repo = new Repo("", "", "", new Date(), "", "")
    this.userName = "Marsh-sudo"
    this.apiToken = "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"
  }


  searchName() {

    // interface ApiResponse {
    //   name: string
    //   url: string
    //   html_url: string
    //   followers: number
    //   following: number
    //   avatar_url: string
    //   login: string
    //   public_repos: number
    //   createDate: Date
    //   location: string
    // }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<any>(this.url + this.userName + '?access_token=' + this.apiToken).toPromise().then(
        response => {
          this.user.bio = response.bio
          resolve();
        }
        , (error) => {
          console.log("shida");
          reject();
        }
      )
    });
    return promise;

    //  return new Promise((resolve,reject)=>{
    //   this.http.get<Response>("https://api.github.com/users/" + this.userName + "?clientid=" + this.clientid
    //   + "&clientsecret=" + this.clientsecret + environment.apikey).toPromise().then(
    //     (results)=>{
    //     this.getUser = results;
    //     resolve(0);
    //   },(error) => {
    //     console.log(error);
    //     reject();
    //   })
    //  })
  }


  searchRepos() {

    // interface Repos {
    //   name: string;
    //   html_url: string;
    //   description: string;
    //   forks: number;
    //   atcherCounted: number;
    //   language: string;
    //   createDate: Date;
    //   repos_url: string
    // }
    let forks = new Promise<void>((resolve, reject) => {
      this.http.get<any>('https://api.github.com/users/' + this.userName + '/repos?order=created&sort=asc?access_token=' + environment.apikey)
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
    return forks
  }
}



