import Inicio from "./inicio/Inicio.vue";
import Columnas from "./columnas/columnas/Columnas.vue";
import ColumnasAlignVer from "./columnas/columnAlignVertical/ColumnAlignVertical.vue";
import ColumnasAlignHor from "./columnas/columnAlignHorizontal/ColumnAlignHorizontal.vue";
import Offseting from "./columnas/offseting/Offseting.vue";
import Reordenamiento from "./columnas/columnReordenamiento/ColumnReordenamiento.vue";
import Anidadas from "./columnas/columnAnidadas/ColumnAnidadas.vue";
import Final from "./columnas/columnFinal/ColumnFinal.vue";
import ResponsiveUtilities from "./elementos/responsiveUtilities/ResponsiveUtilities.vue";
import Tipografia from "./elementos/tipografia/Tipografia.vue";
import BloquesCodigo from "./elementos/bloquesCodigo/BloquesCodigo.vue";


export const rutas = [
    {path:'', component:Inicio}
    ,{path:'/columnas', component:Columnas}
    ,{path:'/columnasAlignVer', component:ColumnasAlignVer}
    ,{path:'/columnasAlignHor', component:ColumnasAlignHor}
    ,{path:'/offseting', component:Offseting}
    ,{path:'/reordenamiento', component:Reordenamiento}
    ,{path:'/anidadas', component:Anidadas}
    ,{path:'/final', component:Final}
    ,{path:'/responsiveUtil', component:ResponsiveUtilities}
    ,{path:'/tipografia', component:Tipografia}
    ,{path:'/bloquesCodigo', component:BloquesCodigo}
]