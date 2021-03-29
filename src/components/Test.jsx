import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Podium from './Podium'
import ForestAction from './ForestAction'
import './Home.css'
import './test.css'
import {
    Grid,
    Segment,
    Popup,
    Item,
    Image
} from 'semantic-ui-react'
import trees from '../images/trees.png'
import Rules from './Rules'

function GridExampleCelledInternally() {
    const [articles, setArticles] = useState([])
    function getArticles() {
        // const config = {
        //     headers: { 
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers': 'content-type, Authorization'
        //      }
        // }
        const url = 'https://api.currentsapi.services/v1/search?' +
            'keywords=environment&language=en&' +
            'apiKey=hr5y9UeDqgsIwitBUB6Lf316ratvkEr8I1hyFlNROfrcd1-P';
        Axios.get(url)
            .then(response => setArticles(response.data.news))
    }
    useEffect(() => {
        getArticles()
    }, [])
    return (
        <>
            <Grid columns={3} container divided stackable>
                <Grid.Row>
                    <Grid.Column className='firstColumn' width={4}>
                        <Segment><h2>Bests Trizzers</h2> <Podium /></Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment>
                            <Popup
                                trigger={<Link to="/quiz"><img id="AppleButton" className="AppleButton" alt="pomme" src={trees} /></Link>}

                                content='Click on tree to play trizz'
                                position='bottom left' ></Popup>
                            <Segment className='center'> <h2>To know more ...<br /><br /><ForestAction /> </h2>

                                <h2>Discover the game's rules <br /><br /><Rules /></h2>

                            </Segment>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>

                        <Segment id="previewArticle">
                            <h2>Last articles</h2>

                            {articles.filter(article => articles.indexOf(article) < 3).map(article => {
                                return (
                                    <Item>
                                        <Item.Content href={article.url} target='_blanck'>
                                            <Item.Header className='titleArticle' as='a'>{article.title}</Item.Header>
                                            <Item.Description>
                                                {article.image === 'None' ? <p>No Image for this article</p> : <Image src={article.image} />}<br />
                                            </Item.Description>
                                        </Item.Content>
                                    </Item>


                                )
                            })}
                            <a id='newsapi' href='https://currentsapi.services/en' target='blank'>Empowered by currentsapi</a>

                        </Segment>
                    </Grid.Column>
                </Grid.Row></Grid></>
    )
}


export default GridExampleCelledInternally

