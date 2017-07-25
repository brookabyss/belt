import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getUserBuckets'
})
export class GetUserBucketsPipe implements PipeTransform {

  transform(value: any, user_id: any): any {
    if (!value){
      return value
    }
    return value.filter(bucket=>{
      return bucket._creator_id==user_id || bucket._tagged.includes(user_id)
    })
  }

}
