import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { LocalizeRouterService } from "localize-router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private localize: LocalizeRouterService, private translate: TranslateService) {
        // translate.setDefaultLang('en');

        // translate.use('en');
        
  }

  lang: string = '';

  ngOnInit() {
    this.lang = this.translate.currentLang;
  }

  swithTo(lang: string):void{
    if(!lang)
    {
      if(this.lang === "en")
        lang = "de";
      else
        lang = "en";

    } 
    this.localize.changeLanguage(lang);
    this.lang = this.translate.currentLang;
  }
}
