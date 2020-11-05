import react from 'react';
import {Link} from '@reach/router'
import {useAuth0} from '@auth0/auth0-react';
import Bubble from './Bubble.png'
import Golf from './Golf.jpg'
import truck from './truck.jpg'
import Office from './Office.jpg'
import Fund from './Fund.jpg'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Heart from './Heart.png'
import Cropped from './Cropped.png'
import Away from './Away.png'

export default(props) => {
    
    const {isAuthenticated} = useAuth0();

    return(
      isAuthenticated && (
        <div>
            <header style={{backgroundColor:"#3e2e67"}}>
            <img class="mainlogo"src = {Heart}/>
    <img  class="mainlogo2"src={Cropped}/>
            <h2 style={{display:"inline-block",color:"whitesmoke"}}>Administrator view</h2></header><br/>
            <h4 style={{marginBottom:20}}>See who has signed up for your events!</h4>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={Bubble} />
    <Card.Body>
      <Card.Title>Bubble Blast!</Card.Title>
      <Card.Text>
      See who signed up for this event
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to="/admin/bubble/"><button><small className="text-muted">Volunteer List</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Golf} />
    <Card.Body>
      <Card.Title>Golf Outing</Card.Title>
      <Card.Text>
      See who signed up for this event
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to="/admin/golf/"><button><small className="text-muted">Volunteer List</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Away} />
    <Card.Body>
      <Card.Title>Annual Benefit</Card.Title>
      <Card.Text>
      See who signed up for this event
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/admin/annual/"><button><small className="text-muted">Volunteer List</small></button></Link>
    </Card.Footer>
  </Card>
</CardDeck><br/>

<CardDeck>
  <Card>
    <Card.Img variant="top" src={truck} />
    <Card.Body>
      <Card.Title>Kindness Courier</Card.Title>
      <Card.Text>
      See who signed up for this event
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/admin/kindness/"><button><small className="text-muted">Volunteer List</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Office} />
    <Card.Body>
      <Card.Title>Office Admin</Card.Title>
      <Card.Text>
      See who signed up for this event
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/admin/office/"><button><small className="text-muted">Volunteer List</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Fund} />
    <Card.Body>
      <Card.Title>Fund raiser</Card.Title>
      <Card.Text>
        See who signed up for this event
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/admin/fundraiser/"><button><small className="text-muted">Volunteer List</small></button></Link>
    </Card.Footer>
  </Card>
</CardDeck>
        </div>//asdsa
    ));
}