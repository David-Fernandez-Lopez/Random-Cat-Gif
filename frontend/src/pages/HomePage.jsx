
import { useEffect } from "react"
import { useState } from "react"
import { Container, Image, Row, Col, Button} from "react-bootstrap"
import catFactsService from "../services/api.service"


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
        <Container className="homepageForm">

            <h1>Conectado en homepage</h1>
            {myData
                ?
                <>
                <Row>

                    <Col md={{span:5, offset: 1}}>
                        <img src={myData.url} />
                    </Col>
                    
                    <Col md={{span:5}}>
                        <h6>{myData.fact}</h6>
                    </Col>
                    
                </Row>
                    
                    <Button variant="dark" onClick={loadData}>Get new fact</Button>

                </>
                :
                    <h6>Loading</h6>
                }

        </Container>
    )
}

export default HomePage