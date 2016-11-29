import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import { Router } from '@angular/router';
import {HeroService} from './hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})


export class HeroesComponent implements OnInit { 
   ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private router: Router,private heroService: HeroService) { }
  heroes:Hero[];
  selectedHero:Hero;
  
  title = 'Tour of Heroes';
  hero:Hero ={
    id:11,
    name: 'Windstorm'
  };
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 }
