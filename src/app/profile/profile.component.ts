import { Component, OnInit } from '@angular/core';
import { RepoRequestService } from '../repo-http/repo-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private reporequestservice:RepoRequestService) { }

  ngOnInit(): void {
  }

}
