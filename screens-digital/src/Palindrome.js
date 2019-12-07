//Make the following test cases pass

function isPalindrome(phrase){
return ( phrase.replace(/\s/g,'').toLowerCase() == phrase.replace(/\s/g,'').toLowerCase().split("").reverse().join(""))
}

function check(phrase, shouldBePalindrome){

console.log(isPalindrome(phrase) === shouldBePalindrome ? "PASS" : "FAIL");

}

check("abcba", true);

check("abcde", false);

check("Mr owl ate my metal worm", true);

check("Never Odd Or Even", true);

check("Never Even Or Odd", false);