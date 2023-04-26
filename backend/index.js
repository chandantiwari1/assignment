const express = require('express');
const cors = require('cors');
const app = express();
const port = 8800;
const words = require('./words');
const sessionStorage = require('sessionstorage-for-nodejs');

const check = (c, count) => {
  let keywords = [c];
  sessionStorage.setItem('count', count);
  let allWordsArray = words;
  if (count < 1) {
    allWordsArray = words;
    sessionStorage.setItem('keywords', keywords);
  } else {
    if (sessionStorage.getItem('keywords')) {
      let arr = sessionStorage.getItem('keywords');
      arr.push(c);
      sessionStorage.setItem('keywords', arr)
    }
    allWordsArray = sessionStorage.getItem('words');
  }
  let success = true, index = -1;
  let wordsArray = [];
  for (let x of allWordsArray) {
    if (x.length == 5) {
      x = x.toLocaleLowerCase();
      var keywordsCount = 0;
      let keywordsArray = sessionStorage.getItem('keywords');
      for (let i = 0; i < keywordsArray.length; i++) {
        if (keywordsArray[i] == c) {
          keywordsCount += 1;
        }
      }
      var charCount = 0;
      for (let i = 0; i < x.length; i++) {
        if (x[i] == c) {
          if(i>keywordsCount){
            index=i;
          }
        }
      }
      console.log(charCount,keywordsCount);
      if (charCount >= keywordsCount) {
        wordsArray.push(x);
        success = true;
      }
    }
    console.log(wordsArray);
  }
  console.log(wordsArray)
  sessionStorage.setItem('words', wordsArray);
  console.log(sessionStorage.getItem('words'), sessionStorage.getItem('keywords'), sessionStorage.getItem('count'));
  return {
    success, index
  }
}

app.use(cors());
app.get("/", (req, res) => {
  let char = req.query.char;
  let count = req.query.count;
  res.send(check(req.query.char.toLocaleLowerCase(), req.query.count));
});

app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`);
});
