import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/category.model';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-categories-listing-page',
  templateUrl: './categories-listing-page.component.html',
  styleUrls: ['./categories-listing-page.component.scss'],
})
export class CategoriesListingPageComponent implements OnInit {
  listingTopic = 'all';
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private alertCtrl:AlertController
  ) { }

  

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.categories = data.categories;
    });

    this.route.queryParams.subscribe(params => {
      console.log('queryParams', params);
      // tslint:disable-next-line:no-string-literal
      this.listingTopic = (params['topic'] && params['topic'] !== '') ? params['topic'] : this.listingTopic;
    });
  }

 Sobre() {
    this.alertCtrl.create({
      header:"Sobre",
      message:"Aplicativo Lock ´n Roll - Versão 1.0 | Contato: locknroll@gmail.com | Localização: Everywhere",
      buttons: [
        {
          text:"Ok",
         
        }
      ]

    }).then((promptElement)=>{
        promptElement.present();
    }
    )
  }

  ListaFunc() {
    this.alertCtrl.create({
      header:"Lista de Funcionalidades",
      message:"Gerenciamento de Conteúdo - Controle de Foco",
      buttons: [
        {
          text:"Ok",
         
        }
      ]

    }).then((promptElement)=>{
        promptElement.present();
    }
    )
  }

}
