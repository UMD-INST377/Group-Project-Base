function formToObject(htmlFormElement) {
    const formItem = new FormData(htmlFormElement).entries();
    const formArray = Array.from(formItem);
    const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
        collection[item[0]] = item[1];
    }
    return collection;
}, {});
return formObject;
}

form.addEventListner('submit_song', async (submitEvent) => {
    submitEvent.preventDefault();
    const formObj = formToObject(form);
    console.log('check the form for filters', formObj);
    const postResult = await fetch('/api/sqlDemo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)
    });
    const postResultJSON = await postResult.json()
    console.log('return from Post', postResult)
    console.log('return from Post JSON', postResultJSON)
})