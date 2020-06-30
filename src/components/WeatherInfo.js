import React from 'react';

const WeatherInfo = props => {
    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ? 

                <div className="card card-body">
                    <p>
                        Lugar: {props.city}, {props.country}
                    </p>
                    <p>
                        Clima:  {props.description}
                    </p>
                    <p>
                        Temperatura: {props.temperature} °C,
                    </p>
                    <p>
                        Humedad: {props.humidity}
                    </p>
                    <p>
                        Velocidad del Viento: {props.wind_speed}
                    </p>
            </div>
            :
            <div className="card card-body"></div>
            }

            
        </div>
    )
}

export default WeatherInfo;