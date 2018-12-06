<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 columna">
                    columna 1
                    <div class="row">
                        <div class="col columna">
                            columna 1.1
                        </div>
                        <div class="col columna">
                            columna 1.2
                        </div>
                    </div>
                </div>
                <div class="col-md-6 columna">
                    columna 2
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
.container{
    margin-top: 20px;
}
.row{
    background-color: grey;
}
.columna{
    background: yellow;
    text-align: center;
    border: 1px solid green;
}
</style>
