import {Component, HostListener} from '@angular/core';
import { Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import {updateNotifierCheck} from "tslint/lib/updateNotifier";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:keyup)': '_keyup($event)',
    '(document:keydown)': '_keydown($event)',
  },
})
export class AppComponent {
  title = 'app works!';

  private guysLeft = 7;
  private values = '';
  private guysTop = 7;
  private guysDirection;


  constructor(private http:Http) {

  }

  ngOnInit() {
    (<any>document.getElementById("character")).style.left = this.guysLeft + 'vw';
    (<any>document.getElementById("character")).style.top = this.guysTop + 'vw';

  }


  // @HostListener('window:keydown', ['$event'])
  onKey(event:KeyboardEvent) { // without type info
    this.values += event.charCode + ' | ';

    // console.log(event.charCode);
  }

  private _keydown(event: KeyboardEvent) {
    let prevent = [13, 27, 37, 38, 39, 40]
      .find(no => no === event.keyCode);
    if (prevent) event.preventDefault();


    // console.log('key pressed down ' + event.keyCode);


    // ====================================
    // this.http.post('https://iv5zguuxo4.execute-api.us-west-2.amazonaws.com/prod/Personal_Greeter', {})
    //   .map((res:Response) => res.json())
    //   .subscribe( (data) => {
    //     console.log('got data from da lamb: ' + JSON.stringify(data));
    //
    //     console.log('greeting is: ' + data.greeting);
    //   })
    // ====================================
    switch(event.keyCode.toString()) {
      case '38':
        console.log('up pressed');
        (<any>document.getElementById("character")).style.rotation = "0deg";

        break;

      case '37': {
        console.log('left pressed');
        break;
      }

      case '40': {
        console.log('down pressed');
        break;
      }

      case '39': {
        console.log('right pressed');
        (<any>document.getElementById("character")).style.rotation = "90deg";
        break;
      }


    }


  }
  private _keyup(event: KeyboardEvent) {

    // console.log('key lifted up : ' + event.keyCode);


    // console.log("current char pos: " +  (<any>document.getElementById("character")).style.left +
    //             ' top: ' +  (<any>document.getElementById("character")).style.top );



    switch(event.keyCode.toString()) {
      case '38':
    this.guysTop -= 8.33;
        console.log('up released');
        this.guysDirection = "up";

        break;

      case '37': {
    this.guysLeft -= 8.33;
        console.log('left released');
        this.guysDirection = "left";
        break;
      }

      case '40': {
        console.log('down released');
        this.guysDirection = "down";
    this.guysTop += 8.33;
        break;

      }

      case '39': {
        console.log('right released');
        this.guysDirection = "right";
    this.guysLeft += 8.33;
        break;
      }

    }


    (<any>document.getElementById("character")).style.left = this.guysLeft + 'vw';
    (<any>document.getElementById("character")).style.top = this.guysTop + 'vw';

  //   if (event.keyCode === 27) this.close();
  //   else if (event.keyCode === 13) ...;
  // else if (event.keyCode === 37) ...;
  // else if (event.keyCode === 38) ...;
  // else if (event.keyCode === 39) ...;
  // else if (event.keyCode === 40) ...;

    // else console.log(event.keyCode);


    console.log('guy is now facing: ' + this.guysDirection);


  }
}
