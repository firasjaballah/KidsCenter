import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './components/forget/forget.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {path:'signin', component: SigninComponent},
  {path:'singup', component: SignupComponent},
  {path:'forget', component: ForgetComponent},
  {path:'result', component: ResultComponent},
  {path:'search', component: SearchComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
