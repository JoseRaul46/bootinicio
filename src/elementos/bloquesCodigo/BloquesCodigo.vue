<template>
    <div>
        <div class="container">
            <div class="row justify-content-between" >
                <div class="columna col d-block d-sm-none">
                    XS
                </div>
                <div class="columna col d-none d-sm-block d-md-none">
                    sm
                </div>
                <div class="columna col d-none d-md-block d-lg-none">
                    md
                </div>
                <div class="columna col d-none d-md-block d-lg-none">
                    md
                </div>
                <div class="columna col d-none d-lg-block d-xl-none">
                    lg
                </div>
                <div class="columna col-3 d-none d-xl-block ">
                    xl
                </div>
                <div class="columna col-3 d-none d-xl-block ">
                    xl
                </div>
                <div class="columna col-3 d-none d-xl-block ">
                    xl
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
    margin-bottom: 20px;
}
.columna{
    background: yellow;
    text-align: center;
    padding: 10px;
}
</style>
