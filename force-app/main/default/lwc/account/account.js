import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class Account extends LightningElement {

    accountdetails=true;
    contactdetails=false;
    @api objectApiName='Account';

    id='';

    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];

    handleSuccess(event) {
        this.id=event.detail.id;
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);

        this.accountdetails=false;
        console.log('accountdetaila::');
        this.contactdetails=true;
        console.log('contact detial::' +this.contactdetails);
        console.log('ssss');
        console.log('yashwanth');
    }

}