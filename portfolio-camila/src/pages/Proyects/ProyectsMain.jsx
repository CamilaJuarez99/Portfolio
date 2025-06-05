import React, { useEffect, useState } from 'react';
import './proyectos.css'


const ProyectsMain = () => {

  const [proyectos, setProyectos] = useState([]);

  const getProyectos =

  useEffect(() => {
    
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <div className="row">
        {proyectos.map((proyecto, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div
              className={`card proyecto-card h-100 ${proyecto.github ? 'clickable' : ''}`}
              onClick={() => proyecto.github && window.open(proyecto.github, '_blank')}
            >
              <div className="card-body">
                <h5 className="card-title">{proyecto.nombre}</h5>
                <p className="card-text">{proyecto.descripcion}</p>
                {proyecto.github ? (
                  <a href={proyecto.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Ver en GitHub
                  </a>
                ) : (
                  <p className="text-muted">Repositorio aún no disponible</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProyectsMain
