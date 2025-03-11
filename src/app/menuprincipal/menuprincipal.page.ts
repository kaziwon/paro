import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
})
export class MenuprincipalPage implements OnInit {

  itemsMenu = [{
    "nome": "Jogar!",
    "icone": "game-controller-outline",
    "acao": "home"
  },
  {
    "nome": "Configurações",
    "icone": "cog-outline",
    "acao": "configuracoes"
  }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irPara(acao) {
    this.router.navigateByUrl(acao);
  }

}
