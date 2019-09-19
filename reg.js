var text = "{'{'}"

text = text.replace(/[^']}/g, function (wholeMatch, m1, m2, m3) {
    console.log(m1, m2)
    return "{'}'}"
});

console.log(text)