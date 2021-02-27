import { LightningElement, track } from 'lwc';

export default class AllergyDetail extends LightningElement {

 @track allergy;


  connectedCallback(){
    console.log('Inside connectedCallback ...');
    const data  = {"Id":"a0N0v000001aIVBEA2","Name":"CF004828140","SNOMED__c":"a0V0v000003DT27EAG","Reaction__c":"Anaphylaxis","Finding_Status__c":"Active","Reviewed_Alerts__c":true,"Note__c":"asasasasassasas","Allergy_Type__c":"Drug","Start_Date__c":"2018-11-20","Severity__c":"Low","End_Date__c":"2020-11-20","Engagement_ID__c":"a1Y0v000000dSEWEA2","CreatedDate":"2018-11-20T11:24:20.000Z","SNOMED__r":{"Name":"Amoxapine","Id":"a0V0v000003DT27EAG"}};
    this.allergy = {
        ...data,
        allergyName: data.SNOMED__r.Name
    }
  }
  
  handleClose = ()=>{
      console.log('Close button clicked');
  }
}