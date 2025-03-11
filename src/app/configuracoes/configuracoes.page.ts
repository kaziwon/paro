import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  maxTime: number = 0;
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.storage.get('config_tempo').then((val) => {
      this.maxTime = val;
    })
  }

  changeMaxTime() {
    this.storage.set('config_tempo', this.maxTime);
  }


  voltar() {
    this.router.navigateByUrl('menuprincipal');
  }
}
