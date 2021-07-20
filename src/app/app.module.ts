import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { SampleComponent } from './sample/sample.component';
import { myRoutings } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { PropertyComponent } from './property/property.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeListComponent } from './service_topic/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './service_topic/employee-details/employee-details.component';
import { EmployeeService } from './service_topic/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ExamComponent } from './exam/exam.component';
import { TestwebComponent } from './testweb/testweb.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MultcastobsComponent } from './multcastobs/multcastobs.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { TestingComponent } from './testing/testing.component';
import { PageNotFoundComponent } from './Routings/page-not-found/page-not-found.component';
import { AdminAccessGuard } from './Routings/admin-access.guard';
import { TdfComponent } from './tdf/tdf.component';
import { Tdf2Component } from './tdf2/tdf2.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PracticeComponent } from './practice/practice.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustamPipesPipe } from './custam-pipes.pipe';
import { ArraytostringPipe } from './arraytostring.pipe';
import { EvenpipePipe } from './evenpipe.pipe';
import { EvenimpurepipePipe } from './evenimpurepipe.pipe';
import { TestcaseComponent } from './testcase/testcase.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditComponent,
    SampleComponent,
    myRoutings,
    DataBindingsComponent,
    PropertyComponent,
    PipesComponent,
    DirectivesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    FormComponent,
    ExamComponent,
    TestwebComponent,
    FlipkartComponent,
    MultcastobsComponent,
    QuestionPaperComponent,
    LoginComponent,
    TableComponent,
    TestingComponent,
    PageNotFoundComponent,
    TdfComponent,
    Tdf2Component,
    ReactiveComponent,
    PracticeComponent,
    SidebarComponent,
    CustamPipesPipe,
    ArraytostringPipe,
    EvenpipePipe,
    EvenimpurepipePipe,
    TestcaseComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService,AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
