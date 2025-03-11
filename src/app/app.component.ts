import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,
    private storage: Storage,
    private platform: Platform) {
    this.initializeApp();
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

    this.storage.get('config_tempo').then((val) => {
      if (!val) {
        this.storage.set('config_tempo', 15);
      }
    })
  }
  initializeApp() {
    this.platform.ready().then(async () => {

      StatusBar.hide();
      this.router.navigateByUrl('splash');

    });
  }


}
