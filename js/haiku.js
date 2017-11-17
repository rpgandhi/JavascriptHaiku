export class Haiku {

  constructor(input){
    this.input = input;
  }

vowelReplace(word) {
  // let word = this.input;
  word = word.toLowercase();

  if(word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
}

// console.log(new_count('she'));
// console.log(new_count('spain'))
// console.log(new_count('softball'))
// console.log(new_count('contagion'))
}
