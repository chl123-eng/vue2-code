import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
    input: "./src/index.js",
    output: {
        file: "dist/index.js",
        format: "umd",
        name: "vue"
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        serve({
            port: 3000,
            contentBase: "",
            openPage: "/index.html",
        })
    ]
}