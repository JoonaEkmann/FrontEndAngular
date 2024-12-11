import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FinnkinoListComponent } from './finnkino-list/finnkino-list.component';
import { AuthGuard } from './guards/auth.guard';
import { TicketSaleComponent } from './ticket-sale/ticket-sale.component';


export const routes: Routes = [
    { path: '',redirectTo:'/hello',pathMatch:'full' },
    { path: 'hello', component: HelloWorldComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'reactive-forms', component: ReactiveFormComponent },
    { path: 'finnkino-list', component: FinnkinoListComponent },
    { path: 'admin/main', component: AdminViewComponent },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'ticket-sale', component: TicketSaleComponent},


    //Pidä tämä aina viimeisenä
    { path: '**', component: PageNotFoundComponent },
];