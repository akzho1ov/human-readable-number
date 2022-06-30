module.exports = function toReadable(number) {
    const oneArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozensArr = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let str = String(number);

    if (str.length === 1) {
        return oneArr[str];

    } else if (str.length === 2) {
        if (str > 10 && str < 20) {
            return dozensArr[str[1]];
        } else if (str[1] == 0) {
            return tensArr[str[0]];
        } else {
            return tensArr[str[0]] + ' ' + oneArr[str[1]];
        }
        
    } else if (str.length === 3) {
        if (str[1] == 0 && str[2] == 0) {
            return oneArr[str[0]] + ' hundred';
        } else if (str[1] == 0 && str[2] != 0) {
            return oneArr[str[0]] + ' hundred ' + oneArr[str[2]];     
        } else if (str[1] != 0 && str[2] == 0) {
            return oneArr[str[0]] + ' hundred ' + tensArr[str[1]];        
        } else if (str[1] == 1) {
            return oneArr[str[0]] + ' hundred ' + dozensArr[str[2]];
        }  else if (str[1] > 1) {
            return oneArr[str[0]] + ' hundred ' + tensArr[str[1]] + ' ' + oneArr[str[2]];
        }
    }
}
