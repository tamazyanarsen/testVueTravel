<template>
    <div>
        <main-filter @clearFilter="clearFilter"
                     @dateChange="dateChange"></main-filter>
        <div class="data-table">
            <div class="data-grid-caption">
                <div class="sort-column">№ брони</div>
                <div style="grid-column: span 2">Гость</div>
                <div class="sort-column">Заезд</div>
                <div class="sort-column">Выезд</div>
                <div style="grid-column: span 2">Номер/Путевка</div>
                <div class="sort-column"
                     style="grid-column: span 2">Когда забронировано
                </div>
                <div class="sort-column">Стоимость</div>
                <div class="sort-column">Комиссия</div>
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
    import {data} from "../state";

    export default {
        name: 'MainPage',
        components: {MainFilter},
        data: function () {
            return {
                items: data,
                currentData: []
            };
        },
        methods: {
            dateChange(dates) {
                this.currentData = this.items.filter(e => console.log('date change', e.date_reservation) || e.date_reservation >= dates[0] && e.date_reservation <= dates[1])
                    .map(e => {
                        e.date = e.date.map(_ => _.toISOString().split('T')[0].split('-').reverse().join('.'));
                        e.date_reservation = e.date_reservation.toISOString().split('T')[0].split('-').reverse().join('.');
                        return e;
                    });
            },
            clearFilter() {
                this.currentData = this.items.map(e => {
                    e.date = e.date.map(_ => console.log('clear', _) || _.toISOString().split('T')[0].split('-').reverse().join('.'));
                    e.date_reservation = e.date_reservation.toISOString().split('T')[0].split('-').reverse().join('.');
                    return e;
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

<style scoped
       lang="scss">
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
</style>
