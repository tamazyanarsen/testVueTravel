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
                          :options="selectOptions"
                          @input="onChangeStatus"></b-select>
            </div>
            <div class="filter-clear">
                <h5 class="filter-clear-text"
                    @click="clearFilters">Очистить фильтры</h5>
                <b-btn-close class="filter-clear-button"
                             @click="clearFilters"></b-btn-close>
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
            this.clearFilters();
        },
        methods: {
            onChangeStatus() {
                this.$emit('changeStatus', this.selectedReservation);
            },
            onDateChange() {
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
                    const t = new Date();
                    date_to = new Date(t.getFullYear() + 1, t.getMonth(), t.getDate());
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
                        value: 'all',
                        text: 'Все бронирования'
                    },
                    {
                        value: 'новая',
                        text: 'Новые бронирования'
                    },
                    {
                        value: 'подтверждено',
                        text: 'Подтвержденные'
                    },
                    {
                        value: 'отмена',
                        text: 'Отмененные'
                    },
                    {
                        value: 'оплачено',
                        text: 'Оплачено'
                    },
                    {
                        value: 'не оплачено',
                        text: 'Не оплачено'
                    },
                    {
                        value: 'заезд',
                        text: 'Заезд'
                    },
                    {
                        value: 'незаезд',
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
