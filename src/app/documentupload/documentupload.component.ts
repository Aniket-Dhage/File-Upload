import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-documentupload',
  templateUrl: './documentupload.component.html',
  styleUrls: ['./documentupload.component.css']
})
export class DocumentuploadComponent implements OnInit {

  constructor(private common:CommonService, private formbuilder:FormBuilder) { }

  documentform: FormGroup;


  selectedAddressProof: any;
  selectedSignature: any;
  selectedPhoto: any;
  selectedThumb: any;
  selectedThumb2: any;

  retrieveDoc: any;

  imgsrc1: any;
  imgsrc2: any;
  imgsrc3: any;
  imgsrc4: any;

  reader= new FileReader();

  ngOnInit(): void 
  {
    this.documentform= this.formbuilder.group({

      customer_id:[],

      extradocs: this.formbuilder.group({

        test:[]
      })

      })

  }

  onselectedFile1(event: any)
  {
    alert("Hello")
    this.selectedAddressProof=event.target.files[0];
    alert(this.selectedAddressProof)

    const file= event.target.files[0];    
    this.reader.readAsDataURL(file);
    this.reader.onload= e => this.imgsrc1= this.reader.result;
    


  }

  onselectedFile2(event: any)
  {
    alert("Hello")
    this.selectedSignature=event.target.files[0];
  }

  onselectedFile3(event: any)
  {
    alert("Hello")
    this.selectedPhoto=event.target.files[0];
  }

  onselectedFile4(event: any)
  {
    alert("Hello")
    this.selectedThumb=event.target.files[0];
  }

  onselectedFile5(event: any)
  {
    alert("Hello")
    this.selectedThumb2=event.target.files[0];
  }

  submit()
  {
    alert("Save Data Called");

    const Document1= JSON.stringify(this.documentform.value);

    const UploadDocument= new FormData();

    UploadDocument.append("address_proof",this.selectedAddressProof );
    UploadDocument.append("photo",this.selectedSignature );
    UploadDocument.append("signature",this.selectedPhoto );
    UploadDocument.append("thumb",this.selectedThumb );
    UploadDocument.append("thumb2",this.selectedThumb2 );

    UploadDocument.append("doc",Document1);

    this.common.postDocument(UploadDocument).subscribe();
    console.log("Upload Method")

    

  }

  image()
  {
    alert("GetData")
    this.common.getDocuments().subscribe((docs:Document[])=>{
      this.retrieveDoc= docs;
    })
  }

}
