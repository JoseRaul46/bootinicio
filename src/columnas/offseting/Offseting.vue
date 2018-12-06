<template>
    <div>
        <div class="container">
            <div class="row" >
                <div class="col-auto columna offset-1">
                    columna 1
                </div>
            </div>

            <div class="row " >
                <div class="col-4 columna offset-4">
                    columna 1
                </div>
            </div>
            
            <div class="row " >
                <div class="col-auto columna offset-1">
                    columna 1
                </div>
                <div class="col-auto columna offset-lg-4 offset-1">
                    columna 1
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
