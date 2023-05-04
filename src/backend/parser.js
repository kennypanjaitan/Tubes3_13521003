import parseExpression from './calculator';
import getDayOfWeek from './date';

function parser(str) {
    if (isDate(str)) {
        return getDayOfWeek(...Object.values(parseDate(str)));
        // return 'aaaaa'
    }
    else if (isMathExpression(str)) {
        return parseExpression(str);
        // return 'bbbbb'
    }
    else {
        return "Belum ada"
    }
}

function isDate(str) {
    const date = Date.parse(str);
    return !isNaN(date);
}

function parseDate(str) {
    const date = new Date(str);
  
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return { year, month, day };
}

function isMathExpression(str) {
    const pattern = /^[\d\s\(\)\+\-\*\/\^\%\.]+$/;
    return pattern.test(str);
}

export default parser;