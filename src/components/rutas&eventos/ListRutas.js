import React from 'react';
import { Roller } from 'react-css-spinners'
import Ruta from './Ruta';
import './listRutas.scss';

const ListRutas = ({ dataRoutes }) => {
    console.log(dataRoutes);

    let data;

    if (dataRoutes === undefined) {
        return (
            <Roller color='#00555A' className='spinner'/>
        )
    } else {
        data = dataRoutes.map((route, id) => {
            return (
                <li key={id}>
                    <Ruta
                        comunity={route.comunity}
                        title={route.title}
                        date={route.date}
                        image={route.image}
                        text={route.text}
                        type={route.type}
                    />
                </li>
            )
        })
    }

    return (
        <section className='sectionListRutas'>
            <h2 className='sectionListRutas__title'>Nuestras últimas Rutas y Eventos</h2>
            <ul className='contentRoutes'>
                {data}
            </ul>
        </section>
    );
};



export default ListRutas;