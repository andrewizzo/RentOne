import { NgModule } from "@angular/core";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { FooterComponent } from "../components/footer/footer.component";

@NgModule({
    declarations:[NavbarComponent,DashboardComponent,FooterComponent],
    imports:[],
    exports:[NavbarComponent,DashboardComponent,FooterComponent]
})
export class SharedModule{}