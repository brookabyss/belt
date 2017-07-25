import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, current_user: any): any {
    if(!value){
      return value
    }
     return  value.filter(user=>{ return user._id!=current_user._id })
    

      
  }

}
