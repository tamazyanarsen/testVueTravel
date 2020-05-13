import { getRandom, getRandomDates, getRandomStatus } from "./utils";

export const data = [
    {
        id: new Date().getTime() + getRandom(-(10 ** 6), 10 ** 6),
        number: getRandom(1, 10 ** 10),
        guest: 'Юрий Макаров-Апполонов',
        stock: getRandom(0, 100),
        parentsAndKidsCountArray: [getRandom(1, 2), getRandom(0, 3)],
        date: getRandomDates(),
        package: `Двухместный Классик Делюкс
                «Санаторно-курортное лечение» базовый курс
                «Санаторно-курортное лечение» базовый курс`,
        date_reservation: getRandomDates()[0],
        price: getRandom(100, 10 ** 6),
        commission: getRandom(100, 10 ** 6),
        status: getRandomStatus()
    },
    {
        id: new Date().getTime() + getRandom(-(10 ** 6), 10 ** 6),
        number: getRandom(1, 10 ** 10),
        guest: 'Юрий Макаров-Апполонов',
        stock: getRandom(0, 100),
        parentsAndKidsCountArray: [getRandom(1, 2), getRandom(0, 3)],
        date: getRandomDates(),
        package: `Двухместный Классик Делюкс
                «Санаторно-курортное лечение» базовый курс
                «Санаторно-курортное лечение» базовый курс`,
        date_reservation: getRandomDates()[0],
        price: getRandom(100, 10 ** 6),
        commission: getRandom(100, 10 ** 6),
        status: getRandomStatus()
    },
    {
        id: new Date().getTime() + getRandom(-(10 ** 6), 10 ** 6),
        number: getRandom(1, 10 ** 10),
        guest: 'Юрий Макаров-Апполонов',
        stock: getRandom(0, 100),
        parentsAndKidsCountArray: [getRandom(1, 2), getRandom(0, 3)],
        date: getRandomDates(),
        package: `Двухместный Классик Делюкс
                «Санаторно-курортное лечение» базовый курс
                «Санаторно-курортное лечение» базовый курс`,
        date_reservation: getRandomDates()[0],
        price: getRandom(100, 10 ** 6),
        commission: getRandom(100, 10 ** 6),
        status: getRandomStatus()
    }
];

export const hotels = [
    {name: 'Yalta Intourist', location: 'Ялта, Крым', number: 'ND-4567'},
    {name: 'Ореанда Премьер Отель', location: 'Бахчисарай, Крым', number: 'ND-4567'},
    {name: 'Ореанда Премьер Отель', location: 'Бахчисарай, Крым', number: 'ND-4567'}
];
