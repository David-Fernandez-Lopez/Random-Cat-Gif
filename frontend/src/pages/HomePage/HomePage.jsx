
import './HomePage.css'
import { useEffect } from "react"
import { useState } from "react"
import { Container, Row, Col, Button} from "react-bootstrap"
import Fact from "../../components/Fact/Fact"
import Gif from "../../components/Gif/Gif"

import catFactsService from "../../services/api.service"

const HomePage = () => {


    const [myData, setMyData] = useState(null)

    useEffect(() => {
        loadData()
    },[])

    const loadData = () => {
        
        catFactsService
            .getData()
            .then(({ data }) => {
                setMyData(data)  
            })
            .catch(err => console.log(err))
    }



    return (
        <Container>

            <div className='welcome'>

                <h2>Welcome!</h2>
                <hr/>
                
            </div>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>
                    
                    <div className='introduction'>

                        <h4>Here you can find a
                            <strong> random fact </strong>
                            about cats and a .gif related to the
                            <strong> first 3 words </strong>
                            of this fact.
                        </h4>

                    </div>
                
                </Col>

            </Row>

            {myData
                ?
                <>
                    <Row className="mt-5 text-center">
                        
                        <Gif url={myData.url} />
                        
                        <Fact fact={myData.fact} />
                        
                    </Row>
                    
                    <Row className="mt-5 text-center align-middle">

                        <div>

                            <Button variant="dark" onClick={loadData}>Get new fact</Button>
                            
                        </div>
                        
                    </Row>

                </>
                :
                    <h6>Loading</h6>
                }

        </Container>
    )
}

export default HomePage