import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getName'
})
export class GetNamePipe implements PipeTransform {

  transform(id: any, users: any): any {
    for (var i=0; i< users.length; i++){
      if (!id){
        return id
      }
      if (id==users[i]._id){
        return users[i].name
      }
    }
    
  }

}
