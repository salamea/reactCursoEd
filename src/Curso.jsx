import React from 'react'

const Curso = () => (

    <article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/Node.jpg?itok=SurL1AZa" alt="logocurso" />
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://api.ed.team/files/avatars/a32d05c5-06be-4a75-aa6e-839693ac1aca.jpeg" alt="profe" />
          </div>
        </div>
        <span className="small">Alexys Lozada</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
    </div>
  </div>
</article>

)

export default Curso