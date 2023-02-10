//------------------4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.-----------------//

// Examples:
// Input: "day" Output: "d"
// Input: "apple" Output: "ppl"
// Input: "javascript" Output: "jvscrpt"

const str = "javascript"
function removeVowels(str){
vowels = "a,e,i,o,u"
return str.split("").filter((a,b)=>!vowels.includes(a)).join("")

}

console.log(removeVowels(str));


