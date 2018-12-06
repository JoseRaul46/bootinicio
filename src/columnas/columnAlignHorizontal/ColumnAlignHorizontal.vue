<template>
    <div>
        <div class="container">
            <div class="row justify-content-start">
                <div class="col-4 columna ">
                    columna 1
                </div>
                <div class="col-4 columna">
                    columna 2
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-4 columna ">
                    columna 1
                </div>
                <div class="col-4 columna ">
                    columna 2
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-4 columna ">
                    columna 1
                </div>
                <div class="col-4 columna ">
                    columna 2
                </div>
            </div>
            <div class="row justify-content-around">
                <div class="col-4 columna ">
                    columna 1
                </div>
                <div class="col-4 columna ">
                    columna 2
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-2 columna ">
                    columna 1
                </div>
                <div class="col-2 columna ">
                    columna 2
                </div>
                <div class="col-2 columna ">
                    columna 3
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
