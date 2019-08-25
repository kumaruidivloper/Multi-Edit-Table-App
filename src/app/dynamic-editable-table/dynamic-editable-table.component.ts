import {Component,ViewChildren, ViewChild,
   OnInit,QueryList,ElementRef} from '@angular/core';
import {forkJoin} from 'rxjs'
import {MatInput} from '@angular/material/input';
// import { DataService } from './data.service';
import { ContactService } from  '../shared/contact.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

// import { NgForm } from '@angular/forms';  

@Component({
  selector: 'app-dynamic-editable-table',
  templateUrl: './dynamic-editable-table.component.html',
  styleUrls: ['./dynamic-editable-table.component.scss']
})
export class DynamicEditableTableComponent implements OnInit {
  displayedColumns: string[];
  dataSource:any[];
  schema:any[];
  editRowId:number=-1;
  NgForm:any;
  editedRow:number=-1;
  // getControl: FormGroup;

  @ViewChildren(MatInput,{read:ElementRef}) inputs:QueryList<ElementRef>;
   constructor(private contactService:ContactService){

   }

  //  @ViewChild('form') ngForm: NgForm;

  //  Register(regForm:NgForm){  
  //   console.log(regForm);  
  // }  

ngOnInit()
{
  forkJoin([this.contactService.getContacts(),this.contactService.getSchema()])
    .subscribe(([data,schema])=>{
      this.dataSource = data;
      console.log(this.dataSource);
      this.displayedColumns = schema.map(x => x.name);
      console.log(this.displayedColumns)
      this.schema=schema
    })

    // this.buildForm()
}

// buildForm() {
//   this.getControl = new FormGroup({
//     lastName: new FormControl(''),
//     state: new FormControl(''),
//     zip: new FormControl('')
//   });
// }

// onSubmit(){
//   console.log(this.getControl.value);
// }
  edit(row,element)
  {
    console.log('row value'+row);
    console.log('element value'+element)
    this.editRowId=row;
    this.editedRow=row;
    setTimeout(()=>{
      this.inputs.find(x=>x.nativeElement.getAttribute('id')===element).nativeElement.focus();
      // this.inputs.find(x => ElementRef.bind(this.ngForm.control.value));
    })
  }

  getEditedValues(){
    console.log(this.editedRow);
    const EditedRowID = this.dataSource[this.editedRow-1];
    this.contactService.updateContact(EditedRowID)
    .subscribe(res => {
       console.log("Updated the selected contact");
    });
  }
}
