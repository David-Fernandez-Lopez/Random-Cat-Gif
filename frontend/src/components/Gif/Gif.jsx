
import {Image, Col} from "react-bootstrap"


const Gif = ({url}) => {


    console.log(url)
    return (
       
        <Col className="gif" md={{ span: 4, offset: 1 }}>
            
            <div className="imgContainer">

                <Image className="image rounded fluid" src={url} />

            </div>
            
        </Col>
        
    )
}

export default Gif