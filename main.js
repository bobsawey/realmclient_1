
async function process_text() {

    // get textarea value
    var text = document.getElementById("code").value;
    console.log(text);
    let generated = "";
    await fetch('https://data.mongodb-api.com/app/triggers_realmapp-fhchj/endpoint/codes',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "message": text,
                "code": "function() { console.log('Hello World!'); }"
            })
        })
        .then(function (response) {
            return response.json();

        })
        .then(function (myJson) {

            generated = text + myJson;
            console.log(myJson);
        });

    console.log(generated);
    //print result to result div

    generated = hljs.highlightAuto(generated).value;
    document.getElementById("result").innerHTML = generated;
}
