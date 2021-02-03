  
import { Car } from './components/Car.js';

const renoBegom = new Car(5, 2.5);

console.log(renoBegom);
renoBegom.turnOn();
renoBegom.drive(20)
renoBegom.drive(20)
renoBegom.drive(20)
renoBegom.drive(20)
renoBegom.drive(20)
renoBegom.drive(90)
renoBegom.drive(100)  // varyklis issijungia, rodo klaida ir rida pasipildo proporcingai nuvaziuotai kelio daliai
renoBegom.turnOff()
