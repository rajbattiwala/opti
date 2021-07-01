import { Component, OnInit } from '@angular/core';
import { elements } from '../../../assets/elements.model';
import { ItemdataService } from 'src/app/service/itemdata.service';
import autoTable from 'jspdf-autotable'
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import jsPDF from 'jspdf'
import 'jspdf-autotable';


@Component({
  selector: 'app-item-master-register',
  templateUrl: './item-master-register.component.html',
  styleUrls: ['./item-master-register.component.css']
})
export class ItemMasterRegisterComponent implements OnInit {

  constructor(private content: ItemdataService, private contentEdit: ItemdataService , private _router: Router, @Inject(DOCUMENT) private document: Document) { }
  elements: elements[] = []; 
  filteredelements: elements[] = [];
  finalelements: elements[] = [];
  sharedelements: elements[] = [];

  allelements: Array<elements> = [];

  
  visible:boolean = false;
  clear:boolean = false;

  itemSelect:any
  codeSelect:any
  
  downloadPdf(){
    $("#export").find('tr td:nth-child(1)').hide()
    $("#export").find('tr td:nth-child(2)').hide()
    $("#export").find('tr th:nth-child(1)').hide()
    $("#export").find('tr th:nth-child(2)').hide()
    var doc = new jsPDF();
    //var tbl = $( "#export" ).clone()
    //var tbl= $("#export").html();
    //("#export").find('tr th:nth-child(1)')
    (doc as any).autoTable({
      html: '#export' ,
      theme: 'grid',didDrawPage: () => {
        $("#export").find('tr td:nth-child(1)').show()
        $("#export").find('tr td:nth-child(2)').show()
        $("#export").find('tr th:nth-child(1)').show()
        $("#export").find('tr th:nth-child(2)').show()
      }
    })
    //doc.output('dataurlnewwindow')
    doc.save('purchase-item.pdf')
  }

  private _elementname!: string;

  public onChange(event:any): void {  
     console.log(event.target.value); // logging selected drop down----------------
     this.clear = true;
     this.filteredelements = this.elements.filter(result =>{                                 
        return result.name?.replace(/[^a-zA-Z ]/g, "").match(event.target.value.replace(/[^a-zA-Z ]/g, "")) ||
          result.code?.replace(/[^a-zA-Z ]/g, "").match(event.target.value.replace(/[^a-zA-Z ]/g, ""));
      });
     this.finalelements = this.filteredelements;
  }
  
  get elementname(): string{
    return this._elementname;
  }
  
  set elementname(value: string){
    this._elementname = value;
    this.filteredelements = this.filterElements(value);
    this.finalelements = this.filteredelements;
  }

  filterElements(searchString: string){
    /*return this.elements.filter(res=>
      res.name?.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);*/
      return this.elements.filter(result =>{
        return result.name?.toLocaleLowerCase().match(searchString.toLocaleLowerCase()) || result.code?.toLocaleLowerCase().match(searchString.toLocaleLowerCase());
      }); 
  }

  
  ngOnInit(): void {
    /*--------- content (argument in constructor) has the data passed by Service  
      ----------is copied to sharedElements & logging it to check------------------------------------ */ 

    this.content.share.subscribe(x => this.sharedelements = x);
    console.log(this.sharedelements)   // logging data that we got from item register -------------------

    this.elements = [
      {
        id: undefined,
        state: true,
        name: "PURE.MOLLY (Steel-01)",
        code: "PURE.MOLLY (Steel-01)",
        type: "steel",
        yield: "96",
        category: "BAT SS",
        cost: "52",
        stock: "2000"
      },
      {
        id: undefined,
        state: true,
        name: ".6 NI ( CHEN) -SCRAP",
        code: ".6 NI ( CHEN) -SCRAP",
        type: "scrap",
        yield: "95",
        category: "BAT NI",
        cost: "29",
        stock: "200"
      },
      {
        id: undefined,
        state: false,
        name: "0.8 MO SCRAP",
        code: "MO SCRAP",
        type: "scrap",
        yield: "93",
        category: "BAT GS",
        cost: "23",
        stock: "990"
      },
      {
        id: undefined,
        state: true,
        name: "PURE W (Steel-01)",
        code: "PURE W (Steel-01)",
        type: "steel",
        yield: "97",
        category: "raw",
        cost: "50",
        stock: "1990"
      },
      {
        id: undefined,
        state: false,
        name: "PURE.MOLLY (Steel-01)",
        code: "PURE.MOLLY (Steel-01)",
        type: "steel",
        yield: "96",
        category: "BAT SS",
        cost: "52",
        stock: "2000"
      },
      {
        id: undefined,
        state: true,
        name: ".6 NI ( CHEN) -SCRAP",
        code: ".6 NI ( CHEN) -SCRAP",
        type: "scrap",
        yield: "95",
        category: "BAT NI",
        cost: "29",
        stock: "200"
      },
      {
        id: undefined,
        state: false,
        name: "0.8 MO SCRAP",
        code: "MO SCRAP",
        type: "scrap",
        yield: "93",
        category: "BAT GS",
        cost: "23",
        stock: "990"
      },
      {
        id: undefined,
        state: true,
        name: "NI ( CHEN) -SCRAP",
        code: "NI SCRAP",
        type: "scrap",
        yield: "91",
        category: "BAT-AS",
        cost: "12",
        stock: "500"
      },
      {
        id: undefined,
        state: false,
        name: "ALANG SCRAP",
        code: "ALANG SCRAP",
        type: "scrap",
        yield: "93",
        category: "SAP - 01",
        cost: "15",
        stock: "5000"
      }  
    ]

    /*--------- Data which we get from Item-master using Service, stores in SharedElements 
      ----------is copied to allElements along with default data------------------- */ 

    Array.prototype.push.apply(this.allelements,this.sharedelements);
    Array.prototype.push.apply(this.allelements,this.elements);
    console.log(this.allelements);

    this.elements = this.allelements;
    this.filteredelements = this.elements;
    this.finalelements = this.filteredelements;

    //-------Assigning ID to each object of array--------------
    
    this.finalelements.forEach((o, i) => o.id = i + 1);
    
  }

  onBlur(){
    this.visible = false;
  }

  onFocus(){
    this.visible = !this.visible;
  }

  unselect(): void {
    this.clear = false;
    this.itemSelect = undefined;
    this.codeSelect = undefined;
    this.filteredelements = this.elements;
    this.finalelements = this.filteredelements;
 }

  rowDelete(i:any){
    this.finalelements.splice(i-1, 1);
    this.finalelements.forEach((o, i) => o.id = i + 1);
 }

  onItemChange(event:any){
    console.log(event.target.value);
    if(event.target.value == "active"){
      this.finalelements = this.filteredelements.filter(result =>{
        return result.state==true;
      });
    }
    else if(event.target.value == "inactive"){
        this.finalelements = this.filteredelements.filter(result =>{
          return result.state==false;
        });
    }
    else{
      this.finalelements = this.filteredelements;
    }
  }

  sendData(){
    this.contentEdit.getCurrentData(this.finalelements)
  }

}


