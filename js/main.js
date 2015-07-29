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
}

function renderElements(elementValues) {

    var $t = $('h1.zcs-title').first();
    if (elementValues.title && elementValues.url) {
        var a = document.createElement('a');
        var linkText = document.createTextNode(elementValues.url);
        a.appendChild(linkText);
        a.title = elementValues.url;
        a.href = elementValues.url;

        $t.text(elementValues.title + ' - ');
        $t.append(a);
    }
    //console.log(elementValues);

    var $hz = $('span.zcs').first();
    $hz.children().remove();

    elementValues.elements.forEach(function (elementValue) {
        //console.log(elementValue);
        $hz.append(template(elementValue));
    });

}

function saveSvg() {
    var svg = document.getElementById("svg");

    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg);

    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

    document.getElementById("link").href = url;
}

function getData() {
    $.getJSON(BASE_URL)
        .then(function (json) {
            data.push(json);
            renderElements(data[data.length - 1]);
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
            saveSvg();
        });


}

$(document).ready(function () {

    template = Handlebars.compile($('#zcs-template').html());
    document.getElementById("cheat-sheet").data = window.location.href;

    getData();
});
