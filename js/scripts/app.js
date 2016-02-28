requirejs.config({
    baseUrl: '../bower_components',
    paths: {
        scripts: '../js/scripts',
        react:   './react/react',
        react_dom: './react/react-dom',
        json: './requirejs-plugins/src/json',
        jquery: './jquery/dist/jquery',
        text: './text/text'
    }
});
requirejs(['jsx!scripts/main']);
