module.exports = {
    entry: './app/containers/AppContainer.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        alias: {
            /*************MainContainer**************/
            MainContainer: 'app/containers/Main/MainContainer.jsx',
            EstilosMainContainer: 'app/containers/Main/styles.css',
            /*************MainContainer**************/
            WeatherContainer: 'app/containers/WeatherContainer.jsx',
            /*************Nav**************/
            Nav: 'app/components/Nav/Nav.jsx',
            EstilosNav: 'app/components/Nav/styles.css',
            /*************Form**************/
            Form: 'app/components/Form/Form.jsx',
            FormActions: 'app/actions/form/FormActions.jsx',
            FormReducer: 'app/reducers/form/FormReducer.jsx',
            /*************Message**************/
            Message: 'app/components/Message/Message.jsx',
            EstilosMessage: 'app/components/Message/styles.css',
            /*************Loading**************/
            Loading: 'app/components/Loading/Loading.jsx',
            EstilosLoading: 'app/components/Loading/styles.css',
            /*************Buscador**************/
            Buscador: 'app/components/Buscador/Buscador.jsx',
            EstilosBuscador: 'app/components/Buscador/styles.css',
            Item: 'app/components/Buscador/Item.jsx',
            BuscadorActions: 'app/actions/buscador/BuscadorActions.jsx',
            BuscadorReducer: 'app/reducers/form/BuscadorReducer.jsx',
            /*************ModalError**************/
            ModalError: 'app/components/ModalError/ModalError.jsx',
            /*************Map**************/
            GoogleMap: 'app/components/Map/Map.jsx',
            /*************Stores**************/
            configureStore: 'app/store/configureStore.jsx',
            /*************Constants**************/
            Constants: 'app/constants/constants.js',
            /*************StadisticsData**************/
            StadisticsData: 'app/containers/StadisticsData/StadisticsData.jsx',
            EstilosStadisticsData: 'app/containers/StadisticsData/styles.css',
            /*************WeatherDetailsLink**************/
            WeatherDetailsLink: 'app/components/WeatherDetailsLink/WeatherDetailsLink.jsx',
            /*************IconWeather**************/
            IconWeather: 'app/components/Icon.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};