<template>
    <div>
        <header>
            <div style="padding-bottom: 2%;">
                <h5 style="display: inline-block">
                    <b class="logo_name">
                        Крым. Travel
                        <span>Sanatorium</span>
                    </b>
                </h5>
                <b-dropdown variant="outline-dark"
                            :text="`${selectedHotel.name} ${selectedHotel.name}`">
                    <b-dropdown-item disabled
                                     class="hotels-dropdown-disabled">Выберите объект для редактирования
                    </b-dropdown-item>
                    <b-dropdown-item style="width: 100%">sdfsdlkfjklsdf</b-dropdown-item>
                    <b-dropdown-item>sdfsdlkfjklsdf</b-dropdown-item>
                </b-dropdown>
                <div style="float: right"
                     class="header-buttons">
                    <div>
                        <svg width="24"
                             height="24"
                             viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12"
                                    cy="12"
                                    r="9"
                                    stroke="#4A4A4A"
                                    stroke-width="2"
                                    stroke-linejoin="round"></circle>
                            <path d="M10.8549 13.228H12.2469L12.2949 12.712C12.3189 12.292 12.7989 11.932 13.2789 11.476C13.8189 10.96 14.3469 10.336 14.3469 9.4C14.3469 7.828 13.1469 7.06 11.8029 7.06C10.8069 7.06 9.89494 7.492 9.34294 8.164L10.4829 9.208C10.7709 8.812 11.2269 8.56 11.6829 8.56C12.2469 8.56 12.6309 8.896 12.6309 9.496C12.6309 10.036 12.2469 10.468 11.8749 10.876C11.3829 11.38 10.8429 11.872 10.8549 12.628V13.228ZM11.5869 16.108C12.1149 16.108 12.5589 15.676 12.5589 15.136C12.5589 14.608 12.1149 14.176 11.5869 14.176C11.0349 14.176 10.5909 14.608 10.5909 15.136C10.5909 15.676 11.0349 16.108 11.5869 16.108Z"
                                  fill="#4A4A4A"></path>
                        </svg>
                    </div>
                    <div>
                        <svg width="26"
                             height="25"
                             viewBox="0 0 26 25"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V6M12 6V6C9.63233 6.00011 7.55156 7.56971 6.90111 9.84628L4 20.0002H20L17.0989 9.84628C16.4484 7.56971 14.3677 6.00011 12 6V6ZM14 20.0002C14 21.1048 13.1046 22.0002 12 22.0002C10.8954 22.0002 10 21.1048 10 20.0002"
                                  stroke="#4A4A4A"
                                  stroke-width="2"
                                  stroke-linecap="round"></path>
                            <circle cx="20"
                                    cy="6"
                                    r="5"
                                    fill="#FEAC0D"
                                    stroke="white"
                                    stroke-width="2"></circle>
                        </svg>
                    </div>
                    <div>
                        <svg width="26"
                             height="25"
                             viewBox="0 0 26 25"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 19.8C16.4183 19.8 20 16.4869 20 12.4C20 8.31309 16.4183 5 12 5C7.58172 5 4 8.31309 4 12.4C4 14.6506 5.08614 16.6665 6.8 18.0237V21L9.68021 19.4841C10.4144 19.6895 11.1933 19.8 12 19.8Z"
                                  stroke="#4A4A4A"
                                  stroke-width="2"
                                  stroke-linejoin="round"></path>
                            <circle cx="20"
                                    cy="6"
                                    r="5"
                                    fill="#FEAC0D"
                                    stroke="white"
                                    stroke-width="2"></circle>
                        </svg>
                    </div>
                    <div>
                        <span class="headerButtonUser__preview">A</span>
                    </div>
                </div>
            </div>
            <div class="main-menu">
                dsfjksdfhk
            </div>
        </header>
        <main-filter @clearFilter="clearFilter"
                     @dateChange="dateChange"
                     @changeStatus="changeStatus"></main-filter>
        <div class="data-table">
            <div class="data-grid-caption">
                <div class="sort-column"
                     @click="sort('number')">№ брони
                </div>
                <div style="grid-column: span 2">Гость</div>
                <div class="sort-column"
                     @click="sort('date_from')">Заезд
                </div>
                <div class="sort-column"
                     @click="sort('date_to')">Выезд
                </div>
                <div style="grid-column: span 2">Номер/Путевка</div>
                <div class="sort-column"
                     style="grid-column: span 2"
                     @click="sort('date_reservation')">Когда забронировано
                </div>
                <div class="sort-column"
                     @click="sort('price')">Стоимость
                </div>
                <div class="sort-column"
                     @click="sort('commission')">Комиссия
                </div>
            </div>
            <div class="data-grid"
                 v-for="item in currentData"
                 :key="item.id">
                <div>{{item.number}}</div>
                <div style="grid-column: span 2">
                    {{item.guest}} <br>
                    {{item.parentsAndKidsCountArray[0]}} взрослых, {{item.parentsAndKidsCountArray[1]}} детей
                </div>
                <div>{{item.date[0]}}</div>
                <div>{{item.date[1]}}</div>
                <div style="grid-column: span 2">{{item.package}}</div>
                <div style="grid-column: span 2">{{item.date_reservation}}</div>
                <div>
                    {{item.price}} <br>
                    <div v-if="item.stock"
                         class="item-stock">
                        Акция: – {{item.stock}}%
                    </div>
                </div>
                <div>{{item.commission}}</div>
                <div style="grid-column: span 11">
                    <b-button disabled
                              :variant="getItemStatusVariant(item.status)">{{item.status}}
                    </b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MainFilter from "./MainFilter";
    import { data, hotels } from "../state";

    export default {
        name: 'MainPage',
        components: { MainFilter },
        data: function () {
            return {
                hotels: hotels,
                selectedHotel: hotels[0],
                items: data,
                currentData: [],
                filterStatus: 'all',
                filterDates: [new Date(1970, 0, 1),
                    new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate())],
                sorting: {
                    number: 'asc',
                    date_from: 'asc',
                    date_to: 'asc',
                    date_reservation: 'asc',
                    price: 'asc',
                    commission: 'asc'
                }
            };
        },
        methods: {
            changeSortDirection(field, arr, fn) {
                if (this.sorting[field] === 'asc') {
                    this.sorting[field] = 'desc';
                    return arr.sort(fn).reverse();
                } else {
                    this.sorting[field] = 'asc';
                    return arr.sort(fn);
                }
            },
            sort(field) {
                let tFunc;
                switch (field) {
                    case 'number':
                        tFunc = a => +a[field];
                        break;
                    case 'date_from':
                        tFunc = a => new Date(...a.date[0].split('.').reverse().map(e => +e));
                        break;
                    case 'date_to':
                        tFunc = a => new Date(...a.date[1].split('.').reverse().map(e => +e));
                        break;
                    case 'date_reservation':
                        tFunc = a => new Date(...a.date_reservation.split('.').reverse().map(e => +e));
                        break;
                    case 'price':
                        tFunc = a => +a[field];
                        break;
                    case 'commission':
                        tFunc = a => +a[field];
                        break;
                }

                function getCompareFn(tFunc) {
                    return (a, b) => {
                        const t1 = tFunc(a);
                        const t2 = tFunc(b);
                        if (t1 < t2) {
                            return -1;
                        }
                        if (t1 === t2) {
                            return 0;
                        }
                        if (t1 > t2) {
                            return 1;
                        }
                    };
                }

                this.currentData = this.changeSortDirection(field, this.currentData, getCompareFn(tFunc));
            },
            changeStatus(status) {
                if (!status) {
                    return;
                }
                const dates = this.filterDates;
                this.filterStatus = status;
                let items = this.items.slice();
                if (dates.length) {
                    items = this.items.filter(e => e.date_reservation >= dates[0] && e.date_reservation <= dates[1]);
                }
                if (this.filterStatus !== 'all') {
                    items = items.filter(e => e.status === this.filterStatus);
                }
                this.currentData = this.formatData(items);
            },
            dateChange(dates) {
                this.filterDates = dates;
                let items = this.items.slice();
                if (this.filterStatus !== 'all') {
                    items = this.items.filter(e => e.status === this.filterStatus);
                }
                this.currentData = this.formatData(items.filter(e => e.date_reservation >= dates[0] && e.date_reservation <= dates[1]));
            },
            clearFilter() {
                this.filterDates = [new Date(1970, 0, 1),
                    new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate())];
                this.filterStatus = 'all';
                this.currentData = this.formatData(this.items);
            },
            formatData(items) {
                return items.map(e => {
                    const newObject = JSON.parse(JSON.stringify(e));
                    newObject.date = newObject.date.map(_ => _.split('T')[0].split('-').reverse().join('.'));
                    newObject.date_reservation = newObject.date_reservation.split('T')[0].split('-').reverse().join('.');
                    return newObject;
                });
            },
            getItemStatusVariant(status) {
                switch (status) {
                    case 'новая':
                        return 'warning';
                    case 'подтверждено':
                        return 'primary';
                    case 'отмена':
                        return 'secondary';
                    case 'заезд':
                        return 'success';
                    case 'незаезд':
                        return 'danger';
                    case 'оплачено':
                        return 'info';
                    case 'не оплачено':
                        return 'dark';
                }
            }
        }
    }
