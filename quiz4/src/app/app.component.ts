import { Component } from '@angular/core';
import { Social } from './social';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz4';
  social: Social[] = [
    {
      img: "instagram",
      name: "Instagram",
      show: true
     

    },
    {
      img: "twitter",
      name: "Twitter",
      show: true
     

    },
    {
      img: "facebook",
      name: "Facebook",
      show: true
     

    },
    {
      img: "pinterest",
      name: "Pinterest",
      show: true
     

    },
    {
      img: "google",
      name: "Google",
      show: true
     

    },
    {
      img: "github",
      name: "Github",
      show: true
     

    }

  ]

  showed(soc: Social) {
    soc.show = !soc.show;
  }
}
