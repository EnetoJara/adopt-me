import { expressConfig } from "./express-config";
export { expressConfig } from "./express-config";

const express = expressConfig(process.env.NODE_ENV);

express.listen(5000,()=>console.log("running"))
