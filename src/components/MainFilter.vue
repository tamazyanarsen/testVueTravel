<template>
    <div class="filter">
        <div class="filter-item datepicker-filter">
            <h5>Даты</h5>
            <b-datepicker class="datepicker" placeholder="от"></b-datepicker>
            <b-form-datepicker class="datepicker" placeholder="до"></b-form-datepicker>
        </div>
        <div class="filter-item reservation-status">
            <h5>Статус брони</h5>
            <b-select class="status">
                <b-select-option v-for="option in selectOptions" :key="option.id" :value="option.id">{{option.value}}
                </b-select-option>
            </b-select>
        </div>
        <div class="filter-clear">
            <h5 class="filter-clear-text">Очистить фильтры</h5>
            <b-btn-close class="filter-clear-button"></b-btn-close>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainFilter",
        data: function () {
            return {
                selectOptions: [
                    {
                        id: 1,
                        value: 'Все бронирования'
                    },
                    {
                        id: 2,
                        value: 'Новые бронирования'
                    },
                    {
                        id: 3,
                        value: 'Подтвержденные'
                    },
                    {
                        id: 4,
                        value: 'Отмененные'
                    },
                    {
                        id: 5,
                        value: 'Оплачено'
                    },
                    {
                        id: 6,
                        value: 'Не оплачено'
                    },
                    {
                        id: 7,
                        value: 'Заезд'
                    },
                    {
                        id: 8,
                        value: 'Не заезд'
                    }]
            };
        }
    }
</script>

<style scoped>
    .datepicker {
        display: inline-block !important;
        width: 50%;
    }

    .filter-item {
        padding: 1%;
        box-sizing: border-box;
    }

    .filter {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .status {
        height: 15vh;
    }

    .filter-clear-text, .filter-clear-button {
        display: contents;
        cursor: pointer;
    }

    .filter-clear {
        padding: 10%;
    }
</style>