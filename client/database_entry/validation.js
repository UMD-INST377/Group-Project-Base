/* eslint-disable block-spacing */

// const { text } = require("body-parser");

let submitted = false
let updated = false
let deleted = false
let currAlbum = -1

// import { text } from "body-parser";

// $Id: $
function zf_ValidateAndSubmit() {
    if (zf_CheckMandatory()) {
        if (zf_ValidCheck()) {
            if (isSalesIQIntegrationEnabled) {
                zf_addDataToSalesIQ();
            }
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function zf_CheckMandatory() {
    for (i = 0; i < zf_MandArray.length; i++) {
        var fieldObj = document.forms.form[zf_MandArray[i]];
        if (fieldObj) {
            if (fieldObj.nodeName != null) {
                if (fieldObj.nodeName == 'OBJECT') {
                    if (!zf_MandatoryCheckSignature(fieldObj)) {
                        zf_ShowErrorMsg(zf_MandArray[i]);
                        return false;
                    }
                } else if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                    if (fieldObj.type == 'file') {
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_MandArray[i]);
                        return false;
                    }
                    fieldObj.focus();
                    zf_ShowErrorMsg(zf_MandArray[i]);
                    return false;
                } else if (fieldObj.nodeName == 'SELECT') { // No I18N
                    if (fieldObj.options[fieldObj.selectedIndex].value == '-Select-') {
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_MandArray[i]);
                        return false;
                    }
                } else if (fieldObj.type == 'checkbox' || fieldObj.type == 'radio') {
                    if (fieldObj.checked == false) {
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_MandArray[i]);
                        return false;
                    }
                }
            } else {
                var checkedValsCount = 0;
                var inpChoiceElems = fieldObj;
                for (var ii = 0; ii < inpChoiceElems.length; ii++) {
                    if (inpChoiceElems[ii].checked === true) {
                        checkedValsCount++;
                    }
                }
                if (checkedValsCount == 0) {
                    inpChoiceElems[0].focus();
                    zf_ShowErrorMsg(zf_MandArray[i]);
                    return false;
                }
            }
        }
    }
    return true;
}

function zf_ValidCheck() {
    var isValid = true;
    for (ind = 0; ind < zf_FieldArray.length; ind++) {
        var fieldObj = document.forms.form[zf_FieldArray[ind]];
        if (fieldObj) {
            if (fieldObj.nodeName != null) {
                var checkType = fieldObj.getAttribute("checktype");
                if (checkType == "c2") { // No I18N
                    if (!zf_ValidateNumber(fieldObj)) {
                        isValid = false;
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_FieldArray[ind]);
                        return false;
                    }
                } else if (checkType == "c3") { // No I18N
                    if (!zf_ValidateCurrency(fieldObj) || !zf_ValidateDecimalLength(fieldObj, 10)) {
                        isValid = false;
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_FieldArray[ind]);
                        return false;
                    }
                } else if (checkType == "c4") { // No I18N
                    if (!zf_ValidateDateFormat(fieldObj)) {
                        isValid = false;
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_FieldArray[ind]);
                        return false;
                    }
                } else if (checkType == "c5") { // No I18N
                    if (!zf_ValidateEmailID(fieldObj)) {
                        isValid = false;
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_FieldArray[ind]);
                        return false;
                    }
                } else if (checkType == "c6") { // No I18N
                    if (!zf_ValidateLiveUrl(fieldObj)) {
                        isValid = false;
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_FieldArray[ind]);
                        return false;
                    }
                } else if (checkType == "c7") { // No I18N
                    if (!zf_ValidatePhone(fieldObj)) {
                        isValid = false;
                        fieldObj.focus();
                        zf_ShowErrorMsg(zf_FieldArray[ind]);
                        return false;
                    }
                } else if (checkType == "c8") { // No I18N
                    zf_ValidateSignature(fieldObj);
                }
            }
        }
    }
    return isValid;
}

function zf_ShowErrorMsg(uniqName) {
    var fldLinkName;
    for (errInd = 0; errInd < zf_FieldArray.length; errInd++) {
        fldLinkName = zf_FieldArray[errInd].split('_')[0];
        document.getElementById(fldLinkName + "_error").style.display = 'none';
    }
    var linkName = uniqName.split('_')[0];
    document.getElementById(linkName + "_error").style.display = 'block';
}

