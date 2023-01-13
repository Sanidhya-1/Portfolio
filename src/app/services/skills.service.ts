import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  
  getAll():string[]{
     return [
      '/assets/Dsa.jpeg',
      '/assets/java.jpg',
      '/assets/spring_boot.png',
      '/assets/mysql.jpeg',
      '/assets/angular.png',
      '/assets/junit+mockito.png',
      '/assets/git.jpeg'
     ]
  }

}
