import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { AdminAccessGuard } from './Routings/admin-access.guard';
import { AdminHomeComponent } from './Routings/admin-home/admin-home.component';
import { CourseDetailsComponent } from './Routings/course-details/course-details.component';
import { CourseDurationComponent } from './Routings/course-duration/course-duration.component';
import { CourseFeeComponent } from './Routings/course-fee/course-fee.component';
import { CourseListComponent } from './Routings/course-list/course-list.component';
import { StudentListComponent } from './Routings/student-list/student-list.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  // {path: '', redirectTo:'/student',pathMatch:"full"},
  {path:'admin',component:AdminHomeComponent,
           canActivate:[AdminAccessGuard]},
  {path: 'contactus',component: ContactUsComponent},
  {path: 'home',component: HomeComponent},
  {path: 'aboutus',component: AboutusComponent},
  {path: 'services',component: ServicesComponent},
  {path:'questionpaper',component:QuestionPaperComponent},
  {path:'student',component:StudentListComponent},
  {path:'course',component:CourseListComponent},
  {path:'course/:id',component:CourseDetailsComponent,
   children:[
           {path:'duration',component:CourseDurationComponent},
           {path:'fee',component:CourseFeeComponent},
       ]},
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
                                 ContactUsComponent,
                                 HomeComponent,
                                 AboutusComponent,
                                 ServicesComponent, 
                                 QuestionPaperComponent,
                                 PageNotFoundComponent,
                                 StudentListComponent,
                                 CourseListComponent,
                                 CourseDetailsComponent,
                                 CourseDurationComponent,
                                 CourseFeeComponent,
                        ]
