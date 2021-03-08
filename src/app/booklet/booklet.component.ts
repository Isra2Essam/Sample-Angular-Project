import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProtectionData } from './protection-data.service';

@Component({
  selector: 'app-booklet',
  templateUrl: './booklet.component.html',
  styleUrls: ['./booklet.component.css']
})
export class BookletComponent implements OnInit {

  data: any = [];

  constructor(private httpClient: HttpClient, private protectionData: ProtectionData) { }

  ngOnInit() {
    this.protectionData.getJSON().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}

