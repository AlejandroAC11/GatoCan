import app from "./index";
import * as http from "http";

const PORT = process.env.PORT;

http.createServer(app).listen(PORT, () => {
    console.log("Express server listening on port " + PORT);

});