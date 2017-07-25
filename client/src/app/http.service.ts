import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class HttpService {

  observedUser = new BehaviorSubject(null);

  constructor(private _http:Http) {
   }

  updateUser(user){
    this.observedUser.next(user)
  }

  login(user){
    console.log('http login service', user.name)
    return this._http.post('/login', user).map(data => data.json()).toPromise()
  }
  getUsers(){
        console.log(" Service get users service")
        return this._http.get('/get_users').map(data => data.json()).toPromise()

  }
  createBucket(bucket){
        console.log('create bucket service', bucket.title)
        return this._http.post('/create_bucket', bucket).map(data => data.json()).toPromise()

  }
  getBuckets(){
    console.log(" Service get buckets service")
    return this._http.get('/get_buckets').map(data => data.json()).toPromise()

  }
  // get_user_buckets(id){
  //   console.log(" Service get user buckets service", id)
  //   return this._http.post('/get_user_buckets', {id: id}).map(data => data.json()).toPromise()


  // }

  updateBucket(bucket){
     console.log(" Service update buckets service")
    return this._http.post('/update_bucket',bucket).map(data => data.json()).toPromise()
  }

  

  
}
