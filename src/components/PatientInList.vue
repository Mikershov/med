<template>
    <div class="list-item">
        <div class="list-name">
            {{patient.SacondName}} {{patient.FirstName}} {{patient.MiddlName}}
        </div>

        <div class="list-btns">
            <router-link :to="{name:'PatientEdit', params:{user:patient}}">
                <b-button size="" variant="primary">
                    <b-icon icon="pencil-fill"></b-icon>
                </b-button>
            </router-link>

            <router-link :to="{name:'PatientView', params:{user:patient}}">
                <b-button variant="primary">
                    <b-icon icon="eye-fill"></b-icon>
                </b-button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PatientInList",

        props: {
            patient: Object
        },

        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    .list-item {
        display: flex;
        align-items: center;
        padding: 10px 10px 10px 10px;
        border: 1px solid #e6e8ea;
        border-width: 1px 1px 0 1px;
    }

    .list-item:last-child {
        border: 1px solid #e6e8ea;
        border-radius: 3px;
    }

    .list-name {
        display: flex;
        width: calc(100% - 100px);
        font-weight: normal;
    }

    .list-btns {
        display: flex;
        width: 100px;
        justify-content: space-between;
    }

    .blocked {
        background-color: #e29191;
    }
</style>