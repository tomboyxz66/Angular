import { Component ,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() reviews : string = '';
  @Output() students:EventEmitter<string> = new EventEmitter

  OnClick(){
    this.students.emit("Thepsathit")
  }
  ngOnInit(){

  }

}
