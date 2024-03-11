
import Home from "~/pages/Home/Home";
import Following from "~/pages/Following/Following";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/components/Layout";
import Search from "~/pages/Search";


//public routes
 const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/upload', component: Upload, layout : HeaderOnly},
    {path: '/search', component: Search, layout : null},
]

//private routes
 const privateRoutes = [

]

export {privateRoutes, publicRoutes} 