/* eslint-disable block-spacing */

let submitted = false

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
    const submit = document.querySelector('.zf-submitColor')
    submit.addEventListener('click', (event) => {submitted = true
                                                postVinyl()});

});

async function postVinyl() {
    if (submitted) {
        // Selecting all text inputs
        const texts = document.querySelectorAll('input')
        /*
        3 Album Name
        4 Artist Name
        5 Producer FN 6 Producer LN
        7 Release Date
        8 Track Num
        9 weight
        10 Yes 11 No (is_explicit)
        12 Album Pic Upload
        */

        // Selecting the select inputs
        const selects = document.querySelectorAll('select')
        /*
        0 Genre
        1 Hour 2 Minute 3 Seconds
        */

        // Separating inputs into array so they can be "stringified"
        const singerDict = {artist_name:texts[4].value};


        // Requesting POST for Singers table
        const responseSingers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singerDict)
        });
        // console.log(responseSingers);



        // Separating inputs into array so they can be "stringified"
        const producerDict = {producer_fn:texts[5].value,producer_ln:texts[6].value};

        // Requesting POST for Producers table
        const responseProducers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producerDict)
        });

        // console.log(responseProducers);

        //Gets singer_id for vinyl being input
        const singers = await fetch('https://inst377-vinylweb.herokuapp.com/api/singers')
        .then(function(response) {
            return response.json();
        });

        console.log(singers)
        let singer_id_vinyl;
        singers.forEach((singer) => {
            if (singer['artist_name'] === texts[4].value) {
                singer_id_vinyl = singer['singer_id']
            }
        });

        //Gets producer_id for vinyl being input
        const producers = await fetch('https://inst377-vinylweb.herokuapp.com/api/producers')
        .then(function(response) {
            return response.json();
        });

        let producer_id_vinyl;
        producers.forEach((producer) => {
            if (`${producer['producer_fn']} ${producer['producer_ln']}` === `${texts[5].value} ${texts[6].value}`) {
                producer_id_vinyl = producer['producer_id']
            }
        });
        // console.log('end result')
        // console.log(singer_id_vinyl)
        // console.log(producer_id_vinyl)

        // Separating inputs into array so they can be "stringified"
        // setting variable for is_explicit so its easier to input into dictionary
        let explicit = 0
        if (texts[10].checked === true) {
            explicit = 1
        }

        const vinylDict = {
            singer_id:singer_id_vinyl,
            producer_id:producer_id_vinyl,
            album_name:texts[3].value,
            genre:selects[0].value,
            track_amount:texts[8].value,
            runtime:`${selects[1].value}:${selects[2].value}:${selects[3].value}`,
            first_available:texts[7].value,
            weight:texts[9].value,
            is_explicit:explicit};

        // Requesting POST for Vinyl table
        const responseVinyl = await fetch('https://inst377-vinylweb.herokuapp.com/api/vinyl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vinylDict)
        });
        // console.log(responseVinyl);
        console.log('finished post')
    }
}