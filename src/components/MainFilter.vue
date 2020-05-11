<template>
    <div>
        <div v-if="errors">Ошибки в полях фильтра:</div>
        <div class="filter">
            <div class="filter-item datepicker-filter">
                <h5>Даты</h5>
                <b-datepicker v-model="date_from"
                              class="datepicker"
                              placeholder="от"></b-datepicker>
                <b-datepicker v-model="date_to"
                              class="datepicker"
                              placeholder="до"></b-datepicker>
            </div>
            <div class="filter-item reservation-status">
                <h5>Статус брони</h5>
                <b-select class="status"
                          v-model="selectedReservation"
                          :options="selectOptions"></b-select>
            </div>
            <div class="filter-clear">
                <h5 class="filter-clear-text">Очистить фильтры</h5>
                <b-btn-close class="filter-clear-button"></b-btn-close>
            </div>
            <div></div>
            <b-button variant="light"
                      class="button-download">Загрузить xlsx
            </b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainFilter",
        data: function () {
            return {
                errors: null,
                date_from: null,
                date_to: null,
                selectedReservation: null,
                selectOptions: [
                    {
                        value: null,
                        text: 'Когда забронировано'
                    },
                    {
                        value: 1,
                        text: 'Все бронирования'
                    },
                    {
                        value: 2,
                        text: 'Новые бронирования'
                    },
                    {
                        value: 3,
                        text: 'Подтвержденные'
                    },
                    {
                        value: 4,
                        text: 'Отмененные'
                    },
                    {
                        value: 5,
                        text: 'Оплачено'
                    },
                    {
                        value: 6,
                        text: 'Не оплачено'
                    },
                    {
                        value: 7,
                        text: 'Заезд'
                    },
                    {
                        value: 8,
                        text: 'Не заезд'
                    }]
            };
        }
    }
</script>

<style scoped>
    .datepicker {
        display: inline-block !important;
        width: 50%;
        height: 10vh !important;
    }

    .filter-item {
        padding: 1%;
        box-sizing: border-box;
    }

    .filter {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .status {
        height: 10vh;
    }

    .filter-clear-text, .filter-clear-button {
        display: contents;
        cursor: pointer;
    }

    .filter-clear {
        padding: 10%;
    }

    .button-download:hover {
        background: orange;
        border: none;
        outline: none;
        color: aliceblue;
    }

    .button-download {
        background: none;
        border-color: orange;
        color: orange;
    }
</style>
