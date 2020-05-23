import React, { Component } from 'react'
import { Button, Card, Image, Icon, Message } from 'semantic-ui-react'
import './AboutUs.css'
import { Grid, Segment } from 'semantic-ui-react'


class AboutUs extends Component {


    render() {


        return (
            <div id='corpusAboutUs'>
                <Message id='bandeauAboutUs'>
                    <h2 className='Header'>About Us</h2>
                    <p className='paragraph'>Let's start by introducing ourselves! We are a team of students with one idea in mind, to make a fun activity useful for the environment. Our goal is to distract you and allow you by doing this to serve the planet your way. The principle of our quizzes. Depending on your answers and your progress, you actively participate in reforestation! all this while having fun from home! for this you just need to click on the apple on the tree .. let yourself be guided, have fun and do a good</p>
                </Message>

                <Grid id='linkedin' columns={4} container divided stackable>
                    <Grid.Column>
                        <Segment><Card>
                            <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQFh1HPcZ21hGg/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=UJCK_2NLfTLd4P1dLL6zVdWOH7lctYWZZ48Oyrg8rqw' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Anaïs REAU</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Wild Code School</span>
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Button color='linkedin' href='https://www.linkedin.com/in/anais-réau-48ab4319b' target='_blanck'>
                                    <Icon name='linkedin' /> LinkedIn
    </Button>
                            </Card.Content>
                        </Card></Segment>
                    </Grid.Column>


                    <Grid.Column>
                        <Segment><Card>
                            <Image src='https://media-exp1.licdn.com/dms/image/C5603AQEbDwcFRNrHJg/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=ikLJDCXYRXZucEeqrL7pudcJ7oeRaM-EA9qIIJ2_Nss' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Jeff UCCELLI</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Wild Code School</span>
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Button color='linkedin' href='https://www.linkedin.com/in/jeff-uccelli/' target='_blanck'>
                                    <Icon name='linkedin' /> LinkedIn
    </Button>
                            </Card.Content>
                        </Card></Segment>
                    </Grid.Column>


                    <Grid.Column>
                        <Segment><Card>
                            <Image src='https://media-exp1.licdn.com/dms/image/C5603AQFfh3XA7lk6JQ/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=RuXpcmLRHdwTEgUas3Mxw5cOsE4w7owxiqvf5WbPADk' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Christophe TURPIN</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Wild Code School</span>
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Button color='linkedin' href='https://www.linkedin.com/in/christophe-turpin-9b451b70/' target='_blanck'>
                                    <Icon name='linkedin' /> LinkedIn
    </Button>
                            </Card.Content>
                        </Card>

                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment><Card>
                            <Image src='https://media-exp1.licdn.com/dms/image/C4D03AQFKkCh0pnjRFA/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=GrukLIebW9Ofyi2guCM7GuJc2M7wEoZ3IFpRrAYLQ2g' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Nadir ABDELOUAHAB</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Wild Code School</span>
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Button color='linkedin' href='https://www.linkedin.com/in/nadir-abdelouahab/' target='_blanck'>
                                    <Icon name='linkedin' /> LinkedIn
    </Button>
                            </Card.Content>
                        </Card></Segment>
                    </Grid.Column>


                </Grid>




            </div>
        )
    }
}
export default AboutUs