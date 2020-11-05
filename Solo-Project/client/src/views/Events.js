import react from 'react'
import {Link} from '@reach/router'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Mainlogo from './Mainlogo.png'
import Bubble from './Bubble.png'
import Benefit from './Benefit.PNG'
import Golf from './Golf.jpg'
import truck from './truck.jpg'
import Office from './Office.jpg'
import Fund from './Fund.jpg'
import Cropped from './Cropped.png'
import Heart from './Heart.png'
import Away from './Away.png'

export default(props) => {
return(
  <div class="Events">
    <header class="Volunteer-top">
    <img class="mainlogo"src = {Heart}/>
    <img  class="mainlogo2"src={Cropped}/>
    <h2 class="opportunities">Volunteer Opportunities</h2>
    </header>
    <h4>Sign up for any of these events!</h4>
    <CardDeck>
  <Card>
    <Card.Img variant="top" src={Bubble} />
    <Card.Body>
      <Card.Title>Bubble Blast!</Card.Title>
      <Card.Text>
        The annual 4k for the kids!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to="/volunteer/bubble"><button><small className="text-muted">Click here to sign up!</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Golf} />
    <Card.Body>
      <Card.Title>Golf Outing</Card.Title>
      <Card.Text>
        The Golf Outing!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/volunteer/golf"><button><small className="text-muted">Click here to sign up!</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Away} />
    <Card.Body>
      <Card.Title>Annual Benefit</Card.Title>
      <Card.Text>
        A great oppurtunity to dress up, donate money, and have a fun time at the manor house
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/volunteer/annual"><button><small className="text-muted">Click here to sign up!</small></button></Link>
    </Card.Footer>
  </Card>
</CardDeck><br/>

<CardDeck>
  <Card>
    <Card.Img variant="top" src={truck} />
    <Card.Body>
      <Card.Title>Kindness Courier</Card.Title>
      <Card.Text>
        If your interested in lifting/delivering equipment to houses, or if you have a pickup truck, this is perfect for you!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/volunteer/kindness"><button><small className="text-muted">Click here to sign up!</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Office} />
    <Card.Body>
      <Card.Title>Office Admin</Card.Title>
      <Card.Text>
        This includes helping around the office and working on events in general
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/volunteer/office"><button><small className="text-muted">Click here to sign up!</small></button></Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={Fund} />
    <Card.Body>
      <Card.Title>Fund raiser</Card.Title>
      <Card.Text>
        Can help with events that help funds for equipment etc.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/volunteer/fundraiser"><button><small className="text-muted">Click here to sign up!</small></button></Link>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
)
}