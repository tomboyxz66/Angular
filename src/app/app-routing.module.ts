import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SchoolComponent } from './school/school.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path:'school',component:SchoolComponent},
                        {path:'student', component:StudentComponent},
                        {path:'',redirectTo:'home',pathMatch:'full'},
                        {path:'home',component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
