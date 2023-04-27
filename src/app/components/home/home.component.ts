import { Component } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  populargames:any[]=[]
  isLoading:boolean =true
constructor(private _games:GamesService){}
ngOnInit(): void {
  this._games.getallgames().subscribe((res)=>{
    setTimeout(() => {
    this.populargames = res.splice(0,3);
    console.log(res);
    this.isLoading = false
  }, 1000);
  })
}
}
