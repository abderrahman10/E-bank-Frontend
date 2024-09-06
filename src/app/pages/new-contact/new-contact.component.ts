import { Component, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  NewContactForm!: FormGroup;
  isLoading: boolean = false;
  ContactId!: string | null;
  submitButton: boolean = true;
 erromessages:Array<string>=[]
 updateForm: boolean = false;
 id!: string;

  constructor(private fb: FormBuilder, private contactService: ContactService, private router: Router,
    private activatedRoute: ActivatedRoute,private messageService: MessageService) {
    this.createForm();
  }

  createForm() {
    this.NewContactForm = this.fb.group({
      firstname:['',  Validators.required],
      lastname:['',  Validators.required],
      email:['',  Validators.email],
      iban:['', Validators.required],
      userID:['', Validators.required],

    });
    this.NewContactForm.valueChanges.subscribe(() => {
      this.submitButton = !this.NewContactForm.valid;
  });

  }


  onFormSubmit() {
    if(this.NewContactForm.valid ) {
      this.contactService.addNewContact(this.NewContactForm.value).subscribe( (res) => {
        this.contactService.sendUpdate('Contact have been added');
        this.router.navigate(['/user/contacts']);
      },
      (error) => {
        console.error('Error sending contact data:', error);
      });
    }
  }

  ngOnChanges(changes: SimpleChange): void {
  console.log("onChanges");
  }

  ngOnInit(): void {

      this.ContactId = this.activatedRoute.snapshot.paramMap.get('idContact');
      console.log("offerId", this.ContactId);
      if(this.ContactId) {this.id = this.ContactId;}
      if(this.ContactId){
       // this.breadcrumbItems = [  { label: 'Update-Contact' },];
        this.contactService.getContactById(this.ContactId).subscribe(
          (contactData) => {
            this.NewContactForm.patchValue(contactData);
            this.updateForm = true;
          },
          (error) => {
            console.error('Error fetching contact data:', error);
          }
        );
    }
    
  }

  update() {
    console.log("form update: ", this.NewContactForm.value);
    
      this.contactService.updateContact(this.id , this.NewContactForm.value).subscribe(
        (contactData) => {
          this.contactService.sendUpdate('contact have been updated');
          this.router.navigate(['/user/contacts']);
        },
        (error) => {
          console.error('Error editing contact data:', error);
        }
      );
    


  }


}