function zf_ValidateNumber(elem) {
    var validChars = "-0123456789";
    var numValue = elem.value.replace(/^\s+|\s+$/g, '');
    if (numValue != null && !numValue == "") {
        var strChar;
        var result = true;
        if (numValue.charAt(0) == "-" && numValue.length == 1) {
            return false;
        }
        for (i = 0; i < numValue.length && result == true; i++) {
            strChar = numValue.charAt(i);
            if ((strChar == "-") && (i != 0)) {
                return false;
            }
            if (validChars.indexOf(strChar) == -1) {
                result = false;
            }
        }
        return result;
    } else {
        return true;
    }
}

function zf_ValidateDateFormat(inpElem) {
    var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
    if (dateValue == "") {
        return true;
    } else {
        return (zf_DateRegex.test(dateValue));
    }
}

function zf_ValidateCurrency(elem) {
    var validChars = "0123456789.";
    var numValue = elem.value.replace(/^\s+|\s+$/g, '');
    if (numValue.charAt(0) == '-') {
        numValue = numValue.substring(1, numValue.length);
    }
    if (numValue != null && !numValue == "") {
        var strChar;
        var result = true;
        for (i = 0; i < numValue.length && result == true; i++) {
            strChar = numValue.charAt(i);
            if (validChars.indexOf(strChar) == -1) {
                result = false;
            }
        }
        return result;
    } else {
        return true;
    }
}

