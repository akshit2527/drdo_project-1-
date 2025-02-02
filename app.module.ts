import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AttackTableComponent } from './app/attack-table/attack-table.component';
import { AppRoutingModule } from './app/app-routing.module';

@NgModule({
  declarations: [AppComponent, AttackTableComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
