"use strict";

var data = [],
    template,
    BASE_URL = getUrlParameter('schema');

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function renderElements(elementValues) {
    var $hz = $('p.zcs').first();
    $hz.children().remove();

    elementValues.forEach(function (elementValue) {
        console.log(elementValue);
        $hz.append(template(elementValue));
    });

}


function getData() {
    $.getJSON(BASE_URL)
        .then(function (json) {
            data.push(json);
            renderElements(data[data.length - 1].elements);
            prettyPrint();
        });


}

$(document).ready(function () {

    template = Handlebars.compile($('#zcs-template').html());

    getData();
});
