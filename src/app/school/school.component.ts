import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit{
  names: any[]=[{ namesReviews : 'nitat' }]
  showstudent:string = ''
  constructor () {}
  ngOnInit() {  
  }

  OnStudent( students:string){
    this.showstudent = students;

  }

}
