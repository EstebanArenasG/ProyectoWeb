import app from './app.js';

const port = app.get('port');

const main = () => {
    app.listen(port, () => {
        console.log('Server on port', port);
    });
};

main();

