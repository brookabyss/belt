import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { HttpService } from '../http.service'
import { User } from '../user'
import { Bucket } from '../bucket'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {
  user: any;
  users: any;
  bucket=new Bucket
  buckets=[]
  tagged_user: any;
  error_messages=[]
  subscription: Subscription;
  constructor(private _router: Router, private _httpService: HttpService,private _activatedRoute: ActivatedRoute ) { 

      this.subscription=this._httpService.observedUser.subscribe(
          user=> {
            this.user=user;
            console.log("the subscribed user's id", this.user._id);
          },
  
          err=> {console.log("subscription error inside dash comp" , err)
          this.error_messages.push(err)},
          ()=>{}
      )

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

    // getBuckets
    this._httpService.getBuckets()
     .then(buckets=>{
       console.log("returned buckets in dash", buckets)
       this.buckets=buckets
       
     })
      .catch(err=>{
        this.error_messages.push(err)
        console.log("Attempting to get all buckets error" , err)
      })

  }

  ngOnInit() {
  }
  onSubmit(){
    console.log("bucket from dashboard",this.bucket)
    if (this.tagged_user){
      console.log("inside tagged user adding tagged user", this.tagged_user)
      this.bucket._tagged=this.tagged_user
    }
    this.bucket._creator=this.user._id
    
    this._httpService.createBucket(this.bucket)
    .then(buckets=>{
       console.log("create bucket in dash",buckets)
       this.buckets=buckets
     })
      .catch(err=>{
        this.error_messages.push(err)
        console.log("Attempting to create buckets" , err)
      })

  }

  changeStatus(id){
    console.log("change status Id", id)
    let current_bucket: any
    for (let i =0; i< this.buckets.length ; i++){
      if (this.buckets[i]._id==id){
        console.log("inside loop")
        this.buckets[i].status=!this.buckets[i].status
        current_bucket=this.buckets[i]
         console.log("inside loop", current_bucket)
        break;
      }
    }
    this._httpService.updateBucket(current_bucket)
    .then(data=>{
       console.log("bucket update in dash",data)
       
     })
      .catch(err=>{
        this.error_messages.push(err)
        console.log("Attempting to update bucket" , err)
      })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