</script>

<style lang="scss">
    .data-grid-caption, .data-grid {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        padding: 1%;

        div {
            padding: 1%;
        }
    }

    .data-grid:hover {
        background: lightgrey;
        cursor: pointer;
    }

    .item-stock {
        color: green;
    }

    .sort-column {
        cursor: pointer;
    }

    header {
        height: 20vh;
        padding: 2em 5em;
        box-sizing: border-box;
    }

    .logo_name {
        letter-spacing: .04em;

        span {
            color: #feac0d;
            text-transform: uppercase;
        }
    }

    .btn-outline-dark {
        font-weight: bold;
        border-color: #e8e8e8;
        background: transparent;
        outline: none;

        &:hover {
            color: black;
            background-color: #e8e8e8;
            outline: none;
            border: none;
        }

        &:active, &:focus, &:focus-within {
            color: black !important;
            background-color: #e8e8e8 !important;
            outline: none !important;
            border: none !important;
            box-shadow: none !important;
        }
    }

    .show > .btn-outline-dark.dropdown-toggle {
        color: black;
        background-color: #e8e8e8;
        outline: none;
        border: none;
    }

    .b-dropdown {
        margin-left: 2%;
    }

    .headerButtonUser__preview {
        margin: 0 8px 0 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: #feac0d;
        border-radius: 50%;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        position: relative;
    }

    .header-buttons {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            background: none;
            border: 0;
            cursor: pointer;
            padding: 0;
            margin-right: 10%;
        }
    }

    .main-menu {
        margin: 0 auto;
    }

    .dropdown-menu {
        width: 100%;
    }

    .hotels-dropdown-disabled {
        display: block;
        padding: 16px 24px;
        font-size: 12px;
        color: #bcbcbc;

        a {
            padding: 0;
        }
    }
</style>
