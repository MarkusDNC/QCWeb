import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {

  constructor (private http: Http) {}

  errorMessage: string;
  mode = 'Observable';

  ngOnInit() {
  }

  takeOff(){
    this.http.post('http://192.168.75.50:5000/takeoff', 'Biffen lyfter...')
        .subscribe(() => {
          console.log("Taking off");
        });
  }

  land(){
    this.http.post('http://192.168.75.50:5000/land', 'Biffen landar...')
        .subscribe(() => {
          console.log("Landing");
        });
  }

  arm() {

    this.http.post('http://192.168.75.50:5000/arm', 'Biffen varvar upp...')
        .subscribe(() => {
          console.log("Arming propellars");
        });
}

  disarm(){
    this.http.post('http://192.168.75.50:5000/disarm', 'Biffen landar...')
        .subscribe(() => {
          console.log("Disarming propellars");
        });
  }

  guidedmode(){
    this.http.post('http://192.168.75.50:5000/guidedmode', 'Biffen landar...')
        .subscribe(() => {
          console.log("Activating guided mode");
        });
  }

  posmode(){
    this.http.post('http://192.168.75.50:5000/posmode', 'Biffen landar...')
        .subscribe(() => {
          console.log("Activating position mode");
        });
  }

}
