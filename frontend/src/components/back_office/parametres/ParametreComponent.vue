<template>
    <div>
        <div id="title">
            <hr>
            <h1>{{ paramsTitle.toUpperCase() }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntegrationsComponent',

    data() {
        return {
            paramsTitle: 'paramètres',
        }
    },
}
</script>

<style scoped>
#title{
    display: flex;
    flex-direction: row;
    align-items: center;
}
hr{
    width: 40px;
    height: 4px;
    background: #000000;
    margin-right: 23px;
    margin-left: 0;
}
h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 64px;
    /* identical to box height, or 400% */
    display: flex;
    align-items: center;
    color: #000000;
}
h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 64px;
    display: flex;
    align-items: center;
    color: #949494;
}
</style>