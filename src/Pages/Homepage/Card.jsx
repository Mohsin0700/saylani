import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardx({data}) {
    const {img, name, price, description } = data;
    // const name = data.name;
    // const price = data.price;
    // const description = data.description;
    return (
        <>
            <Card className="my-2 shadow m-3" style={{ width: '20rem', border: "none", overflow: "hidden" }}>
                {/* <Card.Img id='cardImg' variant="top" src={img} /> */}
                <Card.Body className="mt-2">
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <Row>
                            <Col lg={10} md={10} sm={10}><div className='mt-2 fw-bold'>{price}</div></Col>
                            <Col lg={2} md={2} sm={2}><Button className="px-4" variant="dark" style={{ borderRadius: "", fontSize: "1.1rem" }}>+</Button></Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cardx
