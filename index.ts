// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
class PrinterClass { 
  doPrint():void {
     console.log("doPrint() from Parent called…") 
  } 
  dosum():void{
    console.log(1*2);
  }
} 

class StringPrinter extends PrinterClass { 
  doPrint():void { //redefining the parent class method is known as overriding
     super.doPrint() 
     console.log("doPrint() is printing a string…")
  } 
} 
class Sumup extends PrinterClass{
  dosum():void{
    super.dosum()
    console.log(1000/10);
  }
}

var obj = new StringPrinter() 
obj.doPrint()
var obj2=new Sumup()
obj2.dosum();