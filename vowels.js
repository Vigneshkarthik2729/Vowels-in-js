var vowels = prompt("Enter the words");
var b= vowels.length;
count = 0;
for ( i=0; i<b; i++) {
 if (vowels[i]==' a' || vowels[i]=='e' || vowels[i]=='i' || vowels[i]=='o' || vowels[i]=='u') {
    count++;
 }
}

console.log(count);