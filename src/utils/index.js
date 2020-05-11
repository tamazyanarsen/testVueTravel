export function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export function getRandomDates() {
    return [new Date(2020, getRandom(5, 9), getRandom(1, 30)),
        new Date(2020, getRandom(5, 9), getRandom(1, 30))].sort((a, b) => {
        return a < b ? -1
            : a === b ? 0 : 1
    });
}

export function getRandomStatus() {
    const arr = ['новая', 'отмена', 'заезд', 'незаезд', 'подтверждено', 'оплачено', 'не оплачено'];
    return arr[Math.floor(Math.random() * arr.length)];
}

