import { useId, useState } from "react"
import "../App.css"

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
    const id = useId()
  return (
    <section className="accordion-card" key={id}>
        <div className="header" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <p className="icon">{isActive ? '-' : '+'}</p>
        </div>

        <div className="content">
            {isActive && <p className="card-info">{content}</p>}
        </div>
    </section>
  )
}

export default Accordion