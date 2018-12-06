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
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Columnas
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/columnas">Columnas</router-link>
                        <router-link class="dropdown-item" to="/columnasAlignVer">Columnas Alineadas Vertical</router-link>
                        <router-link class="dropdown-item" to="/columnasAlignHor">Columnas Alineadas Horizontal</router-link>  
                        <router-link class="dropdown-item" to="/offseting">Offseting</router-link>
                        <router-link class="dropdown-item" to="/reordenamiento">Reordenamiento</router-link>
                        <router-link class="dropdown-item" to="/anidadas">Columnas Anidadas</router-link>
                        <router-link class="dropdown-item" to="/final">Prueba final</router-link>

                    </div>

                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Elementos
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/responsiveUtil">Responsive</router-link>
                        <router-link class="dropdown-item" to="/tipografia">Tipografia</router-link>
                        <router-link class="dropdown-item" to="/bloquesCodigo">BloquesCodigo</router-link>
                    </div>
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