function zf_ValidateDecimalLength(elem, decimalLen) {
    var numValue = elem.value;
    if (numValue.indexOf('.') >= 0) {
        var decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
        if (decimalLength > decimalLen) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}

function zf_ValidateEmailID(elem) {
    var check = 0;
    var emailValue = elem.value;
    if (emailValue != null && !emailValue == "") {
        var emailArray = emailValue.split(",");
        for (i = 0; i < emailArray.length; i++) {
            var emailExp = /^[\w]([\w\-.+'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
            if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
                check = 1;
            }
        }
        if (check == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function zf_ValidateLiveUrl(elem) {
    var urlValue = elem.value;
    if (urlValue !== null && typeof(urlValue) !== "undefined") {
        urlValue = urlValue.replace(/^\s+|\s+$/g, '');
        if (urlValue !== "") {
            var urlregex = new RegExp("^((((h|H)(t|T)|(f|F))(t|T)(p|P)((s|S)?)://[-.\\w]*)|(((w|W){3}\\.)[-.\\w]+))(/?)([-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$"); // Same regex as website_url in security-regex.xml. But single backslash is replaced with two backslashes.
            return (urlregex.test(urlValue));
        }
    }
    return true;
}

function zf_ValidatePhone(inpElem) {
    var phoneFormat = parseInt(inpElem.getAttribute("phoneFormat"));
    var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
    var toReturn = true;
    if (phoneFormat === 1) {
        if (inpElem.getAttribute("valType") == 'code') {
            var codeRexp = /^[+][0-9]{1,4}$/;
            if (fieldInpVal != "" && !codeRexp.test(fieldInpVal)) {
                return false;
            }
        } else {
            var IRexp = /^[+]{0,1}[()0-9- ]+$/;
            if (inpElem.getAttribute("phoneFormatType") == '2') {
                IRexp = /^[0-9]+$/;
            }
            if (fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
                toReturn = false;
                return toReturn;
            }
        }
        return toReturn;
    } else if (phoneFormat === 2) {
        var InpMaxlength = inpElem.getAttribute("maxlength");
        var USARexp = /^[0-9]+$/;
        if (fieldInpVal != "" && USARexp.test(fieldInpVal) && fieldInpVal.length == InpMaxlength) {
            toReturn = true;
        } else if (fieldInpVal == "") {
            toReturn = true;
        } else {
            toReturn = false;
        }
        return toReturn;
    }
}

function zf_ValidateSignature(objElem) {
    var linkName = objElem.getAttribute("compname");
    var canvasElem = document.getElementById("drawingCanvas-" + linkName);
    var isValidSign = zf_IsSignaturePresent(objElem, linkName, canvasElem);
    var hiddenSignInputElem = document.getElementById("hiddenSignInput-" + linkName);
    if (isValidSign) {
        hiddenSignInputElem.value = canvasElem.toDataURL();
    } else {
        hiddenSignInputElem.value = ""; // No I18N
    }
    return isValidSign;
}

function zf_MandatoryCheckSignature(objElem) {
    var linkName = objElem.getAttribute("compname");
    var canvasElem = document.getElementById("drawingCanvas-" + linkName);
    var isValid = zf_IsSignaturePresent(objElem, linkName, canvasElem);
    return isValid;
}

function zf_IsSignaturePresent(objElem, linkName, canvasElem) {
    var context = canvasElem.getContext('2d'); // No I18N
    var canvasWidth = canvasElem.width;
    var canvasHeight = canvasElem.height;
    var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
    var signLen = canvasData.data.length;
    var flag = false;
    for (var index = 0; index < signLen; index++) {
        if (!canvasData.data[index]) {
            flag = false;
        } else if (canvasData.data[index]) {
            flag = true;
            break;
        }
    }
    return flag;
}

function zf_FocusNext(elem, event) {
    if (event.keyCode == 9 || event.keyCode == 16) {
        return;
    }
    if (event.keyCode >= 37 && event.keyCode <= 40) {
        return;
    }
    var compname = elem.getAttribute("compname");
    var inpElemName = elem.getAttribute("name");
    if (inpElemName == compname + "_countrycode") {
        if (elem.value.length == 3) {
            document.getElementsByName(compname + "_first")[0].focus();
        }
    } else if (inpElemName == compname + "_first") {
        if (elem.value.length == 3) {
            document.getElementsByName(compname + "_second")[0].focus();
        }
    }
}

// Creating event listener for submit button on data entry
window.addEventListener('DOMContentLoaded', (event) => {
    const alreadyExists = document.querySelectorAll('input')[1]
    alreadyExists.addEventListener('keyup', (event) => {
        albumExistsInteraction(alreadyExists.value)
    });

    const submit = document.querySelector('.zf-submitColor')
    submit.addEventListener('click', (event) => {
        submitted = true
        postVinyl()
    });

    const update = document.querySelector('.zf-update')
    update.addEventListener('click', (event) => {
        updated = true
        updateVinyl()
    });

    const deleteAlbum = document.querySelector('.zf-delete')
    deleteAlbum.addEventListener('click', (event) => {
        deleted = confirm("Are you sure you want to delete this vinyl from the database?")
        deleteVinyl()
    })
});

async function postVinyl() {
    if (submitted) {
        // Selecting all text inputs
        const texts = document.querySelectorAll('input')
            /*
            1 Album Name
            2 Artist Name
            3 Producer FN 4 Producer LN
            5 Release Date
            6 Track Num
            7 weight
            8 Yes 9 No (is_explicit)
            10 Album Pic Upload
            */

        // Selecting the select inputs
        const selects = document.querySelectorAll('select')
            /*
            0 Genre
            1 Hour 2 Minute 3 Seconds
            */

        // Separating inputs into array so they can be "stringified"
        const singerDict = { artist_name: texts[2].value };


        // Requesting POST for Singers table
        const responseSingers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singerDict)
        });
        console.log(responseSingers);


        // Separating inputs into array so they can be "stringified"
        const producerDict = { producer_fn: texts[3].value, producer_ln: texts[4].value };

        // Requesting POST for Producers table
        const responseProducers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producerDict)
        });
        console.log(responseProducers);

        // Gets singer_id for vinyl being input
        const singers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers')
            .then(function(response) {
                return response.json();
            });

        let singer_id_vinyl;
        for (x = 0; x < singers.length; x++) {
            if (singers[x]['artist_name'] === texts[2].value) {
                singer_id_vinyl = singers[x]['singer_id'];
                break;
            }
        }

        // Gets producer_id for vinyl being input
        const producers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers')
            .then(function(response) {
                return response.json();
            });

        let producer_id_vinyl;
        for (x = 0; x < producers.length; x++) {
            if (`${producers[x]['producer_fn']} ${producers[x]['producer_ln']}` === `${texts[3].value} ${texts[4].value}`) {
                producer_id_vinyl = producers[x]['producer_id'];
                break;
            }
        }

        console.log('end result')
        console.log(singer_id_vinyl)
        console.log(producer_id_vinyl)

        // Separating inputs into array so they can be "stringified"
        // setting variable for is_explicit so its easier to input into dictionary
        let explicit = 0
        if (texts[8].checked === true) {
            explicit = 1
        }

        const vinylDict = {
            singer_id: singer_id_vinyl,
            producer_id: producer_id_vinyl,
            album_name: texts[1].value,
            genre: selects[0].value,
            track_amount: texts[6].value,
            runtime: `${selects[1].value}:${selects[2].value}:${selects[3].value}`,
            first_available: texts[5].value,
            weight: texts[7].value,
            is_explicit: explicit
        };

        // Requesting POST for Vinyl table
        const responseVinyl = await fetch('https://inst377-vinylweb.herokuapp.com/api/vinyl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vinylDict)
        });
        console.log(responseVinyl);
        console.log('finished post');

        alert('Album Successfully Uploaded')
    }
}

