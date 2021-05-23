// Vowel Count
function getCount(str) {
    var vowelsCount = 0;
    
    return (str.match(/[aeiou]/ig)||[]).length;
    return vowelsCount;
  }
  
  //p given a string
  //r the number of how many vowels are in the string
  //e "hello" returns 2
  // .match() .length [aeiou]