import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  public ruyaNoAl: any;
  public bilgi: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ruyaNoAl = this.activatedRoute.snapshot.paramMap.get('ruyaNo');
    console.log("kelime : " + this.ruyaNoAl);
    this.bilgi = JSON.parse(localStorage.getItem('json'))[this.ruyaNoAl] || [];
  }

}
