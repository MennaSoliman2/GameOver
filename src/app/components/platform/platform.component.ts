import { Component } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent {
  populargames:any[]=[]
  platform:any
  index:any =20
  click:any = 1
  isLoading:boolean =true
  constructor(private _games:GamesService, private loaderservices:LoaderService ){}

  ngOnInit(): void {
    this._games.platform.subscribe((x:any)=>{
      setTimeout(() => {

      console.log(x);
      this.isLoading = false
    this.populargames = x


    },1000)

  })
  }
  add(){
    this.index = this.index + 20
    }
}
