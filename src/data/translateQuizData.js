import axios from "axios";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Pfad zur Datei => quizData.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Pfad zum Objekt quizData
const dataFilePath = `${__dirname}/quizData.js`;

const targetLanguage = ["fr", "es", "uk"];

// Funktion, die den Text übersetzt
async function translateText(text, language) {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=en|${language}`;

    const response = await axios.get(url);
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error(`Error during translation to ${language}`, error);
    return text;
  }
}

// Funktion, die die Daten übersetzt
async function translateQuizData() {
  let quizData;

  //   Lese die Daten aus quizData.js
  try {
    quizData = (await import(dataFilePath)).default;
  } catch (error) {
    console.error("Error beim Lesen der Daten aus quizData.js", error);
    return;
  }

  const translationPromises = [];

  //Gehe durch alle Datenkategorien
  for (const category in quizData) {
    // Gehe durch alle Elemente der Kategorie
    for (const item of quizData[category]) {
      // Übersetze die "question"
      for (const language of targetLanguage) {
        const answerPromise = translateText(item.answer, language).then(
          (translatedAnswer) => {
            if (!item.translatedAnswer)
              item.translatedAnswer = { en: item.answer };
            item.translatedAnswer[language] = translatedAnswer;
          }
        );
        translationPromises.push(answerPromise);
      }

      // Übersetze die "options"
      item.options = await Promise.all(
        item.options.map(async (option) => {
          const translationsArray = await Promise.all(
            targetLanguage.map(async (language) => {
              return await translateText(option, language);
            })
          );

          const optionsObject = { en: option };
          targetLanguage.forEach((language, index) => {
            optionsObject[language] = translationsArray[index];
          });
          return optionsObject;
        })
      );
    }
  }
  // Warte auf alle Übersetzungen
  await Promise.all(translationPromises);

  // Speichere die übersetzten Daten zurück in die Datei
  const translatedData = `const quizData = ${JSON.stringify(
    quizData,
    null,
    2
  )};\n\nexport default quizData;`;

  // Schreibe in die Datei
  try {
    fs.writeFileSync(dataFilePath, translatedData);
    console.log("Daten erfolgreich übersetzt und zurückgeschrieben");
  } catch (error) {
    console.error("Fehler beim Speichern der übersetzten Daten", error);
  }
}

translateQuizData();
