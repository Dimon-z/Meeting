/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

 */
function generateHashtag(str) {
  let output = [];
  output = str.trim();
  let firstLetter = 1;
  const hashtag = [];
  for (let index = 0; index < output.length; index++) {
    if (output[index] === ' ') {
      firstLetter = 1;
    } else if (firstLetter) {
      hashtag[index] = output[index].toUpperCase();
      firstLetter = 0;
    } else {
      hashtag[index] = output[index];
    }
  }
  console.log(hashtag.join('').length)
  if (hashtag.join('').length > 139 || hashtag.join('').length < 1) {
    return false;
  }
  return `#${hashtag.join('')}`;
}
console.log(generateHashtag('Code                                                                                                                                            Wars'));
