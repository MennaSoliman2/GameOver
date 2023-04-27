import { Component } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  populargames:any[]=[]
  platform:any
  index:any =20
click:any = 1
isLoading:boolean =true
  constructor(private _games:GamesService , private loaderservices:LoaderService ){}

  ngOnInit(): void {

    this._games.sort.subscribe((x:any)=>{
      setTimeout(() => {

      this.populargames = x
      console.log(this.populargames);
      this.isLoading = false

    },1000)

  })
}
  add(){
    this.index = this.index + 20
    }
}
