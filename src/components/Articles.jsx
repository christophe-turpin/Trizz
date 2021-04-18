import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Segment, Grid, Image, List, Item, Message } from "semantic-ui-react";
import "./Articles.css";

function CardExampleLinkCard() {
  const [articles, setArticles] = useState([]);
  function getArticles() {
    // const config = {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': 'content-type, Authorization'
    //      }
    // }
    const url =
      "https://api.currentsapi.services/v1/search?" +
      "keywords=environment&language=en&" +
      "apiKey=hr5y9UeDqgsIwitBUB6Lf316ratvkEr8I1hyFlNROfrcd1-P";
    Axios.get(url).then((response) => setArticles(response.data.news));
  }
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div id="corpusArticlus">
      <Message id="bandeauArticles">
        <h2 className="Header">The last 12 articles</h2>
      </Message>
      <Grid id="articles" columns={4} doubling stackable container divided>
        {articles
          .filter((article) => articles.indexOf(article) < 12)
          .map((article) => {
            return (
              <div key={article.id}>
                <Grid.Column>
                  <Segment id="previewArticle">
                    <List
                      className="ListMap"
                      widht="100px"
                      height="30px"
                      as="a"
                      href={article.url}
                      target="_blanck"
                    >
                      <Image
                        src={article.image}
                        alt="No image for this article"
                      />
                      <List.Content>
                        <List.Header>
                          <br />
                          {article.title}
                        </List.Header>
                        <br />
                        Published {article.published.substr(0, 10)}
                      </List.Content>
                    </List>
                  </Segment>
                </Grid.Column>
              </div>
            );
          })}
      </Grid>
      <a id="newsapi" href="https://currentsapi.services/en" target="blank">
        Empowered by currentsapi
      </a>

      <Item.Group className="action" relaxed="very">
        <Item>
          <Item.Content
            as="a"
            href="https://www.reforestaction.com/en/#0"
            target="_blanck"
            verticalAlign="middle"
          >
            <Item.Header>
              You want to invest in reforestation? Click here !{" "}
            </Item.Header>
            <Item.Image
              size="tiny"
              src="https://www.aquacleanconcept.com/1205-home_default/1-arbre-plante-avec-reforest-action.jpg"
              target="_blanck"
            />
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}

export default CardExampleLinkCard;
