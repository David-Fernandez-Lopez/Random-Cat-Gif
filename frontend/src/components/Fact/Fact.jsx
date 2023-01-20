
import './Fact.css'
import { Col } from "react-bootstrap"


const Fact = ({fact}) => {

    return (
       
        <Col className="fact" md={{ span: 5 , offset: 1}}>
            
            <div className='factContainer'>

                <p>{fact}</p>

            </div>
            
        </Col>
        
        
    )
}

export default Fact