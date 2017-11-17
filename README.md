When installing Babel:

  npm install babel-core babel-loader --save-dev




Code from original haiku.js:


export class Haiku {

  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  vowelReplace() {
    const vowels = ["a", "e", "i", "u", "o", "A", "E", "I", "O", "U"];

    let input1 = this.line1;
    // let input2 = this.line2;
    // let input3 = this.line3;

    // if (input1.length >= 4) {
    //   this.line1 = "1 consonant";
    // } else {

      let wordSplit = input1.split(" ");
      let emptyArray = [];

        let wordJoin = wordSplit.join('');
        console.log(wordJoin);

      // wordSplit.forEach(function(word) {
          //
          // if (vowels.includes(wordJoin.charAt(0))) {
          //   console.log(emptyArray + "line 24");
          //
          //   for (let i = 0; i < wordJoin.length; i++) {
          //
          //     console.log("line 27");
          //
          //     if (vowels.includes(wordJoin.charAt(i))) {
          //
          //       console.log("line 29");
          //     }
          //     else {
          //       emptyArray.push(wordJoin.charAt(i));
          //       console.log(emptyArray + "line 32");
          //     }
          //     this.line1 = emptyArray;
          //   }
          //
          // } else if (wordJoin.includes("ia")) {
          //     let inputReplace = wordJoin.replace("ia", "");
          //     for (let i = 0; i < inputReplace.length; i++) {
          //       if (vowels.includes(inputReplace.charAt(i))) {
          //         console.log(inputReplace);
          //       }
          //       else {
          //         emptyArray.push(inputReplace.charAt(i));
          //         console.log(emptyArray);
          //       }
          //       this.line1 = emptyArray;
          //     }
          // } else if (wordJoin.includes("ion")) {
          //   let inputReplace = wordJoin.replace("ion", "");
          //   for (let i = 0; i < inputReplace.length; i++) {
          //     if (vowels.includes(inputReplace.charAt(i))) {
          //       console.log(inputReplace);
          //     }
          //     else {
          //       emptyArray.push(inputReplace.charAt(i));
          //       console.log("Line 72 Working");
          //     }
          //     this.line1 = emptyArray;
          //   }
          // }
          // ----- WORKS ENDS

          for (let i = 0; i < wordJoin.length; i++) {
            if (vowels.includes(wordJoin.charAt(i))){
            }
            else {
              emptyArray.push(wordJoin.charAt(i));
              console.log(emptyArray);
            }
          }
    }
  }

// }
