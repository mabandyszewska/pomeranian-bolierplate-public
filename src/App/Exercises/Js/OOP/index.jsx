import './styles.css';

export const ExerciseOOP = () => {
  // -----------------------------------------------------------------------------
  // KLASA
  // -----------------------------------------------------------------------------

  // Klasa to pewnego rodzaju szablon lub wzór do tworzenia obiektów.
  // Opisuje jakie właściwości (pola) i metody będzie miał obiekt utworzony na podstawie klasy.

  // -----------------------------------------------------------------------------
  // INSTANCJA
  // -----------------------------------------------------------------------------

  // Instancja to konkretny obiekt utworzony na podstawie określonej klasy,
  // która ma swoje własne unikalne wartości pól.

  // -----------------------------------------------------------------------------
  // OPERATOR new
  // -----------------------------------------------------------------------------

  // Operator new tworzy nową instancję klasy.
  // Tworzenie instancji za pomocą new inicjuje proces konstrukcji obiektu zgodnie z definicją klasy.

  // -----------------------------------------------------------------------------
  // THIS
  // -----------------------------------------------------------------------------

  // Słowo kluczowe this odnosi się do bieżącego obiektu, na którym jest wywoływane.
  // Wewnątrz metody this wskazuje na instancje klasy na której jest wywołana metoda.

  // -----------------------------------------------------------------------------
  // METODY STATYCZNE
  // -----------------------------------------------------------------------------

  // Metody statyczne to metody, które nie operują na instancji klasy, ale są zwiazane z klasą jako całością.
  // Wywołuje się je bezpośrednio na klasie, a nie na instancji klasy.

  // -----------------------------------------------------------------------------
  // POLE STATYCZNE
  // -----------------------------------------------------------------------------

  // Pole statyczne to pola, które mają wspólne wartości dla wszystkich instancji danej klasy.

  class Car {
    static numberOfCars = 0;

    // function car(make, model) {}
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }

    // metoda niestatyczna
    start() {
      console.log(`${this.make} ${this.model} is starting...`);
    }

    // metoda statyczna
    static getInfo() {
      console.log('This is a car class');
    }
  }

  // INSTANCJA klasy CAR
  const myToyota = new Car('Toyota', 'Corolla');
  // INSTANCJA klasy CAR
  const myAudi = new Car('Audi', 'A4');

  myToyota.start();
  myAudi.start();

  Car.getInfo();
  Car.numberOfCars = 2;

  console.log(Math.PI, Car.numberOfCars);

  // -----------------------------------------------------------------------------
  // KLASA STATYCZNA
  // -----------------------------------------------------------------------------

  // Klasa statyczna to klasa, która zawiera tylko metody statyczne i pola statyczne. np Math

  // -----------------------------------------------------------------------------
  // OPERATOR instaceof
  // -----------------------------------------------------------------------------
  // Operator instanceof sprawdza czy dany obiekt jest instancją danej klasy.

  class Dog {}

  console.log(myToyota instanceof Car);
  console.log(myToyota instanceof Dog);

  return <div>OOP</div>;
};
