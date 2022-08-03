import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement , api } from 'lwc';

export default class Contact extends LightningElement {

    @api objectApiName='Contact';

    @api recordId;
    contactvalue;

    fields = [FIRSTNAME_FIELD, LASTNAME_FIELD,EMAIL_FIELD,PHONE_FIELD];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Contact created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);

        // this.contactvalue=this.recordId;

        
        

       
    }
    submitmethod(event){

    
        event.preventDefault(); // Stops form from submitting
        const fields = event.detail.fields;
        fields.AccountId = this.recordId;
        this.template.querySelector('lightning-record-form').submit(fields);
        
    }

}