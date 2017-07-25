import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value: any, _status): any {
    console.log("buckets filter check", value)
  if (!value){
    return value
  }
  console.log("check status in pipe",value[0].status)
  console.log("check param", _status)
   return  value.filter(bucket=>{ return bucket.status===_status})
    
  }

}
