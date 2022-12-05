import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'tsetangular';
  // myName:string='Nitat Thepsathit';
  // isDisable:boolean=true;
  // firstname:string=" ";
  // options:string='b';
  // bookss:any[]=[{inStock: 'yes'}];

  id:string='';
  public showdata:any;



  // @Output() MoId :EventEmitter<string> = new EventEmitter<string>();

  // ngOnInit(){

  //   console.log(this.myName);
  // }

  // constructor(private service:AppService){}


  // showButton:boolean=true;
  // books:any[]=[{title:"Mody Dick",author:"Herman Melville"},
  // {title:"War and Peace",author:"Leo Tolstoy"},
  // {title:"Ulysses",author:"James Joyce"},
  // ]

  Ondata( remov:any){
      this.showdata=remov;

  }

  // confirm(){
    //  console.log(this.id)
    // this.service.getMovie(this.id).subscribe(res=>{
     
    // })

    // this.MoId.emit(this.data)
    // console.log(this.data)
   
  // }
}
