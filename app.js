const dict = require('./words_dictionary.json')

function isValid(word) {
    // JavaScript objects are implemented using Hash tables under the hood
    if (dict[word.toLowerCase()])
        return true;
    return false;
}

function wordBreak(str, n, result) {
    //process all prefixes one by one
    for (let i = 1; i <= n; i++) {
        let prefix = str.substr(0, i);

        // if dictionary conatins this prefix, we check for remaining string
        if (isValid(prefix)) {
            // if no more elements are there, print it
            if (i == n) {
                // add this to previous prefix
                result += prefix;
                console.log(result);
                return;
            }

            wordBreak(str.substr(i, n - i), n - i, result + prefix + " ");
        }
    }
}



let testStrings = [
    'ilovefootball',
    'iamyourfriend',
]

testStrings.forEach(str => {
    console.log("test: " + str)
    wordBreak(str, str.length, "");
})

