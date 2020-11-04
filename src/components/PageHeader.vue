<template>
    <div class="page-header">
        <div class="back-btn">
            <router-link :to="rout">
                <b-button size="xs" variant="primary">
                    <b-icon icon="caret-left-fill"></b-icon>
                </b-button>
            </router-link>
        </div>

        <div class="title">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",
        props: {
            rout: Object,
            title: String
        }
    }
</script>

<style scoped>
    .page-header {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        background-color: #e5e6e6;
        border-radius: 3px;
        padding: 0.6rem 0.6rem;
    }

    .back-btn {
        width: 50px;
    }

    .title {
        width: calc(100% - 50px);
        text-align: center;
        font-weight: bold;
        color: rgba(0,0,0,.5);
        font-size: 1.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>