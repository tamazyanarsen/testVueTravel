<template>
    <div>
        <main-filter></main-filter>
        <div class="data-table">
            <div class="data-grid-caption">
                <div>№ брони</div>
                <div style="grid-column: span 2">Гость</div>
                <div>Заезд</div>
                <div>Выезд</div>
                <div style="grid-column: span 2">Номер/Путевка</div>
                <div style="grid-column: span 2">Когда забронировано</div>
                <div>Стоимость</div>
                <div>Комиссия</div>
            </div>
            <div class="data-grid"
                 v-for="item in data"
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
                    <b-button :variant="getItemStatusVariant(item.status)">{{item.status}}</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MainFilter from "./MainFilter";
    import { data } from "../state";

    export default {
        name: 'MainPage',
        components: { MainFilter },
        data: function () {
            return {
                data: data
            };
        },
        methods: {
            getItemStatusVariant(status){
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

<style scoped>
    .data-grid-caption, .data-grid {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        padding: 1%;
    }

    .data-grid:hover {
        background: lightgrey;
        cursor: pointer;
    }

    .item-stock {
        color: green;
    }
</style>