async function updateVinyl(){
    if(updated && currAlbum !== -1){
        // Selecting all text inputs

        const texts = document.querySelectorAll('input')
            /*
            1 Album Name
            2 Artist Name
            3 Producer FN 4 Producer LN
            5 Release Date
            6 Track Num
            7 weight
            8 Yes 9 No (is_explicit)
            10 Album Pic Upload
            */

        // Selecting the select inputs
        const selects = document.querySelectorAll('select')
            /*
            0 Genre
            1 Hour 2 Minute 3 Seconds
            */



        // Gets singer_id for vinyl being updated
        const singers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers')
            .then(function(response) {
                return response.json();
            });

        let singer_id_vinyl = -1;
        for (x = 0; x < singers.length; x++) {
            if (singers[x]['artist_name'] === texts[2].value) {
                console.log(singers[x]['singer_id'])
                singer_id_vinyl = singers[x]['singer_id'];
                break;
            }
        }
        

        // If singer doesn't already exists in table then it is posted into singers first
        if (singer_id_vinyl === -1) {
            // Separating inputs into array so they can be "stringified"
            const singerDict = { artist_name: texts[2].value };

            singer_id_vinyl = singers.length+1
            // Requesting POST for Singers table
            const responseSingers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(singerDict)
            });

        }
        console.log(singer_id_vinyl)



        // Gets producer_id for vinyl being updated
        const producers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers')
            .then(function(response) {
                return response.json();
            });

        let producer_id_vinyl = -1;
        for (x = 0; x < producers.length; x++) {
            if (`${producers[x]['producer_fn']} ${producers[x]['producer_ln']}` === `${texts[3].value} ${texts[4].value}`) {
                producer_id_vinyl = producers[x]['producer_id'];
                break;
            }
        }

        
        if(producer_id_vinyl === -1){
            producer_id_vinyl = producers.length+1
            const producerDict = { producer_fn: texts[3].value, producer_ln: texts[4].value };
            // Requesting POST for Producers table
            const responseProducers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producerDict)
            });
        }

        // Separating inputs into array so they can be "stringified"
        // setting variable for is_explicit so its easier to input into dictionary
        let explicit = 0
        if (texts[8].checked === true) {
            explicit = 1
        }

        const vinylDict = {
            singer_id: singer_id_vinyl,
            producer_id: producer_id_vinyl,
            album_name: texts[1].value,
            genre: selects[0].value,
            track_amount: texts[6].value,
            runtime: `${selects[1].value}:${selects[2].value}:${selects[3].value}`,
            first_available: texts[5].value,
            weight: texts[7].value,
            is_explicit: explicit,
            vinyl_id: currAlbum
        };

        // Requesting PUT for Vinyl table
        const responseVinyl = await fetch('https://inst377-vinylweb.herokuapp.com/api/vinyl', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vinylDict)
        });

        alert('Album Successfully Updated');
    }
}

async function deleteVinyl() {
    if (deleted && currAlbum !== -1) {
        vinylDict = {
            vinyl_id: currAlbum
        }

        // Requesting PUT for Vinyl table
        const responseVinyl = await fetch('https://inst377-vinylweb.herokuapp.com/api/vinyl', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vinylDict)
        });

        alert('Album Successfully Deleted');
    }
}

async function albumExistsInteraction(albumName) {
    // Selecting various buttons at the bottom of the page
    const submitBtn = document.querySelector('.zf-submitColor')
    const updateBtn = document.querySelector('.zf-update')
    const deleteBtn = document.querySelector('.zf-delete')

    // Getting vinyl table to compare to user's input so we can activate the update and delete buttons if the vinyl exists
    let found = false
    const vinylGet = await fetch('https://inst377-vinylweb.herokuapp.com/api/vinyl')
        .then(function(response) {
            return response.json();
        });
    vinylGet.forEach((vinyl) => {
        // If users input is an existing album
        if (albumName.toLowerCase() === vinyl['album_name'].toLowerCase()) {
            console.log('exists')
            updateBtn.style.background = '#2596e6'
            deleteBtn.style.background = '#2596e6'
            found = true
            currAlbum = vinyl['vinyl_id']
        }
    });
    if (found === false) {
        updateBtn.style.background = 'grey';
        deleteBtn.style.background = 'grey';
        currAlbum = -1
    }
}

