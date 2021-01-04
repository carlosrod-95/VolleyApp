import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  appearRight(){
    document.getElementById("container-bot").style.right = "0";
    document.getElementById("container-bot").style.transition = ".5s";
    document.getElementById("arrow-left").style.opacity = "0";
    document.getElementById("arrow-left").style.transition = ".5s";

  }

  appearLeft(){
    document.getElementById("container-top").style.left = "0";
    document.getElementById("container-top").style.transition = ".5s";

    document.getElementById("arrow-right").style.opacity = "0";
    document.getElementById("arrow-right").style.transition = ".5s";

  }

}
