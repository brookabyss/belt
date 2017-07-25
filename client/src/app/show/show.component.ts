import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { HttpService } from '../http.service'
import { User } from '../user'
import { Bucket } from '../bucket'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  user: any;
  checked_user: any;
  users: any;
  buckets: any;
  subscription: Subscription
  error_messages=[]
  constructor(private _router: Router, private _httpService: HttpService,private _activatedRoute: ActivatedRoute ){
    this._activatedRoute.params.subscribe((param)=>{
      console.log("checked user loaded and url id given is: ", param.id);
      this.checked_user=param.id
    }) 
    this.subscription=this._httpService.observedUser.subscribe(
          user=> {
            this.user=user;
            console.log("the subscribed user's id", this.user._id)},
          err=> {console.log("subscription error inside dash comp" , err);
          this.error_messages.push(err)},
          ()=>{}
      )
    // get buckets 
    this._httpService.getBuckets()
    .then(buckets=> {console.log("User buckets in show", buckets)
    this.buckets=buckets})
    .catch(err=> {
              console.log("getting user buckets error",err)
              this.error_messages.push(err)
            })
    //get users
      this._httpService.getUsers()
     .then(users=>{
       console.log("returned users in dash", users)
       this.users=users
     })
      .catch(err=>{
        this.error_messages.push(err)
        console.log("Attempting to get all users error" , err)
      })

  }

  ngOnInit() {
  }

}
