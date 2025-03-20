const quizData = {
  Zahlen: [
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

Wochentage: [
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

Monate: [
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
Früchte: [
  { "question": "Wie nennt man „Apfel“ auf Englisch?", "options": ["Apple", "Banana", "Cherry", "Grape"], "answer": "Apple" },
  { "question": "Wie nennt man „Banane“ auf Englisch?", "options": ["Apple", "Banana", "Pear", "Orange"], "answer": "Banana" },
  { "question": "Wie nennt man „Erdbeere“ auf Englisch?", "options": ["Blueberry", "Strawberry", "Raspberry", "Blackberry"], "answer": "Strawberry" },
  { "question": "Wie nennt man „Orange“ auf Englisch?", "options": ["Apple", "Peach", "Orange", "Lemon"], "answer": "Orange" },
  { "question": "Wie nennt man „Zitrone“ auf Englisch?", "options": ["Lime", "Orange", "Lemon", "Grape"], "answer": "Lemon" },
  { "question": "Wie nennt man „Traube“ auf Englisch?", "options": ["Cherry", "Berry", "Grape", "Plum"], "answer": "Grape" },
  { "question": "Wie nennt man „Kirsche“ auf Englisch?", "options": ["Grape", "Cherry", "Plum", "Peach"], "answer": "Cherry" },
  { "question": "Wie nennt man „Pfirsich“ auf Englisch?", "options": ["Pear", "Peach", "Plum", "Apple"], "answer": "Peach" },
  { "question": "Wie nennt man „Birne“ auf Englisch?", "options": ["Apple", "Pear", "Lemon", "Orange"], "answer": "Pear" },
  { "question": "Wie nennt man „Wassermelone“ auf Englisch?", "options": ["Melon", "Cantaloupe", "Watermelon", "Pineapple"], "answer": "Watermelon" }
],
Tiere: [
  { "question": "Wie nennt man „Hund“ auf Englisch?", "options": ["Dog", "Cat", "Horse", "Cow"], "answer": "Dog" },
  { "question": "Wie nennt man „Katze“ auf Englisch?", "options": ["Dog", "Mouse", "Cat", "Rabbit"], "answer": "Cat" },
  { "question": "Wie nennt man „Pferd“ auf Englisch?", "options": ["Cow", "Sheep", "Horse", "Goat"], "answer": "Horse" },
  { "question": "Wie nennt man „Kuh“ auf Englisch?", "options": ["Cow", "Pig", "Sheep", "Goat"], "answer": "Cow" },
  { "question": "Wie nennt man „Schwein“ auf Englisch?", "options": ["Sheep", "Cow", "Pig", "Horse"], "answer": "Pig" },
  { "question": "Wie nennt man „Schaf“ auf Englisch?", "options": ["Goat", "Sheep", "Rabbit", "Deer"], "answer": "Sheep" },
  { "question": "Wie nennt man „Kaninchen“ auf Englisch?", "options": ["Mouse", "Rabbit", "Rat", "Hamster"], "answer": "Rabbit" },
  { "question": "Wie nennt man „Maus“ auf Englisch?", "options": ["Rat", "Mouse", "Hamster", "Squirrel"], "answer": "Mouse" },
  { "question": "Wie nennt man „Fuchs“ auf Englisch?", "options": ["Wolf", "Fox", "Bear", "Lion"], "answer": "Fox" },
  { "question": "Wie nennt man „Löwe“ auf Englisch?", "options": ["Tiger", "Lion", "Leopard", "Cheetah"], "answer": "Lion" }
],
Farben: [
  { "question": "Wie nennt man „Rot“ auf Englisch?", "options": ["Blue", "Green", "Red", "Yellow"], "answer": "Red" },
  { "question": "Wie nennt man „Blau“ auf Englisch?", "options": ["Green", "Blue", "Purple", "Orange"], "answer": "Blue" },
  { "question": "Wie nennt man „Grün“ auf Englisch?", "options": ["Green", "Yellow", "Blue", "Brown"], "answer": "Green" },
  { "question": "Wie nennt man „Gelb“ auf Englisch?", "options": ["Red", "Blue", "Yellow", "Black"], "answer": "Yellow" },
  { "question": "Wie nennt man „Schwarz“ auf Englisch?", "options": ["Black", "White", "Grey", "Brown"], "answer": "Black" },
  { "question": "Wie nennt man „Weiß“ auf Englisch?", "options": ["Black", "White", "Pink", "Violet"], "answer": "White" },
  { "question": "Wie nennt man „Braun“ auf Englisch?", "options": ["Blue", "Brown", "Grey", "Green"], "answer": "Brown" },
  { "question": "Wie nennt man „Grau“ auf Englisch?", "options": ["Purple", "Grey", "Orange", "Red"], "answer": "Grey" },
  { "question": "Wie nennt man „Pink“ auf Englisch?", "options": ["Red", "Pink", "Blue", "Green"], "answer": "Pink" },
  { "question": "Wie nennt man „Lila“ auf Englisch?", "options": ["Purple", "Pink", "Blue", "Green"], "answer": "Purple" }
],

Jahreszeiten: [
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

Transport: [
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


Möbel: [
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
Gemüse: [
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
Körper: [
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
Kleidung: [
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