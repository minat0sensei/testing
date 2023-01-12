function reverseString(text) {
    var reversed = "";
    for (var i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}
const text = "Hello World";
const reversed = reverseString(text);
console.log('reversed:', reversed);
