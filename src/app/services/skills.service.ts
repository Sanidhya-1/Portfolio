import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  
  getAll():string[]{
     return [
      '/assets/IMG_20180205_151409.jpg'
     ]
  }

}
