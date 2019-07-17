import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shows',
  templateUrl: './add-shows.component.html',
  styleUrls: ['./add-shows.component.scss']
})
export class AddShowsComponent implements OnInit {

  spectacleForm:  FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
initForm(){
  this.spectacleForm = this.formBuilder.group({
    Name: ['', Validators.required],
    Price: ['', Validators.required],
    artist: ['', Validators.required]
  });
}
onSaveShows() {
 const Name = this.spectacleForm.get('Name').value;
 const Price = this.spectacleForm.get('Price').value;
 const artist = this.spectacleForm.get('artist').value;
 console.log(this.spectacleForm.value);


}

}
