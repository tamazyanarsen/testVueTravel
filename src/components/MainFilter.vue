<template>
    <div>
        <div v-if="errors">
            Ошибки в полях фильтра: <br>
            {{errors}}
        </div>
        <div class="filter">
            <div class="filter-item datepicker-filter">
                <h5>Даты</h5>
                <b-datepicker v-model="date_from"
                              class="datepicker"
                              placeholder="от"
                              :date-format-options="{month: 'numeric'}"
                              @input="onDateChange"></b-datepicker>
                <b-datepicker v-model="date_to"
                              class="datepicker"
                              placeholder="до"
                              :date-format-options="{month: 'numeric'}"
                              @input="onDateChange"></b-datepicker>
            </div>
            <div class="filter-item reservation-status">
                <h5>Статус брони</h5>
                <b-select class="status"
                          v-model="selectedReservation"
                          :options="selectOptions"></b-select>
            </div>
            <div class="filter-clear"
                 @click="clearFilters">
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
        mounted() {
            this.$emit('clearFilter');
        },
        methods: {
            onDateChange: function () {
                let date_from, date_to;
                if (this.date_from) {
                    const [y, m, d] = this.date_from.split('-');
                    date_from = new Date(y, m - 1, d);
                } else {
                    date_from = new Date(1970, 0, 1);
                }
                if (this.date_to) {
                    const [y, m, d] = this.date_to.split('-');
                    date_to = new Date(y, m - 1, d);
                } else {
                    date_to = new Date();
                }
                if (date_from < date_to) {
                    this.$emit('dateChange', [date_from, date_to])
                    this.errors = null;
                } else {
                    this.errors = 'Выбрана неправильная дата';
                }
            },
            clearFilters() {
                this.selectedReservation = null;
                this.date_from = null;
                this.date_to = null;
                this.errors = null;
                this.$emit('clearFilter');
            }
        },
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
