const quizData = {
  colors: [
    { question: "Wie heißt „Rot“ auf Englisch?", options: ["Blue", "Green", "Yellow", "Red"], answer: "Red" },
    { question: "Wie heißt „Blau“ auf Englisch?", options: ["Red", "Yellow", "Green", "Blue"], answer: "Blue" },
    { question: "Wie heißt „Gelb“ auf Englisch?", options: ["Red", "Yellow", "Black", "White"], answer: "Yellow" },
    { question: "Wie heißt „Grün“ auf Englisch?", options: ["Black", "White", "Green", "Pink"], answer: "Green" },
    { question: "Wie heißt „Schwarz“ auf Englisch?", options: ["Black", "White", "Blue", "Yellow"], answer: "Black" },
    { question: "Wie heißt „Weiß“ auf Englisch?", options: ["Black", "White", "Brown", "Purple"], answer: "White" },
    { question: "Wie heißt „Rosa“ auf Englisch?", options: ["Pink", "Blue", "Red", "Green"], answer: "Pink" },
    { question: "Wie heißt „Lila“ auf Englisch?", options: ["Black", "Purple", "Yellow", "Red"], answer: "Purple" },
    { question: "Wie heißt „Orange“ auf Englisch?", options: ["Red", "Orange", "Pink", "Green"], answer: "Orange" },
    { question: "Wie heißt „Braun“ auf Englisch?", options: ["Brown", "Black", "White", "Blue"], answer: "Brown" },
  ],

  fruits: [
    { question: "Wie heißt „Apfel“ auf Englisch?", options: ["Banana", "Orange", "Apple", "Grape"], answer: "Apple" },
    { question: "Wie heißt „Banane“ auf Englisch?", options: ["Apple", "Banana", "Grape", "Cherry"], answer: "Banana" },
    { question: "Wie heißt „Orange“ auf Englisch?", options: ["Lemon", "Pear", "Orange", "Grape"], answer: "Orange" },
    { question: "Wie heißt „Kirsche“ auf Englisch?", options: ["Apple", "Cherry", "Banana", "Lemon"], answer: "Cherry" },
    { question: "Wie heißt „Zitrone“ auf Englisch?", options: ["Lemon", "Orange", "Apple", "Pear"], answer: "Lemon" },
    { question: "Wie heißt „Erdbeere“ auf Englisch?", options: ["Strawberry", "Blueberry", "Raspberry", "Grape"], answer: "Strawberry" },
    { question: "Wie heißt „Traube“ auf Englisch?", options: ["Apple", "Grape", "Plum", "Cherry"], answer: "Grape" },
    { question: "Wie heißt „Pfirsich“ auf Englisch?", options: ["Pear", "Peach", "Plum", "Mango"], answer: "Peach" },
    { question: "Wie heißt „Birne“ auf Englisch?", options: ["Peach", "Pear", "Lemon", "Orange"], answer: "Pear" },
    { question: "Wie heißt „Wassermelone“ auf Englisch?", options: ["Watermelon", "Melon", "Pumpkin", "Coconut"], answer: "Watermelon" }
  ],

  animals: [
    { question: "Wie heißt „Hund“ auf Englisch?", options: ["Cow", "Cat", "Horse", "Dog"], answer: "Dog" },
    { question: "Wie heißt „Katze“ auf Englisch?", options: ["Dog", "Cow", "Cat", "Horse"], answer: "Cat" },
    { question: "Wie heißt „Kuh“ auf Englisch?", options: ["Dog", "Cow", "Cat", "Horse"], answer: "Cow" },
    { question: "Wie heißt „Pferd“ auf Englisch?", options: ["Dog", "Cow", "Cat", "Horse"], answer: "Horse" },
    { question: "Wie heißt „Fuchs“ auf Englisch?", options: ["Wolf", "Fox", "Bear", "Rabbit"], answer: "Fox" },
    { question: "Wie heißt „Löwe“ auf Englisch?", options: ["Tiger", "Lion", "Elephant", "Giraffe"], answer: "Lion" },
    { question: "Wie heißt „Elefant“ auf Englisch?", options: ["Rhino", "Hippo", "Elephant", "Gorilla"], answer: "Elephant" },
    { question: "Wie heißt „Schlange“ auf Englisch?", options: ["Lizard", "Snake", "Crocodile", "Frog"], answer: "Snake" },
    { question: "Wie heißt „Bär“ auf Englisch?", options: ["Wolf", "Bear", "Deer", "Fox"], answer: "Bear" },
    { question: "Wie heißt „Wolf“ auf Englisch?", options: ["Wolf", "Fox", "Dog", "Bear"], answer: "Wolf" }
  ],

  numbers: [
    { question: "Wie heißt „Drei“ auf Englisch?", options: ["Eight", "Nine", "Ten", "Three"], answer: "Three" },
    { question: "Wie heißt „Zehn“ auf Englisch?", options: ["Nine", "Ten", "Eleven", "Twelve"], answer: "Ten" },
    { question: "Wie heißt „Dreizehn“ auf Englisch?", options: ["Twelve", "Thirteen", "Fourteen", "Fifteen"], answer: "Thirteen" },
    /* { question: "Wie heißt „Vierunddreißig“ auf Englisch?", options: ["Thirty-three", "Thirty-four", "Thirty-five", "Thirty-six"], answer: "Thirty-four" }, */
   /*  { question: "Wie heißt „Acht“ auf Englisch?", options: ["Six", "Seven", "Eight", "Nine"], answer: "Eight" },
    { question: "Wie heißt „Fünf“ auf Englisch?", options: ["Four", "Five", "Six", "Seven"], answer: "Five" },
    { question: "Wie heißt „Zwei“ auf Englisch?", options: ["Five", "Six", "Two", "Seven"], answer: "Two" },
    { question: "Wie heißt „Zwölf“ auf Englisch?", options: ["Ten", "Eleven", "Twelve", "Thirteen"], answer: "Twelve" },
    { question: "Wie heißt „Sechsundfünfzig“ auf Englisch?", options: ["Fifty-four", "Fifty-five", "Fifty-six", "Fifty-seven"], answer: "Fifty-six" },
    { question: "Wie heißt „Sieben“ auf Englisch?", options: ["Seven", "Eight", "Nine", "Ten"], answer: "Seven" } */
],

weekdays: [
  { question: "Wie nennt man „Freitag“ auf Englisch?", options: ["Friday", "Saturday", "Sunday", "Monday"], answer: "Friday" },
  { question: "Wie nennt man „Dienstag“ auf Englisch?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], answer: "Tuesday" },
  { question: "Welcher Tag kommt nach Montag?", options: ["Sunday", "Tuesday", "Wednesday", "Thursday"], answer: "Tuesday" },
  { question: "Wie nennt man „Sonntag“ auf Englisch?", options: ["Friday", "Sunday", "Monday", "Wednesday"], answer: "Sunday" },
  { question: "Wie nennt man „Mittwoch“ auf Englisch?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], answer: "Wednesday" },
  { question: "Welcher Tag kommt vor Freitag?", options: ["Wednesday", "Monday", "Thursday", "Sunday"], answer: "Thursday" },
  { question: "Wie nennt man „Samstag“ auf Englisch?", options: ["Thursday", "Saturday", "Sunday", "Tuesday"], answer: "Saturday" },
  { question: "Wie nennt man „Montag“ auf Englisch?", options: ["Sunday", "Tuesday", "Monday", "Friday"], answer: "Monday" },
  { question: "Welcher Tag ist zwischen Mittwoch und Freitag?", options: ["Monday", "Tuesday", "Thursday", "Saturday"], answer: "Thursday" },
  { question: "Wie nennt man „Donnerstag“ auf Englisch?", options: ["Monday", "Tuesday", "Thursday", "Sunday"], answer: "Thursday" }
],

months: [
  { question: "Wie nennt man „September“ auf Englisch?", options: ["August", "September", "October", "November"], answer: "September" },
  { question: "Wie nennt man „Mai“ auf Englisch?", options: ["April", "May", "June", "July"], answer: "May" },
  { question: "Wie nennt man „Januar“ auf Englisch?", options: ["January", "February", "March", "April"], answer: "January" },
  { question: "Wie nennt man „Dezember“ auf Englisch?", options: ["October", "November", "December", "January"], answer: "December" },
  { question: "Wie nennt man „Juli“ auf Englisch?", options: ["June", "July", "August", "September"], answer: "July" },
  { question: "Wie nennt man „Februar“ auf Englisch?", options: ["January", "March", "February", "April"], answer: "February" },
  { question: "Wie nennt man „November“ auf Englisch?", options: ["October", "November", "December", "January"], answer: "November" },
  { question: "Wie nennt man „Oktober“ auf Englisch?", options: ["August", "September", "October", "November"], answer: "October" },
  { question: "Wie nennt man „März“ auf Englisch?", options: ["January", "March", "April", "May"], answer: "March" },
  { question: "Wie nennt man „Juni“ auf Englisch?", options: ["April", "May", "June", "July"], answer: "June" }
],

seasons: [
  { question: "Wie nennt man „Herbst“ auf Englisch?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Autumn" },
  { question: "Wie nennt man „Sommer“ auf Englisch?", options: ["Spring", "Summer", "Autumn", "Winter"], answer: "Summer" },
  { question: "Welche Jahreszeit kommt nach dem Sommer?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Autumn" },
  { question: "Wie nennt man „Frühling“ auf Englisch?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Spring" },
  { question: "Welche Jahreszeit kommt vor dem Frühling?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Winter" },
  { question: "Wie nennt man „Winter“ auf Englisch?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Winter" },
  { question: "In welcher Jahreszeit fallen die Blätter von den Bäumen?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Autumn" },
  { question: "Welche Jahreszeit hat die heißesten Temperaturen?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Summer" },
  { question: "Welche Jahreszeit hat die kältesten Temperaturen?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Winter" },
  { question: "In welcher Jahreszeit blühen die Blumen?", options: ["Winter", "Spring", "Autumn", "Summer"], answer: "Spring" }
],

transport: [
  { question: "Wie sagt man „Auto“ auf Englisch?", options: ["Bus", "Car", "Bike", "Train"], answer: "Car" },
  { question: "Wie nennt man „Zug“ auf Englisch?", options: ["Plane", "Car", "Train", "Boat"], answer: "Train" },
  { question: "Wie nennt man „Fahrrad“ auf Englisch?", options: ["Bus", "Car", "Bike", "Train"], answer: "Bike" },
  { question: "Wie sagt man „Flughafen“ auf Englisch?", options: ["Airport", "Station", "Harbor", "Bus stop"], answer: "Airport" },
  { question: "Wie nennt man „Bus“ auf Englisch?", options: ["Car", "Bus", "Bike", "Train"], answer: "Bus" },
  { question: "Wie nennt man „Boot“ auf Englisch?", options: ["Plane", "Car", "Train", "Boat"], answer: "Boat" },
  { question: "Wie sagt man „Flughafen“ auf Englisch?", options: ["Port", "Airport", "Harbor", "Station"], answer: "Airport" },
  { question: "Wie nennt man „Taxi“ auf Englisch?", options: ["Cab", "Train", "Bus", "Car"], answer: "Cab" },
  { question: "Wie nennt man „Lastwagen“ auf Englisch?", options: ["Truck", "Bus", "Car", "Train"], answer: "Truck" },
  { question: "Wie nennt man „Fähre“ auf Englisch?", options: ["Boat", "Plane", "Bus", "Train"], answer: "Ferry" }
],


furniture: [
  { question: "Wie nennt man „Tisch“ auf Englisch?", options: ["Chair", "Sofa", "Table", "Lamp"], answer: "Table" },
  { question: "Wie nennt man „Stuhl“ auf Englisch?", options: ["Chair", "Table", "Lamp", "Bed"], answer: "Chair" },
  { question: "Wie nennt man „Sofa“ auf Englisch?", options: ["Couch", "Bed", "Sofa", "Chair"], answer: "Sofa" },
  { question: "Wie nennt man „Lampe“ auf Englisch?", options: ["Lamp", "Chair", "Bed", "Desk"], answer: "Lamp" },
  { question: "Wie nennt man „Bett“ auf Englisch?", options: ["Bed", "Table", "Chair", "Sofa"], answer: "Bed" },
  { question: "Wie nennt man „Schrank“ auf Englisch?", options: ["Cabinet", "Table", "Chair", "Sofa"], answer: "Cabinet" },
  { question: "Wie nennt man „Regal“ auf Englisch?", options: ["Shelf", "Bed", "Sofa", "Desk"], answer: "Shelf" },
  { question: "Wie nennt man „Kissen“ auf Englisch?", options: ["Pillow", "Blanket", "Bed", "Sofa"], answer: "Pillow" },
  { question: "Wie nennt man „Teppich“ auf Englisch?", options: ["Carpet", "Curtain", "Sofa", "Desk"], answer: "Carpet" },
  { question: "Wie nennt man „Stuhl“ auf Englisch?", options: ["Couch", "Chair", "Table", "Desk"], answer: "Chair" }
],
vegetables: [
  { question: "Wie nennt man „Karotte“ auf Englisch?", options: ["Carrot", "Potato", "Cucumber", "Onion"], answer: "Carrot" },
  { question: "Wie nennt man „Kartoffel“ auf Englisch?", options: ["Potato", "Tomato", "Onion", "Carrot"], answer: "Potato" },
  { question: "Wie nennt man „Zwiebel“ auf Englisch?", options: ["Onion", "Cucumber", "Tomato", "Carrot"], answer: "Onion" },
  { question: "Wie nennt man „Gurke“ auf Englisch?", options: ["Cucumber", "Lettuce", "Tomato", "Carrot"], answer: "Cucumber" },
  { question: "Wie nennt man „Tomate“ auf Englisch?", options: ["Tomato", "Onion", "Cucumber", "Carrot"], answer: "Tomato" },
  { question: "Wie nennt man „Erbse“ auf Englisch?", options: ["Pea", "Bean", "Corn", "Tomato"], answer: "Pea" },
  { question: "Wie nennt man „Salat“ auf Englisch?", options: ["Lettuce", "Carrot", "Onion", "Tomato"], answer: "Lettuce" },
  { question: "Wie nennt man „Brokkoli“ auf Englisch?", options: ["Broccoli", "Spinach", "Lettuce", "Carrot"], answer: "Broccoli" },
  { question: "Wie nennt man „Paprika“ auf Englisch?", options: ["Pepper", "Tomato", "Cucumber", "Carrot"], answer: "Pepper" },
  { question: "Wie nennt man „Spinat“ auf Englisch?", options: ["Spinach", "Lettuce", "Tomato", "Broccoli"], answer: "Spinach" }
],
body: [
  { question: "Wie nennt man „Kopf“ auf Englisch?", options: ["Head", "Arm", "Leg", "Hand"], answer: "Head" },
  { question: "Wie nennt man „Hand“ auf Englisch?", options: ["Hand", "Leg", "Arm", "Head"], answer: "Hand" },
  { question: "Wie nennt man „Arm“ auf Englisch?", options: ["Arm", "Leg", "Head", "Foot"], answer: "Arm" },
  { question: "Wie nennt man „Bein“ auf Englisch?", options: ["Leg", "Head", "Hand", "Foot"], answer: "Leg" },
  { question: "Wie nennt man „Fuß“ auf Englisch?", options: ["Foot", "Leg", "Hand", "Head"], answer: "Foot" },
  { question: "Wie nennt man „Auge“ auf Englisch?", options: ["Eye", "Ear", "Mouth", "Nose"], answer: "Eye" },
  { question: "Wie nennt man „Ohr“ auf Englisch?", options: ["Ear", "Mouth", "Nose", "Eye"], answer: "Ear" },
  { question: "Wie nennt man „Nase“ auf Englisch?", options: ["Nose", "Mouth", "Eye", "Ear"], answer: "Nose" },
  { question: "Wie nennt man „Mund“ auf Englisch?", options: ["Mouth", "Nose", "Ear", "Eye"], answer: "Mouth" },
  { question: "Wie nennt man „Hals“ auf Englisch?", options: ["Neck", "Head", "Arm", "Leg"], answer: "Neck" }
],
clothes: [
  { question: "Wie nennt man „Hemd“ auf Englisch?", options: ["Shirt", "Pants", "Jacket", "Sweater"], answer: "Shirt" },
  { question: "Wie nennt man „Hose“ auf Englisch?", options: ["Pants", "Shirt", "Skirt", "Sweater"], answer: "Pants" },
  { question: "Wie nennt man „Jacke“ auf Englisch?", options: ["Jacket", "Sweater", "Shirt", "T-shirt"], answer: "Jacket" },
  { question: "Wie nennt man „Rock“ auf Englisch?", options: ["Skirt", "Pants", "Shirt", "Sweater"], answer: "Skirt" },
  { question: "Wie nennt man „Pullover“ auf Englisch?", options: ["Sweater", "Shirt", "Jacket", "Pants"], answer: "Sweater" },
  { question: "Wie nennt man „Schuhe“ auf Englisch?", options: ["Shoes", "Socks", "Pants", "Shirt"], answer: "Shoes" },
  { question: "Wie nennt man „Socken“ auf Englisch?", options: ["Socks", "Shoes", "Pants", "Shirt"], answer: "Socks" },
  { question: "Wie nennt man „T-Shirt“ auf Englisch?", options: ["T-shirt", "Sweater", "Shirt", "Jacket"], answer: "T-shirt" },
  { question: "Wie nennt man „Mantel“ auf Englisch?", options: ["Coat", "Sweater", "Shirt", "Pants"], answer: "Coat" },
  { question: "Wie nennt man „Kleid“ auf Englisch?", options: ["Dress", "Skirt", "Shirt", "Pants"], answer: "Dress" }
]




};

export default quizData;