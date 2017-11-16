import { Haiku } from './../js/haiku.js';

describe('Haiku', function(){
  it('should test whether the input contains letters only', function() {
    let haiku = new Haiku("he has the dog", "mango banana", "today is rainy")
    expect(haiku.line1).toContain("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

    expect(haiku.line2).toContain("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

    expect(haiku.line3).toContain("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

  });
});

describe('Haiku', function() {
  it('it will replace vowels with spaces', (function(){
    let haiku = new Haiku('he has the dog', 'the sky is blue', 'today is rainy');
    haiku.vowelReplace();
    expect(haiku.line1).toEqual("h  h s th  d g");
    console.log("$$$$$$$$$$$$$$" + haiku.line1);
    expect(haiku.line2).toEqual("th  sk   s bl  ");
    expect(haiku.line3).toEqual("t d y  s r  ny");
  }));
});


// describe('Haiku', function(){
//   it('it will replace vowels with spaces', (function() {
//     let haiku = new Haiku('he has the dog', "the sky is blue", 'today is rainy');
//     console.log(haiku);
//     expect(haiku.line1.vowelReplace()).toEqual("h  h s th  d g");
//     expect(haiku.line2.vowelReplace()).toEqual("th  sk   s bl  ");
//     expect(haiku.line3.vowelReplace()).toEqual("t d y  s r  ny");
//   });
// });
