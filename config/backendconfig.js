import {useState} from 'react';

export const Backend = () =>{
    const [url, setUrl] = useState("http://192.168.111.50:8080/api/gastromanager");

    return {url};
}

//Traer un servicio, con un inicio de sesion y una consulta de lo que sea
