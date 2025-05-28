import { NgModule } from "@angular/core";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { FooterComponent } from "../components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[NavbarComponent,DashboardComponent,FooterComponent],
    imports:[CommonModule],
    exports:[NavbarComponent,DashboardComponent,FooterComponent]
})
export class SharedModule{}