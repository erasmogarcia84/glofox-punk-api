export const randomBeerMock = {
  id: 168,
  name: 'Jack Hammer',
  tagline: 'Ruthless India Pale Ale. Hoppy. Bitter. Hoppy.',
  first_brewed: '06/2012',
  description:
    "Hopped beyond the point at which IBUs are measurable, only the most hardened palate will get beyond Jack Hammer's intensely resinous pithy bitterness and to the grapefruit, orange zest and dry biscuity malt beyond. You could brew this with less hops, but really, why would you bother?",
  image_url: 'https://images.punkapi.com/v2/168.png',
  abv: 7.2,
  ibu: 250,
  target_fg: 1010,
  target_og: 1065,
  ebc: 15,
  srm: 7.5,
  ph: 4.4,
  attenuation_level: 84.6,
  volume: {
    value: 20,
    unit: 'litres',
  },
  boil_volume: {
    value: 25,
    unit: 'litres',
  },
  method: {
    mash_temp: [
      {
        temp: {
          value: 65,
          unit: 'celsius',
        },
        duration: 75,
      },
    ],
    fermentation: {
      temp: {
        value: 21,
        unit: 'celsius',
      },
    },
    twist: null,
  },
  ingredients: {
    malt: [
      {
        name: 'Extra Pale',
        amount: {
          value: 5.8,
          unit: 'kilograms',
        },
      },
    ],
    hops: [
      {
        name: 'Centennial',
        amount: {
          value: 25,
          unit: 'grams',
        },
        add: 'start',
        attribute: 'bitter',
      },
      {
        name: 'Columbus Extract',
        amount: {
          value: 30,
          unit: 'grams',
        },
        add: 'start',
        attribute: 'bitter',
      },
      {
        name: 'Centennial',
        amount: {
          value: 18.75,
          unit: 'grams',
        },
        add: 'middle',
        attribute: 'flavour',
      },
      {
        name: 'Columbus',
        amount: {
          value: 18.75,
          unit: 'grams',
        },
        add: 'middle',
        attribute: 'flavour',
      },
      {
        name: 'Centennial',
        amount: {
          value: 50,
          unit: 'grams',
        },
        add: 'end',
        attribute: 'flavour',
      },
      {
        name: 'Columbus',
        amount: {
          value: 25,
          unit: 'grams',
        },
        add: 'end',
        attribute: 'flavour',
      },
      {
        name: 'Amarillo',
        amount: {
          value: 100,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
      {
        name: 'Citra',
        amount: {
          value: 100,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
      {
        name: 'Simcoe',
        amount: {
          value: 100,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
    ],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: [
    'Phall Curry',
    'Pork burrito with a habanero and mango chilli salsa',
    'Ginger and grapefruit poundcake',
  ],
  brewers_tips:
    'Be aware that this is probably the hoppiest beer you will ever make. Make sure you use fresh hops, for a massive fresh grapefruit hit. Have everything else in your store cupboard, and buy your hops last, as close to brew day as possible!',
  contributed_by: 'Sam Mason <samjbmason>',
};

export const randomNonAlcoholicMock = {
  id: 31,
  name: 'Nanny State',
  tagline: 'Alcohol Free Hoppy Ale.',
  first_brewed: '08/2009',
  description:
    'Brewing a full flavoured craft beer at 0.5% is no easy task. Packed with loads of Centennial, Amarillo, Columbus, Cascade and Simcoe hops, dry hopped to the brink and back and sitting at 55 IBUs, Nanny State is a force to be reckoned with. With a backbone of 8 different specialty malts, Nanny State will tantalise your taste buds and leave you yearning for more.',
  image_url: 'https://images.punkapi.com/v2/31.png',
  abv: 0.5,
  ibu: 55,
  target_fg: 1005,
  target_og: 1007,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 28.6,
  volume: {
    value: 20,
    unit: 'litres',
  },
  boil_volume: {
    value: 25,
    unit: 'litres',
  },
  method: {
    mash_temp: [
      {
        temp: {
          value: 65,
          unit: 'celsius',
        },
        duration: 30,
      },
    ],
    fermentation: {
      temp: {
        value: 19,
        unit: 'celsius',
      },
    },
    twist: null,
  },
  ingredients: {
    malt: [
      {
        name: 'Munich',
        amount: {
          value: 0.13,
          unit: 'kilograms',
        },
      },
      {
        name: 'Caramalt',
        amount: {
          value: 0.19,
          unit: 'kilograms',
        },
      },
      {
        name: 'Crystal 150',
        amount: {
          value: 0.06,
          unit: 'kilograms',
        },
      },
      {
        name: 'Amber',
        amount: {
          value: 0.03,
          unit: 'kilograms',
        },
      },
      {
        name: 'Dark Crystal',
        amount: {
          value: 0.13,
          unit: 'kilograms',
        },
      },
      {
        name: 'Chocolate',
        amount: {
          value: 0.06,
          unit: 'kilograms',
        },
      },
      {
        name: 'Wheat',
        amount: {
          value: 0.06,
          unit: 'kilograms',
        },
      },
      {
        name: 'Rye',
        amount: {
          value: 0.13,
          unit: 'kilograms',
        },
      },
    ],
    hops: [
      {
        name: 'Amarillo',
        amount: {
          value: 6.3,
          unit: 'grams',
        },
        add: 'start',
        attribute: 'bitter',
      },
      {
        name: 'Simcoe',
        amount: {
          value: 5,
          unit: 'grams',
        },
        add: 'start',
        attribute: 'bitter',
      },
      {
        name: 'Centennial',
        amount: {
          value: 6.3,
          unit: 'grams',
        },
        add: 'start',
        attribute: 'bitter',
      },
      {
        name: 'Amarillo',
        amount: {
          value: 6.3,
          unit: 'grams',
        },
        add: 'middle',
        attribute: 'flavour',
      },
      {
        name: 'Simcoe',
        amount: {
          value: 2.5,
          unit: 'grams',
        },
        add: 'middle',
        attribute: 'flavour',
      },
      {
        name: 'Centennial',
        amount: {
          value: 6.3,
          unit: 'grams',
        },
        add: 'middle',
        attribute: 'flavour',
      },
      {
        name: 'Amarillo',
        amount: {
          value: 5,
          unit: 'grams',
        },
        add: 'end',
        attribute: 'flavour',
      },
      {
        name: 'Simcoe',
        amount: {
          value: 5,
          unit: 'grams',
        },
        add: 'end',
        attribute: 'flavour',
      },
      {
        name: 'Cascade',
        amount: {
          value: 12.5,
          unit: 'grams',
        },
        add: 'end',
        attribute: 'flavour',
      },
      {
        name: 'Ahtanum',
        amount: {
          value: 12.5,
          unit: 'grams',
        },
        add: 'end',
        attribute: 'flavour',
      },
      {
        name: 'Centennial',
        amount: {
          value: 50,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
      {
        name: 'Cascade',
        amount: {
          value: 50,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
      {
        name: 'Ahtanum',
        amount: {
          value: 25,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
      {
        name: 'Simcoe',
        amount: {
          value: 25,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
      {
        name: 'Columbus',
        amount: {
          value: 37.5,
          unit: 'grams',
        },
        add: 'dry hop',
        attribute: 'aroma',
      },
    ],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Earthy mushroom pasta'],
  brewers_tips:
    "Get hops in every stage of the brewing process - mash, run off boil and flame off. There's not too much malt body, so the more hops the better.",
  contributed_by: 'Sam Mason <samjbmason>',
};
