<template>
    <div>
        <div class="container">
            <div class="row align-items-start">
                <div class="col ">
                    columna 1
                </div>
                <div class="col">
                    columna 2
                </div>
                <div class="col">
                    columna 3
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col ">
                    columna 1
                </div>
                <div class="col">
                    columna 2
                </div>
                <div class="col">
                    columna 3
                </div>
            </div>

            <div class="row align-items-end">
                <div class="col ">
                    columna 1
                </div>
                <div class="col">
                    columna 2
                </div>
                <div class="col">
                    columna 3
                </div>
            </div>

            <h3>Alineado independiente</h3>
            <div class="row">
                <div class="col align-self-start uno">
                    columna 1
                </div>
                <div class="col align-self-center">
                    columna 2
                </div>
                <div class="col align-self-end">
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
    height: 150px;
    margin-top: 10px;
}
.col{
    background-color: aliceblue;
    text-align: center;
    padding: 10px;
    border: 1px solid black;
}
.uno{
    background: yellow !important;
}
</style>
