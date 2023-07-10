import React from 'react'

const card = () => {
  return (
    <>
        <h1>FOOD MENU</h1>
        <div className="App">  
            <Container className='p-4'>  
                <Col md="4">  
                <Card>  
                    <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Photography-Kebab-Meat-Food-Wallpaper-HD-Desktop-Computer.jpg" />  
                    <Card.Body>  
                        <Card.Title>MENU</Card.Title>  
                        <Card.Text>In a restaurant, the menu is a list of food and beverages offered to customers and the prices. A menu may be à la carte – which presents a list of options from which customers choose – or table d'hôte, in which case a pre-established sequence of courses is offered.
                        </Card.Text>  
                        <Button variant="">Know More</Button>  
                    </Card.Body>  
                </Card>  
                </Col>  
            </Container>  

            </div> 
    </>
  )
}

export default card