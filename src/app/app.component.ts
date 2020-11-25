import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'my-first-app';  

constructor(public translate: TranslateService) {

  }

    ngOnInit(): void {
    this.translate.addLangs(['en', 'fr', 'vi','te']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|vi/) ? browserLang : 'en');

    console.log(browserLang);
  }
}