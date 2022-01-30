import React from 'react';

const randomBeer = {
  id: 192,
  name: 'Punk IPA 2007 - 2010',
  tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
  first_brewed: '04/2007',
  description:
    "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
  image_url: 'https://images.punkapi.com/v2/192.png',
  abv: 6.0,
  ibu: 60.0,
};

const RandomBeer = () => (
  <section id="randomBeer">
    <img src={randomBeer.image_url} alt={randomBeer.name} />
    <h2>{randomBeer.name}</h2>
    <p>{randomBeer.description}</p>
    <button type="button">Another Beer</button>
    <button type="button">Random Non Alcoholic Beer</button>
  </section>
);

export default RandomBeer;
