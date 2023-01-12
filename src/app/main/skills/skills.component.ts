import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill : string[] =[] ;
  constructor(private sk:SkillsService) { }

  ngOnInit(): void {
    this.skill = this.sk.getAll();
  }

}
