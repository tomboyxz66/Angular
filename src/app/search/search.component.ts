import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


public data : any;

@Input() mId : string ='';

@Output() dataMov:EventEmitter<any> = new EventEmitter<any>






constructor(private service:AppService){}

confirm(){
    
    this.service.getMovie(this.mId).subscribe(res=>{
      this.data=res
      this.dataMov.emit(this.data)
      console.log(res)
    })
  }




  // MovId:string='';



  // getMoId(newId:string){
  //   this.MovId=newId
  // }

}
