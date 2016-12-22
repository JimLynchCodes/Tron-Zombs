import {Component, HostListener} from '@angular/core';
import { Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';

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

  values = '';


  constructor(private http:Http) {

  }


  // @HostListener('window:keydown', ['$event'])
  onKey(event:KeyboardEvent) { // without type info
    this.values += event.charCode + ' | ';

    console.log(event.charCode);
  }

  private _keydown(event: KeyboardEvent) {
    let prevent = [13, 27, 37, 38, 39, 40]
      .find(no => no === event.keyCode);
    if (prevent) event.preventDefault();


    this.http.post('https://iv5zguuxo4.execute-api.us-west-2.amazonaws.com/prod/Personal_Greeter', {})
      .map((res:Response) => res.json())
      .subscribe( (data) => {
        console.log('got data from da lamb: ' + data);
      })



  }
  private _keyup(event: KeyboardEvent) {

    console.log('clicked : ' + event.keyCode);


    console.log("current char pos: " +  (<any>document.getElementById("character")).style.left +
                ' top: ' +  (<any>document.getElementById("character")).style.top );


    // (<any>document.getElementById("character")).style.left

  //   if (event.keyCode === 27) this.close();
  //   else if (event.keyCode === 13) ...;
  // else if (event.keyCode === 37) ...;
  // else if (event.keyCode === 38) ...;
  // else if (event.keyCode === 39) ...;
  // else if (event.keyCode === 40) ...;

    // else console.log(event.keyCode);
  }
}
