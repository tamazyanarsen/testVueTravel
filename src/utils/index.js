export function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export function getRandomDates() {
    return [new Date(`${getRandom(5, 9)}.${getRandom(1, 30)}.2020`),
        new Date(`${getRandom(4, 6)}.${getRandom(1, 30)}.2020`)].sort((a, b) => {
        return a < b ? -1
            : a === b ? 0 : 1
    }).map(e => e.toISOString().split('T')[0].split('-').reverse().join('.'));
}

export function getRandomStatus() {
    const arr = ['новая', 'отмена', 'заезд', 'незаезд', 'подтверждено', 'оплачено', 'не оплачено'];
    return arr[Math.floor(Math.random() * arr.length)];
}

