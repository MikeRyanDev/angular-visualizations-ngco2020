import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AppComponent } from "./app.component";
import { SparklineComponent } from "./sparkline-chart.component";
import { SparklineLineComponent } from "./sparkline-line.component";
import { SparklineDotsComponent } from "./sparkline-dots.component";
import { SparklineAreaComponent } from "./sparkline-area.component";

@NgModule({
  declarations: [
    AppComponent,
    SparklineComponent,
    SparklineLineComponent,
    SparklineDotsComponent,
    SparklineAreaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
