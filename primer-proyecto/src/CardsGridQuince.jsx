import React from "react";
import Card_quince_dias from './Card_quince_dias';

const cards_quince = [
    {
    "id": 1,
    "dias": "15 días tour",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    "title": "15_dias",
    "precio": 40.385
    },
    {
    "id": 2,
    "dias": "15 días tour",
    "image": "http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
    "title": "15_dias",
    "precio": 40.385
    }
]

const CardGridQuince = () => (
    <>
        {
            cards_quince.map (c => <Card_quince_dias key={c.id} dias={c.dias} image={c.image} title={c.title} precio={c.precio} />)
        }
    </>
)

export default CardGridQuince