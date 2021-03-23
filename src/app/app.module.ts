import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the SparklineModule for the Sparkline component
import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SparklineModule
  ],
  providers: [SparklineTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
