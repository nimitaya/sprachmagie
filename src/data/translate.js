import axios from "axios"; // Importiere axios für HTTP-Anfragen
import fs from "fs"; // Importiere fs für die Arbeit mit Dateien
import { fileURLToPath } from "url"; // Importiere Module für die Arbeit mit Dateipfaden
import { dirname } from "path";

// Pfad zur Datei => data.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const dataFilePath = `${__dirname}/data.js`;
const dataFilePath = `${__dirname}/picQuizData.js`;

const targetLanguage = ["en", "fr", "es", "uk"];

// Funktion, die den Text übersetzt
async function translateText(text) {
  const translations = {};

  const translationPromises = targetLanguage.map(async (language) => {
    try {
      // Durchlaufe die Liste der Zielsprachen und sende eine API-Anfrage
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=de|${language}`;

      const response = await axios.get(url); // Sende die Anfrage an die API
      const translatedText = response.data.responseData.translatedText; // Erhalte den übersetzten Text
      translations[language] = translatedText;
    } catch (error) {
      console.error(`Error during translation to ${language}`, error);
      translations[language] = text; // Falls ein Fehler auftritt, behalte originalen Text
    }
  });

  await Promise.all(translationPromises); // Warte auf alle Übersetzungen
  return translations;
}

// Funktion, die die Daten übersetzt
async function translateData() {
  // Lese die Daten aus data.js
  //   let cardsData;
  let picQuizData;
  try {
    // cardsData = await import(dataFilePath).then((module) => module.cardsData);
    picQuizData = await import(dataFilePath).then(
      (module) => module.picQuizData
    );
  } catch (error) {
    // console.error("Fehler beim Lesen der Daten aus data.js", error);
    console.error("Error beim Lesen der Daten aus picQuizData.js", error);
    return;
  }

  // Array für alle Promises
  const translationPromises = [];

  // Gehe durch alle Datenkategorien

  //   for (const category in cardsData) {
  for (const category of picQuizData) {
    // for (const item of cardsData[category]) {
    for (const question of category.questions) {
      // Wenn das Wort in Deutsch vorhanden ist, übersetze es

      //   data.js
      //       if (item.words.de) {
      //         const translationPromise = translateText(item.words.de).then(
      //           (translations) => {
      //             item.words = { ...item.words, ...translations };
      //           }
      //         );
      //         translationPromises.push(translationPromise); // Füge das Promise zum Array hinzu
      //       }
      //     }
      //   }

      // picQuizData.js
      question.options.forEach((option) => {
        if (option.word.de) {
          const translationPromise = translateText(option.word.de).then(
            (translations) => {
              option.word = { ...option.word, ...translations };
            }
          );
          translationPromises.push(translationPromise);
        }
      });
    }
  }

  // Warte auf alle Übersetzungen
  await Promise.all(translationPromises);

  // Speichere die übersetzten Daten in data.js

  //   const translatedData = `export const cardsData = ${JSON.stringify(
  //     cardsData,
  //     null,
  //     2
  //   )};`;

  const translatedData = `export const picQuizData = ${JSON.stringify(
    picQuizData,
    null,
    2
  )};`;

  try {
    fs.writeFileSync(dataFilePath, translatedData);
    console.log("Daten wurden erfolgreich übersetzt und gespeichert.");
  } catch (error) {
    console.error("Fehler beim Speichern der übersetzten Daten", error);
  }
}

translateData();
