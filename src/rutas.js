import Inicio from "./inicio/Inicio.vue";
import Columnas from "./columnas/Columnas.vue";
import ColumnasAlignVer from "./columnAlignVertical/ColumnAlignVertical.vue";
import ColumnasAlignHor from "./columnAlignHorizontal/ColumnAlignHorizontal.vue";
import Offseting from "./offseting/Offseting.vue";


export const rutas = [
    {path:'', component:Inicio}
    ,{path:'/columnas', component:Columnas}
    ,{path:'/columnasAlignVer', component:ColumnasAlignVer}
    ,{path:'/columnasAlignHor', component:ColumnasAlignHor}
    ,{path:'/offseting', component:Offseting}

]