import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // We don't need this pre-generated code: title = 'pw';

  // Properties for the event handlers
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  // Password attribute / property does same thing as the constructor in JS
  password = '';
  // constructor() {
  //   this.password = '';
  // }

  /**
   * Event handler for length user input
   * Converts a string to a number.
   * We will call this method inside the component template HTML using Angular template syntax.
   *
   * @param {string} value - The string to be converted.
   */
  onChangeLength(event: Event) {
    // Converts string to number
    // const parsedValue = parseInt(value);
    // HowToFix: https://stackoverflow.com/questions/74106340/getting-error-while-passing-event-target-value-in-angular-ts
    // what this does 
    const parsedValue = parseInt((<HTMLInputElement>event.target).value);

    // Checks if parsedValue is a number (using isNaN built-in function)
    // if it’s a number, we update the component’s password length variable
    // and then convert our number into a string and display it on the HTML page.
    // Notice how we set the password property, not a normal property.
    // This is because we don't want the password to be displayed on the HTML page.
    // Instead, we want it to be an internal variable that we can use to
    // append UI code.
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  // Event handlers triggered when check/uncheck the boxes
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  /**
   * Generates a password based on the current values of includeLetters, includeNumbers, and includeSymbols.
   * This function will be called when the user clicks the generate button.
   * We will call this method inside the component template HTML using Angular template syntax.
   *
   * @param {void} None
   * @return {void} None
   */
  onButtonClick() {
    // Logging to console for debugging purposes when the button is clicked.
    // console.log('Button was clicked!');
    // These lines will display the current values of includeLetters, includeNumbers, and includeSymbols.
    // console.log(this.includeLetters);
    // console.log(this.includeNumbers);
    // console.log(this.includeSymbols);
    // console.log(`
    //   About to generate a password with the following:
    //   Include letters: ${this.includeLetters}
    //   Include numbers: ${this.includeNumbers}
    //   Include symbols: ${this.includeSymbols}
    // `);
    // this.password = 'MY PASSWORD!!!';

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  // getPassword() {
  //   return this.password;
  // }

  // getName() {
  //   return 'Alex';
  // }
}
