import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PlantContext } from '../context/plants';


const Plants = () => {
    const { plants } = useContext(PlantContext);

    if (!plants.length) {
        return <h3>No Plants Available</h3>
    }

    return (
        <section className="plants">
            {plants.map(({ image, id, title }) => (
                <article key={id} className="plant">
                    <div className="plant-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`plants/${id}`} className="btn plant-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Plants

