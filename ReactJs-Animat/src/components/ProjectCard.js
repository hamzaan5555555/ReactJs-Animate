import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , button1 , button2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br><br></br>
          <button className="entrer">{button1}</button>
          <button className="entrerr">{button2}</button>

        </div>
      </div>
    </Col>
  )
}