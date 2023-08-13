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

  class DogTest {}

  console.log(myToyota instanceof Car);
  console.log(myToyota instanceof DogTest);

  // -----------------------------------------------------------------------------
  // POLIMORFIZM
  // -----------------------------------------------------------------------------

  // Polimorfizm to zdolność różnych klas do reagowania na te same metody w różny sposób.
  // Oznacza to, że różne obiekty mogą wykonywać te same operacje, ale w zależności od typu obiektu - zachowanie może być inne

  class AnimalPolimorpihsm {
    speak() {
      console.log('Animal makes a noise');
    }
  }

  class DogPolimorphism extends AnimalPolimorpihsm {
    speak() {
      console.log('Dog barks');
    }
  }

  class CatPolimorphism extends AnimalPolimorpihsm {
    speak() {
      console.log('Cat mewos');
    }
  }

  const animals = [new DogPolimorphism(), new CatPolimorphism()];
  animals.forEach((animal) => animal.speak());

  // -----------------------------------------------------------------------------
  // HERMETYZACJA
  // -----------------------------------------------------------------------------

  // Hermetyzacja odnosi się do kontrolowania dostępu do wewnętrznych składników obiektu
  // I umożliwiania dostępu tylko do tych, które powinny być publicznie dostępne.

  // -----------------------------------------------------------------------------
  //          PRIVATE VARIABLE
  // -----------------------------------------------------------------------------

  //          Właściwości i metody, do których dostęp jest ograniczony do wewnątrz obiektu, z wykorzystaniem hermetyzacji.

  // -----------------------------------------------------------------------------
  //          PUBLIC VARIABLE
  // -----------------------------------------------------------------------------

  //          Właściwości i metody, do których dostęp jest ograniczony do wewnątrz obiektu, z wykorzystaniem hermetyzacji.

  class ClassWithPrivate {
    #accessKey = 0;
    #privateFieldWithInitialize = 42;
    // STATIC PUBLIC FIELD
    // static publicFieldWithInitialize = 9;

    // PUBLIC FIELD
    publicFieldWithInitialize = 9;

    #privateMethod() {
      console.log("I'm private method");
    }

    returnPrivateField() {
      // funkcja haszujaca
      const hash = this.#accessKey + 1;

      return hash;
    }
  }

  const instanceOfClassWithPrivate = new ClassWithPrivate();
  // console.log(instanceOfClassWithPrivate.#accessKey) //SyntaxError
  console.log(instanceOfClassWithPrivate.returnPrivateField());

  // PUBLIC FIELD
  console.log(instanceOfClassWithPrivate.publicFieldWithInitialize);

  // STATIC PUBLIC FIELD
  // console.log(ClassWithPrivate.publicFieldWithInitialize);

  // -----------------------------------------------------------------------------
  // DZIEDZICZENIE
  // -----------------------------------------------------------------------------

  // Dziedzczenie to mechanizm, w którym jedna klasa może odziedziczyć właściwości i metody z innej klasy.
  // Dzięki temu możemy tworzyć hierarchię klas, gdzie klasa podrzędna dziedziczy zachowanie klasy nadrzędnej.

  class Animal {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }

  class Dog extends Animal {
    bark() {
      return 'woof';
    }

    speak() {
      console.log(`${this.getName()} barks ${this.bark()}`);
    }
  }

  const dog = new Dog('Reksio');
  dog.speak();

  // -----------------------------------------------------------------------------
  // HERMETYZACJA A DZIEDZICZENIE
  // -----------------------------------------------------------------------------

  // Dziedziczenie może wpływać na hermetyzację, ponieważ dziedziczące klasy uzyskują dostęp do publicznych
  // i chronionych właściwości oraz metod klasy nadrzędnej. Przy projektowaniu klasy nadrzędnej i podrzędnej,
  // ważne jest zachowanie spójności w hermetyzacji, aby uniknąć nieoczekiwanych problemów.
  // -----------------------------------------------------------------------------

  // WPŁYW NA ORGANIZACJĘ KODU:
  // -----------------------------------------------------------------------------
  // Dziedziczenie pomaga w organizacji kodu poprzez grupowanie wspólnych cech w klasach nadrzędnych
  // i umożliwiając dziedziczenie ich przez klasy podrzędne. To ułatwia zarządzanie i utrzymanie kodu,
  // ponieważ zmiany wprowadzone w klasie nadrzędnej automatycznie przenoszą się do klas podrzędnych.
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // PUŁAPKI I OGARNICZENIA:
  // -----------------------------------------------------------------------------
  //    Nadmierna złożoność hierarchii:
  //    Zbyt głęboka hierarchia dziedziczenia może prowadzić do skomplikowanego kodu i trudności w zrozumieniu struktury.

  //    Sztywność:
  //    Jeśli hierarchia jest źle zaprojektowana, zmiany w klasie nadrzędnej mogą wpłynąć na wiele klas podrzędnych.

  //    Rozbieżności:
  //    Dziedziczenie może prowadzić do sytuacji, w których klasy podrzędne nie pasują idealnie do koncepcji klasy nadrzędnej.

  // Dlatego też, dobrym podejściem jest stosowanie zasady kompozycji i dziedziczenia tylko tam,
  // gdzie jest to logicznie uzasadnione, a hierarchie klas są trzymane na rozsądnym poziomie.
  // -----------------------------------------------------------------------------

  // -----------------------------------------------------------------------------
  // KOPMPOZYCJA
  // -----------------------------------------------------------------------------

  // Kompozycja to proces tworzenia bardziej złożonych obiektów poprzez składanie ich z mniejszych, niezależnych komponentów.
  // W przeciwieństwie do dziedziczenia, kompozycja nie wymaga hierarchii klas, a komponenty mogą być używane wielokrotnie
  // Kompozycja skupia się na tworzeniu obiektów poprzez łączenie ich komponentów.

  // dziedziczenie

  class AnimalInheritence {
    speak() {
      console.log('Animal makes a noise');
    }
  }

  class DogInheritence extends AnimalInheritence {
    speak() {
      console.log('Dog barks');
    }
  }

  const dogInheritence = new DogInheritence();
  dogInheritence.speak();

  // kompozycja
  class SpeakerComposition {
    constructor(sound) {
      this.sound = sound;
    }

    makeSound() {
      console.log(this.sound);
    }
  }

  class DogComposition {
    constructor() {
      this.speaker = new SpeakerComposition('woof');
    }

    bark() {
      this.speaker.makeSound();
    }
  }

  const dogComposition = new DogComposition();
  dogComposition.bark();

  // Zalety dziedziczenia:
  //    Reużywalność: Możemy dziedziczyć istniejący kod i zachowanie.
  //    Hierarchia: Pomaga tworzyć struktury klas na podstawie wspólnych cech.

  // Zalety kompozycji:
  //    Modularność: Komponenty są niezależne, co ułatwia zarządzanie i utrzymanie.
  //    Elastyczność: Możemy zmieniać i modyfikować komponenty bez wpływu na inne.
  //    Unikanie pułapek dziedziczenia: Kompozycja unika problemów związanych z głębokimi hierarchiami.

  // Kiedy używać dziedziczenia, a kiedy kompozycji
  //    Dziedziczenie: Wtedy, gdy klasy naprawdę mają relację typu nadrzędny-podrzędny, a podrzędna klasa może dziedziczyć i rozszerzać zachowanie klasy nadrzędnej.
  //    Kompozycja: Wtedy, gdy chcemy tworzyć obiekty poprzez łączenie komponentów i uniknąć związanych z dziedziczeniem pułapek.

  // Pułapki i ograniczenia związane z kompozycją:
  //    Wiele instancji: Jeśli mamy wiele instancji obiektów komponujących te same komponenty, może to prowadzić do nadmiaru pamięci.
  //    Trudniejsze śledzenie: W porównaniu do hierarchii dziedziczenia, trudniej może być zrozumieć, które komponenty są składane w obiekcie.

  // -----------------------------------------------------------------------------
  // LINKI POMOCNICZE:
  // https://javascript.info/classes

  // https://khalilstemmler.com/articles/object-oriented/programming/4-principles/
  // https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP
  // https://www.toptal.com/javascript/functional-programming-javascript
  // https://javascript.plainenglish.io/what-are-javascript-programming-paradigms-3ef0f576dfdb
  // https://www.w3schools.com/jsref/jsref_classes.asp
  // https://www.geeksforgeeks.org/polymorphism-in-javascript/
  // https://zacznijprogramowac.net/szybki-kurs-javascript/dziedziczenie-w-javascript/
  // https://hackernoon.com/inheritance-vs-composition-in-javascript
  // https://kursjs.pl/kurs/obiekty/obiekty-enkapsulacja
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=pl
  // https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/

  //   ZADANIE 1.
  //   Stworzymy klasę komputera z poniższymi właściwościami:
  //         prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
  //         prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
  //         publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz
  //         argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz użyć metody add )
  //         publiczną metodę introduce() - która wyprintuje ulubione słowo
  //         poużywaj metod mini komputera

  //   ZADANIE 2.
  //   stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
  //            introduce() => "I am a Person"
  //        następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio komunikat
  //            introduce() => "I am a Person", "I am also a Doctor"
  //            introduce() => "I am a Person", "I am also a Builder"
  //        następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie :
  //        introduce() => "I'm a Pediatrician"
  //
  // Check console! :)

  // --------------------- ZADANIE 1 ----------------------------------------
  class Computer {
    #faveWord = 'I compute!';

    #add(x, y) {
      return x + y;
    }

    compute(x, y, multiplier) {
      const sum = this.#add(x, y);
      return sum * multiplier;
    }

    introduce() {
      return this.#faveWord;
    }
  }

  // Usage
  const myComputer = new Computer();
  const x = 5;
  const y = 7;
  const multiplier = 3;

  const result = myComputer.compute(x, y, multiplier);
  console.log(`Result: ${result}`);

  const favoriteWord = myComputer.introduce();
  console.log(`Favorite Word: ${favoriteWord}`);

  // --------------------- ZADANIE 2 ----------------------------------------
  class Person {
    introduce() {
      return 'I am a Person';
    }
  }

  class Builder extends Person {
    introduce() {
      return super.introduce() + ', I am also a Builder';
    }
  }

  class Doctor extends Person {
    introduce() {
      return super.introduce() + ', I am also a Doctor';
    }
  }

  class Pediatrician extends Doctor {
    introduce() {
      return "I'm a Pediatrician";
    }
  }

  // Usage
  const person = new Person();
  console.log(person.introduce()); // Output: "I am a Person"

  const builder = new Builder();
  console.log(builder.introduce()); // Output: "I am a Person, I am also a Builder"

  const doctor = new Doctor();
  console.log(doctor.introduce()); // Output: "I am a Person, I am also a Doctor"

  const pediatrician = new Pediatrician();
  console.log(pediatrician.introduce()); // Output: "I'm a Pediatrician"

  // --------------------- ZADANIE 3 ----------------------------------------

  class BankAccount {
    constructor(accountNumber, initialBalance) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
    }

    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
      } else {
        return 'Invalid amount for deposit.';
      }
    }

    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance: $${this.balance}`;
      } else {
        return 'Insufficient funds or invalid amount for withdrawal.';
      }
    }

    getBalance() {
      return this.balance;
    }
  }

  // Creating instances and testing methods
  const account1 = new BankAccount('123456', 1000);
  console.log(account1.deposit(500)); // Output: Deposited $500. New balance: $1500
  console.log(account1.withdraw(200)); // Output: Withdrawn $200. New balance: $1300
  console.log(account1.getBalance()); // Output: 1300

  const account2 = new BankAccount('987654', 2000);
  console.log(account2.deposit(-100)); // Output: Invalid amount for deposit.
  console.log(account2.withdraw(3000)); // Output: Insufficient funds or invalid amount for withdrawal.
  console.log(account2.getBalance()); // Output: 2000

  // --------------------- ZADANIE 4 ----------------------------------------

  class Movie {
    constructor(title, director, year) {
      this.title = title;
      this.director = director;
      this.year = year;
    }
  }

  class MovieCatalog {
    constructor() {
      this.movies = [];
    }

    addMovie(movie) {
      this.movies.push(movie);
    }

    displayMovies() {
      for (const movie of this.movies) {
        console.log(
          `Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}`
        );
      }
    }
  }

  // Creating instances and testing methods
  const movie1 = new Movie('Inception', 'Christopher Nolan', 2010);
  const movie2 = new Movie('The Shawshank Redemption', 'Frank Darabont', 1994);
  const movie3 = new Movie('The Matrix', 'Lana Wachowski', 1999);

  const catalog = new MovieCatalog();
  catalog.addMovie(movie1);
  catalog.addMovie(movie2);
  catalog.addMovie(movie3);

  catalog.displayMovies();

  // --------------------- ZADANIE 5 ----------------------------------------

  class MenuItem {
    constructor(name, description, price) {
      this.name = name;
      this.description = description;
      this.price = price;
    }
  }

  class Order {
    constructor() {
      this.items = [];
    }

    addItem(menuItem) {
      this.items.push(menuItem);
    }

    calculateTotal() {
      let total = 0;
      for (const item of this.items) {
        total += item.price;
      }
      return total;
    }

    displayOrderSummary() {
      console.log('Order Summary:');
      for (const item of this.items) {
        console.log(`- ${item.name}: ${item.price.toFixed(2)} EUR`);
      }
      console.log(`Total: ${this.calculateTotal().toFixed(2)} EUR`);
    }
  }

  // Creating instances and testing methods
  const dish1 = new MenuItem(
    'Spaghetti Carbonara',
    'Creamy pasta with bacon and eggs',
    12.99
  );
  const dish2 = new MenuItem(
    'Margherita Pizza',
    'Classic pizza with tomato, mozzarella, and basil',
    9.99
  );
  const dish3 = new MenuItem(
    'Chocolate Brownie',
    'Decadent chocolate dessert',
    6.49
  );

  const order = new Order();
  order.addItem(dish1);
  order.addItem(dish2);
  order.addItem(dish3);

  order.displayOrderSummary();

  // --------------------- ZADANIE 6 ----------------------------------------
  //   Tworzymy samochód w podejściu kompozycyjnym!
  //     + klasa Engine
  //     + start() => "engine is turned on
  //     + stop() => "engine is turned off
  //      klasa Klaxon
  //      beep() => "BEEEP!"
  //      klasa SteeringWheel
  //      turn(direction: string) => "Skręcamy w lewo/prawo
  //      klasa GPS
  //      navigate() => wyprintuje nam losowo: "turn right", "turn left", "drive straight"
  //      stwórz klasę Car, która posiada metody: start, stop, beep, turn, navigate
  //      w klasie Car powywołuj metody poszczególnych części auta

  class Engine {
    start() {
      return 'engine is turned on';
    }
    stop() {
      return 'engine is turned off';
    }
  }

  class Klaxon {
    beep() {
      return 'BEEEP';
    }
  }

  class SteeringWheel {
    turn(direction) {
      return `Turning ${direction}`;
    }
  }

  class GPS {
    navigate() {
      const directions = ['turn right', 'turn left', 'drive straight'];
      const randomIndex = Math.floor(Math.random() * directions.length);

      return directions[randomIndex];
    }
  }

  class CarExercise {
    constructor() {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.steeringWheel = new SteeringWheel();
      this.gps = new GPS();
    }

    start() {
      return this.engine.start();
    }

    stop() {
      return this.engine.stop();
    }

    beep() {
      return this.klaxon.beep();
    }

    navigate() {
      return this.gps.navigate();
    }

    turn(direction) {
      return this.steeringWheel.turn(direction);
    }
  }

  //Usage
  const myCar = new CarExercise();
  console.log(myCar.start());
  console.log(myCar.stop());
  console.log(myCar.beep());
  console.log(myCar.navigate());
  console.log(myCar.navigate());
  console.log(myCar.navigate());
  console.log(myCar.turn('left'));
  console.log(myCar.turn('right'));

  return <div>OOP</div>;
};
