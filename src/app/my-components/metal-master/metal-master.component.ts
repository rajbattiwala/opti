import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-metal-master',
  templateUrl: './metal-master.component.html',
  styleUrls: ['./metal-master.component.css']
})
export class MetalMasterComponent implements OnInit {

  rec: any
  new: any
  recSelect: any
  recnew: any
  recname: any
  rectype: any
  rectypenew: any
  recstd: any
  list: any
  selected: boolean = false
  selectedItemsList: any
  additionalDetails: any
  additionalDetailsnew: any

  temp:any

  addiData: any
  addiItem: any
  bathAddName:any
  bathAddNameNew:any
  bathqty:any

  addNewName:any
  addNewCode:any

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    this.recnew = [
      {
        state: true,
        name: "",
        type: "",
        std: "",
        elements: [
          {
            tag: "P",
            min: "0.04",
            max: "0.5"
          },
          {
            tag: "Si",
            min: "0.15",
            max: "0.35"
          }
        ]
      }
    ]

    this.rec = [
      {
        state: true,
        name: "SG 500/7",
        type: "SG",
        std: "ISO",
        elements: [
          {
            tag: "P",
            min: "0.04",
            max: "0.5"
          },
          {
            tag: "Si",
            min: "0.15",
            max: "0.35"
          },
          {
            tag: "Mn",
            min: "0.08",
            max: "0.55"
          },
          {
            tag: "Cu",
            min: "0.002",
            max: "0.05"
          } 
        ]
      },
      {
        state: true,
        name: "304L",
        type: "SS",
        std: "IS",
        elements: [
          {
            tag: "P",
            min: "0.12",
            max: "0.19"
          },
          {
            tag: "Si",
            min: "0.05",
            max: "0.15"
          },
          {
            tag: "Mn",
            min: "0.28",
            max: "0.85"
          },
          {
            tag: "Cu",
            min: "0.02",
            max: "0.07"
          }
        ]   
      }
    ]
    
    this.list = [
      {
        name:"C",
        value:"",
        isChecked: false
      },
      {
        name:"Si",
        value:"0",
        isChecked: false
      },
      {
        name:"Mn",
        value:"",
        isChecked: false
      },
      {
        name:"P",
        value:"",
        isChecked: false
      },
      {
        name:"S",
        value:"",
        isChecked: false
      },
      {
        name:"Cr",
        value:"",
        isChecked: false
      },
      {
        name:"Ni",
        value:"",
        isChecked: false
      },
      {
        name:"Mo",
        value:"",
        isChecked: false
      },
      {
        name:"Cu",
        value:"",
        isChecked: false
      },
      {
        name:"N",
        value:"",
        isChecked: false
      },
      {
        name:"Nb",
        value:"",
        isChecked: false
      },
      {
        name:"Fe",
        value:"",
        isChecked: false
      },
      {
        name:"Ti",
        value:"",
        isChecked: false
      },
      {
        name:"Al",
        value:"",
        isChecked: false
      },
      {
        name:"Ca",
        value:"",
        isChecked: false
      },
      {
        name:"Mg",
        value:"",
        isChecked: false
      },
      {
        name:"W",
        value:"",
        isChecked: false
      },
      {
        name:"Zr",
        value:"",
        isChecked: false
      },
      {
        name:"Sn",
        value:"",
        isChecked: false
      },
      {
        name:"Co",
        value:"",
        isChecked: false
      },
      {
        name:"V",
        value:"",
        isChecked: false
      },
      {
        name:"B",
        value:"",
        isChecked: false
      },
      {
        name:"Ba",
        value:"",
        isChecked: false
      },
      {
        name:"Pb",
        value:"",
        isChecked: false
      },
      {
        name:"Se",
        value:"",
        isChecked: false
      },
      {
        name:"O-TOT",
        value:"",
        isChecked: false
      },
      {
        name:"SiO2",
        value:"",
        isChecked: false
      },
      {
        name:"Ce",
        value:"",
        isChecked: false
      },
      {
        name:"Zn",
        value:"",
        isChecked: false
      }
    ]

    this.bathAddName = [
      {
        addname: "Ladle Addition",
        shortcode: "LAD"
      },
      {
        addname: "Nodularization",
        shortcode: "NOD"
      },
      {
        addname: "Inoculation",
        shortcode: "INO"
      }
    ]
    
    this.bathAddNameNew = [
      {
        addname: "",
        shortcode: ""
      }
    ]

    this.additionalDetails = [
      {
        addname: "",
        shortcode: "",
        itemname: "",
        qty: ""
      }
    ]

    this.additionalDetailsnew = [
      {
        addname: null,
        shortcode: null,
        itemname: null,
        qty: null
      }
    ]

    this.fetchSelectedItems()
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.list.filter((value:any, index:any) => {
      return value.isChecked
    });
  }

  hide(){
    this.selected = ! this.selected
  }

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true, scrollable: true, backdropClass: 'dark-blue-backdrop' });
  }

  saveData(){
    this.recnew.name = this.recname
    if(this.rectypenew){
      this.recnew.type = this.rectypenew  
    }
    else{
      this.recnew.type = this.rectype
    }
    this.recnew.std = this.recstd
    this.rec.push(this.recnew)
    /*console.log(this.selectedItemsList)
    console.log(this.rec)*/
    alert("Saved Successfully!")
  }

  additionalSave(){
    this.additionalDetails.addname = this.addiData
    this.additionalDetails.itemname = this.addiItem
    this.additionalDetails.qty = this.bathqty
    
    this.temp =  this.bathAddName.filter((value:any, index:any) => {
      return value.addname.match(this.addiData)
    });

    this.additionalDetails.shortcode = this.temp[0].shortcode
    this.additionalDetailsnew.push(this.additionalDetails)
  }

  additionNewNameSave(){
    this.bathAddNameNew.addname = this.addNewName
    this.bathAddNameNew.shortcode = this.addNewCode
    this.bathAddName.push(this.bathAddNameNew)
  }
  
}

