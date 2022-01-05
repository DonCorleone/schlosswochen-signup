import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Schlosswochen-Inscription';

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('de');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|de/) ? browserLang : 'en');
  }
}
