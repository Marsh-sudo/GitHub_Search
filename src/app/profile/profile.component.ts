import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users!:User
  repos!:Repo
  

  constructor(private profileservice:RepoRequestService) { 
    
  }

  ngOnInit(): void {
    this.users = this.profileservice.getUsers
  }

}
