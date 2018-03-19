import { Component, OnInit } from '@angular/core';
import { BasicService } from '../Service/Basic.service';

@Component({
  selector: 'app-learn-services',
  templateUrl: './learn-services.component.html',
  styleUrls: ['./learn-services.component.css']
})
export class LearnServicesComponent implements OnInit {

  name: string;
  data: any;
  PostId: any;
  SinglePost: any;

  constructor(private MyService: BasicService) {
    this.name = "Angular Service";

    this.MyService.GetPosts().subscribe(posts => { this.data = posts });

    this.PostId = "0";

    this.SinglePost = {
      id: '',
      userId: '',
      title: '',
      body: ''
    }
  }

  GetPost() {
    this.MyService.GetPostAsPerId(this.PostId).subscribe(post => { this.SinglePost = post; });
  }


  ngOnInit() {
  }

}
