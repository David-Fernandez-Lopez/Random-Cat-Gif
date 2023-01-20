
import './Gif.css'
import {Image, Col} from "react-bootstrap"


const Gif = ({url}) => {


    
    console.log(url)
    return (
       
        <Col md={{ span: 4, offset: 1 }}>
            
            <div className="imgContainer gif" >
                {!url
                    ?
                    <div className='imageNotFound'>

                        <p className='margin0'>Image not found</p>

                    </div>
                    :
                    <Image className="image fluid" src={url} />
                }
                

            </div>
            
        </Col>
        
    )
}

export default Gif