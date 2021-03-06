import axios from 'axios';

export var changeMessage = (message) => {
    return {type: 'CHANGE_MESSAGE', message};
};

export var obteniendoClima = (obteniendoClima) => {
    return {type: 'OBTENIENDO_CLIMA', obteniendoClima};
};

export var actualizandoUbicacion = (coordenadas) => {
    return {type: 'ACTUALIZANDO_UBICACION', coordenadas};
}

export var errorObteniendoClima = (mensajeError) => {
    return {type: 'ERROR_OBTENIENDO_CLIMA', mensajeError}
}

export var datosOpenWeatherMap = (datos) => {
    return {type: 'DATOS_OPEN_WEATHER_MAP', datos}
}

export var getWeather = (country) => {
    return (dispatch, getState) => {
        dispatch(obteniendoClima(true));
        var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + country.id + '&appid=a1c451d46287d402e10e7fda3a673920&units=metric'
        axios
            .get(url)
            .then(function (response) {
                dispatch(errorObteniendoClima({existeError: false, mensaje: ''}));
                dispatch(obteniendoClima(false));
                dispatch(actualizandoUbicacion(response.data.coord));
                dispatch(changeMessage("It's " + response.data.main.temp + " in " + country.name));
                dispatch(datosOpenWeatherMap(response));
            })
            .catch(error => {
                dispatch(obteniendoClima(false));
                dispatch(errorObteniendoClima({existeError: true, mensaje: error.response.data.message}));
            });
    }
}