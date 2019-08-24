import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicEditableTableComponent } from './dynamic-editable-table/dynamic-editable-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicEditableTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, DynamicEditableTableComponent]
})
export class AppModule { }
