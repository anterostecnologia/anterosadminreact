export function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

export function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

export function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

export function isUndefined(input) {
    return input === void 0;
}

export function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

export function parseNumber(value) {
    if (value instanceof Number)
        return value;
    if (isUndefined(value))
        return 0;
    var value = new String(value) || "";
    var decimal = '.';
    value = value.replace(/[^0-9$.,]/g, '');
    if (value.indexOf(',') > value.indexOf('.')) decimal = ',';
    if ((value.match(new RegExp("\\" + decimal, "g")) || []).length > 1) decimal = "";
    if (decimal != "" && (value.length - value.indexOf(decimal) - 1 == 3)) decimal = "";
    value = value.replace(new RegExp("[^0-9$" + decimal + "]", "g"), "");
    value = value.replace(',', '.');
    return parseFloat(value);
}


export function formatNumber(value, mask) {
    if (isUndefined(value))
        value = 0;

    if (!mask || isNaN(+value)) {
        return value; // return as it is.
    }

    var isNegative, result, decimal, group, posLeadZero, posTrailZero, posSeparator,
        part, szSep, integer,

        // find prefix/suffix
        len = mask.length,
        start = mask.search(/[0-9\-\+#]/),
        prefix = start > 0 ? mask.substring(0, start) : '',
        // reverse string: not an ideal method if there are surrogate pairs
        str = mask.split('').reverse().join(''),
        end = str.search(/[0-9\-\+#]/),
        offset = len - end,
        substr = mask.substring(offset, offset + 1),
        indx = offset + ((substr === '.' || (substr === ',')) ? 1 : 0),
        suffix = end > 0 ? mask.substring(indx, len) : '';

    // mask with prefix & suffix removed
    mask = mask.substring(start, indx);

    // convert any string to number according to formation sign.
    value = mask.charAt(0) === '-' ? -value : +value;
    isNegative = value < 0 ? value = -value : 0; // process only abs(), and turn on flag.

    // search for separator for grp & decimal, anything not digit, not +/- sign, not #.
    result = mask.match(/[^\d\-\+#]/g);
    decimal = (result && result[result.length - 1]) || '.'; // treat the right most symbol as decimal
    group = (result && result[1] && result[0]) || ',';  // treat the left most symbol as group separator

    // split the decimal for the format string if any.
    mask = mask.split(decimal);
    // Fix the decimal first, toFixed will auto fill trailing zero.
    value = value.toFixed(mask[1] && mask[1].length);
    value = +(value) + ''; // convert number to string to trim off *all* trailing decimal zero(es)

    // fill back any trailing zero according to format
    posTrailZero = mask[1] && mask[1].lastIndexOf('0'); // look for last zero in format
    part = value.split('.');
    // integer will get !part[1]
    if (!part[1] || (part[1] && part[1].length <= posTrailZero)) {
        value = (+value).toFixed(posTrailZero + 1);
    }
    szSep = mask[0].split(group); // look for separator
    mask[0] = szSep.join(''); // join back without separator for counting the pos of any leading 0.

    posLeadZero = mask[0] && mask[0].indexOf('0');
    if (posLeadZero > -1) {
        while (part[0].length < (mask[0].length - posLeadZero)) {
            part[0] = '0' + part[0];
        }
    } else if (+part[0] === 0) {
        part[0] = '';
    }

    value = value.split('.');
    value[0] = part[0];

    // process the first group separator from decimal (.) only, the rest ignore.
    // get the length of the last slice of split result.
    posSeparator = (szSep[1] && szSep[szSep.length - 1].length);
    if (posSeparator) {
        integer = value[0];
        str = '';
        offset = integer.length % posSeparator;
        len = integer.length;
        for (indx = 0; indx < len; indx++) {
            str += integer.charAt(indx); // ie6 only support charAt for sz.
            // -posSeparator so that won't trail separator on full length
            /*jshint -W018 */
            if (!((indx - offset + 1) % posSeparator) && indx < len - posSeparator) {
                str += group;
            }
        }
        value[0] = str;
    }
    value[1] = (mask[1] && value[1]) ? decimal + value[1] : '';

    // remove negative sign if result is zero
    result = value.join('');
    if (result === '0' || result === '') {
        // remove negative sign if result is zero
        isNegative = false;
    }

    // put back any negation, combine integer and fraction, and add back prefix & suffix
    return prefix + ((isNegative ? '-' : '') + result) + suffix;
}


function round(number, decimalPlaces) {
    if (number[1] && decimalPlaces >= 0 && number[1].length > decimalPlaces) {
        //truncate to correct number of decimal places
        var decim = number[1].slice(0, decimalPlaces);
        //if next digit was >= 5 we need to round up
        if (+(number[1].substr(decimalPlaces, 1)) >= 5) {
            //But first count leading zeros as converting to a number will loose them
            var leadingzeros = "";
            while (decim.charAt(0) === "0") {
                leadingzeros = leadingzeros + "0";
                decim = decim.substr(1);
            }
            //Then we can change decim to a number and add 1 before replacing leading zeros
            decim = (+decim + 1) + '';
            decim = leadingzeros + decim;
            if (decim.length > decimalPlaces) {
                //adding one has made it longer
                number[0] = (+number[0] + +decim.charAt(0)) + ''; //add value of firstchar to the integer part
                decim = decim.substring(1);   //ignore the 1st char at the beginning which is the carry to the integer part
            }
        }
        number[1] = decim;
    }
    return number;
}