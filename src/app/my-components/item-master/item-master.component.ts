import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elements } from 'src/assets/elements.model';
import { ItemdataService } from '../../service/itemdata.service' 

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  hideMe: boolean = true;
  selected: boolean = false;
  tempid: any
  isChanged: boolean = false;

  data = new elements
  alldata: Array<elements> = [];


  additional:any = [
    {
      name:"C",
      value:""
    },
    {
      name:"Si",
      value:""
    },
    {
      name:"Mn",
      value:""
    },
    {
      name:"P",
      value:""
    },
    {
      name:"S",
      value:""
    },
    {
      name:"Cr",
      value:""
    },
    {
      name:"Ni",
      value:""
    },
    {
      name:"Mo",
      value:""
    },
    {
      name:"Cu",
      value:""
    },
    {
      name:"N",
      value:""
    },
    {
      name:"Nb",
      value:""
    },
    {
      name:"Fe",
      value:""
    },
    {
      name:"Ti",
      value:""
    },
    {
      name:"Al",
      value:""
    },
    {
      name:"Ca",
      value:""
    },
    {
      name:"Mg",
      value:""
    },
    {
      name:"W",
      value:""
    },
    {
      name:"Zr",
      value:""
    },
    {
      name:"Sn",
      value:""
    },
    {
      name:"Co",
      value:""
    },
    {
      name:"V",
      value:""
    },
    {
      name:"B",
      value:""
    },
    {
      name:"Ba",
      value:""
    },
    {
      name:"Pb",
      value:""
    },
    {
      name:"Se",
      value:""
    },
    {
      name:"O-TOT",
      value:""
    },
    {
      name:"SiO2",
      value:""
    },
    {
      name:"Ce",
      value:""
    },
    {
      name:"Zn",
      value:""
    }
  ];

  constructor(private content: ItemdataService, private contentEdit: ItemdataService, private _route: ActivatedRoute) {}

  gotelements: elements[] = [];
  ngOnInit(): void {

    window.onscroll = () => {
      let windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      let body = document.body, html = document.documentElement;
      let docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      let windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight - 100) {
        let el = document.querySelector(".bottombar") as HTMLElement;
        el.style.display = "none"
      }
      else if (windowBottom < docHeight) {
        let el = document.querySelector(".bottombar") as HTMLElement;
        el.style.display = "block"
      }
   };


    //-------------Getting all items array from Item Master Register-----------------
    //--------------Getting id of element whose EDIT was clicked-----------------------

    this.contentEdit.sharetwo.subscribe(x => this.gotelements = x);
    console.log(this.gotelements)

    this._route.paramMap.subscribe(parameterMap => {
      const id = parameterMap.get('id');
      this.tempid = id;
      this.getElement(id);
    });
  }
  private getElement(id: any){
    this.data =JSON.parse(JSON.stringify(this.gotelements.find(x => x.id == id)))
  }

  selection(){
    this.selected = !this.selected;
  }

  hider(){
    this.hideMe = false;
  }

  show(){
    if(this.hideMe == false){
      this.isChanged = true
      setTimeout(() => {
        this.isChanged = false
      }, 1000);
    }
    this.hideMe = true;
  }

  saveData(){
    this.alldata.push(this.data)
    alert("Successfully Added")
    console.log(this.alldata)
    this.content.updateData(this.alldata)
  }
}
