const express = require('express');
const axios = require ('axios');
const word = express.Router();


word.get('/newword',(req,res)=>{
 
    var options = {
      method: 'GET',
      url: 'https://random-words-with-pronunciation.p.rapidapi.com/word',
      headers: {
        'x-rapidapi-host': 'random-words-with-pronunciation.p.rapidapi.com',
        'x-rapidapi-key': '95d56cbb93mshe2ffaae01229522p187f8fjsnb00930f91392'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      console.log(response.data[0].word,response.data[0].definition,response.data[0].pronunciation);
      res.render('word',{word:response.data[0].word,definition:response.data[0].definition,
        pronunciation:response.data[0].pronunciation,title: 'word'});
    }).catch(function (error) {
      console.error(error);
    });
  
});

module.exports= word;