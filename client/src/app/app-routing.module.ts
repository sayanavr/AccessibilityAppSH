import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addTodo',component:AddTodoListComponent},
  {path:'viewTodo',component:TodoListComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
