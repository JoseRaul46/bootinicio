<template>
    <div class="principal">
        <div class="container">
            <div class="row">
                <div class="col uno">
                    <h3>columna 1</h3>
                </div>
                <div class="col dos col-lg-auto">
                    <h3>columna 2</h3>
                </div>
            </div>
            <div class="row">
                <div class="col tres">
                    <h3>columna 3</h3>
                </div>
                <div class="col tres">
                    <h3>columna 4</h3>
                </div>
            </div>
            <div class="row">
                <div class="col uno">
                    <h3>columna 1</h3>
                </div>
                <div class="col dos col-lg-auto">
                    <h3>columna 2</h3>
                </div>
                <div class="w-100"></div>
                <div class="col tres">
                    <h3>columna 3</h3>
                </div>
                <div class="col tres">
                    <h3>columna 4</h3>
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
.principal{
    background-color: pink;
}

.row > div{
    text-align: center;
    margin: 10px 0;
}

.col.uno {
    background-color: aqua;
}
.col.dos {background-color: gold;}
.col.tres {background-color: burlywood;}
</style>
