<template>
    <div >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link class="navbar-brand" to="/"><i class="fa fa-home" aria-hidden="true"></i></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/columnas">Columnas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/columnasAlignVer">Columnas Alineadas Vertical</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/columnasAlignHor">Columnas Alineadas Horizontal</router-link>                
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/offseting">Offseting</router-link>                
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
