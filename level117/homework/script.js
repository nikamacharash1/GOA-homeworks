class MathHelper {
    static PI = Math.PI;

    static power(base, exponent) {
        return Math.pow(base, exponent);
    }
}

console.log(`Pi: ${MathHelper.PI}`);
console.log(`2 raised to the power of 3: ${MathHelper.power(2, 3)}`);


class RandomHelper {
    static CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    static randomChar() {
        const randomIndex = Math.floor(Math.random()) * 1000
        return RandomHelper.CHAR_SET.charAt(randomIndex);
    }
}

console.log(`Random character: ${RandomHelper.randomChar()}`);



class TimeHelper {
    static CREATION_TIME = new Date().getTime();

    static formatMilliseconds(milliseconds) {
        const date = new Date(milliseconds);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        };
        return date.toLocaleDateString('en-US', options);
    }
}

console.log(`Creation time (milliseconds): ${TimeHelper.CREATION_TIME}`);
console.log(`Creation time (formatted): ${TimeHelper.formatMilliseconds(TimeHelper.CREATION_TIME)}`);
