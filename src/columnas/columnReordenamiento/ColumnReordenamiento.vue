<template>
    <div>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-2 columna order-4 order-md-1">
                    columna 1
                </div>
                <div class="col-2 columna order-3 order-md-2">
                    columna 2
                </div>
                <div class="col-2 columna order-2 order-md-3">
                    columna 3
                </div>
                <div class="col-2 columna order-1 order-md-4">
                    columna 4
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.row{
    background-color: grey;
    margin-top: 40px;
    margin-bottom: 40px;
}
.columna{
    background: yellow;
    text-align: center;
    padding: 10px;
    border: 1px solid green;
}
</style>
