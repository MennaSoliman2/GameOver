import { Component , OnInit } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit{
  populargames:any[]=[]
  index:any =20
  click:any = 1
  isLoading:boolean =true
constructor(private _games:GamesService , private loaderservices:LoaderService ){}
ngOnInit(): void {
  this.loaderservices.isloader.next(true)
  this._games.getallgames().subscribe((res)=>{
    setTimeout(() => {
      this.loaderservices.isloader.next(false)
      this.populargames = res;
     this.isLoading = false
    }, 1000);
   let x = document.getElementById('sd')
   console.log(x);


  })
}
add(){

this.index = this.index + 20
}
}
