import App from "./App";
import Component1 from "./components/Component1";

const routes = [
    {
        title:"Homes",
        path:"/",
        element:(props)=> <App {...props} />
    },
    {
        title:"Component 1",
        path:"/component1",
        element:(props)=> <Component1 {...props} />
    }
]

export default routes;