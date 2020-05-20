import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Segment, Grid, Image, List, Item, Message } from 'semantic-ui-react'
import './Articles.css'

function CardExampleLinkCard() {
    const [articles, setArticles] = useState([])
    // const [month, setMonth] = useState()
    // function Clock() {
    //     // setDate(new Date().toLocaleDateString())
    //     setMonth(new Date().toLocaleDateString().substr(3, 2))
    // }

    function getArticles() {
        const url = 'http://newsapi.org/v2/everything?' +
            'q=Reforestation&' +
            'sortBy=publishedAt&' +
            'pageSize=12&' +
            'apiKey=ffa55fe5bf19423f8bdd688c681415e3';
        Axios.get(url)
            .then(response => setArticles(response.data.articles))
    }
    useEffect(() => {
        getArticles()
    }, [])
    // useEffect(() => {
    //     Clock()
    // }, [])

    return (
        
        <div id='corpusArticlus'>
            <Message id='bandeauArticles'>
                <h2 className='Header'>The last 12 articles of the month {
                    console.log(articles)}</h2>
            </Message>
            <Grid id='articles' columns={4} doubling stackable container divided >
                {articles.map(article => {
                    return (
                        <>

                            <Grid.Column>
                                <Segment id="previewArticle">
                                    <List className='ListMap' widht='100px' height='30px' as='a' href={article.url} target='_blanck' >

                                        <Image src={article.urlToImage} />
                                        <List.Content>
                                            <List.Header><br />{article.title}</List.Header>
                                            <br />Published {article.publishedAt.substr(0, 10)}
                                        </List.Content>

                                    </List>

                                </Segment></Grid.Column>
                        </>)
                })}
            </Grid>

            <Item.Group className='action' relaxed='very'>
                <Item>
                    <Item.Content as='a' href='https://www.reforestaction.com/en/#0' target='_blanck' verticalAlign='middle'>
                        <Item.Header>You want to invest in reforestation? Click here ! </Item.Header>
                        <Item.Image size='tiny' src='https://www.aquacleanconcept.com/1205-home_default/1-arbre-plante-avec-reforest-action.jpg' target="_blanck" />
                    </Item.Content>
                </Item></Item.Group>

        </div>
    )
}

export default CardExampleLinkCard