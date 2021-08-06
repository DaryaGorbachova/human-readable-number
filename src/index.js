module.exports = function toReadable (number) {
    number = number.toString();
    let result = '';
        let h = ' hundred'
    if (number.length === 1) {
        switch (number) {
        case '0': result += 'zero';
            break;
        case '1': result += 'one';
            break;
        case '2': result += 'two';
            break;
        case '3': result += 'three';
            break;
        case '4': result += 'four';
            break;
        case '5': result += 'five';
            break;
        case '6': result += 'six';
            break;
        case '7': result += 'seven';
            break;
        case '8': result += 'eight';
            break;
        case '9': result += 'nine';
            break;			
        default: result = '';
        }
    } else if (number.length === 2) { //two digit number
        if (number[0] === '1') {
        switch (number) {
        case '10': result += 'ten';
            break;
        case '11': result += 'eleven';
            break;
        case '12': result += 'twelve';
            break;
        case '13': result += 'thirteen';
            break;
        case '14': result += 'fourteen';
            break;
        case '15': result += 'fifteen';
            break;
        case '16': result += 'sixteen';
            break;
        case '17': result += 'seventeen';
            break;
        case '18': result += 'eighteen';
            break;
        case '19': result += 'nineteen';
            break;			
            default: '';
        }} else { 
            switch (number[0]) {
        case '2': result += 'twenty';
            break;
        case '3': result += 'thirty';
            break;
        case '4': result += 'forty';
            break;
        case '5': result += 'fifty';
            break;
        case '6': result += 'sixty';
            break;
        case '7': result += 'seventy';
            break;
        case '8': result += 'eighty';
            break;
        case '9': result += 'ninety';
            }
            switch (number[1]) {
        case '0': result += '';
            break;
        case '1': result += ' one';
            break;
        case '2': result += ' two';
            break;
        case '3': result += ' three';
            break;
        case '4': result += ' four';
            break;
        case '5': result += ' five';
            break;
        case '6': result += ' six';
            break;
        case '7': result += ' seven';
            break;
        case '8': result += ' eight';
            break;
        case '9': result += ' nine';
            break;	
            }
        }
    
    
    } else { // 3 digit number 
        switch (number[0]) {
        case '1': result += 'one' + h;
            break;
        case '2': result += 'two' + h;
            break;
        case '3': result += 'three' + h;
            break;
        case '4': result += 'four' + h;
            break;
        case '5': result += 'five' + h;
            break;
        case '6': result += 'six' + h;
            break;
        case '7': result += 'seven' + h;
            break;
        case '8': result += 'eight' + h;
            break;
        case '9': result += 'nine' + h;
            break;			
        default: result = '';	}
    if (number[1] === '1') {
        switch (number[1]+number[2]) {
        case '10': result += ' ten';
            break;
        case '11': result += ' eleven';
            break;
        case '12': result += ' twelve';
            break;
        case '13': result += ' thirteen';
            break;
        case '14': result += ' fourteen';
            break;
        case '15': result += ' fifteen';
            break;
        case '16': result += ' sixteen';
            break;
        case '17': result += ' seventeen';
            break;
        case '18': result += ' eighteen';
            break;
        case '19': result += ' nineteen';
            break;			
        case '20': result += ' twenty';
                return result;
        }} else { 
            switch (number[1]) {
        case '2': result += ' twenty';
            break;
        case '3': result += ' thirty';
            break;
        case '4': result += ' forty';
            break;
        case '5': result += ' fifty';
            break;
        case '6': result += ' sixty';
            break;
        case '7': result += ' seventy';
            break;
        case '8': result += ' eighty';
            break;
        case '9': result += ' ninety';
            }
            switch (number[2]) {
        case '0': result += '';
            break;
        case '1': result += ' one';
            break;
        case '2': result += ' two';
            break;
        case '3': result += ' three';
            break;
        case '4': result += ' four';
            break;
        case '5': result += ' five';
            break;
        case '6': result += ' six';
            break;
        case '7': result += ' seven';
            break;
        case '8': result += ' eight';
            break;
        case '9': result += ' nine';
            break;	
            }
        }
            
            
    }
    
        return result;
    }
    
    
  //  toReadable(121);
    
    
    
    
    
    
    
    
    