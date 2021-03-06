// Object obtained from https://www150.statcan.gc.ca/t1/wds/rest/getCodeSets

const codeSets = {
  scalar: [
    {
      scalarFactorCode: 0,
      scalarFactorDescEn: 'units ',
      scalarFactorDescFr: 'unités',
    },
    {
      scalarFactorCode: 1,
      scalarFactorDescEn: 'tens',
      scalarFactorDescFr: 'dizaines',
    },
    {
      scalarFactorCode: 2,
      scalarFactorDescEn: 'hundreds',
      scalarFactorDescFr: 'centaines',
    },
    {
      scalarFactorCode: 3,
      scalarFactorDescEn: 'thousands',
      scalarFactorDescFr: 'milliers',
    },
    {
      scalarFactorCode: 4,
      scalarFactorDescEn: 'tens of thousands',
      scalarFactorDescFr: 'dizaines de milliers',
    },
    {
      scalarFactorCode: 5,
      scalarFactorDescEn: 'hundreds of thousands',
      scalarFactorDescFr: 'centaines de milliers',
    },
    {
      scalarFactorCode: 6,
      scalarFactorDescEn: 'millions',
      scalarFactorDescFr: 'millions',
    },
    {
      scalarFactorCode: 7,
      scalarFactorDescEn: 'tens of millions',
      scalarFactorDescFr: 'dizaines de millions',
    },
    {
      scalarFactorCode: 8,
      scalarFactorDescEn: 'hundreds of millions',
      scalarFactorDescFr: 'centaines de millions',
    },
    {
      scalarFactorCode: 9,
      scalarFactorDescEn: 'billions',
      scalarFactorDescFr: 'milliards',
    },
  ],
  frequency: [
    {
      frequencyCode: 1,
      frequencyDescEn: 'Daily',
      frequencyDescFr: 'Quotidienne',
    },
    {
      frequencyCode: 11,
      frequencyDescEn: 'Semi-annual',
      frequencyDescFr: 'Semestrielle',
    },
    {
      frequencyCode: 12,
      frequencyDescEn: 'Annual',
      frequencyDescFr: 'Annuelle',
    },
    {
      frequencyCode: 13,
      frequencyDescEn: 'Every 2 years',
      frequencyDescFr: 'Aux 2 ans',
    },
    {
      frequencyCode: 14,
      frequencyDescEn: 'Every 3 years',
      frequencyDescFr: 'Aux 3 ans',
    },
    {
      frequencyCode: 15,
      frequencyDescEn: 'Every 4 years',
      frequencyDescFr: 'Aux 4 ans',
    },
    {
      frequencyCode: 16,
      frequencyDescEn: 'Every 5 years',
      frequencyDescFr: 'Aux 5 ans',
    },
    {
      frequencyCode: 17,
      frequencyDescEn: 'Every 10 years',
      frequencyDescFr: 'Aux 10 ans',
    },
    {
      frequencyCode: 18,
      frequencyDescEn: 'Occasional',
      frequencyDescFr: 'Occasionnelle',
    },
    {
      frequencyCode: 19,
      frequencyDescEn: 'Occasional Quarterly',
      frequencyDescFr: 'Occasionnelle trimestrielle',
    },
    {
      frequencyCode: 2,
      frequencyDescEn: 'Weekly',
      frequencyDescFr: 'Hebdomadaire',
    },
    {
      frequencyCode: 20,
      frequencyDescEn: 'Occasional Monthly',
      frequencyDescFr: 'Occasionnelle mensuelle',
    },
    {
      frequencyCode: 21,
      frequencyDescEn: 'Occasional Daily',
      frequencyDescFr: 'Occasionnelle quotidienne',
    },
    {
      frequencyCode: 4,
      frequencyDescEn: 'Biweekly',
      frequencyDescFr: 'Aux 2 semaines',
    },
    {
      frequencyCode: 6,
      frequencyDescEn: 'Monthly',
      frequencyDescFr: 'Mensuelle',
    },
    {
      frequencyCode: 7,
      frequencyDescEn: 'Bimonthly',
      frequencyDescFr: 'Aux 2 mois',
    },
    {
      frequencyCode: 9,
      frequencyDescEn: 'Quarterly',
      frequencyDescFr: 'Trimestrielle',
    },
  ],
  symbol: [
    {
      symbolCode: '0',
      symbolRepresentationEn: null,
      symbolRepresentationFr: null,
      symbolDescEn: 'none',
      symbolDescFr: 'aucun',
    },
    {
      symbolCode: '1',
      symbolRepresentationEn: 'p',
      symbolRepresentationFr: 'p',
      symbolDescEn: 'preliminary',
      symbolDescFr: 'provisoire',
    },
    {
      symbolCode: '3',
      symbolRepresentationEn: 'r',
      symbolRepresentationFr: 'r',
      symbolDescEn: 'revised',
      symbolDescFr: 'révisé',
    },
  ],
  status: [
    {
      statusCode: '0',
      statusRepresentationEn: null,
      statusRepresentationFr: null,
      statusDescEn: 'normal',
      statusDescFr: 'normal',
    },
    {
      statusCode: '1',
      statusRepresentationEn: '..',
      statusRepresentationFr: '..',
      statusDescEn: 'not available for a specific reference period',
      statusDescFr: 'indisponible pour une période de référence précise',
    },
    {
      statusCode: '10',
      statusRepresentationEn: '<LOD',
      statusRepresentationFr: '<LDD',
      statusDescEn: 'less than the limit of detection',
      statusDescFr: 'inférieur à la limite de détection',
    },
    {
      statusCode: '2',
      statusRepresentationEn: '0s',
      statusRepresentationFr: '0s',
      statusDescEn:
        'value rounded to 0 (zero) where there is a meaningful distinction between true zero and the value that was rounded',
      statusDescFr:
        'valeur arrondie à 0 (zéro) là où il y a une distinction importante entre le zéro absolu et la valeur arrondie',
    },
    {
      statusCode: '3',
      statusRepresentationEn: 'A',
      statusRepresentationFr: 'A',
      statusDescEn: 'data quality: excellent',
      statusDescFr: 'qualité des données: excellente',
    },
    {
      statusCode: '4',
      statusRepresentationEn: 'B',
      statusRepresentationFr: 'B',
      statusDescEn: 'data quality: very good',
      statusDescFr: 'qualité des données: très bonne',
    },
    {
      statusCode: '5',
      statusRepresentationEn: 'C',
      statusRepresentationFr: 'C',
      statusDescEn: 'data quality: good',
      statusDescFr: 'qualité des données: bonne',
    },
    {
      statusCode: '6',
      statusRepresentationEn: 'D',
      statusRepresentationFr: 'D',
      statusDescEn: 'data quality: acceptable',
      statusDescFr: 'qualité des données: acceptable',
    },
    {
      statusCode: '7',
      statusRepresentationEn: 'E',
      statusRepresentationFr: 'E',
      statusDescEn: 'use with caution',
      statusDescFr: 'à utiliser avec prudence',
    },
    {
      statusCode: '8',
      statusRepresentationEn: 'F',
      statusRepresentationFr: 'F',
      statusDescEn: 'too unreliable to be published.',
      statusDescFr: 'trop peu fiable pour être publié',
    },
    {
      statusCode: '9',
      statusRepresentationEn: '...',
      statusRepresentationFr: '...',
      statusDescEn: 'not applicable',
      statusDescFr: "n'ayant pas lieu de figurer",
    },
  ],
  uom: [
    {
      memberUomCode: 1,
      memberUomEn: '1981=100',
      memberUomFr: '1981=100',
    },
    {
      memberUomCode: 10,
      memberUomEn: '199712=100',
      memberUomFr: '199712=100',
    },
    {
      memberUomCode: 100,
      memberUomEn: 'Dollars per 8 litres',
      memberUomFr: 'Dollars par 8 litres',
    },
    {
      memberUomCode: 101,
      memberUomEn: 'Dollars per 9 litres',
      memberUomFr: 'Dollars par 9 litres',
    },
    {
      memberUomCode: 102,
      memberUomEn: 'Dollars per 9,000 feet',
      memberUomFr: 'Dollars par 9 000 pieds',
    },
    {
      memberUomCode: 103,
      memberUomEn: 'Dollars per 9.5 litres',
      memberUomFr: 'Dollars par 9,5 litres',
    },
    {
      memberUomCode: 104,
      memberUomEn: 'Dollars per bushel',
      memberUomFr: 'Dollars par boisseaux',
    },
    {
      memberUomCode: 105,
      memberUomEn: 'Dollars per carton',
      memberUomFr: 'Dollars par carton',
    },
    {
      memberUomCode: 106,
      memberUomEn: 'Dollars per dozen',
      memberUomFr: 'Dollars par douzaine',
    },
    {
      memberUomCode: 107,
      memberUomEn: 'Dollars per hour',
      memberUomFr: 'Dollars par heure',
    },
    {
      memberUomCode: 108,
      memberUomEn: 'Dollars per hundredweight',
      memberUomFr: 'Dollars par quintal',
    },
    {
      memberUomCode: 109,
      memberUomEn: 'Dollars per hundredweight',
      memberUomFr: 'Dollars par poids de cent douze livres',
    },
    {
      memberUomCode: 11,
      memberUomEn: '1997=100',
      memberUomFr: '1997=100',
    },
    {
      memberUomCode: 110,
      memberUomEn: 'Dollars per hundredweight',
      memberUomFr: 'Dollars par poids de cent livres',
    },
    {
      memberUomCode: 111,
      memberUomEn: 'Dollars per hundredweight',
      memberUomFr: 'Dollars par quintaux',
    },
    {
      memberUomCode: 112,
      memberUomEn: 'Dollars per hundredweight of milk',
      memberUomFr: 'Dollars par poids de cent douze livres de lait',
    },
    {
      memberUomCode: 113,
      memberUomEn: 'Dollars per kilogram',
      memberUomFr: 'Dollars par kilogramme',
    },
    {
      memberUomCode: 114,
      memberUomEn: 'Dollars per kilolitre',
      memberUomFr: 'Dollars par kilolitre',
    },
    {
      memberUomCode: 115,
      memberUomEn: 'Dollars per kilometre',
      memberUomFr: 'Dollars par kilomètre',
    },
    {
      memberUomCode: 116,
      memberUomEn: 'Dollars per litre',
      memberUomFr: 'Dollars par litre',
    },
    {
      memberUomCode: 117,
      memberUomEn: 'Dollars per metric tonne',
      memberUomFr: 'Dollars par tonne métrique',
    },
    {
      memberUomCode: 118,
      memberUomEn: 'Dollars per person',
      memberUomFr: 'Dollars par personne',
    },
    {
      memberUomCode: 119,
      memberUomEn: 'Dollars per pound',
      memberUomFr: 'Dollars par livre',
    },
    {
      memberUomCode: 12,
      memberUomEn: '1999=100',
      memberUomFr: '1999=100',
    },
    {
      memberUomCode: 120,
      memberUomEn: 'Dollars per ton',
      memberUomFr: 'Dollars par tonne',
    },
    {
      memberUomCode: 121,
      memberUomEn: 'Dollars per tonne',
      memberUomFr: 'Dollars par tonne métrique',
    },
    {
      memberUomCode: 122,
      memberUomEn: 'Dollars per tonnes',
      memberUomFr: 'Dollars par tonnes métriques',
    },
    {
      memberUomCode: 123,
      memberUomEn: 'Dollars per unit of real GDP',
      memberUomFr: 'Dollars par unité de PIB réel',
    },
    {
      memberUomCode: 124,
      memberUomEn: 'Dollars, 1972=100',
      memberUomFr: 'Dollars, 1972=100',
    },
    {
      memberUomCode: 125,
      memberUomEn: 'Dollars, 1981=100',
      memberUomFr: 'Dollars, 1981=100',
    },
    {
      memberUomCode: 126,
      memberUomEn: 'Dollars, 1982=100',
      memberUomFr: 'Dollars, 1982=100',
    },
    {
      memberUomCode: 127,
      memberUomEn: 'Dollars, 1986=100',
      memberUomFr: 'Dollars, 1986=100',
    },
    {
      memberUomCode: 128,
      memberUomEn: 'Dollars, 1992',
      memberUomFr: 'Dollars, 1992',
    },
    {
      memberUomCode: 129,
      memberUomEn: 'Dozens',
      memberUomFr: 'Douzaines',
    },
    {
      memberUomCode: 13,
      memberUomEn: '2000=100',
      memberUomFr: '2000=100',
    },
    {
      memberUomCode: 130,
      memberUomEn: 'Dozens per person, per year',
      memberUomFr: 'Douzaines par personne, par année',
    },
    {
      memberUomCode: 131,
      memberUomEn: 'Duration',
      memberUomFr: 'Durée',
    },
    {
      memberUomCode: 132,
      memberUomEn: 'Eggs',
      memberUomFr: 'Oeufs',
    },
    {
      memberUomCode: 133,
      memberUomEn: 'Employees',
      memberUomFr: 'Employés',
    },
    {
      memberUomCode: 134,
      memberUomEn: 'Employees',
      memberUomFr: 'Travailleurs',
    },
    {
      memberUomCode: 135,
      memberUomEn: 'Enterprises',
      memberUomFr: 'Entreprises',
    },
    {
      memberUomCode: 136,
      memberUomEn: 'Establishments',
      memberUomFr: 'Établissements',
    },
    {
      memberUomCode: 137,
      memberUomEn: 'Evenings',
      memberUomFr: 'Soirées',
    },
    {
      memberUomCode: 138,
      memberUomEn: 'Families',
      memberUomFr: 'Familles',
    },
    {
      memberUomCode: 139,
      memberUomEn: 'Firms',
      memberUomFr: 'Entreprises',
    },
    {
      memberUomCode: 14,
      memberUomEn: '2002 constant dollars',
      memberUomFr: 'Dollars constants de 2002',
    },
    {
      memberUomCode: 140,
      memberUomEn: 'Foreign-born persons',
      memberUomFr: "Personnes nées à l'étranger",
    },
    {
      memberUomCode: 141,
      memberUomEn: 'Full-time equivalent',
      memberUomFr: 'Équivalence temps plein',
    },
    {
      memberUomCode: 142,
      memberUomEn: 'Gallons',
      memberUomFr: 'Gallons',
    },
    {
      memberUomCode: 143,
      memberUomEn: 'Gigajoules',
      memberUomFr: 'Gigajoules',
    },
    {
      memberUomCode: 144,
      memberUomEn: 'Gigajoules per thousand current dollars of production',
      memberUomFr: 'Gigajoules par millier de dollars courants de production',
    },
    {
      memberUomCode: 145,
      memberUomEn: 'Gigalitres',
      memberUomFr: 'Gigalitres',
    },
    {
      memberUomCode: 146,
      memberUomEn: 'Gigawatt hours',
      memberUomFr: 'Gigawatt-heures',
    },
    {
      memberUomCode: 147,
      memberUomEn: 'Grams',
      memberUomFr: 'Grammes',
    },
    {
      memberUomCode: 148,
      memberUomEn: 'Head',
      memberUomFr: 'Tête',
    },
    {
      memberUomCode: 149,
      memberUomEn: 'Hectares',
      memberUomFr: 'Hectares',
    },
    {
      memberUomCode: 15,
      memberUomEn: '2002/2003 constant dollars',
      memberUomFr: 'Dollars constants de 2002-2003',
    },
    {
      memberUomCode: 150,
      memberUomEn: 'High 95% confidence interval',
      memberUomFr: "Limite supérieure de l'intervalle de confiance de 95 %",
    },
    {
      memberUomCode: 151,
      memberUomEn: 'Hogs',
      memberUomFr: 'Porcs',
    },
    {
      memberUomCode: 152,
      memberUomEn: 'Hours',
      memberUomFr: 'Heures',
    },
    {
      memberUomCode: 153,
      memberUomEn: 'Hours in thousands',
      memberUomFr: 'Heures en milliers',
    },
    {
      memberUomCode: 154,
      memberUomEn: 'Households',
      memberUomFr: 'Ménages',
    },
    {
      memberUomCode: 155,
      memberUomEn: 'Hundredweight',
      memberUomFr: 'Poids de cent douze livres',
    },
    {
      memberUomCode: 156,
      memberUomEn: 'Hundredweight',
      memberUomFr: 'Poids de cent livres',
    },
    {
      memberUomCode: 157,
      memberUomEn: 'Hundredweight',
      memberUomFr: 'Quintaux',
    },
    {
      memberUomCode: 158,
      memberUomEn: 'Hundredweight per acre',
      memberUomFr: 'Quintaux par acre',
    },
    {
      memberUomCode: 159,
      memberUomEn: 'Hundredweight per harvested acres',
      memberUomFr: "Quintaux à l'acre récolté",
    },
    {
      memberUomCode: 16,
      memberUomEn: '200212=100',
      memberUomFr: '200212=100',
    },
    {
      memberUomCode: 160,
      memberUomEn: 'Index',
      memberUomFr: 'Indice',
    },
    {
      memberUomCode: 161,
      memberUomEn: 'Index, 1926=100',
      memberUomFr: 'Indice, 1926=100',
    },
    {
      memberUomCode: 162,
      memberUomEn: 'Index, 1948=100/1968=100',
      memberUomFr: 'Indices, 1948=100/1968=100',
    },
    {
      memberUomCode: 163,
      memberUomEn: 'Index, 1961=100',
      memberUomFr: 'Indice, 1961=100',
    },
    {
      memberUomCode: 164,
      memberUomEn: 'Index, 1967=100',
      memberUomFr: 'Indice, 1967=100',
    },
    {
      memberUomCode: 165,
      memberUomEn: 'Index, 1971=100',
      memberUomFr: 'Indice, 1971=100',
    },
    {
      memberUomCode: 166,
      memberUomEn: 'Index, 1972=100',
      memberUomFr: 'Indice, 1972=100',
    },
    {
      memberUomCode: 167,
      memberUomEn: 'Index, 1975=1000',
      memberUomFr: 'Indice, 1975=1000',
    },
    {
      memberUomCode: 168,
      memberUomEn: 'Index, 1977=100',
      memberUomFr: 'Indice, 1977=100',
    },
    {
      memberUomCode: 169,
      memberUomEn: 'Index, 1981=100',
      memberUomFr: 'Indice, 1981=100',
    },
    {
      memberUomCode: 17,
      memberUomEn: '2002=100',
      memberUomFr: '2002=100',
    },
    {
      memberUomCode: 170,
      memberUomEn: 'Index, 1982-84=100',
      memberUomFr: 'Indice, 1982-84=100',
    },
    {
      memberUomCode: 171,
      memberUomEn: 'Index, 1986=100',
      memberUomFr: 'Indice, 1986=100',
    },
    {
      memberUomCode: 172,
      memberUomEn: 'Index, 1990=100',
      memberUomFr: 'Indice, 1990=100',
    },
    {
      memberUomCode: 173,
      memberUomEn: 'Index, 1992=100',
      memberUomFr: 'Indice, 1992=100',
    },
    {
      memberUomCode: 174,
      memberUomEn: 'Index, 199712=100',
      memberUomFr: 'Indice, 199712=100',
    },
    {
      memberUomCode: 175,
      memberUomEn: 'Index, 1997=100',
      memberUomFr: 'Indice, 1997=100',
    },
    {
      memberUomCode: 176,
      memberUomEn: 'Index, 2000=1000',
      memberUomFr: 'Indice, 2000=1000',
    },
    {
      memberUomCode: 177,
      memberUomEn: 'Index, 2001=100',
      memberUomFr: 'Indice, 2001=100',
    },
    {
      memberUomCode: 178,
      memberUomEn: 'Index, 2002=100',
      memberUomFr: 'Indice, 2002=100',
    },
    {
      memberUomCode: 179,
      memberUomEn: 'Index, 2003=100',
      memberUomFr: 'Indice, 2003=100',
    },
    {
      memberUomCode: 18,
      memberUomEn: '2007 constant dollars',
      memberUomFr: 'Dollars constants de 2007',
    },
    {
      memberUomCode: 180,
      memberUomEn: 'Index, 2006=100',
      memberUomFr: 'Indice, 2006=100',
    },
    {
      memberUomCode: 181,
      memberUomEn: 'Index, 2007=100',
      memberUomFr: 'Indice, 2007=100',
    },
    {
      memberUomCode: 182,
      memberUomEn: 'Index, 2008=100',
      memberUomFr: 'Indice, 2008=100',
    },
    {
      memberUomCode: 183,
      memberUomEn: 'Index, 2009=100',
      memberUomFr: 'Indice, 2009=100',
    },
    {
      memberUomCode: 184,
      memberUomEn: 'Index, 2010=100',
      memberUomFr: 'Indice, 2010=100',
    },
    {
      memberUomCode: 185,
      memberUomEn: 'Index, 2011=100',
      memberUomFr: 'Indice, 2011=100',
    },
    {
      memberUomCode: 186,
      memberUomEn: 'Index, 2013=100',
      memberUomFr: 'Indice, 2013=100',
    },
    {
      memberUomCode: 187,
      memberUomEn: 'Index, 82-90=100',
      memberUomFr: 'Indice, 82-90=100',
    },
    {
      memberUomCode: 188,
      memberUomEn: 'Index, combined city average=100',
      memberUomFr: 'Indice, moyenne des villes combinées=100',
    },
    {
      memberUomCode: 189,
      memberUomEn: 'Index,1992=100',
      memberUomFr: 'Indice, 1992=100',
    },
    {
      memberUomCode: 19,
      memberUomEn: '200704=100',
      memberUomFr: '200704=100',
    },
    {
      memberUomCode: 190,
      memberUomEn: 'Jobs',
      memberUomFr: 'Emplois',
    },
    {
      memberUomCode: 191,
      memberUomEn: 'Kilocalories',
      memberUomFr: 'Kilocalories',
    },
    {
      memberUomCode: 192,
      memberUomEn: 'Kilograms',
      memberUomFr: 'Kilogrammes',
    },
    {
      memberUomCode: 193,
      memberUomEn: 'Kilograms per hectare',
      memberUomFr: 'Kilogrammes par hectare',
    },
    {
      memberUomCode: 194,
      memberUomEn: 'Kilograms per person, per year',
      memberUomFr: 'Kilogrammes par personne, par année',
    },
    {
      memberUomCode: 195,
      memberUomEn: 'Kilolitres',
      memberUomFr: 'Kilolitres',
    },
    {
      memberUomCode: 196,
      memberUomEn: 'Kilometres',
      memberUomFr: 'Kilomètres',
    },
    {
      memberUomCode: 197,
      memberUomEn: 'Kilometres per hour',
      memberUomFr: 'Kilomètres par heure',
    },
    {
      memberUomCode: 198,
      memberUomEn: 'Kilotonnes',
      memberUomFr: 'Kilotonnes',
    },
    {
      memberUomCode: 199,
      memberUomEn: 'Kilowatt-hours',
      memberUomFr: 'Kilowattheures',
    },
    {
      memberUomCode: 2,
      memberUomEn: '198203=100',
      memberUomFr: '198203=100',
    },
    {
      memberUomCode: 20,
      memberUomEn: '2007=100',
      memberUomFr: '2007=100',
    },
    {
      memberUomCode: 200,
      memberUomEn: 'Kilowatts',
      memberUomFr: 'Kilowatts',
    },
    {
      memberUomCode: 201,
      memberUomEn: 'Layers',
      memberUomFr: 'Pondeuses',
    },
    {
      memberUomCode: 202,
      memberUomEn: 'Lines',
      memberUomFr: 'Lignes',
    },
    {
      memberUomCode: 203,
      memberUomEn: 'Litres',
      memberUomFr: 'Litres',
    },
    {
      memberUomCode: 204,
      memberUomEn: 'Litres absolute alcohol',
      memberUomFr: "Litres d'alcool absolu",
    },
    {
      memberUomCode: 205,
      memberUomEn: 'Litres per person, per year',
      memberUomFr: 'Litres par personne, par année',
    },
    {
      memberUomCode: 206,
      memberUomEn: 'Low 95% confidence interval',
      memberUomFr: "Limite inférieure de l'intervalle de confiance de 95 %",
    },
    {
      memberUomCode: 207,
      memberUomEn: 'Mean number',
      memberUomFr: 'Nombre moyen',
    },
    {
      memberUomCode: 208,
      memberUomEn: 'Megalitres',
      memberUomFr: 'Mégalitres',
    },
    {
      memberUomCode: 209,
      memberUomEn: 'Megatonnes',
      memberUomFr: 'Mégatonnes',
    },
    {
      memberUomCode: 21,
      memberUomEn: '2010=100',
      memberUomFr: '2010=100',
    },
    {
      memberUomCode: 210,
      memberUomEn: 'Megawatt hours',
      memberUomFr: 'Mégawatt heures',
    },
    {
      memberUomCode: 211,
      memberUomEn: 'Message',
      memberUomFr: 'Appel',
    },
    {
      memberUomCode: 212,
      memberUomEn: 'Metric bundles',
      memberUomFr: 'Paquets métriques',
    },
    {
      memberUomCode: 213,
      memberUomEn: 'Metric rolls',
      memberUomFr: 'Rouleaux métriques',
    },
    {
      memberUomCode: 214,
      memberUomEn: 'Metric tonnes',
      memberUomFr: 'Tonnes métriques',
    },
    {
      memberUomCode: 215,
      memberUomEn: 'Metric units',
      memberUomFr: 'Unités métriques',
    },
    {
      memberUomCode: 216,
      memberUomEn: 'Micrograms',
      memberUomFr: 'Microgrammes',
    },
    {
      memberUomCode: 217,
      memberUomEn: 'Milligrams',
      memberUomFr: 'Milligrammes',
    },
    {
      memberUomCode: 218,
      memberUomEn: 'Millimetres',
      memberUomFr: 'Millimètres',
    },
    {
      memberUomCode: 219,
      memberUomEn: 'Minutes',
      memberUomFr: 'Minutes',
    },
    {
      memberUomCode: 22,
      memberUomEn: '201104=100',
      memberUomFr: '201104=100',
    },
    {
      memberUomCode: 220,
      memberUomEn: 'Months',
      memberUomFr: 'Mois',
    },
    {
      memberUomCode: 221,
      memberUomEn: 'Month/day',
      memberUomFr: 'Mois/jour',
    },
    {
      memberUomCode: 222,
      memberUomEn: 'National currency per Canadian dollar',
      memberUomFr: 'Monnaie nationale par dollar canadien',
    },
    {
      memberUomCode: 223,
      memberUomEn: 'Number',
      memberUomFr: 'Nombre',
    },
    {
      memberUomCode: 224,
      memberUomEn: 'Niacin equivalent',
      memberUomFr: 'Équivalent en niacine',
    },
    {
      memberUomCode: 225,
      memberUomEn: 'Nights',
      memberUomFr: 'Nuitées',
    },
    {
      memberUomCode: 226,
      memberUomEn: 'Number in thousands',
      memberUomFr: 'Nombre en milliers',
    },
    {
      memberUomCode: 227,
      memberUomEn: 'Number of farms reporting',
      memberUomFr: 'Nombre de fermes déclarantes',
    },
    {
      memberUomCode: 228,
      memberUomEn: 'Number of visits',
      memberUomFr: 'Nombre de visites',
    },
    {
      memberUomCode: 229,
      memberUomEn: 'Number per square kilometre',
      memberUomFr: 'Nombre par kilomètre carré',
    },
    {
      memberUomCode: 23,
      memberUomEn: '2012 constant dollars',
      memberUomFr: 'Dollars constants de 2012',
    },
    {
      memberUomCode: 230,
      memberUomEn: 'Other British- and foreign-born persons',
      memberUomFr:
        "Personnes nées dans un autre pays britannique et à l'étranger",
    },
    {
      memberUomCode: 231,
      memberUomEn: 'Other British-born persons',
      memberUomFr: 'Personnes nées dans un autre pays britannique',
    },
    {
      memberUomCode: 232,
      memberUomEn: 'Oven-dry metric tonnes',
      memberUomFr: 'Tonnes métriques séchées au four',
    },
    {
      memberUomCode: 233,
      memberUomEn: 'Pairs',
      memberUomFr: 'Paires',
    },
    {
      memberUomCode: 234,
      memberUomEn: 'Passenger-kilometres',
      memberUomFr: 'Passagers-kilomètres',
    },
    {
      memberUomCode: 235,
      memberUomEn: 'Passenger-kilometres',
      memberUomFr: 'Voyageur-kilomètres',
    },
    {
      memberUomCode: 236,
      memberUomEn: 'Passengers',
      memberUomFr: 'Passagers',
    },
    {
      memberUomCode: 237,
      memberUomEn: 'Passengers',
      memberUomFr: 'Voyageurs',
    },
    {
      memberUomCode: 238,
      memberUomEn: 'Passengers-miles',
      memberUomFr: 'Voyageurs-mille',
    },
    {
      memberUomCode: 239,
      memberUomEn: 'Percent',
      memberUomFr: 'Pourcent',
    },
    {
      memberUomCode: 24,
      memberUomEn: '2012/01=100',
      memberUomFr: '2012/01=100',
    },
    {
      memberUomCode: 240,
      memberUomEn: 'Percent change (1986=100)',
      memberUomFr: 'Variation en pourcentage (1986=100)',
    },
    {
      memberUomCode: 241,
      memberUomEn: 'Percent change (1992=100)',
      memberUomFr: 'Variation en pourcentage (1992=100)',
    },
    {
      memberUomCode: 242,
      memberUomEn: 'Percentage',
      memberUomFr: 'Pourcentage',
    },
    {
      memberUomCode: 243,
      memberUomEn: 'Percentage of gross domestic income',
      memberUomFr: 'Pourcentage du revenu intérieur brut',
    },
    {
      memberUomCode: 244,
      memberUomEn: 'Percentage of gross domestic product',
      memberUomFr: 'Pourcentage du produit intérieur brut',
    },
    {
      memberUomCode: 245,
      memberUomEn: 'Percentage of households',
      memberUomFr: 'Pourcentage des ménages',
    },
    {
      memberUomCode: 246,
      memberUomEn: 'Percentage share',
      memberUomFr: 'Part en pourcentage',
    },
    {
      memberUomCode: 247,
      memberUomEn: 'Person-trips',
      memberUomFr: 'Voyages-personnes',
    },
    {
      memberUomCode: 248,
      memberUomEn: 'Person-visits',
      memberUomFr: 'Visites-personnes',
    },
    {
      memberUomCode: 249,
      memberUomEn: 'Persons',
      memberUomFr: 'Personnes',
    },
    {
      memberUomCode: 25,
      memberUomEn: '2013=100',
      memberUomFr: '2013=100',
    },
    {
      memberUomCode: 250,
      memberUomEn: 'Petajoules',
      memberUomFr: 'Pétajoules',
    },
    {
      memberUomCode: 251,
      memberUomEn: 'Point',
      memberUomFr: 'Point',
    },
    {
      memberUomCode: 252,
      memberUomEn: 'Policies',
      memberUomFr: 'Polices',
    },
    {
      memberUomCode: 253,
      memberUomEn: 'Poults',
      memberUomFr: 'Dindonneau',
    },
    {
      memberUomCode: 254,
      memberUomEn: 'Pounds',
      memberUomFr: 'Livres',
    },
    {
      memberUomCode: 255,
      memberUomEn: 'Pounds of milk',
      memberUomFr: 'Livres de lait',
    },
    {
      memberUomCode: 256,
      memberUomEn: 'Pounds per acre',
      memberUomFr: 'Livres par acre',
    },
    {
      memberUomCode: 257,
      memberUomEn: 'Rate',
      memberUomFr: 'Taux',
    },
    {
      memberUomCode: 258,
      memberUomEn: 'Rate per 1,000 births',
      memberUomFr: 'Taux pour 1 000 naissances',
    },
    {
      memberUomCode: 259,
      memberUomEn: 'Rate per 1,000 legally married females',
      memberUomFr: 'Taux pour 1 000 femmes mariées légalement',
    },
    {
      memberUomCode: 26,
      memberUomEn: 'Access lines',
      memberUomFr: "Lignes d'accès",
    },
    {
      memberUomCode: 260,
      memberUomEn: 'Rate per 1,000 legally married males',
      memberUomFr: 'Taux pour 1 000 hommes mariés légalement',
    },
    {
      memberUomCode: 261,
      memberUomEn: 'Rate per 1,000 live births',
      memberUomFr: 'Taux pour 1 000 naissances vivantes',
    },
    {
      memberUomCode: 262,
      memberUomEn: 'Rate per 1,000 males',
      memberUomFr: 'Taux pour 1 000 hommes',
    },
    {
      memberUomCode: 263,
      memberUomEn: 'Rate per 1,000 marriages',
      memberUomFr: 'Taux pour 1 000 mariages',
    },
    {
      memberUomCode: 264,
      memberUomEn: 'Rate per 1,000 total births',
      memberUomFr: 'Taux pour 1 000 naissances totales',
    },
    {
      memberUomCode: 265,
      memberUomEn: 'Rate per 100,000 population',
      memberUomFr: 'Taux pour 100 000 personnes',
    },
    {
      memberUomCode: 266,
      memberUomEn: 'Rates per 1,000 females',
      memberUomFr: 'Taux pour 1 000 femmes',
    },
    {
      memberUomCode: 267,
      memberUomEn: 'Rates per 1,000 population',
      memberUomFr: 'Taux pour 1 000 personnes',
    },
    {
      memberUomCode: 268,
      memberUomEn: 'Rates per 1,000 unmarried females',
      memberUomFr: 'Taux pour 1 000 femmes non mariées',
    },
    {
      memberUomCode: 269,
      memberUomEn: 'Rates per 1,000 unmarried males',
      memberUomFr: 'Taux pour 1 000 hommes non mariés',
    },
    {
      memberUomCode: 27,
      memberUomEn: 'Accidents',
      memberUomFr: 'Accidents',
    },
    {
      memberUomCode: 270,
      memberUomEn: 'Ratio',
      memberUomFr: 'Rapport',
    },
    {
      memberUomCode: 271,
      memberUomEn: 'Ratio',
      memberUomFr: 'Ratio',
    },
    {
      memberUomCode: 272,
      memberUomEn: 'Ratio',
      memberUomFr: 'Taux',
    },
    {
      memberUomCode: 273,
      memberUomEn: 'Records',
      memberUomFr: 'Disques',
    },
    {
      memberUomCode: 274,
      memberUomEn: 'Retinol equivalent',
      memberUomFr: 'Équivalent rétinol',
    },
    {
      memberUomCode: 275,
      memberUomEn: 'Seat-kilometres',
      memberUomFr: 'Sièges-kilomètres',
    },
    {
      memberUomCode: 276,
      memberUomEn: 'Shares',
      memberUomFr: 'Actions',
    },
    {
      memberUomCode: 277,
      memberUomEn: 'Shares',
      memberUomFr: 'Parts',
    },
    {
      memberUomCode: 278,
      memberUomEn: 'Shelters',
      memberUomFr: 'Refuges',
    },
    {
      memberUomCode: 279,
      memberUomEn: 'Square feet',
      memberUomFr: 'Pieds carrés',
    },
    {
      memberUomCode: 28,
      memberUomEn: 'Acres',
      memberUomFr: 'Acres',
    },
    {
      memberUomCode: 280,
      memberUomEn: 'Square kilometres',
      memberUomFr: 'Kilomètres carrés',
    },
    {
      memberUomCode: 281,
      memberUomEn: 'Square metres',
      memberUomFr: 'Mètres carrés',
    },
    {
      memberUomCode: 282,
      memberUomEn: 'Tapes',
      memberUomFr: 'Rubans',
    },
    {
      memberUomCode: 283,
      memberUomEn: 'Terajoules',
      memberUomFr: 'Térajoules',
    },
    {
      memberUomCode: 284,
      memberUomEn: 'Thousands of dollars',
      memberUomFr: 'Milliers de dollars',
    },
    {
      memberUomCode: 285,
      memberUomEn: 'Tonne-kilometres',
      memberUomFr: 'Tonnes-kilomètres',
    },
    {
      memberUomCode: 286,
      memberUomEn: 'Tonne-miles',
      memberUomFr: 'Tonne-mille',
    },
    {
      memberUomCode: 287,
      memberUomEn: 'Tonnes',
      memberUomFr: 'Tonnes',
    },
    {
      memberUomCode: 288,
      memberUomEn: 'Tonnes',
      memberUomFr: 'Tonnes métriques',
    },
    {
      memberUomCode: 289,
      memberUomEn: 'Tonnes of oil equivalent',
      memberUomFr: 'Équivalent des tonnes du pétrole',
    },
    {
      memberUomCode: 29,
      memberUomEn: 'Age-sex-standardized rate per 100,000 population',
      memberUomFr:
        "Taux normalisé selon l'âge et le sexe pour 100 000 personnes",
    },
    {
      memberUomCode: 290,
      memberUomEn: 'Tonnes per thousand current dollars of production',
      memberUomFr: 'Tonnes par millier de dollars courants de production',
    },
    {
      memberUomCode: 291,
      memberUomEn: 'Tons',
      memberUomFr: 'Tonnes',
    },
    {
      memberUomCode: 292,
      memberUomEn: 'Tons',
      memberUomFr: 'Tonnes impériales',
    },
    {
      memberUomCode: 293,
      memberUomEn: 'Tons per acre',
      memberUomFr: 'Tonnes par acre',
    },
    {
      memberUomCode: 294,
      memberUomEn: 'Troy ounces',
      memberUomFr: 'Onces troy',
    },
    {
      memberUomCode: 295,
      memberUomEn: 'Twenty feet equivalent units',
      memberUomFr: 'Unités équivalent à vingt pieds',
    },
    {
      memberUomCode: 296,
      memberUomEn: 'US dollars per unit of real GDP',
      memberUomFr: 'Dollars américains par unité de PIB réel',
    },
    {
      memberUomCode: 297,
      memberUomEn: 'United States Dollars',
      memberUomFr: 'Dollars des États-Unis',
    },
    {
      memberUomCode: 298,
      memberUomEn: 'United States dollars',
      memberUomFr: 'Dollars des États-Unis',
    },
    {
      memberUomCode: 299,
      memberUomEn: 'United States dollars per Canadian dollar',
      memberUomFr: 'Dollars États-Unis par dollar canadien',
    },
    {
      memberUomCode: 3,
      memberUomEn: '1986=100',
      memberUomFr: '1986=100',
    },
    {
      memberUomCode: 30,
      memberUomEn: 'Age-standardized rate per 100,000 population',
      memberUomFr: "Taux normalisé selon l'âge pour 100 000 personnes",
    },
    {
      memberUomCode: 300,
      memberUomEn: 'Units',
      memberUomFr: 'Unités',
    },
    {
      memberUomCode: 301,
      memberUomEn: 'Vehicle-kilometres',
      memberUomFr: 'Véhicule-kilomètres',
    },
    {
      memberUomCode: 302,
      memberUomEn: 'Vehicles',
      memberUomFr: 'Véhicules',
    },
    {
      memberUomCode: 303,
      memberUomEn: 'Weeks',
      memberUomFr: 'Semaines',
    },
    {
      memberUomCode: 304,
      memberUomEn: 'Weights',
      memberUomFr: 'Pondérations',
    },
    {
      memberUomCode: 305,
      memberUomEn: 'Weights, 1986=100',
      memberUomFr: 'Pondérations, 1986=100',
    },
    {
      memberUomCode: 306,
      memberUomEn: 'Weights, 1997=100',
      memberUomFr: 'Pondérations, 1997=100',
    },
    {
      memberUomCode: 307,
      memberUomEn: 'Women',
      memberUomFr: 'Femmes',
    },
    {
      memberUomCode: 308,
      memberUomEn: 'Years',
      memberUomFr: 'Années',
    },
    {
      memberUomCode: 309,
      memberUomEn: 'Dollars, 2002',
      memberUomFr: 'Dollars, 2002',
    },
    {
      memberUomCode: 31,
      memberUomEn: 'Agreements',
      memberUomFr: 'Conventions',
    },
    {
      memberUomCode: 310,
      memberUomEn: 'Micrograms per litre (µg/L)',
      memberUomFr: 'Microgrammes par litre (µg/L)',
    },
    {
      memberUomCode: 311,
      memberUomEn: 'Minutes per day',
      memberUomFr: 'Minutes par jour',
    },
    {
      memberUomCode: 312,
      memberUomEn: 'Nanograms per millilitre (ng/mL)',
      memberUomFr: 'Nanogrammes par millilitre (ng/mL)',
    },
    {
      memberUomCode: 313,
      memberUomEn: 'Nanomoles per litre (nmol/L)',
      memberUomFr: 'Nanomoles par litre (nmol/L)',
    },
    {
      memberUomCode: 314,
      memberUomEn: '2013 constant dollars',
      memberUomFr: 'Dollars constants de 2013',
    },
    {
      memberUomCode: 315,
      memberUomEn: 'Dollars per head',
      memberUomFr: 'Dollars par pomme',
    },
    {
      memberUomCode: 316,
      memberUomEn: 'Quarts',
      memberUomFr: 'Pintes',
    },
    {
      memberUomCode: 317,
      memberUomEn: 'Dollars per thousand cubic metres',
      memberUomFr: 'Dollars par millier de mètres cubes',
    },
    {
      memberUomCode: 318,
      memberUomEn: 'Litres per person per day',
      memberUomFr: 'Litres par personne par jour',
    },
    {
      memberUomCode: 319,
      memberUomEn: 'Twenty feet equivalent units ',
      memberUomFr: 'Unités équivalent à vingt pieds ',
    },
    {
      memberUomCode: 32,
      memberUomEn: 'Average hours per day',
      memberUomFr: 'Moyenne des heures par jour',
    },
    {
      memberUomCode: 320,
      memberUomEn: 'Gigajoules per thousand cubic metres',
      memberUomFr: 'Gigajoules par millier de mètres cubes',
    },
    {
      memberUomCode: 321,
      memberUomEn: '2007 chained dollars',
      memberUomFr: 'Dollars enchaînés 2007',
    },
    {
      memberUomCode: 322,
      memberUomEn: '2014 constant dollars',
      memberUomFr: 'Dollars constants de 2014',
    },
    {
      memberUomCode: 323,
      memberUomEn: 'Cubic kilometres',
      memberUomFr: 'Kilomètres cube',
    },
    {
      memberUomCode: 324,
      memberUomEn: '2015=100',
      memberUomFr: '2015=100',
    },
    {
      memberUomCode: 325,
      memberUomEn: 'Weight in carats',
      memberUomFr: 'Poids en carats',
    },
    {
      memberUomCode: 326,
      memberUomEn: 'Number of gross',
      memberUomFr: 'Nombre en grosses',
    },
    {
      memberUomCode: 327,
      memberUomEn: 'Volume in hectolitres',
      memberUomFr: 'Volume en hectolitres',
    },
    {
      memberUomCode: 328,
      memberUomEn: 'Weight in kilograms of named substance',
      memberUomFr: 'Poids en kilogrammes de la matière mentionnée',
    },
    {
      memberUomCode: 329,
      memberUomEn: 'Weight in air dry kilograms',
      memberUomFr: "Poids en kilogrammes séchés à l'air",
    },
    {
      memberUomCode: 33,
      memberUomEn: 'Bankruptcies',
      memberUomFr: 'Faillites',
    },
    {
      memberUomCode: 330,
      memberUomEn: 'Volume in litres of pure alcohol',
      memberUomFr: "Volume en litres d'alcool pur",
    },
    {
      memberUomCode: 331,
      memberUomEn: 'Volume in litres',
      memberUomFr: 'Volume en litres',
    },
    {
      memberUomCode: 332,
      memberUomEn: 'Area in square metres',
      memberUomFr: 'Superficie en mètres carrés',
    },
    {
      memberUomCode: 333,
      memberUomEn: 'Volume in cubic metres',
      memberUomFr: 'Volume en mètres cubes',
    },
    {
      memberUomCode: 334,
      memberUomEn: 'Length in metres',
      memberUomFr: 'Longueurs en mètres',
    },
    {
      memberUomCode: 335,
      memberUomEn: 'Megawatt-Hour',
      memberUomFr: 'Mégawattheure',
    },
    {
      memberUomCode: 336,
      memberUomEn: 'Number of packages',
      memberUomFr: 'Nombre de paquets',
    },
    {
      memberUomCode: 337,
      memberUomEn: 'Thousands of cubic metres',
      memberUomFr: 'Milliers de mètres cubes',
    },
    {
      memberUomCode: 338,
      memberUomEn: 'Weight in metric tonne',
      memberUomFr: 'Poids en tonne métrique',
    },
    {
      memberUomCode: 339,
      memberUomEn: 'Metric tonne air dry',
      memberUomFr: "Tonne métrique séchée à l'air",
    },
    {
      memberUomCode: 34,
      memberUomEn: 'Barrels',
      memberUomFr: 'Barils',
    },
    {
      memberUomCode: 340,
      memberUomEn: 'Number of dozens',
      memberUomFr: 'Nombre de douzaines',
    },
    {
      memberUomCode: 341,
      memberUomEn: 'Weight in grams',
      memberUomFr: 'Poids en grammes',
    },
    {
      memberUomCode: 342,
      memberUomEn: 'Weight in kilograms',
      memberUomFr: 'Poids en kilogrammes',
    },
    {
      memberUomCode: 343,
      memberUomEn: 'Blank',
      memberUomFr: 'Blanc',
    },
    {
      memberUomCode: 344,
      memberUomEn: 'Number of pairs',
      memberUomFr: 'Nombre de paires',
    },
    {
      memberUomCode: 345,
      memberUomEn: '2015 constant dollars',
      memberUomFr: 'Dollars constants de 2015',
    },
    {
      memberUomCode: 346,
      memberUomEn: '2014=100',
      memberUomFr: '2014=100',
    },
    {
      memberUomCode: 347,
      memberUomEn: 'Index, 201612=100',
      memberUomFr: 'Indice, 201612=100',
    },
    {
      memberUomCode: 348,
      memberUomEn: 'Index, 2012=100',
      memberUomFr: 'Indice, 2012=100',
    },
    {
      memberUomCode: 349,
      memberUomEn: 'Available seat-kilometres',
      memberUomFr: 'Sièges-kilomètres disponibles',
    },
    {
      memberUomCode: 35,
      memberUomEn: 'Barrels per day',
      memberUomFr: 'Barils par jour',
    },
    {
      memberUomCode: 350,
      memberUomEn: '2016 constant dollars',
      memberUomFr: 'Dollars constants de 2016',
    },
    {
      memberUomCode: 351,
      memberUomEn: 'Index, 2014=100',
      memberUomFr: 'Indice, 2014=100',
    },
    {
      memberUomCode: 352,
      memberUomEn: 'Nanograms per litre (ng/L)',
      memberUomFr: 'Nanogrammes par litre (ng/L)',
    },
    {
      memberUomCode: 353,
      memberUomEn: 'Micromoles per millimole (µmol/mmol)',
      memberUomFr: 'Micromoles par millimole (µmol/mmol)',
    },
    {
      memberUomCode: 354,
      memberUomEn: 'Micromoles per litre (µmol/L)',
      memberUomFr: 'Micromoles par litre (µmol/L)',
    },
    {
      memberUomCode: 355,
      memberUomEn: 'Milligrams per Litre (mg/L)',
      memberUomFr: 'Milligrammes par litre (mg/L)',
    },
    {
      memberUomCode: 356,
      memberUomEn: 'Micrograms per cubic metre (µg/m3)',
      memberUomFr: 'Microgrammes par mètre cube (µg/m3)',
    },
    {
      memberUomCode: 357,
      memberUomEn: 'M.ft.b.m',
      memberUomFr: 'Milliers de PMP',
    },
    {
      memberUomCode: 358,
      memberUomEn: 'Basis points',
      memberUomFr: 'Points de base',
    },
    {
      memberUomCode: 359,
      memberUomEn: 'Dollars per gram',
      memberUomFr: 'Dollars par gramme',
    },
    {
      memberUomCode: 36,
      memberUomEn: 'Benefit periods',
      memberUomFr: 'Périodes de prestations',
    },
    {
      memberUomCode: 360,
      memberUomEn: 'Centimetres',
      memberUomFr: 'Centimètres',
    },
    {
      memberUomCode: 361,
      memberUomEn: 'Kilograms per metre squared',
      memberUomFr: 'Kilogrammes par mètre carré',
    },
    {
      memberUomCode: 362,
      memberUomEn: 'Millilitres per kilogram per minute',
      memberUomFr: 'Millilitres par kilogramme par minute',
    },
    {
      memberUomCode: 363,
      memberUomEn: 'Millimetres of mercury',
      memberUomFr: 'Millimtres de mercure',
    },
    {
      memberUomCode: 364,
      memberUomEn: 'Beats per minute',
      memberUomFr: 'Battements par minute',
    },
    {
      memberUomCode: 365,
      memberUomEn: 'Grams per litre',
      memberUomFr: 'Grammes par litre',
    },
    {
      memberUomCode: 366,
      memberUomEn: 'Milimoles per litre',
      memberUomFr: 'Milimoles par litre',
    },
    {
      memberUomCode: 367,
      memberUomEn: 'Billions per litre',
      memberUomFr: 'Milliards par litre',
    },
    {
      memberUomCode: 368,
      memberUomEn: 'Picomoles per litre',
      memberUomFr: 'Picomoles par litre',
    },
    {
      memberUomCode: 369,
      memberUomEn: 'Milli-international units per litre',
      memberUomFr: 'Milli-units internationale par litre',
    },
    {
      memberUomCode: 37,
      memberUomEn: 'Birds',
      memberUomFr: 'Oiseaux',
    },
    {
      memberUomCode: 370,
      memberUomEn: 'Constant dollars',
      memberUomFr: 'Dollars constants',
    },
    {
      memberUomCode: 371,
      memberUomEn: 'Farms',
      memberUomFr: 'Fermes',
    },
    {
      memberUomCode: 372,
      memberUomEn: 'Farm operators',
      memberUomFr: 'Exploitants agricoles',
    },
    {
      memberUomCode: 373,
      memberUomEn: 'Index, 2017=100',
      memberUomFr: 'Indice, 2017=100',
    },
    {
      memberUomCode: 374,
      memberUomEn: 'Index, 2015=100',
      memberUomFr: 'Indice, 2015=100',
    },
    {
      memberUomCode: 375,
      memberUomEn: '1997 chained dollars',
      memberUomFr: 'En dollars enchaînés 1997',
    },
    {
      memberUomCode: 376,
      memberUomEn: 'Number, indices of change',
      memberUomFr: 'Nombre, indices de variation',
    },
    {
      memberUomCode: 377,
      memberUomEn: 'Per dollar of output',
      memberUomFr: 'Par dollar de production',
    },
    {
      memberUomCode: 378,
      memberUomEn: 'Per million dollars of output',
      memberUomFr: 'Par million de dollar de production',
    },
    {
      memberUomCode: 379,
      memberUomEn: 'Average years',
      memberUomFr: 'Moyenne des années',
    },
    {
      memberUomCode: 38,
      memberUomEn: 'Births',
      memberUomFr: 'Naissances',
    },
    {
      memberUomCode: 380,
      memberUomEn: 'Grams per day',
      memberUomFr: 'Grammes par jour',
    },
    {
      memberUomCode: 381,
      memberUomEn: '2012 chained dollars',
      memberUomFr: 'Dollars enchaînes 2012',
    },
    {
      memberUomCode: 382,
      memberUomEn: '2012 chained dollars per hour',
      memberUomFr: 'Dollars enchaînes 2012 par heure',
    },
    {
      memberUomCode: 383,
      memberUomEn: '2012=100',
      memberUomFr: '2012=100',
    },
    {
      memberUomCode: 384,
      memberUomEn: 'Units per litre',
      memberUomFr: 'Unités par litre',
    },
    {
      memberUomCode: 385,
      memberUomEn: 'Cents per dozen',
      memberUomFr: 'Cents par douzaine',
    },
    {
      memberUomCode: 386,
      memberUomEn: 'Index, 2016=100',
      memberUomFr: 'Indice, 2016=100',
    },
    {
      memberUomCode: 387,
      memberUomEn: '2017 constant dollars',
      memberUomFr: 'Dollars constants de 2017',
    },
    {
      memberUomCode: 388,
      memberUomEn: '201812=100',
      memberUomFr: '201812=100',
    },
    {
      memberUomCode: 389,
      memberUomEn: '2011 constant dollars',
      memberUomFr: 'Dollars constants de 2011',
    },
    {
      memberUomCode: 39,
      memberUomEn: 'Blocks',
      memberUomFr: 'Blocs',
    },
    {
      memberUomCode: 390,
      memberUomEn: '2018=100',
      memberUomFr: '2018=100',
    },
    {
      memberUomCode: 4,
      memberUomEn: '198812=100',
      memberUomFr: '198812=100',
    },
    {
      memberUomCode: 40,
      memberUomEn: 'Board feet',
      memberUomFr: 'Pied planche',
    },
    {
      memberUomCode: 41,
      memberUomEn: 'Bricks',
      memberUomFr: 'Briques',
    },
    {
      memberUomCode: 42,
      memberUomEn: 'Bushels',
      memberUomFr: 'Boisseaux',
    },
    {
      memberUomCode: 43,
      memberUomEn: 'Bushels per acre',
      memberUomFr: 'Boisseaux par acre',
    },
    {
      memberUomCode: 44,
      memberUomEn: 'Businesses',
      memberUomFr: 'Entreprises',
    },
    {
      memberUomCode: 45,
      memberUomEn: 'Calves',
      memberUomFr: 'Veaux',
    },
    {
      memberUomCode: 46,
      memberUomEn: 'Canada = 100',
      memberUomFr: 'Canada = 100',
    },
    {
      memberUomCode: 47,
      memberUomEn: 'Canadian dollars',
      memberUomFr: 'Dollars canadiens',
    },
    {
      memberUomCode: 48,
      memberUomEn: 'Canadian dollars per hundredweight',
      memberUomFr: 'Dollars canadiens par poids de cent livres',
    },
    {
      memberUomCode: 49,
      memberUomEn: 'Canadian dollars per unit of foreign currency',
      memberUomFr: 'Dollars canadiens par unité de devise étrangère',
    },
    {
      memberUomCode: 5,
      memberUomEn: '1992 constant dollars',
      memberUomFr: 'Dollars constants de 1992',
    },
    {
      memberUomCode: 50,
      memberUomEn: 'Carriers',
      memberUomFr: 'Transporteurs',
    },
    {
      memberUomCode: 51,
      memberUomEn: 'Cars',
      memberUomFr: 'Wagons',
    },
    {
      memberUomCode: 52,
      memberUomEn: 'Cassettes',
      memberUomFr: 'Cassettes',
    },
    {
      memberUomCode: 53,
      memberUomEn: 'Cattle',
      memberUomFr: 'Bovins',
    },
    {
      memberUomCode: 54,
      memberUomEn: 'Cent/dozen',
      memberUomFr: 'Cent/douzaine',
    },
    {
      memberUomCode: 55,
      memberUomEn: 'Cents',
      memberUomFr: 'Cents',
    },
    {
      memberUomCode: 56,
      memberUomEn: 'Cents per cubic metre',
      memberUomFr: 'Cents par mètre cube',
    },
    {
      memberUomCode: 57,
      memberUomEn: 'Cents per litre',
      memberUomFr: 'Cents par litre',
    },
    {
      memberUomCode: 58,
      memberUomEn: 'Cents per pound',
      memberUomFr: 'Cents par livre',
    },
    {
      memberUomCode: 59,
      memberUomEn: 'Cents per pound of butter fat',
      memberUomFr: 'Cents par livre de gras de beurre',
    },
    {
      memberUomCode: 6,
      memberUomEn: '1992 constant dollars per square kilometre',
      memberUomFr: 'Dollars constants de 1992 par kilomètre carré',
    },
    {
      memberUomCode: 60,
      memberUomEn: 'Chained (2002) dollars',
      memberUomFr: 'Dollars enchaînés (2002)',
    },
    {
      memberUomCode: 61,
      memberUomEn: 'Chained (2002) dollars per hour',
      memberUomFr: 'Dollars enchaînés (2002) par heure',
    },
    {
      memberUomCode: 62,
      memberUomEn: 'Chained (2007) dollars in thousands',
      memberUomFr: 'Dollars enchaînés (2007) en milliers',
    },
    {
      memberUomCode: 63,
      memberUomEn: 'Chained (2007) dollars per hour',
      memberUomFr: 'Dollars enchaînés (2007) par heure',
    },
    {
      memberUomCode: 64,
      memberUomEn: 'Chicks',
      memberUomFr: 'Poussins',
    },
    {
      memberUomCode: 65,
      memberUomEn: 'Children',
      memberUomFr: 'Enfants',
    },
    {
      memberUomCode: 66,
      memberUomEn: 'Cigarettes',
      memberUomFr: 'Cigarettes',
    },
    {
      memberUomCode: 67,
      memberUomEn: 'Cigars',
      memberUomFr: 'Cigars',
    },
    {
      memberUomCode: 68,
      memberUomEn: 'Claims',
      memberUomFr: 'Demandes',
    },
    {
      memberUomCode: 69,
      memberUomEn: 'Corporations',
      memberUomFr: 'Corporations',
    },
    {
      memberUomCode: 7,
      memberUomEn: '1992=100',
      memberUomFr: '1992=100',
    },
    {
      memberUomCode: 70,
      memberUomEn: 'Corporations',
      memberUomFr: 'Sociétés',
    },
    {
      memberUomCode: 71,
      memberUomEn: 'Crude rate per 100,000 population',
      memberUomFr: 'Taux brut pour 100 000 personnes',
    },
    {
      memberUomCode: 72,
      memberUomEn: 'Cubic metres',
      memberUomFr: 'Mètres cubes',
    },
    {
      memberUomCode: 73,
      memberUomEn: 'Cubic metres dry',
      memberUomFr: 'Mètres cubes sec',
    },
    {
      memberUomCode: 74,
      memberUomEn: 'Cubic yards',
      memberUomFr: 'Verges cubes',
    },
    {
      memberUomCode: 75,
      memberUomEn: 'Current dollars',
      memberUomFr: 'Dollars courants',
    },
    {
      memberUomCode: 76,
      memberUomEn: 'Customers',
      memberUomFr: 'Clients',
    },
    {
      memberUomCode: 77,
      memberUomEn: 'Days',
      memberUomFr: 'Jours',
    },
    {
      memberUomCode: 78,
      memberUomEn: 'Degrees Celsius',
      memberUomFr: 'Degrés Celsius',
    },
    {
      memberUomCode: 79,
      memberUomEn: 'Discs',
      memberUomFr: 'Disques',
    },
    {
      memberUomCode: 8,
      memberUomEn: '199412=100',
      memberUomFr: '199412=100',
    },
    {
      memberUomCode: 80,
      memberUomEn: 'Dollar per 100 pound',
      memberUomFr: 'Dollar par 100 livre',
    },
    {
      memberUomCode: 81,
      memberUomEn: 'Dollars',
      memberUomFr: 'Dollars',
    },
    {
      memberUomCode: 82,
      memberUomEn: 'Dollars per 1.81 kilograms',
      memberUomFr: 'Dollars par 1,81 kilogrammes',
    },
    {
      memberUomCode: 83,
      memberUomEn: 'Dollars per 10 kilograms',
      memberUomFr: 'Dollars par 10 kilogrammes',
    },
    {
      memberUomCode: 84,
      memberUomEn: 'Dollars per 10 litres',
      memberUomFr: 'Dollars par 10 litres',
    },
    {
      memberUomCode: 85,
      memberUomEn: 'Dollars per 10 x 400 grams',
      memberUomFr: 'Dollars par 10 x 400 grammes',
    },
    {
      memberUomCode: 86,
      memberUomEn: 'Dollars per 10,000 feet',
      memberUomFr: 'Dollars par 10 000 pieds',
    },
    {
      memberUomCode: 87,
      memberUomEn: 'Dollars per 15 kilograms',
      memberUomFr: 'Dollars par 15 kilogrammes',
    },
    {
      memberUomCode: 88,
      memberUomEn: 'Dollars per 2 kilograms',
      memberUomFr: 'Dollars par 2 kilogrammes',
    },
    {
      memberUomCode: 888,
      memberUomEn: 'Null',
      memberUomFr: 'Nul',
    },
    {
      memberUomCode: 89,
      memberUomEn: 'Dollars per 2.5 kilograms',
      memberUomFr: 'Dollars par 2,5 kilogrammes',
    },
    {
      memberUomCode: 9,
      memberUomEn: '1996=100',
      memberUomFr: '1996=100',
    },
    {
      memberUomCode: 90,
      memberUomEn: 'Dollars per 20 kilograms',
      memberUomFr: 'Dollars par 20 kilogrammes',
    },
    {
      memberUomCode: 91,
      memberUomEn: 'Dollars per 20 litres',
      memberUomFr: 'Dollars par 20 litres',
    },
    {
      memberUomCode: 92,
      memberUomEn: 'Dollars per 205 litres',
      memberUomFr: 'Dollars par 205 litres',
    },
    {
      memberUomCode: 93,
      memberUomEn: 'Dollars per 22.7 litres',
      memberUomFr: 'Dollars par 22,7 litres',
    },
    {
      memberUomCode: 94,
      memberUomEn: 'Dollars per 25 kilograms',
      memberUomFr: 'Dollars par 25 kilogrammes',
    },
    {
      memberUomCode: 95,
      memberUomEn: 'Dollars per 3 kilograms',
      memberUomFr: 'Dollars par 3 kilogrammes',
    },
    {
      memberUomCode: 96,
      memberUomEn: 'Dollars per 3.3 litres',
      memberUomFr: 'Dollars par 3,3 litres',
    },
    {
      memberUomCode: 97,
      memberUomEn: 'Dollars per 4 litres',
      memberUomFr: 'Dollars par 4 litres',
    },
    {
      memberUomCode: 98,
      memberUomEn: 'Dollars per 4.45 litres',
      memberUomFr: 'Dollars par 4,45 litres',
    },
    {
      memberUomCode: 99,
      memberUomEn: 'Dollars per 5 litres',
      memberUomFr: 'Dollars par 5 litres',
    },
  ],
  survey: [
    {
      surveyCode: '1105',
      surveyEn: 'Business Register',
      surveyFr: 'Registre des entreprises',
    },
    {
      surveyCode: '1141',
      surveyEn:
        'Average Fair Market Value/Purchase Price for New Homes in Canada - Data from GST Administrative Records',
      surveyFr:
        "Juste valeur marchande/prix d'achat pour les habitations neuves au Canada - données produites à partir des dossiers administratifs de la TPS",
    },
    {
      surveyCode: '1209',
      surveyEn: 'Survey of Environmental Goods and Services',
      surveyFr: 'Enquête sur les biens et services environnementaux',
    },
    {
      surveyCode: '1301',
      surveyEn: 'Gross Domestic Product by Industry - National (Monthly)',
      surveyFr: 'Produit intérieur brut par industrie - National (mensuel)',
    },
    {
      surveyCode: '1302',
      surveyEn: 'Gross Domestic Product by Industry - Annual',
      surveyFr: 'Produit intérieur brut par industrie - annuelle',
    },
    {
      surveyCode: '1303',
      surveyEn:
        'Gross Domestic Product by Industry - Provincial and Territorial (Annual)',
      surveyFr:
        'Produit intérieur brut par industrie - Provinces et territoires (annuel)',
    },
    {
      surveyCode: '1401',
      surveyEn: 'Supply, Use and Input-Output Tables',
      surveyFr: 'Tableaux des ressources, des emplois et des entrées-sorties',
    },
    {
      surveyCode: '1402',
      surveyEn:
        'Productivity Measures and Related Variables - National and Provincial (Annual)',
      surveyFr:
        'Mesures de la productivité et des variables connexes - National et provincial (annuelles)',
    },
    {
      surveyCode: '1528',
      surveyEn: 'Transactions of Foreign Airlines with Residents of Canada',
      surveyFr:
        'Opérations des lignes aériennes étrangères avec les résidents du Canada',
    },
    {
      surveyCode: '1529',
      surveyEn: 'Capital Invested Abroad by Canadian Enterprises',
      surveyFr:
        "Capitaux investis à l'étranger par les entreprises canadiennes",
    },
    {
      surveyCode: '1530',
      surveyEn:
        'Capital Invested in secondary foreign companies by Canadian Enterprises',
      surveyFr:
        'Capitaux investis dans les sociétés étrangères au deuxième degré par les entreprises canadiennes',
    },
    {
      surveyCode: '1531',
      surveyEn: 'Canadian Investment in Non-Canadian Corporations (BP-60)',
      surveyFr:
        'Investissements canadiens dans des sociétés non canadiennes (BP-60)',
    },
    {
      surveyCode: '1532',
      surveyEn: 'Investment in Canada of Non-Canadian Partnerships',
      surveyFr:
        'Investissement au Canada des sociétés étrangères en nom collectif',
    },
    {
      surveyCode: '1533',
      surveyEn: 'Quarterly International Transactions in Commercial Services',
      surveyFr:
        'Opérations internationales trimestrielles de services commerciaux',
    },
    {
      surveyCode: '1534',
      surveyEn: "Canada's Balance of International Payments",
      surveyFr: 'Balance des paiements internationaux du Canada',
    },
    {
      surveyCode: '1535',
      surveyEn: "Canada's International Transactions in Securities",
      surveyFr: 'Opérations internationales du Canada en valeurs mobilières',
    },
    {
      surveyCode: '1536',
      surveyEn: "Canada's International Transactions in Services",
      surveyFr: 'Transactions internationales de services du Canada',
    },
    {
      surveyCode: '1537',
      surveyEn: "Canada's International Investment Position",
      surveyFr: 'Bilan des investissements internationaux du Canada',
    },
    {
      surveyCode: '1538',
      surveyEn: 'Canadian Portfolio Investment Abroad (BP-54)',
      surveyFr:
        "Investissement de portefeuille des Canadiens à l'étranger (BP-54F)",
    },
    {
      surveyCode: '1539',
      surveyEn: 'Activities of Canadian Majority-Owned Affiliates Abroad',
      surveyFr:
        "Activités à l'étranger des sociétés affiliées à participation majoritaire canadienne",
    },
    {
      surveyCode: '1601',
      surveyEn: 'Canadian Composite Leading Indicator',
      surveyFr: 'Indicateur avancé composite du Canada',
    },
    {
      surveyCode: '1651',
      surveyEn:
        'Survey of Advanced Technology in the Canadian Food Processing Industry',
      surveyFr:
        "Enquête sur les technologies de pointe dans l'industrie alimentaire canadienne",
    },
    {
      surveyCode: '1702',
      surveyEn: 'Local Government Assets and Liabilities',
      surveyFr: 'Actif et passif des administrations locales',
    },
    {
      surveyCode: '1709',
      surveyEn: 'Consolidated Government Financial Assets and Liabilities',
      surveyFr:
        'Actifs et passifs financiers consolidés des administrations publiques',
    },
    {
      surveyCode: '1711',
      surveyEn: 'Federal Provincial Fiscal Arrangements Program',
      surveyFr: 'Programme des accords fiscaux fédéraux-provinciaux',
    },
    {
      surveyCode: '1713',
      surveyEn: 'Public Sector Employment',
      surveyFr: 'Emploi dans le secteur public',
    },
    {
      surveyCode: '1720',
      surveyEn:
        'Provincial Government Revenue and Expenditure - Estimates and Actual Data',
      surveyFr:
        'Recettes et dépenses des administrations provinciales - estimations et données réelles',
    },
    {
      surveyCode: '1723',
      surveyEn:
        'Provincial Government Assets, Liabilities, Sources and Application of Funds',
      surveyFr:
        'Actif, passif, provenance et utilisation des fonds des gouvernements provinciaux',
    },
    {
      surveyCode: '1725',
      surveyEn: 'Provincial Government Business Enterprise Finance',
      surveyFr: 'Finances des entreprises publiques provinciales',
    },
    {
      surveyCode: '1726',
      surveyEn: 'Control and Sale of Alcoholic Beverages in Canada',
      surveyFr: 'Contrôle et vente des boissons alcoolisées au Canada',
    },
    {
      surveyCode: '1728',
      surveyEn:
        'Provincial and Territorial Government Employment and Payroll Survey',
      surveyFr:
        "Enquête sur l'emploi et rémunération des administrations publiques provinciales et territoriales",
    },
    {
      surveyCode: '1730',
      surveyEn: 'Finances of Government Business Enterprises',
      surveyFr: 'Finances des entreprises publiques',
    },
    {
      surveyCode: '1731',
      surveyEn:
        'Local Government Revenue and Expenditure - Financial Management System Basis - Actual Data',
      surveyFr:
        'Recettes et dépenses des administrations locales - Système de la gestion financière - chiffres réels',
    },
    {
      surveyCode: '1732',
      surveyEn:
        'Local Government Revenue and Expenditure - Financial Management System Basis - Preliminary Data',
      surveyFr:
        'Recettes et dépenses des administrations locales - Système de gestion financière - Chiffres provisoires',
    },
    {
      surveyCode: '1735',
      surveyEn: 'Consolidated Government Revenue and Expenditures',
      surveyFr:
        'Recettes et dépenses consolidées des administrations publiques',
    },
    {
      surveyCode: '1736',
      surveyEn: 'Waste Management Industry Survey: Government Sector',
      surveyFr:
        "Enquête sur l'industrie de la gestion des déchets: secteur des administrations publiques",
    },
    {
      surveyCode: '1739',
      surveyEn:
        'Local Government Revenue and Expenditure - Financial Management System Basis - Estimates Data',
      surveyFr:
        'Recettes et dépenses des administrations locales - Système de gestion financière - prévisions',
    },
    {
      surveyCode: '1803',
      surveyEn: 'Official Canadian Government Travel Survey',
      surveyFr: 'Enquête officielle du gouvernement canadien sur les voyages',
    },
    {
      surveyCode: '1804',
      surveyEn: 'Financial Flow Accounts',
      surveyFr: 'Comptes des flux financiers',
    },
    {
      surveyCode: '1806',
      surveyEn: 'National Balance Sheet Accounts',
      surveyFr: 'Comptes du bilan national',
    },
    {
      surveyCode: '1901',
      surveyEn:
        'National Gross Domestic Product by Income and by Expenditure Accounts',
      surveyFr:
        'Comptes nationaux du produit intérieur brut en termes de revenus et de dépenses',
    },
    {
      surveyCode: '1902',
      surveyEn:
        'Provincial and Territorial Gross Domestic Product by Income and by Expenditure Accounts',
      surveyFr:
        'Comptes provinciaux et territoriaux du produit intérieur brut en termes de revenus et de dépenses',
    },
    {
      surveyCode: '1903',
      surveyEn: 'Biennial Environmental Protection Expenditures Survey',
      surveyFr:
        "Enquête biennale sur les dépenses de protection de l'environnement",
    },
    {
      surveyCode: '1910',
      surveyEn: 'National Tourism Indicators',
      surveyFr: 'Indicateurs nationaux du tourisme',
    },
    {
      surveyCode: '2001',
      surveyEn: 'Electric Utility Financial Report Annual',
      surveyFr: "Rapport financier des services d'électricité annuel",
    },
    {
      surveyCode: '2003',
      surveyEn: 'Monthly Coke Supply and Disposition Survey',
      surveyFr:
        "Enquête mensuelle sur l'approvisionnement et l'écoulement du coke",
    },
    {
      surveyCode: '2008',
      surveyEn: 'Retail Commodity Survey',
      surveyFr: 'Enquête sur les marchandises vendues au détail',
    },
    {
      surveyCode: '2009',
      surveyEn: 'Waste Management Industry Survey: Business Sector',
      surveyFr:
        "Enquête sur l'industrie de la gestion des déchets: secteur des entreprises",
    },
    {
      surveyCode: '2014',
      surveyEn:
        'Contract Drilling and Services to Oil and Gas Extraction Industry',
      surveyFr:
        "Forage à forfait et services relatifs à l'industrie de l'extraction du pétrole et du gaz",
    },
    {
      surveyCode: '2101',
      surveyEn: 'Monthly Survey of Manufacturing',
      surveyFr: 'Enquête mensuelle sur les industries manufacturières',
    },
    {
      surveyCode: '2103',
      surveyEn: 'Annual Survey of Manufacturing and Logging Industries',
      surveyFr:
        "Enquête annuelle sur les industries manufacturières et de l'exploitation forestière",
    },
    {
      surveyCode: '2105',
      surveyEn: 'Steel Pipe and Tubing',
      surveyFr: 'Tuyaux et tubes en acier',
    },
    {
      surveyCode: '2106',
      surveyEn: 'Steel Wire and Specified Wire Products',
      surveyFr: "Fil d'acier et certains produits de fil métallique",
    },
    {
      surveyCode: '2107',
      surveyEn: 'Annual Survey of Forestry',
      surveyFr: 'Enquête annuelle de la foresterie',
    },
    {
      surveyCode: '2108',
      surveyEn: 'Sales of Paints, Varnishes and Lacquers',
      surveyFr: 'Ventes de peintures, vernis et laqués',
    },
    {
      surveyCode: '2109',
      surveyEn: 'Gypsum Products',
      surveyFr: 'Produits de gypse',
    },
    {
      surveyCode: '2110',
      surveyEn: 'Mineral Wool Including Fibrous Glass Insulation',
      surveyFr: 'Laine minérale y compris les isolants en fibre de verre',
    },
    {
      surveyCode: '2112',
      surveyEn: 'Production, Sales and Stocks of Major Appliances',
      surveyFr: "Productions, ventes et stocks d'appareils ménagers",
    },
    {
      surveyCode: '2113',
      surveyEn: 'Domestic Washing Machines and Clothes Dryers',
      surveyFr: 'Machines à laver et sécheuses à linge',
    },
    {
      surveyCode: '2114',
      surveyEn: 'Domestic Electrical Appliances',
      surveyFr: 'Appareils électriques ménagers',
    },
    {
      surveyCode: '2115',
      surveyEn: 'Pig Iron',
      surveyFr: 'Fonte en gueuses',
    },
    {
      surveyCode: '2116',
      surveyEn: 'Steel Primary Forms, Steel Castings and Pig Iron',
      surveyFr: "Acier formes primaires, moulages d'acier et fonte en gueuses",
    },
    {
      surveyCode: '2117',
      surveyEn: 'Electric Lamps (Light Sources)',
      surveyFr: 'Lampes électriques (sources de lumière)',
    },
    {
      surveyCode: '2118',
      surveyEn: 'Annual Production of Soft Drinks',
      surveyFr: 'Production annuelle de boissons gazeuses',
    },
    {
      surveyCode: '2119',
      surveyEn: 'Footwear Statistics',
      surveyFr: 'Statistique de la chaussure',
    },
    {
      surveyCode: '2121',
      surveyEn: 'Oils and Fats',
      surveyFr: 'Huiles et matières grasses',
    },
    {
      surveyCode: '2122',
      surveyEn: 'Hardboard',
      surveyFr: 'Panneaux pressés',
    },
    {
      surveyCode: '2123',
      surveyEn: 'Asphalt Roofing',
      surveyFr: 'Papier-toiture asphalté',
    },
    {
      surveyCode: '2124',
      surveyEn: 'Rigid Insulating Board',
      surveyFr: 'Panneaux isolants rigides',
    },
    {
      surveyCode: '2125',
      surveyEn: 'Floor Tiles',
      surveyFr: 'Carreaux et dalles de parquet',
    },
    {
      surveyCode: '2126',
      surveyEn: 'Process Cheese',
      surveyFr: 'Fromage fondu',
    },
    {
      surveyCode: '2130',
      surveyEn:
        'Production and Sales of Phonograph Records and Pre-Recorded Tapes in Canada',
      surveyFr:
        'Production et ventes de disques de phonographe et de rubans pré-enregistrés au Canada',
    },
    {
      surveyCode: '2131',
      surveyEn: 'Steel Primary Forms Weekly',
      surveyFr: 'Acier en formes primaires (hebdomadaire)',
    },
    {
      surveyCode: '2134',
      surveyEn: 'Sawmills',
      surveyFr: 'Scieries',
    },
    {
      surveyCode: '2135',
      surveyEn:
        'Production, Shipments and Stocks on Hand of Sawmills in British Columbia',
      surveyFr:
        'Production, livraisons et stocks en mains des scieries en Colombie-Britannique',
    },
    {
      surveyCode: '2136',
      surveyEn: 'Pulpwood and Wood Residue',
      surveyFr: 'Bois à pâte et déchets de bois',
    },
    {
      surveyCode: '2138',
      surveyEn: 'Construction Type Plywood',
      surveyFr: 'Contreplaqués de construction',
    },
    {
      surveyCode: '2140',
      surveyEn: 'Cement Survey',
      surveyFr: 'Enquête de ciment',
    },
    {
      surveyCode: '2141',
      surveyEn: 'Particleboard, Oriented Strandboard and Fibreboard',
      surveyFr: 'Panneaux de particules, de lamelles orientées et de fibres',
    },
    {
      surveyCode: '2142',
      surveyEn: 'Production and Disposition of Tobacco Products',
      surveyFr: 'Production et écoulement des produits du tabac',
    },
    {
      surveyCode: '2143',
      surveyEn: 'Sugar - Situation',
      surveyFr: 'Situation - sucre',
    },
    {
      surveyCode: '2147',
      surveyEn: 'Monthly Coal Supply and Disposition Survey',
      surveyFr:
        "Enquête mensuelle sur l'approvisionnement et l'écoulement du charbon",
    },
    {
      surveyCode: '2148',
      surveyEn:
        'Monthly Oil and Other Liquid Petroleum Products Pipeline Survey',
      surveyFr:
        'Enquête mensuelle sur le transport par oléoduc de pétrole brut et autres produits pétroliers liquides',
    },
    {
      surveyCode: '2149',
      surveyEn: 'Monthly Natural Gas Transmission Survey',
      surveyFr: 'Enquête mensuelle sur le transport du gaz naturel',
    },
    {
      surveyCode: '2150',
      surveyEn: 'Monthly Refined Petroleum Products',
      surveyFr: 'Produits pétroliers raffinés (rapport mensuel)',
    },
    {
      surveyCode: '2151',
      surveyEn: 'Monthly Electricity Supply and Disposition Survey',
      surveyFr:
        "Enquête mensuelle sur l'approvisionnement et l'écoulement de l'électricité",
    },
    {
      surveyCode: '2152',
      surveyEn: 'Business Conditions Survey for the Manufacturing Industries',
      surveyFr:
        'Enquête sur les perspectives  du monde des affaires pour les industries manufacturières',
    },
    {
      surveyCode: '2154',
      surveyEn: 'Production of Selected Biscuits',
      surveyFr: 'Production de certains biscuits',
    },
    {
      surveyCode: '2156',
      surveyEn: 'Tea and Coffee',
      surveyFr: 'Thé et café',
    },
    {
      surveyCode: '2161',
      surveyEn: 'Semi-annual Shipments of Office Furniture Products',
      surveyFr: 'Livraisons semestrielles des produits de meubles de bureau',
    },
    {
      surveyCode: '2166',
      surveyEn: 'Quarterly Industrial Consumption of Energy Survey',
      surveyFr:
        "Enquête trimestrielle sur la consommation industrielle d'énergie",
    },
    {
      surveyCode: '2167',
      surveyEn: 'Annual End-Use of Natural Gas Survey',
      surveyFr: "Enquête annuelle sur l'utilisation finale du gaz naturel",
    },
    {
      surveyCode: '2168',
      surveyEn: 'Annual Survey on End-Use of Refined Petroleum Products',
      surveyFr:
        "Enquête annuelle sur l'utilisation finale des produits pétroliers raffinés",
    },
    {
      surveyCode: '2177',
      surveyEn: 'Coal Mines Annual',
      surveyFr: 'Mines de charbon annuel',
    },
    {
      surveyCode: '2178',
      surveyEn: 'Annual Oil and Gas Extraction Survey',
      surveyFr: "Enquête annuelle sur l'extraction de pétrole et de gaz",
    },
    {
      surveyCode: '2179',
      surveyEn: 'Oil Pipeline Annual',
      surveyFr: 'Enquête annuelle des oléoducs',
    },
    {
      surveyCode: '2180',
      surveyEn: 'Natural Gas Transport and Distribution Annual',
      surveyFr: 'Transport et distribution de gaz naturel annuel',
    },
    {
      surveyCode: '2181',
      surveyEn: 'Electric Power Capability and Load',
      surveyFr: "Puissance électrique et d'électricité",
    },
    {
      surveyCode: '2183',
      surveyEn: 'Industrial Chemicals and Synthetic Resins',
      surveyFr: 'Produits chimiques industriels et résines synthétiques',
    },
    {
      surveyCode: '2184',
      surveyEn: 'Disposition of Shipments of Ingots and Rolled Steel Products',
      surveyFr: "Écoulement des livraisons de lingots et de laminages d'acier",
    },
    {
      surveyCode: '2187',
      surveyEn: 'Confectionery',
      surveyFr: 'Confiserie',
    },
    {
      surveyCode: '2189',
      surveyEn: 'Shipments of Solid Fuel Burning Heating Products',
      surveyFr: 'Livraisons des produits de chauffage à combustible solide',
    },
    {
      surveyCode: '2191',
      surveyEn: 'Monthly Oil Pipeline Statement',
      surveyFr: "État mensuel des résultats d'exploitation",
    },
    {
      surveyCode: '2192',
      surveyEn: 'Factory Shipments of High Pressure Decorative Laminate Sheet',
      surveyFr:
        'Livraisons départ usine de feuilles ornementales stratifiées sous haute pression',
    },
    {
      surveyCode: '2193',
      surveyEn: 'Annual Electric Power Generating Stations Survey',
      surveyFr: "Enquête annuelle sur les centrales d'énergie électrique",
    },
    {
      surveyCode: '2194',
      surveyEn: 'Annual Electricity Supply and Disposition Survey',
      surveyFr:
        "Enquête annuelle sur l'approvisionnement et l'écoulement de l'électricité",
    },
    {
      surveyCode: '2196',
      surveyEn:
        'Annual Survey of Electric Power Thermal Generating Station Fuel Consumption',
      surveyFr:
        "Enquête annuelle sur la consommation de combustibles de centrales thermiques d'énergie électrique",
    },
    {
      surveyCode: '2198',
      surveyEn: 'Crude Oil and Natural Gas',
      surveyFr: 'Pétrole brut et gaz naturel',
    },
    {
      surveyCode: '2201',
      surveyEn: 'Canadian International Merchandise Trade (Customs Basis)',
      surveyFr:
        'Commerce international de marchandises du Canada (base douanière)',
    },
    {
      surveyCode: '2202',
      surveyEn:
        'Canadian International Merchandise Trade (Balance of Payments Basis)',
      surveyFr:
        'Commerce international de marchandises du Canada (base de la balance de paiements)',
    },
    {
      surveyCode: '2203',
      surveyEn: 'International Merchandise Trade Price Index',
      surveyFr: 'Indice des prix du commerce international de marchandises',
    },
    {
      surveyCode: '2301',
      surveyEn: 'Consumer Price Index',
      surveyFr: 'Indice des prix à la consommation',
    },
    {
      surveyCode: '2303',
      surveyEn: 'Precast Concrete Price Indexes',
      surveyFr: 'Indices des prix du béton préfabriqué',
    },
    {
      surveyCode: '2304',
      surveyEn: 'Fabricated Structural Steel Price Indexes',
      surveyFr: "Indices des prix de l'acier de charpente semi-ouvré",
    },
    {
      surveyCode: '2305',
      surveyEn: 'Farm Input Price Index',
      surveyFr: "Indice des prix des entrées dans l'agriculture",
    },
    {
      surveyCode: '2306',
      surveyEn: 'Raw Materials Price Index',
      surveyFr: 'Indice des prix des matières brutes',
    },
    {
      surveyCode: '2307',
      surveyEn: 'Construction Union Wage Rate Index',
      surveyFr: 'Indice des taux de salaires syndicaux dans la construction',
    },
    {
      surveyCode: '2308',
      surveyEn: 'Residential Building Construction Input Price Indexes',
      surveyFr:
        'Indices des prix des entrées dans la construction résidentielle',
    },
    {
      surveyCode: '2310',
      surveyEn: 'New Housing Price Index',
      surveyFr: 'Indice des prix des logements neufs',
    },
    {
      surveyCode: '2311',
      surveyEn: 'Highway Construction Price Indexes',
      surveyFr: 'Indices des prix de la construction routière',
    },
    {
      surveyCode: '2312',
      surveyEn: 'Machinery and Equipment Price Index',
      surveyFr: 'Indice des prix des machines et du matériel',
    },
    {
      surveyCode: '2314',
      surveyEn: 'Chemical and Mineral Process Plant Price Indexes',
      surveyFr:
        'Indices des prix des installations de traitement des produits chimiques et minéraux',
    },
    {
      surveyCode: '2315',
      surveyEn: 'Chemical and Petrochemical Process Plant Price Index',
      surveyFr:
        'Indices des prix des installations de traitement des produits chimiques et pétrochimiques',
    },
    {
      surveyCode: '2316',
      surveyEn: 'Electric Utility Construction Price Index',
      surveyFr:
        "Indice des prix à la construction dans les services d'électricité",
    },
    {
      surveyCode: '2317',
      surveyEn: 'Building Construction Price Index',
      surveyFr: 'Indice des prix de la construction de bâtiments',
    },
    {
      surveyCode: '2318',
      surveyEn: 'Industrial Product Price Index',
      surveyFr: 'Indice des prix des produits industriels',
    },
    {
      surveyCode: '2319',
      surveyEn: 'Telecommunications Plant Price Index',
      surveyFr: 'Indice des prix des installations de télécommunications',
    },
    {
      surveyCode: '2321',
      surveyEn:
        'Isolated Posts Allowance Indexes (Living Cost Differential Indexes)',
      surveyFr:
        "Indices sur les postes isolés (Indices d'indemnité de vie chère)",
    },
    {
      surveyCode: '2322',
      surveyEn: 'Canadian Foreign Post Indexes',
      surveyFr: "Indices de missions canadiennes à l'étranger",
    },
    {
      surveyCode: '2324',
      surveyEn: 'Construction Building Materials Price Index',
      surveyFr: 'Indice des prix des matériaux de la construction',
    },
    {
      surveyCode: '2325',
      surveyEn:
        'Electric Power Selling Price Indexes for Non-residential Customers',
      surveyFr:
        "Indices des prix de vente de l'énergie électrique pour les acheteurs non résidentiels",
    },
    {
      surveyCode: '2328',
      surveyEn: 'Consulting Engineering Services Price Index',
      surveyFr: "Indice des prix des services d'ingénierie conseil",
    },
    {
      surveyCode: '2329',
      surveyEn: 'Selected Financial Indexes',
      surveyFr: 'Certains indices financiers',
    },
    {
      surveyCode: '2330',
      surveyEn: 'Apartment Building Construction Price Index',
      surveyFr: "Indice des prix de construction d'immeubles d'appartements",
    },
    {
      surveyCode: '2333',
      surveyEn: 'Informatics Professional Services Price Indexes',
      surveyFr: 'Indices des prix des services professionnels en informatique',
    },
    {
      surveyCode: '2334',
      surveyEn: 'Accounting Services Price Index',
      surveyFr: 'Indice de prix des services de comptabilité',
    },
    {
      surveyCode: '2336',
      surveyEn: 'Traveller Accommodation Services Price Index',
      surveyFr: "Indice des prix des services d'hébergement des voyageurs",
    },
    {
      surveyCode: '2401',
      surveyEn: 'Monthly Wholesale Trade Survey',
      surveyFr: 'Enquête mensuelle sur le commerce de gros',
    },
    {
      surveyCode: '2402',
      surveyEn: 'Monthly New Motor Vehicle Sales Survey',
      surveyFr:
        'Enquête mensuelle sur les ventes de véhicules automobiles neufs',
    },
    {
      surveyCode: '2404',
      surveyEn: 'Vending Machine Operators',
      surveyFr: 'Exploitants de distributeurs automatiques',
    },
    {
      surveyCode: '2405',
      surveyEn: 'Direct Selling in Canada',
      surveyFr: 'Vente directe au Canada',
    },
    {
      surveyCode: '2406',
      surveyEn: 'Retail Trade Survey (Monthly)',
      surveyFr: 'Enquête sur le commerce de détail (mensuelle)',
    },
    {
      surveyCode: '2408',
      surveyEn: 'Monthly Retail Trade Survey (Department Store Organizations)',
      surveyFr:
        'Enquête mensuelle sur le commerce de détail - Organismes des grands magasins',
    },
    {
      surveyCode: '2409',
      surveyEn: 'Retail Chains and Department Stores',
      surveyFr: 'Magasins de détail à succursales et les grands magasins',
    },
    {
      surveyCode: '2410',
      surveyEn:
        'Annual Survey of Service Industries: Software Development and Computer Services',
      surveyFr:
        'Enquête annuelle sur les industries de services : développement de logiciels et services informatiques',
    },
    {
      surveyCode: '2413',
      surveyEn:
        'Survey of Service Industries: Film, Television and Video Production',
      surveyFr:
        'Enquête sur les industries de services : production cinématographique, télévisuelle et vidéo',
    },
    {
      surveyCode: '2414',
      surveyEn: 'Survey of Service Industries: Film and Video Distribution',
      surveyFr:
        'Enquête sur les industries de services : distribution de films cinématographiques et de vidéos',
    },
    {
      surveyCode: '2415',
      surveyEn:
        'Survey of Service Industries: Film, Television and Video Post-production',
      surveyFr:
        'Enquête sur les industries de services : postproduction cinématographique, télévisuelle et vidéo',
    },
    {
      surveyCode: '2416',
      surveyEn: 'Survey of Service Industries: Motion Picture Theatres',
      surveyFr: 'Enquête sur les industries de services : cinémas',
    },
    {
      surveyCode: '2418',
      surveyEn: 'Annual Survey of Service Industries: Accommodation Services',
      surveyFr:
        "Enquête annuelle sur les industries de services : services d'hébergement",
    },
    {
      surveyCode: '2419',
      surveyEn: 'Monthly Survey of Food Services and Drinking Places',
      surveyFr:
        'Enquête mensuelle sur les services de restauration et débits de boissons',
    },
    {
      surveyCode: '2420',
      surveyEn: 'Annual Survey of Service Industries: Architectural Services',
      surveyFr:
        "Enquête annuelle sur les industries de services : services d'architecture",
    },
    {
      surveyCode: '2422',
      surveyEn: 'Retail Trade Survey (Annual)',
      surveyFr: 'Enquête sur le commerce de détail (annuelle)',
    },
    {
      surveyCode: '2423',
      surveyEn:
        'Annual Survey of Service Industries: Travel Arrangement Services',
      surveyFr:
        'Enquête annuelle sur les industries de services : services de préparation de voyages',
    },
    {
      surveyCode: '2424',
      surveyEn: 'Annual Survey of Service Industries:  Personal Services',
      surveyFr:
        'Enquête annuelle sur les industries de services :  services personnels',
    },
    {
      surveyCode: '2425',
      surveyEn: 'Annual Survey of Service Industries: Amusement and Recreation',
      surveyFr:
        'Enquête annuelle sur les industries de services : divertissement et loisirs',
    },
    {
      surveyCode: '2430',
      surveyEn: 'Annual Survey of Professional Accountants',
      surveyFr: 'Enquête annuelle auprès des comptables professionnels',
    },
    {
      surveyCode: '2433',
      surveyEn: 'Annual Retail and Wholesale Trade Survey',
      surveyFr: 'Enquête annuelle sur le commerce de gros et détail',
    },
    {
      surveyCode: '2434',
      surveyEn: 'Annual Survey of Service Industries: Consumer Goods Rental',
      surveyFr:
        'Enquête annuelle sur les industries de services : location de biens de consommation',
    },
    {
      surveyCode: '2435',
      surveyEn: 'Annual Survey of Services to Buildings and Dwellings',
      surveyFr:
        'Enquête annuelle sur le secteur des services relatifs aux bâtiments et aux logements',
    },
    {
      surveyCode: '2436',
      surveyEn: 'Annual Survey of Investigation and Security Services',
      surveyFr:
        "Enquête annuelle sur le secteur des services d'enquêtes et de securité",
    },
    {
      surveyCode: '2437',
      surveyEn:
        'Annual Survey of Service Industries: Advertising and Related Services',
      surveyFr:
        'Enquête annuelle sur les industries de services: publicité et services connexes',
    },
    {
      surveyCode: '2439',
      surveyEn: 'Annual Survey of Service Industries: Engineering Services',
      surveyFr:
        'Enquête annuelle sur les industries de services : services de génie',
    },
    {
      surveyCode: '2441',
      surveyEn:
        'Annual Survey of Service Industries: Commercial and Industrial Machinery and Equipment Rental and Leasing',
      surveyFr:
        "Enquête annuelle sur les industries de services : location et location à bail de machines et matériel d'usage commercial et industriel",
    },
    {
      surveyCode: '2442',
      surveyEn:
        'Annual Survey of Service Industries: Automotive Equipment Rental and Leasing',
      surveyFr:
        'Enquête annuelle sur les industries de services : location et location à bail de matériel automobile',
    },
    {
      surveyCode: '2445',
      surveyEn: 'Annual Wholesale Trade Survey',
      surveyFr: 'Enquête annuelle sur le commerce de gros',
    },
    {
      surveyCode: '2446',
      surveyEn: 'Retail Store Survey (Annual)',
      surveyFr: 'Enquête sur les magasins de détail (annuelle)',
    },
    {
      surveyCode: '2447',
      surveyEn: 'Annual Retail Trade Survey',
      surveyFr: 'Enquête annuelle sur le commerce de détail',
    },
    {
      surveyCode: '2448',
      surveyEn: 'Annual Non-store Retail Survey',
      surveyFr: 'Enquête annuelle sur le commerce de détail hors magasin',
    },
    {
      surveyCode: '2501',
      surveyEn: 'Quarterly Survey of Financial Statements',
      surveyFr: 'Relevé trimestriel des états financiers',
    },
    {
      surveyCode: '2502',
      surveyEn:
        'Corporations and Labour Unions Returns Act , Part 2 - Labour Unions',
      surveyFr:
        'Loi sur les déclarations des corporations et des syndicats ouvriers, Partie 2 - Syndicats ouvriers',
    },
    {
      surveyCode: '2503',
      surveyEn: 'Corporations Returns Act',
      surveyFr: 'Loi sur les déclarations des personnes morales',
    },
    {
      surveyCode: '2504',
      surveyEn: 'Quarterly Survey of Financial Institutions',
      surveyFr: 'Enquête trimestrielle sur les institutions financières',
    },
    {
      surveyCode: '2505',
      surveyEn: 'Credit Unions',
      surveyFr: "Caisses d'épargne et de crédit",
    },
    {
      surveyCode: '2506',
      surveyEn: 'Corporation Financial Statistics',
      surveyFr: 'Statistique financière des sociétés',
    },
    {
      surveyCode: '2507',
      surveyEn: 'Corporation Taxation Statistics',
      surveyFr: 'Statistique fiscale des sociétés',
    },
    {
      surveyCode: '2510',
      surveyEn: 'Financial and Taxation Statistics for Enterprises',
      surveyFr: 'Statistiques financières et fiscales des entreprises',
    },
    {
      surveyCode: '2513',
      surveyEn:
        'Survey of Deposit-accepting Intermediaries: Chartered Banks, Trust Companies, Caisses Populaires and Credit Unions',
      surveyFr:
        'Enquête auprès des intermédiaires financiers de dépôts : banques à charte, sociétés de fiducie, caisses populaires et coopératives de crédit',
    },
    {
      surveyCode: '2514',
      surveyEn: 'Biannual Survey of Suppliers of Business Financing',
      surveyFr:
        'Enquête semestrielle auprès des fournisseurs de services de financement aux entreprises',
    },
    {
      surveyCode: '2601',
      surveyEn: 'Labour Cost Survey',
      surveyFr: "Enquête sur les coûts de main-d'oeuvre",
    },
    {
      surveyCode: '2602',
      surveyEn: 'Estimates of Labour Income',
      surveyFr: 'Estimations du revenu du travail',
    },
    {
      surveyCode: '2603',
      surveyEn: 'Survey of Employment, Payrolls and Man-hours',
      surveyFr: "Enquête sur l'emploi, la rémunération et les heures-hommes",
    },
    {
      surveyCode: '2604',
      surveyEn: 'Employment Insurance Statistics - Monthly',
      surveyFr: "Statistiques de l'assurance-emploi - Mensuel",
    },
    {
      surveyCode: '2605',
      surveyEn: 'National Work Injuries Statistics Program',
      surveyFr:
        'Programme national de statistiques sur les accidents de travail',
    },
    {
      surveyCode: '2606',
      surveyEn: 'Help Wanted Index Survey',
      surveyFr: "Enquête sur l'indice de l'offre d'emploi",
    },
    {
      surveyCode: '2607',
      surveyEn: 'Quarterly Estimates of Trusteed Pension Funds',
      surveyFr:
        'Estimations trimestrielles relatives aux caisses de retraite en fiducie',
    },
    {
      surveyCode: '2608',
      surveyEn: 'Census of Trusteed Pension Funds',
      surveyFr: 'Recensement des Caisses de retraite en fiducie',
    },
    {
      surveyCode: '2609',
      surveyEn: 'Pension Plans in Canada',
      surveyFr: 'Régimes de pension au Canada',
    },
    {
      surveyCode: '2610',
      surveyEn: 'Unemployment Insurance Statistics (Annual)',
      surveyFr: "Statistiques sur l'assurance-chômage (Annuel)",
    },
    {
      surveyCode: '2612',
      surveyEn: 'Survey of Employment, Payrolls and Hours',
      surveyFr:
        "Enquête sur l'emploi, la rémunération et les heures de travail",
    },
    {
      surveyCode: '2614',
      surveyEn: 'Business Payrolls Survey',
      surveyFr: 'Enquête sur la rémunération auprès des entreprises',
    },
    {
      surveyCode: '2615',
      surveyEn: 'Workplace and Employee Survey',
      surveyFr: 'Enquête sur le milieu de travail et les employés',
    },
    {
      surveyCode: '2620',
      surveyEn: 'Survey of Financial Security',
      surveyFr: 'Enquête sur la sécurité financière',
    },
    {
      surveyCode: '2701',
      surveyEn: 'Airport Activity Survey',
      surveyFr: "Enquête sur l'activité aéroportuaire",
    },
    {
      surveyCode: '2702',
      surveyEn: 'Air Passenger Origin and Destination, Domestic Journeys',
      surveyFr:
        'Origine et destination des passagers aériens, voyages intérieurs',
    },
    {
      surveyCode: '2703',
      surveyEn: 'Air Passenger Origin and Destination, Canada-U.S.A.',
      surveyFr:
        'Origine et destination des passagers aériens, Canada - États-Unis',
    },
    {
      surveyCode: '2704',
      surveyEn:
        'Coupon Passenger Origin and Destination Report - Other Unit Toll Services',
      surveyFr:
        "Relevé de l'origine et de la destination des passagers d'après le coupon",
    },
    {
      surveyCode: '2705',
      surveyEn: 'Air Charter Statistics',
      surveyFr: 'Statistiques des affrètements aériens',
    },
    {
      surveyCode: '2708',
      surveyEn: 'Fare Basis Survey',
      surveyFr: 'Enquête sur la base tarifaire',
    },
    {
      surveyCode: '2712',
      surveyEn: 'Quarterly Civil Aviation Survey',
      surveyFr: "Enquête trimestrielle sur l'aviation civile",
    },
    {
      surveyCode: '2713',
      surveyEn: 'Annual Civil Aviation Survey',
      surveyFr: "Enquête annuelle sur l'aviation civile",
    },
    {
      surveyCode: '2715',
      surveyEn: 'Aircraft Movement Statistics',
      surveyFr: 'Statistiques relatives aux mouvements des aéronefs',
    },
    {
      surveyCode: '2721',
      surveyEn: 'Quarterly Survey of Telecommunications',
      surveyFr: 'Enquête trimestrielle des télécommunications',
    },
    {
      surveyCode: '2722',
      surveyEn: 'Annual Survey of Telecommunications',
      surveyFr: 'Enquête annuelle des télécommunications',
    },
    {
      surveyCode: '2724',
      surveyEn: 'Radio and Television Broadcasting Survey',
      surveyFr: 'Enquête sur la radiodiffusion et la télédiffusion',
    },
    {
      surveyCode: '2728',
      surveyEn: 'Annual Cable Television Survey',
      surveyFr: 'Enquête annuelle sur la télédistribution',
    },
    {
      surveyCode: '2732',
      surveyEn: 'Monthly Railway Carloadings Survey',
      surveyFr: 'Enquête mensuelle sur les chargements ferroviaires',
    },
    {
      surveyCode: '2734',
      surveyEn: 'Annual Survey on Rail Transportation',
      surveyFr: 'Enquête annuelle sur le transport ferroviaire',
    },
    {
      surveyCode: '2735',
      surveyEn: 'Railway Operating Statistics Survey',
      surveyFr: "Enquête sur les statistiques de l'exploitation ferroviaire",
    },
    {
      surveyCode: '2736',
      surveyEn: 'Rail Commodity Origin and Destination Statistics',
      surveyFr:
        "Statistiques sur l'origine et la destination des marchandises transportées par chemin de fer",
    },
    {
      surveyCode: '2741',
      surveyEn: 'Trucking Commodity Origin and Destination Survey',
      surveyFr:
        "Enquête sur l'origine et la destination des marchandises transportées par camion",
    },
    {
      surveyCode: '2742',
      surveyEn: 'Annual Trucking Survey',
      surveyFr: 'Enquête annuelle sur le camionnage',
    },
    {
      surveyCode: '2743',
      surveyEn: 'Passenger Bus Statistics',
      surveyFr: 'Statistique du transport des voyageurs par autobus',
    },
    {
      surveyCode: '2744',
      surveyEn: 'Intercity and Rural Passenger Bus Survey',
      surveyFr:
        'Enquête sur le transport interurbain et rural de voyageurs par autobus',
    },
    {
      surveyCode: '2745',
      surveyEn: 'Monthly Passenger Bus and Urban Transit Survey',
      surveyFr:
        'Enquête mensuelle sur le transport de passagers par autobus et le transport urbain',
    },
    {
      surveyCode: '2746',
      surveyEn: 'Gasoline and Other Petroleum Fuels Sold',
      surveyFr: 'Essence et autres combustibles de pétrole vendus',
    },
    {
      surveyCode: '2747',
      surveyEn: 'Vehicle Registrations',
      surveyFr: 'Immatriculations de véhicules',
    },
    {
      surveyCode: '2748',
      surveyEn: 'Quarterly Trucking Survey',
      surveyFr: 'Enquête trimestrielle sur le camionnage',
    },
    {
      surveyCode: '2749',
      surveyEn: 'Fuel Consumption Survey',
      surveyFr: 'Enquête sur la consommation de carburant',
    },
    {
      surveyCode: '2751',
      surveyEn: 'Coastwise Shipping Survey',
      surveyFr: 'Enquête sur le cabotage',
    },
    {
      surveyCode: '2753',
      surveyEn: 'Financial Survey of Canadian Water Carriers',
      surveyFr: 'Enquête financière des transporteurs par eau canadiens',
    },
    {
      surveyCode: '2791',
      surveyEn: 'Marine International Freight Origin and Destination Survey',
      surveyFr:
        "Enquête sur l'origine et la destination des marchandises au titre du transport maritime international",
    },
    {
      surveyCode: '2797',
      surveyEn: 'Passenger Bus/Urban Transit Survey - Quarterly',
      surveyFr:
        'Enquête trimestrielle sur le transport des voyageurs par autobus et le transport urbain',
    },
    {
      surveyCode: '2798',
      surveyEn: 'Annual Passenger Bus and Urban Transit Survey',
      surveyFr:
        'Enquête annuelle sur le transport de passagers par autobus et le transport urbain',
    },
    {
      surveyCode: '2800',
      surveyEn:
        'Annual Survey of Small For-Hire Carriers of Freight and Owner-Operators',
      surveyFr:
        "Enquête annuelle sur les petits transporteurs routiers de marchandises pour compte d'autrui et les chauffeurs contractants",
    },
    {
      surveyCode: '2802',
      surveyEn: 'Building Permits',
      surveyFr: 'Permis de bâtir',
    },
    {
      surveyCode: '2803',
      surveyEn:
        'Annual Capital and Repair Expenditures Survey: Actual, Preliminary Actual and Intentions',
      surveyFr:
        'Enquête annuelle sur les dépenses en immobilisations et réparations : réelles, provisoires, perspectives',
    },
    {
      surveyCode: '2820',
      surveyEn: 'Stock and Consumption of Fixed Non-residential Capital',
      surveyFr: 'Stock et consommation de capital fixe non résidentiel',
    },
    {
      surveyCode: '2821',
      surveyEn: 'Capacity Utilization Rates',
      surveyFr: "Taux d'utilisation de la capacité",
    },
    {
      surveyCode: '2917',
      surveyEn: 'Survey on Fluid Power Products Manufactured in Canada',
      surveyFr:
        "Enquête sur les dispositifs de transmission d'énergie par fluide fabriqués au Canada",
    },
    {
      surveyCode: '2920',
      surveyEn: 'Provincial Wage and Salary Survey',
      surveyFr: 'Enquête sur les traitements et salaires dans les provinces',
    },
    {
      surveyCode: '2925',
      surveyEn: "Survey of Canada's Tourist Attractions",
      surveyFr: 'Enquête sur les attractions touristiques du Canada',
    },
    {
      surveyCode: '2927',
      surveyEn: 'Canadian Aquaculture Industry Survey',
      surveyFr: "Enquête sur l'industrie canadienne de l'aquaculture",
    },
    {
      surveyCode: '2933',
      surveyEn: 'Canadian Defence, Aerospace and Marine Industries Survey',
      surveyFr:
        "Enquête sur les industries canadiennes de la défense, de l'aérospatiale et de la marine",
    },
    {
      surveyCode: '2935',
      surveyEn: 'National Construction Industry Wage Rate Survey',
      surveyFr:
        'Enquête nationale sur les taux salariaux dans le secteur de la construction',
    },
    {
      surveyCode: '2936',
      surveyEn: 'Survey of Growing Innovative Firms',
      surveyFr: 'Enquête sur les entreprises innovatrices en expension',
    },
    {
      surveyCode: '2939',
      surveyEn: 'Survey of Information Technology Occupations',
      surveyFr:
        "Enquête  sur les professions reliées aux technologies de l'information",
    },
    {
      surveyCode: '2941',
      surveyEn:
        'Survey on Financing and Growth of Small and Medium Enterprises',
      surveyFr:
        'Enquête sur le financement et la croissance des petites et moyennes entreprises',
    },
    {
      surveyCode: '2943',
      surveyEn: 'Commercial and Institutional Buildings Energy Use Survey',
      surveyFr:
        "Enquête sur la consommation d'énergie par les bâtiments commerciaux et institutionnels",
    },
    {
      surveyCode: '2944',
      surveyEn: 'Survey of Adventure Travel Operations in Canada',
      surveyFr:
        "Enquête auprès des entreprises de tourisme d'aventure au Canada",
    },
    {
      surveyCode: '2946',
      surveyEn: 'Employment Dynamics',
      surveyFr: "Variations de l'emploi",
    },
    {
      surveyCode: '2947',
      surveyEn: 'Survey of the Medical Devices Industry',
      surveyFr: "Enquête sur l'industrie des matériels médicaux",
    },
    {
      surveyCode: '3101',
      surveyEn:
        'University and College Academic Staff System - Full-time Staff',
      surveyFr:
        "Système d'information sur le personnel d'enseignement dans les universités et les collèges - Personnel enseignant à plein temps",
    },
    {
      surveyCode: '3105',
      surveyEn: 'Survey of Service Industries: Book Publishers',
      surveyFr: 'Enquête sur les industries de services : éditeurs de livres',
    },
    {
      surveyCode: '3107',
      surveyEn: 'Annual Survey of Service Industries: Heritage Institutions',
      surveyFr:
        'Enquête annuelle sur les industries de services :  établissements du patrimoine',
    },
    {
      surveyCode: '3108',
      surveyEn: 'Survey of Service Industries: Performing Arts',
      surveyFr: 'Enquête sur les industries de services : Arts de la scène',
    },
    {
      surveyCode: '3114',
      surveyEn: 'Television Viewing Databank',
      surveyFr: "Banque de données sur l'écoute de la télévision",
    },
    {
      surveyCode: '3115',
      surveyEn:
        'Survey of Service Industries: Sound Recording and Music Publishing',
      surveyFr:
        'Enquête sur les industries de services : enregistrement sonore et édition de musique',
    },
    {
      surveyCode: '3116',
      surveyEn:
        'Survey of Provincial/Territorial Government Expenditures on Culture',
      surveyFr:
        'Enquête sur les dépenses des administrations provinciales/territoriales au titre de la culture',
    },
    {
      surveyCode: '3117',
      surveyEn: 'Survey of Federal Government Expenditures on Culture',
      surveyFr:
        "Enquête sur les dépenses d'administration fédérale au titre de la culture",
    },
    {
      surveyCode: '3119',
      surveyEn: 'Survey of Uniform Financial System - School Boards',
      surveyFr:
        "Enquête sur le système intégré d'information financière sur les commissions scolaires",
    },
    {
      surveyCode: '3120',
      surveyEn:
        'Survey of Financial Statistics of Private Elementary and Secondary Schools',
      surveyFr:
        'Enquête sur les statistiques financières des écoles privées primaires et secondaires',
    },
    {
      surveyCode: '3121',
      surveyEn: 'Financial Information of Universities and Colleges Survey',
      surveyFr:
        "Enquête sur l'information financière des universités et collèges",
    },
    {
      surveyCode: '3122',
      surveyEn: 'Community College Student Information System',
      surveyFr:
        "Système d'information statistique sur la clientèle des collèges communautaires",
    },
    {
      surveyCode: '3123',
      surveyEn: 'Tuition and Living Accommodation Costs',
      surveyFr: 'Frais de scolarité et de subsistance',
    },
    {
      surveyCode: '3124',
      surveyEn: 'University Student Information System',
      surveyFr:
        "Système d'information statistique sur la clientèle universitaire",
    },
    {
      surveyCode: '3125',
      surveyEn:
        'Annual College and Related Institutions Educational Staff Survey',
      surveyFr:
        'Enquête annuelle sur le personnel enseignant des collèges et établissements analogues',
    },
    {
      surveyCode: '3126',
      surveyEn: 'Survey of Earned Doctorates',
      surveyFr: "Enquête auprès des titulaires d'un doctorat",
    },
    {
      surveyCode: '3127',
      surveyEn: 'Elementary/Secondary Education Staff Survey',
      surveyFr:
        'Enquête sur les caractéristiques du personnel scolaire des écoles primaires et secondaires',
    },
    {
      surveyCode: '3128',
      surveyEn: 'Elementary/Secondary School Enrolment',
      surveyFr: 'Effectifs des écoles primaires et secondaires',
    },
    {
      surveyCode: '3129',
      surveyEn:
        'Minority and Second Language Education, Elementary and Secondary Independent Schools',
      surveyFr:
        'Enseignement dans la langue de la minorité et dans la langue seconde - Écoles primaires et secondaires indépendantes',
    },
    {
      surveyCode: '3131',
      surveyEn: 'Degrees, Diplomas and Certificates Granted by Universities',
      surveyFr: 'Grades, diplômes et certificats décernés par les universités',
    },
    {
      surveyCode: '3139',
      surveyEn: 'Periodical Publishing Survey',
      surveyFr: "Enquête sur l'édition du périodique",
    },
    {
      surveyCode: '3140',
      surveyEn:
        'Survey of Federal Government Expenditures in Support of Education',
      surveyFr:
        "Enquête sur les dépenses du gouvernement fédéral au titre de l'éducation",
    },
    {
      surveyCode: '3141',
      surveyEn:
        'Provincial Expenditures on Education in Reform and Correctional Institutions',
      surveyFr:
        "Dépenses provinciales au titre de l'éducation dans les maisons de réhabilitation et de correction",
    },
    {
      surveyCode: '3142',
      surveyEn: 'Trade/Vocational Enrolment Survey',
      surveyFr:
        'Enquête sur les effectifs des programmes de formation professionnelle au niveau des métiers',
    },
    {
      surveyCode: '3144',
      surveyEn: 'Education Price Index',
      surveyFr: "Indice des prix a l'enseignement",
    },
    {
      surveyCode: '3146',
      surveyEn:
        'Financial Information of Community Colleges and Vocational Schools',
      surveyFr:
        'Information financière des collèges communautaires et des écoles de formation professionnelle',
    },
    {
      surveyCode: '3147',
      surveyEn: 'Continuing Education Survey',
      surveyFr: "Enquête sur l'éducation permanente",
    },
    {
      surveyCode: '3152',
      surveyEn:
        'International Travel Survey: Electronic questionnaires and Air Exit Survey',
      surveyFr:
        'Enquête sur les voyages internationaux : questionnaires électroniques et Enquête sur les départs aériens',
    },
    {
      surveyCode: '3153',
      surveyEn: 'Radio Listening Databank',
      surveyFr: "Banque de données sur l'écoute de la radio",
    },
    {
      surveyCode: '3154',
      surveyEn: 'Registered Apprenticeship Information System',
      surveyFr: "Système d'information sur les apprentis inscrits",
    },
    {
      surveyCode: '3156',
      surveyEn: 'School Leavers Survey',
      surveyFr: 'Enquête auprès des sortants',
    },
    {
      surveyCode: '3160',
      surveyEn: 'National Apprenticeship Survey',
      surveyFr: 'Enquête nationale auprès des apprentis',
    },
    {
      surveyCode: '3161',
      surveyEn:
        'University and College Academic Staff System - Part-time Staff',
      surveyFr:
        "Système d'information sur le personnel d'enseignement dans les universités et les collèges - Personnel à temps partiel",
    },
    {
      surveyCode: '3163',
      surveyEn:
        'Survey of Providers of Training in English or French as a Second Language',
      surveyFr:
        'Enquête auprès des fournisseurs de formation en anglais ou en français langue seconde au Canada',
    },
    {
      surveyCode: '3166',
      surveyEn:
        'Survey on Education in the Minority-Language and Second-Language at the Postsecondary Level',
      surveyFr:
        "Enquête sur l'enseignement  dans la langue de la minorité et dans la langue seconde au niveau postsecondaire",
    },
    {
      surveyCode: '3167',
      surveyEn: 'Survey of Activity with International Financial Institutions',
      surveyFr:
        "Enquête sur l'activité dans le secteur des institutions financières Internationales",
    },
    {
      surveyCode: '3203',
      surveyEn: 'Hospital Morbidity Database',
      surveyFr: 'Base de données sur la morbidité hospitalière',
    },
    {
      surveyCode: '3204',
      surveyEn: 'Mental Health Statistics',
      surveyFr: "La statistique de l'hygiène mentale",
    },
    {
      surveyCode: '3207',
      surveyEn: 'Canadian Cancer Registry',
      surveyFr: 'Registre canadien du cancer',
    },
    {
      surveyCode: '3208',
      surveyEn: 'Annual Return of Health Care Facilities - Hospitals',
      surveyFr: 'Rapport annuel des établissements de santé - Hôpitaux',
    },
    {
      surveyCode: '3209',
      surveyEn: 'Therapeutic Abortion Survey',
      surveyFr: 'Enquête sur les avortements thérapeutiques',
    },
    {
      surveyCode: '3210',
      surveyEn: 'Private nursing and residential care facilities',
      surveyFr:
        'Établissements privé de soins infirmiers et de soins pour bénéficiaires internes',
    },
    {
      surveyCode: '3217',
      surveyEn: 'Canada Health Survey',
      surveyFr: 'Enquête santé Canada',
    },
    {
      surveyCode: '3225',
      surveyEn:
        'National Population Health Survey: Household Component, Longitudinal',
      surveyFr:
        'Enquête nationale sur la santé de la population : Volet ménages, longitudinal',
    },
    {
      surveyCode: '3226',
      surveyEn: 'Canadian Community Health Survey - Annual Component',
      surveyFr:
        'Enquête sur la santé dans les collectivités canadiennes - Composante annuelle',
    },
    {
      surveyCode: '3231',
      surveyEn: 'Vital Statistics - Birth Database',
      surveyFr:
        "Statistique de l'état civil - Base de données sur les naissances",
    },
    {
      surveyCode: '3232',
      surveyEn: 'Vital Statistics - Marriage Database',
      surveyFr:
        "Statistique de l'état civil - Base de données sur les mariages",
    },
    {
      surveyCode: '3233',
      surveyEn: 'Vital Statistics - Death Database',
      surveyFr: "Statistique de l'état civil - Base de données sur les décès",
    },
    {
      surveyCode: '3234',
      surveyEn: 'Vital Statistics - Stillbirth Database',
      surveyFr:
        "Statistique de l'état civil - Base de données sur les mortinaissances",
    },
    {
      surveyCode: '3235',
      surveyEn: 'Vital Statistics - Divorce Database',
      surveyFr:
        "Statistique de l'état civil - Base de données sur les divorces",
    },
    {
      surveyCode: '3236',
      surveyEn:
        'National Population Health Survey: Household Component, Cross-sectional',
      surveyFr:
        'Enquête nationale sur la santé de la population : Volet ménages - transversal',
    },
    {
      surveyCode: '3250',
      surveyEn: 'Aboriginal Peoples Survey',
      surveyFr: 'Enquête auprès des peuples autochtones',
    },
    {
      surveyCode: '3251',
      surveyEn: 'Canadian Survey on Disability',
      surveyFr: "Enquête canadienne sur l'incapacité",
    },
    {
      surveyCode: '3252',
      surveyEn:
        'Health and Activity Limitation Survey : Institutional Component',
      surveyFr:
        "Enquête sur la santé et les limitations d'activités : Établissements",
    },
    {
      surveyCode: '3301',
      surveyEn: 'Police Administration Survey',
      surveyFr: "Enquête sur l'administration policière",
    },
    {
      surveyCode: '3302',
      surveyEn: 'Uniform Crime Reporting Survey',
      surveyFr: 'Programme de déclaration uniforme de la criminalité',
    },
    {
      surveyCode: '3306',
      surveyEn: 'Adult Correctional Services',
      surveyFr: 'Services correctionnels pour adultes',
    },
    {
      surveyCode: '3308',
      surveyEn: 'Legal Aid Survey',
      surveyFr: "Enquête sur l'aide juridique",
    },
    {
      surveyCode: '3309',
      surveyEn: 'Youth Court Survey',
      surveyFr: 'Enquête sur les tribunaux de la jeunesse',
    },
    {
      surveyCode: '3310',
      surveyEn: 'Courts Resources, Expenditures and Personnel Survey',
      surveyFr: 'Enquête des ressources, dépenses et personnel des tribunaux',
    },
    {
      surveyCode: '3312',
      surveyEn: 'Integrated Criminal Court Survey',
      surveyFr: 'Enquête intégrée sur les tribunaux de juridiction criminelle',
    },
    {
      surveyCode: '3313',
      surveyEn: 'Corrections Key Indicator Report for Adults and Youth',
      surveyFr:
        'Rapport sur les indicateurs clés des services correctionnels pour les adultes et les jeunes',
    },
    {
      surveyCode: '3315',
      surveyEn: 'Homicide Survey',
      surveyFr: "Enquête sur l'homicide",
    },
    {
      surveyCode: '3322',
      surveyEn: 'Prosecutorial Services in Canada',
      surveyFr: 'Services en matière de poursuites au Canada',
    },
    {
      surveyCode: '3323',
      surveyEn: 'Youth Custody and Community Services',
      surveyFr: 'Services communautaires et le placement sous garde des jeunes',
    },
    {
      surveyCode: '3324',
      surveyEn: 'Survey of Maintenance Enforcement Programs',
      surveyFr:
        "L'Enquête sur les programmes d'exécution des ordonnances alimentaires",
    },
    {
      surveyCode: '3325',
      surveyEn: 'Alternative Measures Survey for Youth',
      surveyFr: 'Enquête sur les mesures de rechange pour les adolescents',
    },
    {
      surveyCode: '3326',
      surveyEn: "A One Day Snapshot in Canada's Correctional Facilities",
      surveyFr:
        "Profil instantané d'une journée des détenus dans les établissements correctionnels pour adultes du Canada",
    },
    {
      surveyCode: '3327',
      surveyEn: 'Adult and Youth Recidivism in Canada Special Study',
      surveyFr:
        'Étude spéciale sur la récidive chez les adultes et les jeunes au Canada',
    },
    {
      surveyCode: '3328',
      surveyEn: 'Survey of Residential Facilities for Victims of Abuse',
      surveyFr:
        "Enquête sur les établissements d'hébergement pour les victimes de violence",
    },
    {
      surveyCode: '3401',
      surveyEn: 'Field Crop Reporting Series',
      surveyFr: 'Enquête de 2018 sur les grandes cultures',
    },
    {
      surveyCode: '3403',
      surveyEn: "Monthly Miller's Survey",
      surveyFr: 'Enquête mensuelle auprès des minotiers',
    },
    {
      surveyCode: '3404',
      surveyEn: 'Monthly Crushing Operations Survey',
      surveyFr: 'Enquête mensuelle sur les opérations de trituration',
    },
    {
      surveyCode: '3405',
      surveyEn: 'Leaf Tobacco Area, Production and Value',
      surveyFr:
        'Superficie récoltée, production et valeur du tabac en feuilles',
    },
    {
      surveyCode: '3407',
      surveyEn: 'Fruits and Vegetables Survey',
      surveyFr: 'Enquête sur les fruits et légumes',
    },
    {
      surveyCode: '3411',
      surveyEn: "Mushroom Growers' Survey",
      surveyFr: 'Enquête relative aux producteurs de champignons',
    },
    {
      surveyCode: '3414',
      surveyEn: 'Maple Products',
      surveyFr: "Produits de l'érable",
    },
    {
      surveyCode: '3416',
      surveyEn: 'Annual Greenhouse, Sod and Nursery Survey',
      surveyFr:
        'Enquête annuelle sur les cultures de serre, les pépinières et les gazonnières',
    },
    {
      surveyCode: '3419',
      surveyEn: 'Honey Production, Value and Colonies',
      surveyFr: "Production de miel, valeur et colonies d'abeilles",
    },
    {
      surveyCode: '3421',
      surveyEn: 'Egg Producers Survey',
      surveyFr: "Enquête sur les producteurs d'oeufs",
    },
    {
      surveyCode: '3422',
      surveyEn: 'Stocks of Frozen Fruit and Vegetables',
      surveyFr: 'Stocks de fruits et de légumes congelées',
    },
    {
      surveyCode: '3423',
      surveyEn: 'Quarterly Stocks of Frozen and Chilled Meats Survey',
      surveyFr:
        'Enquête trimestrielle sur les stocks de viandes froides et congelées',
    },
    {
      surveyCode: '3425',
      surveyEn:
        'Inventory Statement of Frozen Eggs, Poultry and Edible Dried Egg Products (Agriculture and Agri-Food Canada Data)',
      surveyFr:
        "Relevé des stocks de produits avicoles, d'oeufs congelés et de produits d'oeufs en poudre comestibles (Données du Agriculture et Agroalimentaire Canada)",
    },
    {
      surveyCode: '3426',
      surveyEn: 'Fur Farm Report - Mink and Foxes',
      surveyFr: 'Rapport des fermes à fourrure - Visons et renards',
    },
    {
      surveyCode: '3428',
      surveyEn: 'Census of Wildlife Pelt Production',
      surveyFr:
        'Recensement de la production des fourrures provenant de la chasse',
    },
    {
      surveyCode: '3430',
      surveyEn: 'Monthly Dairy Factory Production and Stocks Survey',
      surveyFr:
        'Enquête mensuelle sur la production et stocks des fabriques laitières',
    },
    {
      surveyCode: '3431',
      surveyEn: 'Monthly Inventory Statement of Butter and Cheese',
      surveyFr: 'Inventaire mensuel du beurre et du fromage',
    },
    {
      surveyCode: '3432',
      surveyEn: 'Milk Sold Off Farms and Cash Receipts from the Sale of Milk',
      surveyFr:
        'Ventes de lait hors ferme et recettes monétaires provenant des ventes de lait',
    },
    {
      surveyCode: '3434',
      surveyEn: 'Survey of Livestock Slaughter',
      surveyFr: 'Relevé des abattages de bestiaux',
    },
    {
      surveyCode: '3435',
      surveyEn: 'Wool Price Survey',
      surveyFr: 'Enquête sur les prix de la laine',
    },
    {
      surveyCode: '3436',
      surveyEn: 'Farm Product Prices Survey',
      surveyFr: 'Enquête sur les prix des produits agricoles',
    },
    {
      surveyCode: '3437',
      surveyEn: 'Farm Cash Receipts',
      surveyFr: 'Recettes monétaires agricoles',
    },
    {
      surveyCode: '3438',
      surveyEn: 'Census of Agriculture',
      surveyFr: "Recensement de l'agriculture",
    },
    {
      surveyCode: '3439',
      surveyEn: 'National Farm Survey',
      surveyFr: 'Enquête nationale sur les fermes',
    },
    {
      surveyCode: '3441',
      surveyEn:
        'Processors Supplementary Report of Frozen Vegetables Intended for Re-manufacture',
      surveyFr:
        'Rapport supplémentaire des conditionneurs de légumes congelés sur les stocks destinés à la retransformation',
    },
    {
      surveyCode: '3442',
      surveyEn: 'Forage Seed Usage Survey',
      surveyFr: "Enquête sur l'utilisation des semences fourragères",
    },
    {
      surveyCode: '3443',
      surveyEn: "Annual Miller's Survey",
      surveyFr: 'Enquête annuelle auprès des minotiers',
    },
    {
      surveyCode: '3446',
      surveyEn: 'Biannual Potato Area and Yield Survey',
      surveyFr:
        'Enquête semestrielle sur la superficie et le rendement des pommes de terre',
    },
    {
      surveyCode: '3447',
      surveyEn: 'Agriculture Taxation Data Program',
      surveyFr: 'Programme des données fiscales agricoles',
    },
    {
      surveyCode: '3449',
      surveyEn: 'Survey of Wage Rates for Hired Farm Labour',
      surveyFr:
        "Enquête sur les taux des salaires de la main-d'oeuvre agricole salariée",
    },
    {
      surveyCode: '3450',
      surveyEn: 'Farm Financial Survey',
      surveyFr: 'Enquête financière sur les fermes',
    },
    {
      surveyCode: '3451',
      surveyEn: 'Seed Corn Trade Survey',
      surveyFr: 'Enquête sur le commerce des semences de maïs',
    },
    {
      surveyCode: '3460',
      surveyEn: 'Livestock Survey',
      surveyFr: 'Enquête sur le bétail',
    },
    {
      surveyCode: '3461',
      surveyEn: 'Farm Inputs Management Survey',
      surveyFr: 'Enquête sur la gestion des intrants agricoles',
    },
    {
      surveyCode: '3464',
      surveyEn: 'Commercial Stocks of Corn and Soybeans Survey',
      surveyFr: 'Enquête sur les stocks commerciaux de maïs et de soya',
    },
    {
      surveyCode: '3465',
      surveyEn: 'Atlantic Agriculture Survey',
      surveyFr: "Enquête agricole des provinces de l'Atlantique",
    },
    {
      surveyCode: '3471',
      surveyEn: 'Value of Farm Capital',
      surveyFr: 'Valeur du capital agricole',
    },
    {
      surveyCode: '3472',
      surveyEn: 'Farm Debt Outstanding',
      surveyFr: 'Dette agricole en cours',
    },
    {
      surveyCode: '3473',
      surveyEn: 'Net Farm Income',
      surveyFr: 'Revenu agricole net',
    },
    {
      surveyCode: '3474',
      surveyEn: 'Farm Income in Kind, by Item',
      surveyFr: 'Revenu agricole en nature, par article',
    },
    {
      surveyCode: '3475',
      surveyEn: 'Food Availability (per person)',
      surveyFr: 'Disponibilité des aliments (par personne)',
    },
    {
      surveyCode: '3476',
      surveyEn: 'Commercial Stocks of the Major Special Crops Survey',
      surveyFr:
        'Enquête sur les stocks commerciaux des principales cultures spéciales',
    },
    {
      surveyCode: '3479',
      surveyEn: 'Aquaculture, production and value, Annual',
      surveyFr: "Production et valeur de l'aquaculture, annuelle",
    },
    {
      surveyCode: '3501',
      surveyEn: 'Survey of Consumer Finances (Small Sample)',
      surveyFr:
        'Enquête sur les finances des consommateurs (petit échantillon)',
    },
    {
      surveyCode: '3502',
      surveyEn: 'Survey of Consumer Finances',
      surveyFr: 'Enquête sur les finances des consommateurs',
    },
    {
      surveyCode: '3503',
      surveyEn: 'Food Expenditure Survey',
      surveyFr: 'Enquête sur les dépenses alimentaires',
    },
    {
      surveyCode: '3504',
      surveyEn: 'Survey of Family Expenditures',
      surveyFr: 'Enquête sur les dépenses des familles',
    },
    {
      surveyCode: '3505',
      surveyEn: 'Household Facilities and Equipment Survey',
      surveyFr: "Enquête sur l'équipement ménager",
    },
    {
      surveyCode: '3506',
      surveyEn: 'Household Facilities by Income and Other Characteristics',
      surveyFr:
        "Equipement ménager selon le revenu et d'autres caractéristiques",
    },
    {
      surveyCode: '3507',
      surveyEn: 'Shelter Cost Survey',
      surveyFr: 'Enquête sur les frais de logement',
    },
    {
      surveyCode: '3508',
      surveyEn: 'Survey of Household Spending',
      surveyFr: 'Enquête sur les dépenses des ménages',
    },
    {
      surveyCode: '3601',
      surveyEn: 'Quarterly Demographic Estimates',
      surveyFr: 'Estimations démographiques trimestrielles',
    },
    {
      surveyCode: '3602',
      surveyEn: 'Population Projections for Canada, Provinces and Territories',
      surveyFr:
        'Projections démographiques pour le Canada, les provinces et les territoires',
    },
    {
      surveyCode: '3603',
      surveyEn:
        'Estimates of Total Population for Canada, the Provinces and the Territories',
      surveyFr:
        'Estimations de la population totale pour le Canada, les provinces et les territoires',
    },
    {
      surveyCode: '3604',
      surveyEn:
        'Annual Demographic Estimates: Canada, Provinces and Territories',
      surveyFr:
        'Estimations démographiques annuelles: Canada, provinces et territoires',
    },
    {
      surveyCode: '3605',
      surveyEn:
        'Estimates of population, by marital status or legal marital Status, age and sex for July 1, Canada, provinces and territories',
      surveyFr:
        "Estimations de la population selon l'état matrimonial ou l'état matrimonial légal, l'âge et le sexe au 1er juillet, Canada, provinces et territoires",
    },
    {
      surveyCode: '3606',
      surveyEn:
        'Estimates of the number of census families for July 1st, Canada, provinces and territories',
      surveyFr:
        'Estimations du nombre de familles de recensement au 1er juillet, Canada, provinces et territoires',
    },
    {
      surveyCode: '3607',
      surveyEn:
        'Preliminary Estimates of Population for Census Divisions and Census Metropolitan Areas (Regression method)',
      surveyFr:
        'Estimations provisoires de la population des divisions et régions métropolitaines de recensement (Méthode de régression)',
    },
    {
      surveyCode: '3608',
      surveyEn: 'Annual Demographic Estimates : Subprovincial Areas',
      surveyFr:
        'Estimations démographiques annuelles : régions infraprovinciales',
    },
    {
      surveyCode: '3701',
      surveyEn: 'Labour Force Survey',
      surveyFr: 'Enquête sur la population active',
    },
    {
      surveyCode: '3801',
      surveyEn: 'Survey of Annual Work Patterns',
      surveyFr: "Enquête sur l'activité annuelle",
    },
    {
      surveyCode: '3802',
      surveyEn: 'Fuel Consumption',
      surveyFr: 'Consommation de carburant',
    },
    {
      surveyCode: '3803',
      surveyEn: 'Crime Survey',
      surveyFr: 'Enquête sur les actes criminels',
    },
    {
      surveyCode: '3804',
      surveyEn: 'Survey of Work History',
      surveyFr: 'Enquête sur les antécédents de travail',
    },
    {
      surveyCode: '3805',
      surveyEn: 'Absence from Work Survey',
      surveyFr: "Enquête sur l'absence du travail",
    },
    {
      surveyCode: '3806',
      surveyEn: 'Survey of Volunteer Workers',
      surveyFr: 'Enquête auprès des travailleurs bénévoles',
    },
    {
      surveyCode: '3807',
      surveyEn: 'Survey of Child Care',
      surveyFr: 'Enquête sur la garde des enfants',
    },
    {
      surveyCode: '3808',
      surveyEn: 'Survey on the Importance of Nature to Canadians',
      surveyFr:
        "Enquête sur l'importance de la faune et les secteurs naturels pour les Canadiens",
    },
    {
      surveyCode: '3810',
      surveyEn: 'Travel Survey of Residents of Canada',
      surveyFr: 'Enquête sur les voyages des résidents du Canada',
    },
    {
      surveyCode: '3812',
      surveyEn: 'Travel to Work Survey',
      surveyFr:
        'Enquête sur les déplacements entre le domicile et le lieu du travail',
    },
    {
      surveyCode: '3813',
      surveyEn: 'Survey of Smoking Habits',
      surveyFr: "Enquête sur l'habitude de fumer",
    },
    {
      surveyCode: '3814',
      surveyEn: 'Current Population Profile',
      surveyFr: 'Profil de la population actuelle',
    },
    {
      surveyCode: '3815',
      surveyEn: 'Survey of Leisure Time Activities and Reading Habits',
      surveyFr: 'Activités de loisirs et habitudes de lecture',
    },
    {
      surveyCode: '3821',
      surveyEn: 'Survey of Job Opportunities',
      surveyFr: "Enquête sur les perspectives d'emploi",
    },
    {
      surveyCode: '3822',
      surveyEn: 'Tourism Attitude and Motivation Study',
      surveyFr:
        "Enquête sur les attitudes et les motivations à l'égard du tourisme",
    },
    {
      surveyCode: '3823',
      surveyEn: 'Postsecondary Student Survey',
      surveyFr: 'Enquête auprès des étudiants du niveau postsecondaire',
    },
    {
      surveyCode: '3824',
      surveyEn: 'Ontario Child Health Study',
      surveyFr: 'Étude sur la santé des jeunes Ontariens',
    },
    {
      surveyCode: '3828',
      surveyEn: 'Health Promotion Survey',
      surveyFr: 'Enquête sur la promotion de la santé',
    },
    {
      surveyCode: '3830',
      surveyEn: 'Survey of Union Membership',
      surveyFr: "Enquête sur l'adhésion syndicale",
    },
    {
      surveyCode: '3831',
      surveyEn: 'Survey on Work Reduction',
      surveyFr: 'Enquête sur la réduction des heures de travail',
    },
    {
      surveyCode: '3837',
      surveyEn: 'Victims of Crimes Survey - Edmonton',
      surveyFr: 'Enquête sur les actes criminels à Edmonton',
    },
    {
      surveyCode: '3842',
      surveyEn: 'Survey of Alberta Apprentices and Journeymen',
      surveyFr: 'Enquête auprès des apprentis et des manoeuvres en Alberta',
    },
    {
      surveyCode: '3845',
      surveyEn: 'Survey of Displaced Workers',
      surveyFr: 'Enquête auprès des travailleurs déplacés',
    },
    {
      surveyCode: '3848',
      surveyEn: 'National Child Care Survey',
      surveyFr: 'Enquête nationale des soins aux enfants',
    },
    {
      surveyCode: '3850',
      surveyEn: 'Survey of Self-employment',
      surveyFr: 'Enquête sur le travail independant',
    },
    {
      surveyCode: '3851',
      surveyEn: 'Survey of Maternity Leave',
      surveyFr: 'Enquête sur les congés de maternité',
    },
    {
      surveyCode: '3852',
      surveyEn: 'Survey of Educational Attainment (Alberta)',
      surveyFr: "Enquête sur le niveau d'instruction (Alberta)",
    },
    {
      surveyCode: '3853',
      surveyEn: 'Labour Market Activity Survey',
      surveyFr: "Enquête sur l'activité",
    },
    {
      surveyCode: '3862',
      surveyEn: 'Education Survey',
      surveyFr: 'Enquête sur les études',
    },
    {
      surveyCode: '3865',
      surveyEn: 'Survey of Volunteer Activity',
      surveyFr: 'Enquête sur le bénévolat',
    },
    {
      surveyCode: '3869',
      surveyEn: 'National Survey on Drinking and Driving',
      surveyFr:
        "Enquête nationale sur la conduite automobile et la consommation d'alcool",
    },
    {
      surveyCode: '3873',
      surveyEn: 'National Alcohol and Drug Survey',
      surveyFr: "Enquête nationale sur la consommation d'alcool et de drogue",
    },
    {
      surveyCode: '3874',
      surveyEn: 'Survey of Literacy Skills Used in Daily Activities',
      surveyFr:
        "Enquête sur les capacités de lecture et d'écriture utilisées quotidiennement",
    },
    {
      surveyCode: '3879',
      surveyEn: 'Adult Education and Training Survey',
      surveyFr: "Enquête sur l'éducation et sur la formation des adultes",
    },
    {
      surveyCode: '3881',
      surveyEn: 'Households and the Environment Survey',
      surveyFr: "Enquête sur les ménages et l'environnement",
    },
    {
      surveyCode: '3884',
      surveyEn: 'Survey of Work Arrangements',
      surveyFr: 'Enquête sur les horaires et les conditions de travail',
    },
    {
      surveyCode: '3885',
      surveyEn: 'Survey on Ageing and Independence',
      surveyFr: "Enquête sur le vieillissement et l'autonomie",
    },
    {
      surveyCode: '3886',
      surveyEn: 'Homeowner Repair and Renovation Survey',
      surveyFr:
        'Enquête sur les réparations et les rénovations effectuées par les propriétaires-occupants',
    },
    {
      surveyCode: '3889',
      surveyEn: 'Survey of Labour and Income Dynamics',
      surveyFr: 'Enquête sur la dynamique du travail et du revenu',
    },
    {
      surveyCode: '3894',
      surveyEn: 'General Social Survey - Health',
      surveyFr: 'Enquête sociale générale - Santé',
    },
    {
      surveyCode: '3896',
      surveyEn: 'Violence Against Women Survey',
      surveyFr: 'Enquête sur la violence envers les femmes',
    },
    {
      surveyCode: '3898',
      surveyEn: 'Self-Sufficiency Project',
      surveyFr: "Projet de l'autosuffisance",
    },
    {
      surveyCode: '3901',
      surveyEn: 'Census of Population',
      surveyFr: 'Recensement de la population',
    },
    {
      surveyCode: '3902',
      surveyEn: 'Census of Population - Reverse Record Check',
      surveyFr:
        'Recensement de la population - contre-vérification des dossiers',
    },
    {
      surveyCode: '4101',
      surveyEn:
        'Annual Migration Estimates by Census Division/Census Metropolitan Area',
      surveyFr:
        'Estimations annuelles de migration par division de recensement/région métropolitaine de recensement',
    },
    {
      surveyCode: '4105',
      surveyEn:
        'Annual Income Estimates for Census Families and Individuals (T1 Family File)',
      surveyFr:
        'Estimations annuelles du revenu des familles de recensement et des particuliers (Fichier des familles T1)',
    },
    {
      surveyCode: '4106',
      surveyEn:
        'Income and Financial Data of Individuals, Preliminary T1 Family File',
      surveyFr:
        'Revenu et données financières des particuliers, fichier préliminaire T1 sur les familles',
    },
    {
      surveyCode: '4107',
      surveyEn: 'Longitudinal Administrative Databank',
      surveyFr: 'Banque de données administratives longitudinales',
    },
    {
      surveyCode: '4201',
      surveyEn:
        'Annual Survey of Research and Development in Canadian Industry',
      surveyFr:
        "Enquête annuelle sur la recherche et le développement dans l'industrie canadienne",
    },
    {
      surveyCode: '4204',
      surveyEn:
        'Research and Development of Canadian Private Non-Profit Organizations',
      surveyFr:
        'Recherche et développement des organismes privés sans but lucratif au Canada',
    },
    {
      surveyCode: '4205',
      surveyEn:
        'Energy Research and Development Expenditures by Area of Technology',
      surveyFr:
        'Dépenses de recherche et développement énergétique par secteur de technologie',
    },
    {
      surveyCode: '4206',
      surveyEn:
        'Energy Research and Development Expenditures - Petroleum Firms',
      surveyFr:
        'Dépenses de recherche et développement énergétique - Sociétés pétrolières',
    },
    {
      surveyCode: '4208',
      surveyEn:
        'Scientific Activities of Provincial Research Organizations, Activities in Natural Sciences and Engineering',
      surveyFr:
        "Activités scientifiques d'organismes provinciaux de recherche, activités en sciences naturelles et en génie",
    },
    {
      surveyCode: '4209',
      surveyEn: 'Provincial Government Activities in the Natural Sciences',
      surveyFr:
        'Activités du gouvernement provincial dans les sciences naturelles',
    },
    {
      surveyCode: '4210',
      surveyEn:
        'Scientific and Technological Activities of Provincial Governments',
      surveyFr:
        'Activités scientifiques et technologiques des administrations provinciales',
    },
    {
      surveyCode: '4212',
      surveyEn:
        'Federal Science Expenditures and Personnel, Activities in the Social Sciences and Natural Sciences',
      surveyFr:
        "Dépenses et main d'oeuvre scientifiques fédérales, activités dans les sciences sociales et les sciences naturelles",
    },
    {
      surveyCode: '4218',
      surveyEn: 'Survey of Innovation',
      surveyFr: "Enquête sur l'innovation",
    },
    {
      surveyCode: '4221',
      surveyEn: 'Survey of Biotechnology Use in Canadian Industries',
      surveyFr:
        "Enquête sur l'utilisation de la biotechnologie aux industries canadiennes",
    },
    {
      surveyCode: '4222',
      surveyEn:
        'Survey of Intellectual Property Commercialization in the Higher Education Sector',
      surveyFr:
        "Enquête sur la commercialisation de la propriété intellectuelle dans le secteur de l'enseignement supérieur",
    },
    {
      surveyCode: '4223',
      surveyEn: 'Survey of Advanced Technology',
      surveyFr: 'Enquête sur les technologies de pointe',
    },
    {
      surveyCode: '4224',
      surveyEn:
        'Survey of Innovation, Advanced Technologies and Practices in the Construction and Related Industries',
      surveyFr:
        "Enquête sur l'innovation, les technologies et pratiques dans les industries de la construction et les industries connexes",
    },
    {
      surveyCode: '4225',
      surveyEn: 'Survey of Digital Technology and Internet Use',
      surveyFr:
        "Enquête sur la technologie numérique et l'utilisation d'Internet",
    },
    {
      surveyCode: '4226',
      surveyEn: 'Biotechnology Use and Development Survey',
      surveyFr:
        "Enquête sur l'utilisation et le développement de la biotechnologie",
    },
    {
      surveyCode: '4301',
      surveyEn: 'Income Estimates for Subprovincial Areas',
      surveyFr: 'Estimations du revenu dans les secteurs infraprovinciaux',
    },
    {
      surveyCode: '4303',
      surveyEn:
        'Annual Survey of Internet Service Providers and Related Services',
      surveyFr:
        'Enquête annuelle sur les fournisseurs de services Internet  et les autres services connexes',
    },
    {
      surveyCode: '4400',
      surveyEn: 'Survey of Persons Not in the Labour Force',
      surveyFr:
        "Enquête sur les personnes n'étant pas sur le marché du travail",
    },
    {
      surveyCode: '4401',
      surveyEn: 'Youth Smoking Survey',
      surveyFr: 'Enquête sur le tabagisme chez les jeunes',
    },
    {
      surveyCode: '4403',
      surveyEn: 'Survey of Household Energy Use',
      surveyFr: "Enquête sur l'utilisation de l'énergie par les ménages",
    },
    {
      surveyCode: '4404',
      surveyEn: 'Rental Repair and Renovation Expenditure Survey',
      surveyFr:
        'Enquête sur les dépenses de réparation et de rénovation de logements en location',
    },
    {
      surveyCode: '4406',
      surveyEn:
        'Programme for the International Assessment of Adult Competencies',
      surveyFr:
        "Programme pour l'évaluation internationale des compétences des adultes",
    },
    {
      surveyCode: '4407',
      surveyEn: 'National Private Vehicle Use Survey',
      surveyFr: "Enquête nationale sur l'utilisation des véhicules privés",
    },
    {
      surveyCode: '4408',
      surveyEn: "Canada's Alcohol and Other Drugs Survey",
      surveyFr:
        "Enquête Canadienne sur la consommation d'alcool et autres drogues",
    },
    {
      surveyCode: '4409',
      surveyEn: 'Survey on Smoking in Canada',
      surveyFr: 'Enquête sur le tabagisme au Canada',
    },
    {
      surveyCode: '4410',
      surveyEn: 'Tracking Study of Federal Employees',
      surveyFr: "Enquête de suivi d'anciens fonctionnaires fédéraux",
    },
    {
      surveyCode: '4412',
      surveyEn: 'RCMP Public Complaints Commission (PCC) Survey',
      surveyFr:
        'Enquête sur la commission des plaints du public (CPP) contre la GRC',
    },
    {
      surveyCode: '4419',
      surveyEn: 'Sun Exposure Survey',
      surveyFr: "Enquête sur l'exposition au soleil",
    },
    {
      surveyCode: '4422',
      surveyEn: 'Longitudinal Survey of Immigrants to Canada',
      surveyFr: 'Enquête longitudinale auprès des immigrants du Canada',
    },
    {
      surveyCode: '4423',
      surveyEn: 'Changes in Employment Survey',
      surveyFr: "Enquête sur les changements à l'égard de l'emploi",
    },
    {
      surveyCode: '4424',
      surveyEn: 'National Electronic Media Use Survey',
      surveyFr: "Enquête Nationale sur l'usage des médias électroniques",
    },
    {
      surveyCode: '4426',
      surveyEn: 'Residential Telephone Service Survey',
      surveyFr: 'Enquête sur le service téléphonique résidentiel',
    },
    {
      surveyCode: '4428',
      surveyEn: 'Employment Insurance Coverage Survey',
      surveyFr: "Enquête sur la couverture de l'assurance-emploi",
    },
    {
      surveyCode: '4430',
      surveyEn:
        'General Social Survey - Giving, Volunteering and Participating',
      surveyFr: 'Enquête sociale générale - Dons, bénévolat et participation',
    },
    {
      surveyCode: '4432',
      surveyEn: 'Canadian Internet Use Survey',
      surveyFr: "Enquête canadienne sur l'utilisation de l'Internet",
    },
    {
      surveyCode: '4433',
      surveyEn: 'Ontario Adult Literacy Survey',
      surveyFr: "Enquête sur l'alphabétisation des adultes en Ontario",
    },
    {
      surveyCode: '4435',
      surveyEn: 'Youth in Transition Survey',
      surveyFr: 'Enquête auprès des jeunes en transition',
    },
    {
      surveyCode: '4436',
      surveyEn: 'Survey of 1995 Graduates Who Moved to the United States',
      surveyFr:
        'Enquête auprès des diplômés de 1995 qui sont déménagés aux États-Unis',
    },
    {
      surveyCode: '4438',
      surveyEn: 'Public Service Employee Survey',
      surveyFr: 'Sondage auprès des fonctionnaires fédéraux',
    },
    {
      surveyCode: '4439',
      surveyEn: 'Travel Activities and Motivation Survey',
      surveyFr:
        'Enquête sur les activités et les préférences en matière de voyages',
    },
    {
      surveyCode: '4440',
      surveyEn: 'Canadian Tobacco, Alcohol and Drugs Survey',
      surveyFr: "Enquête canadienne sur le tabac, l'alcool et les drogues",
    },
    {
      surveyCode: '4441',
      surveyEn: 'P.E.I. Community Access Points Survey',
      surveyFr: "Enquête sur le programme d'accès communautaire I.P.E.",
    },
    {
      surveyCode: '4442',
      surveyEn: 'Survey of Approaches to Educational Planning',
      surveyFr:
        'Enquête sur les approches en matière de planification des études',
    },
    {
      surveyCode: '4445',
      surveyEn: 'Community Employment Innovation Project',
      surveyFr: "Projet d'innovation en emploi communautaire",
    },
    {
      surveyCode: '4446',
      surveyEn: 'Post-Secondary Education Participation Survey',
      surveyFr: 'Enquête sur la participation aux études postsecondaires',
    },
    {
      surveyCode: '4449',
      surveyEn: 'Compensation Sector Survey',
      surveyFr: 'Sondage secteur de la rémunération',
    },
    {
      surveyCode: '4450',
      surveyEn: 'National Longitudinal Survey of Children and Youth',
      surveyFr: 'Enquête longitudinale nationale sur les enfants et les jeunes',
    },
    {
      surveyCode: '4500',
      surveyEn: 'General Social Survey -  Education, Work and Retirement',
      surveyFr:
        'Enquête sociale générale -  Les études, le travail et la retraite',
    },
    {
      surveyCode: '4501',
      surveyEn: 'General Social Survey - Family',
      surveyFr: 'Enquête sociale générale - Famille',
    },
    {
      surveyCode: '4502',
      surveyEn: 'General Social Survey - Caregiving and Care Receiving',
      surveyFr: 'Enquête sociale générale - Les soins donnés et reçus',
    },
    {
      surveyCode: '4503',
      surveyEn: 'General Social Survey - Time Use',
      surveyFr: "Enquête sociale générale - L'emploi du temps",
    },
    {
      surveyCode: '4504',
      surveyEn: 'General Social Survey - Victimization',
      surveyFr: 'Enquête sociale générale - Victimisation',
    },
    {
      surveyCode: '4505',
      surveyEn:
        'General Social Survey - Access to and Use of Information Communication Technology',
      surveyFr:
        "Enquête sociale générale - L'accès et l'utilisation des technologies de l'information et des communications",
    },
    {
      surveyCode: '4508',
      surveyEn: 'Ethnic Diversity Survey',
      surveyFr: 'Enquête sur la diversité ethnique',
    },
    {
      surveyCode: '4701',
      surveyEn: 'Annual Survey of the Aquaculture Industry',
      surveyFr: "Enquête annuelle auprès de l'industrie de l'aquaculture",
    },
    {
      surveyCode: '4702',
      surveyEn: 'Survey of the Construction Industry',
      surveyFr: "Enquête de l'industrie de construction",
    },
    {
      surveyCode: '4703',
      surveyEn: 'Survey of the Couriers and Local Messengers Industry',
      surveyFr:
        "Enquête sur l'industrie de messageries et des services locaux de messagers",
    },
    {
      surveyCode: '4704',
      surveyEn:
        'Annual Survey of Service Industries: Food Services and Drinking Places',
      surveyFr:
        'Enquête annuelle sur les industries de services : services de restauration et débits de boissons',
    },
    {
      surveyCode: '4705',
      surveyEn:
        'Annual Survey of Service Industries: Real Estate Rental and Leasing and Property Management',
      surveyFr:
        'Enquête annuelle sur les industries de services : location, location à bail et gestion de biens immobiliers',
    },
    {
      surveyCode: '4706',
      surveyEn:
        'Annual Survey of Service Industries: Real Estate Agents, Brokers, Appraisers and Other Real Estate Activities',
      surveyFr:
        "Enquête annuelle sur les industries de services : bureaux d'agents, de courtiers en immeubles et d'évaluateurs de biens immobiliers et des activités liées à l'immobilier",
    },
    {
      surveyCode: '4707',
      surveyEn: 'Survey of the Taxi and Limousine Services Industry',
      surveyFr: "Enquête sur l'industrie des services de taxi et de limousine",
    },
    {
      surveyCode: '4710',
      surveyEn: 'Survey of Service Industries: Newspaper Publishers',
      surveyFr: 'Enquête sur les industries de services : éditeurs de journaux',
    },
    {
      surveyCode: '4711',
      surveyEn:
        'Annual Survey of Service Industries: Database, Directory and Specialty Publishers',
      surveyFr:
        'Enquête annuelle sur les industries de services : éditeurs de bases de données, de répertoires et de spécialités',
    },
    {
      surveyCode: '4714',
      surveyEn:
        'Annual Survey of Service Industries: Translation and Interpretation Services',
      surveyFr:
        'Enquête annuelle sur les industries de services : Traduction et interprétation',
    },
    {
      surveyCode: '4715',
      surveyEn: 'Annual Survey of Service Industries: Surveying and Mapping',
      surveyFr:
        'Enquête annuelle sur les industries de services : prospection, arpentage et cartographie',
    },
    {
      surveyCode: '4716',
      surveyEn: 'Annual Survey of Service Industries: Accounting Services',
      surveyFr:
        'Enquête annuelle sur les industries de services : services de comptabilité',
    },
    {
      surveyCode: '4717',
      surveyEn: 'Annual Survey of Service Industries: Consulting Services',
      surveyFr:
        'Enquête annuelle sur les industries de services : services de conseils',
    },
    {
      surveyCode: '4718',
      surveyEn: 'Annual Survey of Service Industries: Employment Services',
      surveyFr:
        "Enquête annuelle sur les industries de services : services d'emploi",
    },
    {
      surveyCode: '4719',
      surveyEn: 'Annual Survey of Service Industries: Specialized Design',
      surveyFr:
        'Enquête annuelle sur les industries de services : design spécialisé',
    },
    {
      surveyCode: '4720',
      surveyEn:
        'Annual Survey of Service Industries: Repair and Maintenance Services',
      surveyFr:
        "Enquête annuelle sur les industries de services: services de réparation et d'entretien",
    },
    {
      surveyCode: '4721',
      surveyEn:
        'Annual Survey of Service Industries: Automotive Repair and Maintenance Services',
      surveyFr:
        'Enquête annuelle sur les industries de services : Services de réparation et entretien de véhicules automobiles',
    },
    {
      surveyCode: '4722',
      surveyEn:
        'Annual Survey of Service Industries: Repair and Maintenance Services Excluding Automotive',
      surveyFr:
        'Enquête annuelle sur les industries de service : Services de réparation et entretien excluant les véhicules automobiles',
    },
    {
      surveyCode: '5000',
      surveyEn: 'National Tenant Satisfaction Survey',
      surveyFr: 'Sondage national sur la satisfaction des locataires',
    },
    {
      surveyCode: '5001',
      surveyEn: 'Survey of Knowledge Management Practices',
      surveyFr: 'Enquête sur les pratiques de gestion des connaissances',
    },
    {
      surveyCode: '5002',
      surveyEn: 'Health Services Access Survey',
      surveyFr: "Enquête sur l'accès aux services de santé",
    },
    {
      surveyCode: '5003',
      surveyEn:
        'National Population Health Survey: Health Institutions Component, Longitudinal',
      surveyFr:
        'Enquête nationale sur la santé de la population: Volet établissements de soins de santé, longitudinal',
    },
    {
      surveyCode: '5004',
      surveyEn: 'National Population Health Survey: North Component',
      surveyFr: 'Enquête nationale sur la santé de la population : Volet nord',
    },
    {
      surveyCode: '5005',
      surveyEn: 'Frontier Counts',
      surveyFr: 'Dénombrement à la frontière',
    },
    {
      surveyCode: '5010',
      surveyEn:
        'Survey of Improvement and Innovation in Construction Investments',
      surveyFr:
        "Enquête sur l'amélioration et l'innovation dans le domaine des investissements en construction",
    },
    {
      surveyCode: '5012',
      surveyEn: 'National Graduates Survey',
      surveyFr: 'Enquête nationale auprès des diplômés',
    },
    {
      surveyCode: '5013',
      surveyEn: 'Retirement Savings Data',
      surveyFr: "Données sur l'épargne-retraite",
    },
    {
      surveyCode: '5014',
      surveyEn: 'Investment in Non-residential Building Construction',
      surveyFr: 'Investissement en construction de bâtiments non résidentiels',
    },
    {
      surveyCode: '5015',
      surveyEn: 'Canadian Community Health Survey - Mental Health',
      surveyFr:
        'Enquête sur la santé dans les collectivités canadiennes - Santé mentale',
    },
    {
      surveyCode: '5016',
      surveyEn: 'Residential Construction Investment',
      surveyFr: 'Investissement en construction résidentielle',
    },
    {
      surveyCode: '5017',
      surveyEn: 'Postsecondary Student Information System',
      surveyFr: "Système d'information sur les étudiants postsecondaires",
    },
    {
      surveyCode: '5019',
      surveyEn: 'Maternity Experiences Survey',
      surveyFr: 'Enquête sur les expériences de la maternité',
    },
    {
      surveyCode: '5020',
      surveyEn: 'Joint Canada/United States Survey of Health',
      surveyFr: 'Enquête conjointe Canada/États-Unis sur la santé',
    },
    {
      surveyCode: '5021',
      surveyEn: 'Human Genetic Material Survey',
      surveyFr: 'Enquête sur le matériel génétique humain',
    },
    {
      surveyCode: '5023',
      surveyEn: 'National Survey of Community Sector Organizations',
      surveyFr: 'Enquête nationale sur les organismes du secteur communautaire',
    },
    {
      surveyCode: '5024',
      surveyEn: 'General Social Survey - Social Identity',
      surveyFr: 'Enquête sociale générale - Identité sociale',
    },
    {
      surveyCode: '5026',
      surveyEn: 'Monthly Civil Aviation Survey',
      surveyFr: "Enquête mensuelle sur l'aviation civile",
    },
    {
      surveyCode: '5027',
      surveyEn: 'Monthly Survey of Large Retailers',
      surveyFr: 'Enquête mensuelle sur les grands détaillants',
    },
    {
      surveyCode: '5028',
      surveyEn: 'Financial Performance Data',
      surveyFr: 'Données sur la performance financière',
    },
    {
      surveyCode: '5029',
      surveyEn: 'Balance Sheet of the Agricultural Sector at December 31',
      surveyFr: 'Bilan du secteur agricole au 31 décembre',
    },
    {
      surveyCode: '5030',
      surveyEn: 'Agriculture Value Added Account',
      surveyFr: 'Compte de la valeur ajoutée agricole',
    },
    {
      surveyCode: '5031',
      surveyEn: 'Farm Business Cash Flows',
      surveyFr: "Mouvements de l'encaisse des entreprises agricoles",
    },
    {
      surveyCode: '5032',
      surveyEn: 'Computer and peripherals price indexes',
      surveyFr: 'Indices des prix des ordinateurs et des périphériques',
    },
    {
      surveyCode: '5034',
      surveyEn: 'Survey of Commercial and Institutional Energy Use',
      surveyFr:
        "Enquête sur l'utilisation commerciale et institutionnelle d'énergie",
    },
    {
      surveyCode: '5035',
      surveyEn: 'Victim Services Survey',
      surveyFr: 'Enquête sur les services aux victimes',
    },
    {
      surveyCode: '5036',
      surveyEn: 'National Compensation Survey',
      surveyFr: 'Enquête nationale sur la compensation',
    },
    {
      surveyCode: '5037',
      surveyEn: 'Pilot Survey on Police-Reported Hate Crimes',
      surveyFr: 'Enquête pilote sur les crimes haineux déclarés par la police',
    },
    {
      surveyCode: '5038',
      surveyEn: 'Functional Foods and Natural Health Products Survey',
      surveyFr:
        'Enquête sur les aliments fonctionnels et les produits de santé naturels ',
    },
    {
      surveyCode: '5039',
      surveyEn: 'Production of Poultry and Eggs',
      surveyFr: "Production de volaille et d'oeufs",
    },
    {
      surveyCode: '5040',
      surveyEn: 'Farm Product Price Index',
      surveyFr: 'Indice des prix des produits agricoles',
    },
    {
      surveyCode: '5041',
      surveyEn: 'Telecommunications Services Price Index',
      surveyFr: 'Indice de prix de services de télécommunications',
    },
    {
      surveyCode: '5042',
      surveyEn: 'Labour Productivity Measures - National (Quarterly)',
      surveyFr:
        'Mesures de la productivité du travail - National (trimestrielles)',
    },
    {
      surveyCode: '5044',
      surveyEn: 'Farm Management Survey',
      surveyFr: 'Enquête sur la gestion des fermes',
    },
    {
      surveyCode: '5045',
      surveyEn: 'Culture Services Trade',
      surveyFr: 'Commerce de services de la culture',
    },
    {
      surveyCode: '5046',
      surveyEn: 'Feed Grain Purchases Survey',
      surveyFr: 'Enquête sur les achats de grains fourragers',
    },
    {
      surveyCode: '5047',
      surveyEn: 'Annual Industrial Consumption of Energy Survey',
      surveyFr: "Enquête annuelle sur la consommation industrielle d'énergie",
    },
    {
      surveyCode: '5048',
      surveyEn: 'Aboriginal Entrepreneurs Survey',
      surveyFr: 'Enquête sur les entrepreneurs autochtones',
    },
    {
      surveyCode: '5049',
      surveyEn: 'Canadian Community Health Survey - Nutrition',
      surveyFr:
        'Enquête sur la santé dans les collectivités canadiennes - Nutrition',
    },
    {
      surveyCode: '5050',
      surveyEn:
        'Business Conditions Survey for the Traveller Accommodation Industry',
      surveyFr:
        "Enquête sur les perspectives du monde des affaires pour le secteur de l'hébergement des voyageurs",
    },
    {
      surveyCode: '5051',
      surveyEn: 'Information and Communications Technologies in Schools Survey',
      surveyFr:
        "Enquête sur les technologies de l'information et des communications dans les écoles",
    },
    {
      surveyCode: '5052',
      surveyEn: 'Civil Court Survey',
      surveyFr: 'Enquête sur les tribunaux civils',
    },
    {
      surveyCode: '5053',
      surveyEn: 'Ontario Employment Benefits and Support Measures Survey',
      surveyFr:
        "Enquête sur les prestations d'emploi et les mesures de soutien en Ontario",
    },
    {
      surveyCode: '5054',
      surveyEn: 'Natural Health Products Survey',
      surveyFr: 'Enquête sur les produits de santé naturels',
    },
    {
      surveyCode: '5055',
      surveyEn: 'Official Languages Demand for Services Survey',
      surveyFr:
        'Enquête sur la demande de services dans les langues officielles',
    },
    {
      surveyCode: '5056',
      surveyEn: 'Characteristics of Growth Firms',
      surveyFr: 'Caractéristiques des entreprises en croissance',
    },
    {
      surveyCode: '5057',
      surveyEn: 'Longitudinal Immigration Database',
      surveyFr: "Base de données longitudinales sur l'immigration",
    },
    {
      surveyCode: '5058',
      surveyEn: 'Youth in Transition Survey, 15 year-olds (Reading Cohort)',
      surveyFr:
        'Enquête auprès des jeunes en transition - 15 ans (Cohorte lecture)',
    },
    {
      surveyCode: '5059',
      surveyEn:
        'Youth in Transition Survey, 15 year-olds  (Mathematics Cohort)',
      surveyFr:
        'Enquête auprès des jeunes en transition - 15 ans (Cohorte mathématique)',
    },
    {
      surveyCode: '5060',
      surveyEn: 'Programme for International Student Assessment',
      surveyFr: 'Programme international pour le suivi des acquis des élèves',
    },
    {
      surveyCode: '5061',
      surveyEn: 'Wholesale Trade Commodity Survey by Origin and Destination',
      surveyFr:
        "Enquête sur les marchandises vendues en gros selon l'origine et la destination",
    },
    {
      surveyCode: '5062',
      surveyEn: 'Wage Survey of Seasonal Workers in the Horticultural Sector',
      surveyFr:
        'Enquête sur les salaires des employés saisonniers du secteur horticole',
    },
    {
      surveyCode: '5063',
      surveyEn:
        'Price Survey of Assistive Devices For Persons With Disabilities',
      surveyFr:
        'Enquête sur les prix des appareils fonctionnels pour les personnes ayant des incapacités',
    },
    {
      surveyCode: '5064',
      surveyEn: 'Couriers and Messengers Services Price Index',
      surveyFr:
        'Indice des prix des services de messageries et de services de messagers',
    },
    {
      surveyCode: '5065',
      surveyEn: 'Survey of Principals',
      surveyFr: "Enquête auprès des directeurs d'école",
    },
    {
      surveyCode: '5066',
      surveyEn: 'Future to Discover Project',
      surveyFr: 'Projet « Un avenir à découvrir »',
    },
    {
      surveyCode: '5067',
      surveyEn: 'Communities Survey',
      surveyFr: 'Enquête sur les communautés',
    },
    {
      surveyCode: '5068',
      surveyEn: 'Commercial Software Price Index',
      surveyFr: 'Indice des prix des logiciels commerciaux',
    },
    {
      surveyCode: '5069',
      surveyEn: 'Survey of People Living On Reserves',
      surveyFr: 'Enquête auprès des personnes vivant dans les réserves',
    },
    {
      surveyCode: '5070',
      surveyEn: 'International Survey of Reading Skills',
      surveyFr: 'Enquête internationale sur les compétences en lecture',
    },
    {
      surveyCode: '5071',
      surveyEn: 'Canadian Health Measures Survey',
      surveyFr: 'Enquête canadienne sur les mesures de la santé',
    },
    {
      surveyCode: '5072',
      surveyEn: 'Innovation in the Food Processing Industry Survey',
      surveyFr:
        "Enquête sur l'innovation dans l'industrie de la transformation des aliments",
    },
    {
      surveyCode: '5073',
      surveyEn: 'Bioproducts Production and Development Survey',
      surveyFr: 'Enquête sur la production et le développement des bioproduits',
    },
    {
      surveyCode: '5075',
      surveyEn: 'Register of Postsecondary and Adult Education Institutions',
      surveyFr:
        "Registre des établissements postsecondaires et d'éducation des adultes",
    },
    {
      surveyCode: '5076',
      surveyEn: 'Federal Jurisdiction Workplace Survey',
      surveyFr: 'Enquête sur les milieux de travail de compétence fédérale',
    },
    {
      surveyCode: '5077',
      surveyEn: 'April Cattle Survey',
      surveyFr: "Enquête d'avril sur les bovins",
    },
    {
      surveyCode: '5080',
      surveyEn: 'National Survey of the Work and Health of Nurses',
      surveyFr:
        'Enquête nationale sur le travail et la santé du personnel infirmier',
    },
    {
      surveyCode: '5081',
      surveyEn: 'Greenhouse Gas Emissions Report',
      surveyFr: 'Déclarations des émissions de gaz à effet de serre',
    },
    {
      surveyCode: '5082',
      surveyEn: 'Secondary School Graduates Survey',
      surveyFr: 'Enquête sur les diplômés des écoles secondaires',
    },
    {
      surveyCode: '5083',
      surveyEn: 'Security Intelligence Review Committee Employee Survey',
      surveyFr:
        'Sondage auprès des employé(e)s du comité de surveillance des activités de renseignement de sécurité',
    },
    {
      surveyCode: '5084',
      surveyEn:
        'Canadian Armed Forces Members and Veterans Mental Health Follow-up Survey',
      surveyFr:
        'Enquête de suivi sur la santé mentale auprès des membres des Forces armées canadiennes et des ex-militaires',
    },
    {
      surveyCode: '5085',
      surveyEn: 'National Energy Board Employee Survey',
      surveyFr:
        "Sondage auprès des employé(e)s de l'Office national de l'énergie",
    },
    {
      surveyCode: '5086',
      surveyEn: 'Canadian Food Inspection Agency Employee Survey',
      surveyFr:
        "Sondage auprès des employés de l'Agence canadienne d'inspection des aliments",
    },
    {
      surveyCode: '5087',
      surveyEn: 'Canada Revenue Agency Employee Survey',
      surveyFr:
        "Sondage auprès des employé(e)s de l'Agence du revenu du Canada",
    },
    {
      surveyCode: '5088',
      surveyEn: 'Culture Trade - Goods',
      surveyFr: 'Commerce de biens de la culture',
    },
    {
      surveyCode: '5089',
      surveyEn: 'Annual Head Office Survey',
      surveyFr: 'Enquête annuelle auprès des sièges sociaux',
    },
    {
      surveyCode: '5090',
      surveyEn: 'Language Industry Survey',
      surveyFr: "Enquête sur l'industrie de la langue",
    },
    {
      surveyCode: '5091',
      surveyEn: 'Survey of Service Industries: Periodical Publishers',
      surveyFr:
        'Enquête sur les industries de services: éditeurs de périodiques',
    },
    {
      surveyCode: '5092',
      surveyEn: 'Geomatics Industry Survey',
      surveyFr: 'Enquête sur le secteur de la géomatique',
    },
    {
      surveyCode: '5093',
      surveyEn: 'Survey of Regulatory Compliance Cost',
      surveyFr:
        'Enquête sur le coût de la mise en conformité à la réglementation',
    },
    {
      surveyCode: '5095',
      surveyEn: 'Survey of Business Incubation',
      surveyFr: "Enquête sur l'incubation d'entreprise",
    },
    {
      surveyCode: '5096',
      surveyEn:
        'Federal Science Expenditures Intended to Benefit Developing Countries',
      surveyFr:
        "Dépenses fédérales en sciences à l'intention des pays en voie de développement",
    },
    {
      surveyCode: '5097',
      surveyEn:
        'Research and Development in Canadian Industry Intended to Directly Benefit Developing Countries',
      surveyFr:
        "Recherche et développement dans l'industrie canadienne à l'intention des pays en voie de développement",
    },
    {
      surveyCode: '5099',
      surveyEn: 'Survey on the Vitality of Official-Language Minorities',
      surveyFr: 'Enquête sur la vitalité des minorités de langue officielle',
    },
    {
      surveyCode: '5100',
      surveyEn: 'Crop Protection Survey',
      surveyFr: 'Enquête sur la protection des cultures',
    },
    {
      surveyCode: '5101',
      surveyEn: 'British Columbia Smoking Survey',
      surveyFr: 'Enquête sur le tabagisme en Colombie-Britannique',
    },
    {
      surveyCode: '5102',
      surveyEn: 'Elementary-Secondary Education Survey',
      surveyFr: "Enquête sur l'enseignement primaire et secondaire",
    },
    {
      surveyCode: '5103',
      surveyEn:
        'Labour Productivity Measures - Provinces and Territories (Annual)',
      surveyFr:
        'Mesures de la productivité du travail - Provinces et territoires (annuelles)',
    },
    {
      surveyCode: '5104',
      surveyEn: 'Quarterly Industry Revenue Indices',
      surveyFr: 'Indices trimestriels du revenu des industries',
    },
    {
      surveyCode: '5105',
      surveyEn: 'Survey of Payday Loan Services',
      surveyFr: 'Enquête sur les services de prêts sur salaire',
    },
    {
      surveyCode: '5106',
      surveyEn: 'Wholesale Services Price Index',
      surveyFr: 'Indice des prix des services du commerce de gros',
    },
    {
      surveyCode: '5107',
      surveyEn: 'Livestock Farm Practices Survey',
      surveyFr: "Enquête sur les pratiques des fermes d'élevage",
    },
    {
      surveyCode: '5108',
      surveyEn: "Aboriginal Children's Survey",
      surveyFr: 'Enquête sur les enfants autochtones',
    },
    {
      surveyCode: '5109',
      surveyEn: 'Higher Education Research and Development Estimates',
      surveyFr:
        "Estimation des dépenses de R-D dans le domaine de l'enseignement supérieur",
    },
    {
      surveyCode: '5110',
      surveyEn: 'Satellite Account of Nonprofit Institutions and Volunteering',
      surveyFr:
        'Compte satellite des organismes sans but lucratif du secteur bénévole',
    },
    {
      surveyCode: '5113',
      surveyEn:
        'Health Research and Development Expenditures by Therapeutic Class',
      surveyFr:
        'Dépenses de recherche et développement dans le domaine de la santé selon la catégorie thérapeutique',
    },
    {
      surveyCode: '5114',
      surveyEn:
        'Canadian System of Environmental and Resource Accounts - Natural Resource Asset Accounts',
      surveyFr:
        "Système des comptes de l'environnement et des ressources du Canada - Comptes des actifs en ressources naturelles",
    },
    {
      surveyCode: '5115',
      surveyEn:
        'Canadian System of Environmental-Economic Accounts - Physical Flow Accounts',
      surveyFr:
        'Système de comptabilité économique et environnementale du Canada - Comptes des flux physiques',
    },
    {
      surveyCode: '5117',
      surveyEn: 'International Youth Survey',
      surveyFr: 'Enquête internationale auprès des jeunes',
    },
    {
      surveyCode: '5119',
      surveyEn: 'Youth Shelter Pilot Survey',
      surveyFr: "Enquête pilote sur les centres d'hébergements pour jeunes",
    },
    {
      surveyCode: '5120',
      surveyEn: 'Industrial Water Survey',
      surveyFr: "Enquête sur l'eau dans les industries",
    },
    {
      surveyCode: '5121',
      surveyEn:
        'Business Conditions Survey for Heritage Institutions, Performing Arts, and Recreation and Entertainment Industries',
      surveyFr:
        'Enquête sur les perspectives du monde des affaires pour le secteur : des établissements du patrimoine; des arts de la scène; de divertissement et de loisirs',
    },
    {
      surveyCode: '5122',
      surveyEn: 'Survey of Canadian Attitudes toward Learning',
      surveyFr:
        "Enquête sur les attitudes des Canadiens à l'égard de l'apprentissage",
    },
    {
      surveyCode: '5123',
      surveyEn: 'Commercial Rents Services Price Index',
      surveyFr: 'Indice des prix des services des loyers commerciaux',
    },
    {
      surveyCode: '5124',
      surveyEn: 'Trade by Exporter Characteristics - Goods',
      surveyFr: 'Commerce selon les caractéristiques des exportateurs - Biens',
    },
    {
      surveyCode: '5125',
      surveyEn: 'Canadian Coroner and Medical Examiner Database',
      surveyFr:
        'Base canadienne de données des coroners et des médecins légistes',
    },
    {
      surveyCode: '5126',
      surveyEn:
        'Immigration and Diversity: Population Projections for Canada and its Regions',
      surveyFr:
        'Immigration et diversité : projections de la population du Canada et de ses régions',
    },
    {
      surveyCode: '5127',
      surveyEn: 'Air Quality Indicators',
      surveyFr: "Indicateurs de la qualité de l'air",
    },
    {
      surveyCode: '5128',
      surveyEn: 'Freshwater Quality Indicator',
      surveyFr: "Indicateur de la qualité de l'eau douce",
    },
    {
      surveyCode: '5129',
      surveyEn: 'Greenhouse Gas Emissions Indicator',
      surveyFr: 'Indicateur des émissions de gaz à effet de serre',
    },
    {
      surveyCode: '5131',
      surveyEn:
        'Projections of the Aboriginal Population and Households in Canada',
      surveyFr:
        'Projections de la population et des ménages autochtones au Canada',
    },
    {
      surveyCode: '5132',
      surveyEn:
        'Annual Survey of Service Industries: Spectator Sports, Event Promoters, Artists and Related Industries',
      surveyFr:
        "Enquête annuelle sur les industries de services : sports-spectacles, promoteurs d'événements, artistes et industries connexes",
    },
    {
      surveyCode: '5133',
      surveyEn: 'Survey of Fraud Against Businesses',
      surveyFr: 'Enquête sur la fraude contre les entreprises',
    },
    {
      surveyCode: '5134',
      surveyEn: 'Language of Work Survey',
      surveyFr: 'Sondage sur la langue de travail',
    },
    {
      surveyCode: '5135',
      surveyEn: 'Retail Services Price Index',
      surveyFr: 'Indice des prix des services du commerce de détail',
    },
    {
      surveyCode: '5136',
      surveyEn: 'For-hire Motor Carrier Freight Services Price Index',
      surveyFr:
        "Indice des prix des services de camionnage pour compte d'autrui",
    },
    {
      surveyCode: '5137',
      surveyEn:
        'Commercial and Industrial Machinery and Equipment Rental and Leasing Services Price Index',
      surveyFr:
        "Indice des prix des services de location et de location à bail de machines et de matériel d'usage commercial et industriel",
    },
    {
      surveyCode: '5138',
      surveyEn: 'Canadian Survey of Experiences with Primary Health Care',
      surveyFr:
        "Enquête canadienne sur l'expérience des soins de santé primaires",
    },
    {
      surveyCode: '5139',
      surveyEn: 'Indian Claims Commission Employee Survey',
      surveyFr:
        'Sondage auprès des employé(e)s de la Commission des revendications des Indiens',
    },
    {
      surveyCode: '5140',
      surveyEn: 'Survey on the Commercialisation of Innovation',
      surveyFr: "Enquête sur la commercialisation de l'innovation",
    },
    {
      surveyCode: '5141',
      surveyEn: 'Property & Casualty Insurance Services Price Index',
      surveyFr:
        "Indice des prix des services d'assurance de biens et de risques divers",
    },
    {
      surveyCode: '5142',
      surveyEn: 'Export Import Price Report',
      surveyFr: 'Rapport sur les prix des exportations et des importations',
    },
    {
      surveyCode: '5143',
      surveyEn: 'Survey of Colleges and Institutes',
      surveyFr: 'Enquête sur les collèges et les instituts',
    },
    {
      surveyCode: '5144',
      surveyEn: 'Longitudinal and International Study of Adults',
      surveyFr: 'Étude longitudinale et internationale des adultes',
    },
    {
      surveyCode: '5145',
      surveyEn: 'Agricultural Water Survey',
      surveyFr: "Enquête sur l'eau dans l'agriculture",
    },
    {
      surveyCode: '5146',
      surveyEn: 'Canadian Community Health Survey - Healthy Aging',
      surveyFr:
        'Enquête sur la santé dans les collectivités canadiennes - Vieillissement en santé',
    },
    {
      surveyCode: '5147',
      surveyEn: 'Staffing and Non-Partisanship Survey',
      surveyFr: "Sondage sur la dotation et l'impartialité politique",
    },
    {
      surveyCode: '5148',
      surveyEn: 'Fertilizer Shipments Survey',
      surveyFr: "Enquête sur les expéditions d'engrais",
    },
    {
      surveyCode: '5149',
      surveyEn: 'Biennial Drinking Water Plants Survey',
      surveyFr:
        "Enquête biennale sur les usines de traitement de l'eau potable",
    },
    {
      surveyCode: '5150',
      surveyEn: 'Survey on Financing of Co-operatives',
      surveyFr: 'Enquête sur le financement des coopératives',
    },
    {
      surveyCode: '5151',
      surveyEn: 'Access and Support to Education and Training Survey',
      surveyFr:
        "Enquête sur l'accès et le soutien à l'éducation et la formation",
    },
    {
      surveyCode: '5152',
      surveyEn:
        'Canadian Community Health Survey: Mental Health Stigma and Discrimination Content Module - Test',
      surveyFr:
        "Enquête sur la santé dans les collectivités canadiennes : mise à l'essai - module stigmatisation et discrimination en santé mentale",
    },
    {
      surveyCode: '5153',
      surveyEn: 'Grain Used for Industrial Purposes Survey',
      surveyFr: "Enquête sur l'utilisation industrielle des grains",
    },
    {
      surveyCode: '5154',
      surveyEn: 'Survey on Small R&D Performers',
      surveyFr: 'Enquête sur les petits exécutants de R-D',
    },
    {
      surveyCode: '5155',
      surveyEn: 'Investment in New Housing Construction',
      surveyFr: 'Investissement dans la construction de logements neufs',
    },
    {
      surveyCode: '5156',
      surveyEn: 'Agriculture Frame Update Survey',
      surveyFr: 'Enquête sur la mise à jour de la base de sondage agricole',
    },
    {
      surveyCode: '5157',
      surveyEn: 'Entrepreneurship Indicators Database',
      surveyFr: "Base de données des indicateurs d'entrepreneuriat",
    },
    {
      surveyCode: '5158',
      surveyEn: 'Survey of Older Workers',
      surveyFr: 'Enquête sur les travailleurs âgés',
    },
    {
      surveyCode: '5159',
      surveyEn: 'Canadian Financial Capability Survey',
      surveyFr: 'Enquête canadienne sur les capacités financières',
    },
    {
      surveyCode: '5160',
      surveyEn: 'Survey on Living with Chronic Diseases in Canada',
      surveyFr:
        'Enquête sur les personnes ayant une maladie chronique au Canada',
    },
    {
      surveyCode: '5161',
      surveyEn: 'Ontario Material Deprivation Survey',
      surveyFr: 'Enquête sur la privation matérielle en Ontario',
    },
    {
      surveyCode: '5162',
      surveyEn: 'Nunavut Housing Needs Survey',
      surveyFr: 'Enquête sur les besoins en logements au Nunavut',
    },
    {
      surveyCode: '5163',
      surveyEn: 'Survey of Industrial Processes',
      surveyFr: 'Enquête sur les processus industriels',
    },
    {
      surveyCode: '5164',
      surveyEn: 'Parks Canada Employee Survey',
      surveyFr: 'Sondage auprès des employés de Parcs Canada',
    },
    {
      surveyCode: '5165',
      surveyEn: 'Public Service Financial Community Survey',
      surveyFr: 'Enquête sur la communauté financière de la fonction publique',
    },
    {
      surveyCode: '5166',
      surveyEn: 'Canada-United States Border Survey',
      surveyFr: 'Enquête sur la frontière canado-américaine',
    },
    {
      surveyCode: '5167',
      surveyEn: 'Survey of People Living in First Nations Communities',
      surveyFr:
        'Enquête auprès des peuples vivant dans les collectivités des Premières nations',
    },
    {
      surveyCode: '5168',
      surveyEn:
        'Annual Survey of Secondary Distributors of Refined Petroleum Products',
      surveyFr:
        'Enquête annuelle sur les distributeurs secondaires de produits pétroliers raffinés',
    },
    {
      surveyCode: '5169',
      surveyEn: 'Stock and Consumption of Fixed Residential Capital',
      surveyFr: 'Stock et consommation de capital fixe résidentiel',
    },
    {
      surveyCode: '5170',
      surveyEn: 'Logistics Service Industries Border Survey',
      surveyFr:
        'Enquête frontalière sur les industries des services logistiques',
    },
    {
      surveyCode: '5171',
      surveyEn: 'Survey of Innovation and Business Strategy',
      surveyFr: "Enquête sur l'innovation et les stratégies d'entreprise",
    },
    {
      surveyCode: '5172',
      surveyEn: 'Life After Service Survey',
      surveyFr: 'Enquête sur la vie après le service militaire',
    },
    {
      surveyCode: '5173',
      surveyEn: "Canada's Core Public Infrastructure Survey",
      surveyFr:
        'Enquête sur les infrastructures publiques essentielles du Canada',
    },
    {
      surveyCode: '5174',
      surveyEn: 'Government Finance Statistics',
      surveyFr: 'Statistiques de finances publiques',
    },
    {
      surveyCode: '5175',
      surveyEn: 'Prepared Food and Beverage Sales Survey',
      surveyFr:
        "Enquête sur les ventes d'aliments et de boissons prêts à servir",
    },
    {
      surveyCode: '5177',
      surveyEn: 'Crop Condition Assessment Program',
      surveyFr: "Programme d'évaluation de l'état des cultures",
    },
    {
      surveyCode: '5178',
      surveyEn: 'National Household Survey',
      surveyFr: 'Enquête nationale auprès des ménages',
    },
    {
      surveyCode: '5179',
      surveyEn: 'Survey of Young Canadians',
      surveyFr: 'Enquête sur les jeunes Canadiens',
    },
    {
      surveyCode: '5180',
      surveyEn: 'Workplace Survey',
      surveyFr: 'Enquête sur le milieu de travail',
    },
    {
      surveyCode: '5181',
      surveyEn: 'Electricity Disposition - Quarterly Residential Sector',
      surveyFr: "Écoulement de l'électricité - Trimestriel Secteur résidentiel",
    },
    {
      surveyCode: '5182',
      surveyEn: 'Survey on Living with Neurological Conditions in Canada',
      surveyFr:
        'Enquête sur les personnes ayant des problèmes neurologiques au Canada',
    },
    {
      surveyCode: '5183',
      surveyEn: 'Survey of Intellectual Property Management',
      surveyFr: 'Enquête sur la gestion de la propriété intellectuelle',
    },
    {
      surveyCode: '5184',
      surveyEn: 'Pilot Survey on Tobacco Use',
      surveyFr: "Enquête pilote sur l'usage du tabac",
    },
    {
      surveyCode: '5185',
      surveyEn: 'Childhood National Immunization Coverage Survey',
      surveyFr: 'Enquête nationale sur la couverture vaccinale des enfants',
    },
    {
      surveyCode: '5186',
      surveyEn:
        'Quarterly Survey of Capital Expenditures - Oil and Gas Activities',
      surveyFr:
        'Relevé trimestriel des dépenses en immobilisations - Activités pétrolières et gazières',
    },
    {
      surveyCode: '5187',
      surveyEn: 'Survey of Neurological Conditions in Institutions in Canada',
      surveyFr:
        'Enquête sur les problèmes neurologiques dans les établissements au Canada',
    },
    {
      surveyCode: '5188',
      surveyEn: 'Federal Patents, Licences and Royalties Survey',
      surveyFr: 'Enquête sur les brevets, licences et redevances fédérales',
    },
    {
      surveyCode: '5189',
      surveyEn: 'Barriers to Care for People with Chronic Health Conditions',
      surveyFr:
        'Entraves aux soins destinés aux personnes ayant des problèmes de santé chroniques',
    },
    {
      surveyCode: '5190',
      surveyEn: 'Data Inventory Project',
      surveyFr: "Projet d'inventaire de données",
    },
    {
      surveyCode: '5191',
      surveyEn: 'Residential and Non-Residential Property Assessment Values',
      surveyFr:
        "Valeurs des propriétés résidentielles et non résidentielles selon l'évaluation foncière",
    },
    {
      surveyCode: '5192',
      surveyEn: 'Internet Pilot Survey on Caregiving',
      surveyFr: 'Enquête Internet pilote sur les soins donnés',
    },
    {
      surveyCode: '5193',
      surveyEn: 'Research and Development Personnel',
      surveyFr: 'Personnel affecté à la recherche et développement',
    },
    {
      surveyCode: '5194',
      surveyEn: 'Consulting Services Price Index',
      surveyFr: 'Indice des prix des services de conseils',
    },
    {
      surveyCode: '5195',
      surveyEn: 'End Use of Refined Petroleum Products - Quarterly',
      surveyFr:
        'Utilisation finale des produits pétroliers raffinés - trimestrielle',
    },
    {
      surveyCode: '5196',
      surveyEn: 'Architectural, Engineering and Related Services Price Index',
      surveyFr:
        "Indice des prix des services d'architecture, de génie et de services connexes",
    },
    {
      surveyCode: '5198',
      surveyEn: 'Gross Domestic Expenditures on Research and Development',
      surveyFr:
        'Estimations des dépenses canadiennes au titre de recherche et développement',
    },
    {
      surveyCode: '5199',
      surveyEn: 'Hazardous Waste Management Industry Survey',
      surveyFr: "Enquête sur l'industrie de la gestion des déchets dangereux",
    },
    {
      surveyCode: '5200',
      surveyEn: 'Canadian Income Survey',
      surveyFr: 'Enquête canadienne sur le revenu',
    },
    {
      surveyCode: '5201',
      surveyEn: 'Community Noise and Health Study',
      surveyFr: 'Étude sur le bruit ambiant et la santé',
    },
    {
      surveyCode: '5202',
      surveyEn: 'Job Vacancy Statistics',
      surveyFr: 'Statistiques sur les postes vacants',
    },
    {
      surveyCode: '5203',
      surveyEn: 'Long-term Care Facilities Survey',
      surveyFr: 'Enquête sur les établissements de soins de longue durée',
    },
    {
      surveyCode: '5204',
      surveyEn: 'Survey on the Use of Published Material',
      surveyFr: "Enquête sur l'utilisation de documents publiés",
    },
    {
      surveyCode: '5205',
      surveyEn: 'Ontario First Nations Point-of-Sale Exemption Survey',
      surveyFr:
        "Enquête sur l'exemption au point de vente accordée aux Premières Nations de l'Ontario",
    },
    {
      surveyCode: '5206',
      surveyEn: 'Canadian Survey of Economic Well-being',
      surveyFr: 'Enquête canadienne sur le bien-être économique',
    },
    {
      surveyCode: '5207',
      surveyEn: 'New Lending Services Price Index',
      surveyFr: 'Indice des prix des services de nouveaux prêts',
    },
    {
      surveyCode: '5208',
      surveyEn: 'Survey of Emergency Preparedness and Resilience in Canada',
      surveyFr:
        "Enquête sur la préparation aux situations d'urgence et sur la résilience",
    },
    {
      surveyCode: '5209',
      surveyEn: 'Passenger Air Services Price Index',
      surveyFr: 'Indice des prix des services aériens de passagers',
    },
    {
      surveyCode: '5210',
      surveyEn: 'Monthly Natural Gas Storage Survey',
      surveyFr: "Enquête mensuelle sur l'entreposage du gaz naturel",
    },
    {
      surveyCode: '5211',
      surveyEn: 'Securities Brokerage Services Price Index',
      surveyFr:
        'Indice des prix des services de courtage de valeurs mobilières',
    },
    {
      surveyCode: '5212',
      surveyEn: 'Infrastructure Construction Price Index',
      surveyFr: 'Indice des prix de la construction des infrastructures',
    },
    {
      surveyCode: '5213',
      surveyEn: 'Residential Property Values',
      surveyFr: 'Valeurs des propriétés résidentielles',
    },
    {
      surveyCode: '5214',
      surveyEn: 'Farm Operating Expenses and Depreciation Charges',
      surveyFr: "Dépenses d'exploitation agricoles et frais d'amortissement",
    },
    {
      surveyCode: '5215',
      surveyEn: 'Monthly Natural Gas Distribution Survey',
      surveyFr: 'Enquête mensuelle sur la distribution du gaz naturel',
    },
    {
      surveyCode: '5216',
      surveyEn: 'Research and Development in the Higher Education Sector',
      surveyFr:
        "Recherche et développement dans le secteur de l'enseignement supérieur",
    },
    {
      surveyCode: '5217',
      surveyEn: 'Job Vacancy and Wage Survey',
      surveyFr: 'Enquête sur les postes vacants et les salaires',
    },
    {
      surveyCode: '5218',
      surveyEn: 'Canadian Government Finance Statistics',
      surveyFr: 'Statistiques de finances publiques canadiennes',
    },
    {
      surveyCode: '5220',
      surveyEn: 'Pension Fund Services Price Index',
      surveyFr: 'Indice des prix des services de caisses de retraite',
    },
    {
      surveyCode: '5221',
      surveyEn: 'General Social Survey : Canadians at Work and Home',
      surveyFr:
        'Enquête Sociale Générale : Les Canadiens au travail et à la maison',
    },
    {
      surveyCode: '5222',
      surveyEn: 'Survey of Energy Consumption of Arenas',
      surveyFr: "Enquête sur la consommation d'énergie des arénas",
    },
    {
      surveyCode: '5223',
      surveyEn: 'Supply and Disposition of Grains in Canada',
      surveyFr: 'Bilan des grains au Canada',
    },
    {
      surveyCode: '5225',
      surveyEn: 'Model-based Principal Field Crop Estimates',
      surveyFr: 'Estimations modélisées des principales grandes cultures',
    },
    {
      surveyCode: '5226',
      surveyEn: 'Nunavut Government Employee Survey',
      surveyFr: 'Enquête auprès des fonctionnaires du gouvernement du Nunavut',
    },
    {
      surveyCode: '5227',
      surveyEn: 'Value of Inventory Change',
      surveyFr: 'Valeur de la variation des stocks',
    },
    {
      surveyCode: '5228',
      surveyEn: 'Canadian Employer-Employee Dynamics Database',
      surveyFr:
        'Base de données sur la dynamique canadienne entre employeurs et employés',
    },
    {
      surveyCode: '5229',
      surveyEn: 'Direct Payments to Agriculture Producers',
      surveyFr: 'Paiements directs versés aux producteurs agricoles',
    },
    {
      surveyCode: '5230',
      surveyEn: 'Activities of Foreign Majority-Owned Affiliates in Canada',
      surveyFr:
        'Activité au Canada des sociétés affiliées à participation majoritaire étrangère',
    },
    {
      surveyCode: '5231',
      surveyEn: 'Canadian National Health Survey',
      surveyFr: 'Enquête nationale canadienne sur la santé',
    },
    {
      surveyCode: '5232',
      surveyEn: 'National Travel Survey',
      surveyFr: 'Enquête nationale sur les voyages',
    },
    {
      surveyCode: '5233',
      surveyEn: 'Canadian Health Survey on Children and Youth',
      surveyFr: 'Enquête canadienne sur la santé des enfants et des jeunes',
    },
    {
      surveyCode: '5235',
      surveyEn: 'Survey on Sexual Misconduct in the Canadian Armed Forces',
      surveyFr:
        'Sondage sur les inconduites sexuelles dans les Forces armées canadiennes',
    },
    {
      surveyCode: '5236',
      surveyEn: 'Experimental New Condominium Apartment Price Index',
      surveyFr:
        'Indice expérimental des prix des appartements en copropriété neufs',
    },
    {
      surveyCode: '5237',
      surveyEn: 'Trade by Importer Characteristics - Goods',
      surveyFr: 'Commerce selon les caractéristiques des importateurs de biens',
    },
    {
      surveyCode: '5238',
      surveyEn: 'Monthly Survey of Smelters and Metal Refineries',
      surveyFr:
        "Enquête mensuelle sur les usines de fusion et d'affinage de métaux",
    },
    {
      surveyCode: '5239',
      surveyEn: 'Investment Banking Services Price Index',
      surveyFr: "Indice des prix des services bancaires d'investissement",
    },
    {
      surveyCode: '5241',
      surveyEn:
        'Household Survey Frame Service - Global Positioning System (GPS) and digital mapping pilot test',
      surveyFr:
        'Service de la base de sondage pour les enquêtes auprès des ménages - Test pilote portant sur le Système mondial de localisation (GPS) et la cartographie numérique',
    },
    {
      surveyCode: '5242',
      surveyEn: 'Canadian Armed Forces Transition and Well-being Survey',
      surveyFr:
        'Enquête sur la transition à la vie civile et le bien-être après le service dans les Forces armées canadiennes',
    },
    {
      surveyCode: '5244',
      surveyEn: 'Canadian Survey of Cyber Security and Cybercrime',
      surveyFr: 'Enquête canadienne sur la cybersécurité et le cybercrime',
    },
    {
      surveyCode: '5246',
      surveyEn: 'Annual Mineral Production Survey',
      surveyFr: 'Enquête annuelle sur la production minérale',
    },
    {
      surveyCode: '5247',
      surveyEn: 'Monthly Mineral Production Survey',
      surveyFr: 'Enquête mensuelle sur la production minérale',
    },
    {
      surveyCode: '5248',
      surveyEn: 'National Fire Information Database (NFID)',
      surveyFr: 'Base de données nationale sur les incendies (BDNI)',
    },
    {
      surveyCode: '5249',
      surveyEn: 'Pilot Survey of Non-Federally Regulated Mortgage Lenders',
      surveyFr:
        'Enquête pilote auprès des prêteurs hypothécaires non réglementés par le gouvernement fédéral',
    },
    {
      surveyCode: '5250',
      surveyEn:
        'Survey on Global Supply, Production and Distribution Chain Activities',
      surveyFr:
        "Enquête sur les activités liées à la chaîne d'approvisionnement, de production et de distribution mondiale",
    },
    {
      surveyCode: '5251',
      surveyEn: 'Canadian Correctional Services Survey',
      surveyFr: "L'Enquête sur les services correctionnels canadiens",
    },
    {
      surveyCode: '5252',
      surveyEn: 'Licensed Cannabis Producers Survey',
      surveyFr: 'Enquête auprès des producteurs de cannabis autorisés',
    },
    {
      surveyCode: '5253',
      surveyEn: 'Survey on Opioid Awareness',
      surveyFr: 'Enquête sur la sensibilisation aux opioïdes',
    },
    {
      surveyCode: '5254',
      surveyEn: 'Annual Mineral Production Survey - Preliminary Estimates',
      surveyFr:
        'Enquête annuelle sur la production minérale - Estimations préliminaires',
    },
    {
      surveyCode: '5255',
      surveyEn: 'Nursing and Residential Care Facilities - Public',
      surveyFr:
        'Établissements de soins infirmiers et de soins pour bénéficiaires internes - publique',
    },
    {
      surveyCode: '5256',
      surveyEn: 'Survey of Safety in Public and Private Spaces',
      surveyFr: 'Enquête sur la sécurité dans les espaces publics et privés',
    },
    {
      surveyCode: '5257',
      surveyEn: 'Canadian Housing Statistics Program',
      surveyFr: 'Programme de la statistique du logement canadien',
    },
    {
      surveyCode: '5258',
      surveyEn: 'Study on International Money Transfers',
      surveyFr: 'Étude sur les transferts de fonds internationaux',
    },
    {
      surveyCode: '5259',
      surveyEn: 'Canadian Armed Forces Health Survey',
      surveyFr: 'Enquête sur la santé dans les Forces armées canadiennes',
    },
    {
      surveyCode: '5260',
      surveyEn: 'Canadian Victim Services Indicators',
      surveyFr: 'Indicateurs canadiens des services aux victimes',
    },
    {
      surveyCode: '5261',
      surveyEn: 'Visitor Travel Survey',
      surveyFr: "L'Enquête sur les voyages des visiteurs",
    },
    {
      surveyCode: '5262',
      surveyEn: 'National Cannabis Survey',
      surveyFr: 'Enquête nationale sur le cannabis',
    },
    {
      surveyCode: '5263',
      surveyEn: 'Crowdsourcing - Cannabis',
      surveyFr: 'Approche Participative - Cannabis',
    },
    {
      surveyCode: '5264',
      surveyEn: 'Canadian Freight Analysis Framework',
      surveyFr: "Le Cadre d'analyse du fret canadien",
    },
    {
      surveyCode: '5265',
      surveyEn: 'Digital Economy Survey',
      surveyFr: "Enquête sur l'économie numérique",
    },
    {
      surveyCode: '5267',
      surveyEn: 'Canadian Health Survey on Seniors',
      surveyFr: 'Enquête canadienne sur la santé des aînés',
    },
    {
      surveyCode: '5268',
      surveyEn: 'Financial market statistics from the Toronto Stock Exchange',
      surveyFr: 'Statistiques des marchés financiers de la Bourse de Toronto',
    },
    {
      surveyCode: '5269',
      surveyEn: 'Canadian Housing Survey',
      surveyFr: 'Enquête canadienne sur le logement',
    },
    {
      surveyCode: '5270',
      surveyEn: 'Aboriginal Peoples Survey - Nunavut Inuit Supplement',
      surveyFr:
        'Enquête auprès des peuples autochtones - Supplément sur les Inuit du Nunavut',
    },
    {
      surveyCode: '5271',
      surveyEn: 'Survey on Home Health Care and Related Services',
      surveyFr: 'Enquête sur les soins à domicile et les services connexes',
    },
    {
      surveyCode: '5273',
      surveyEn: 'Medical Assistance in Dying',
      surveyFr: 'Aide médicale à mourir',
    },
    {
      surveyCode: '5274',
      surveyEn: 'The Canadian Index of Multiple Deprivation',
      surveyFr: "L'Indice canadien de défavorisation multiple",
    },
    {
      surveyCode: '5275',
      surveyEn:
        'Producer Deliveries of Major Grains, Canada and selected provinces',
      surveyFr:
        'Livraisons des producteurs des principaux grains, Canada et certaines provinces',
    },
    {
      surveyCode: '5276',
      surveyEn: 'Alberta Spatial Price Index',
      surveyFr: 'Indice des prix spatial de l’Alberta',
    },
    {
      surveyCode: '5277',
      surveyEn: 'Survey of Businesses under Federal Jurisdiction',
      surveyFr:
        'Enquête auprès des entreprises relevant de la compétence fédérale',
    },
    {
      surveyCode: '5278',
      surveyEn: 'Gross domestic Product (GDP) by firm size',
      surveyFr: 'NEED FRENCH',
    },
    {
      surveyCode: '5279',
      surveyEn:
        'Survey on Individual Safety in the Postsecondary Student Population',
      surveyFr:
        'Enquête sur la sécurité individuelle au sein de la population étudiante postsecondaire',
    },
    {
      surveyCode: '5280',
      surveyEn: 'Wastewater-based estimates of drug consumption',
      surveyFr:
        "Estimation de la consommation de drogues basée sur l'analyse des eaux usées",
    },
    {
      surveyCode: '5281',
      surveyEn: 'Nova Scotia re-contact analytical file',
      surveyFr:
        'Fichier analytique sur les contacts subséquents en Nouvelle-Écosse',
    },
    {
      surveyCode: '5282',
      surveyEn: 'Calls for Service Pilot Project in Saskatchewan',
      surveyFr: 'Projet pilote sur les demandes de service en Saskatchewan',
    },
    {
      surveyCode: '5283',
      surveyEn: 'Survey on Maternal Health',
      surveyFr: 'Enquête sur la santé maternelle',
    },
    {
      surveyCode: '5284',
      surveyEn: 'Weekly Rail Performance Indicators, Transport Canada',
      surveyFr:
        'Indicateurs de performance hebdomadaires du secteur ferroviaire, Transports Canada',
    },
    {
      surveyCode: '5285',
      surveyEn: 'Securities Statistics',
      surveyFr: 'Statistiques sur les titres financiers',
    },
    {
      surveyCode: '5286',
      surveyEn: 'The Open Database of Buildings (ODB)',
      surveyFr: 'La Base de données ouverte sur les immeubles (BDOI)',
    },
    {
      surveyCode: '5287',
      surveyEn: 'Survey on Early Learning and Child Care Arrangements (SELCCA)',
      surveyFr:
        "Enquête sur les modes d'apprentissage et de garde des jeunes enfants (EMAGJE)",
    },
    {
      surveyCode: '5288',
      surveyEn: 'Municipal Wastewater Systems in Canada (MWSC)',
      surveyFr:
        'Systèmes de traitement des eaux usées municipales au Canada (STEUMC)',
    },
    {
      surveyCode: '5292',
      surveyEn: 'Transport Canada in brief',
      surveyFr: 'Transports Canada en bref',
    },
    {
      surveyCode: '6000',
      surveyEn: 'Linkable File Environment',
      surveyFr: 'Environnement de fichiers couplables',
    },
    {
      surveyCode: '7502',
      surveyEn: 'Bank of Canada',
      surveyFr: 'Banque du Canada',
    },
    {
      surveyCode: '7503',
      surveyEn: 'Transport Canada Statistics',
      surveyFr: 'Statistiques de Transports Canada',
    },
    {
      surveyCode: '7504',
      surveyEn: 'Employment and Social Development Canada',
      surveyFr: 'Emploi et Développement Canada',
    },
    {
      surveyCode: '7505',
      surveyEn: 'Canada Mortgage and Housing Corporation',
      surveyFr: "Société Canadienne d'hypothèques et de logement",
    },
    {
      surveyCode: '7506',
      surveyEn: 'Stock Exchange Statistics',
      surveyFr: 'Statistiques de la bourse',
    },
    {
      surveyCode: '7507',
      surveyEn: 'Canadian Life and Health Insurance Association Inc.',
      surveyFr:
        "Association canadienne des compagnies d'assurances de personnes inc.",
    },
    {
      surveyCode: '7508',
      surveyEn: 'Office of the Superintendent of Bankruptcy Canada',
      surveyFr: 'Bureau du surintendant des faillites Canada',
    },
    {
      surveyCode: '7509',
      surveyEn: 'Public Health Agency of Canada',
      surveyFr: 'Agence de santé publique du Canada',
    },
    {
      surveyCode: '7510',
      surveyEn: 'ScotiaMcLeod',
      surveyFr: 'ScotiaMcLeod',
    },
    {
      surveyCode: '7512',
      surveyEn: "Canadian Vehicle Manufacturers' Association",
      surveyFr: 'Association canadienne des constructeurs de véhicules',
    },
    {
      surveyCode: '7514',
      surveyEn: 'Department of Finance',
      surveyFr: 'Ministère des Finances',
    },
    {
      surveyCode: '7516',
      surveyEn: 'Canadian Petroleum and Marketable Natural Gas Reserves',
      surveyFr: 'Réserves canadiennes de pétrole et de gaz naturel marchand',
    },
    {
      surveyCode: '7517',
      surveyEn: 'International Energy Production and Reserves',
      surveyFr: "Production et réserves d'énergie internationale",
    },
    {
      surveyCode: '7518',
      surveyEn: 'Canadian Pulp and Paper Association',
      surveyFr: "L'Association Canadienne des producteurs de pâtes et papiers",
    },
    {
      surveyCode: '7519',
      surveyEn: 'Canada Revenue Agency',
      surveyFr: 'Agence du revenu du Canada',
    },
    {
      surveyCode: '7520',
      surveyEn: 'Council of Ministers of Education, Canada',
      surveyFr: "Conseil des ministres de l'Éducation, Canada",
    },
    {
      surveyCode: '7522',
      surveyEn: 'United States Statistics',
      surveyFr: 'Statistiques des États-Unis',
    },
    {
      surveyCode: '7524',
      surveyEn: 'Natural Resources Canada',
      surveyFr: 'Ressources naturelles du Canada',
    },
    {
      surveyCode: '7525',
      surveyEn: 'Land Cover Statistics from Natural Resources Canada',
      surveyFr:
        'Statistiques sur la couverture terrestre de Ressources naturelles Canada',
    },
    {
      surveyCode: '7526',
      surveyEn: 'United States Department of Agriculture',
      surveyFr: 'United States Department of Agriculture',
    },
    {
      surveyCode: '7527',
      surveyEn: 'Business Integrated Database',
      surveyFr: 'Base de données intégrée',
    },
    {
      surveyCode: '7528',
      surveyEn: 'Geography 1971 - 2006',
      surveyFr: 'Géographie 1971 à 2006',
    },
    {
      surveyCode: '7529',
      surveyEn: 'Servicio de Información Agroalimentaria y Pesquera',
      surveyFr: 'Servicio de Información Agroalimentaria y Pesquera',
    },
    {
      surveyCode: '7530',
      surveyEn: 'Natural Resources Canada (Glaciers)',
      surveyFr: 'Ressources naturelles Canada (glaciers)',
    },
    {
      surveyCode: '7531',
      surveyEn: 'Environment Canada - Temperature and Precipitation',
      surveyFr: 'Environnement Canada - Température et Précipitation',
    },
    {
      surveyCode: '7538',
      surveyEn: 'Employment and Social Development Canada, Homeless Shelters',
      surveyFr: 'Emploi et Développement social Canada, Refuges pour sans-abri',
    },
    {
      surveyCode: '8009',
      surveyEn: 'Business Activity, Expenditure and Output Survey',
      surveyFr:
        "Enquête sur l'activité économique, les dépenses et les produits",
    },
    {
      surveyCode: '8011',
      surveyEn: 'General Social Survey Historical Database',
      surveyFr: "Base de données historiques de l'enquête sociale générale",
    },
    {
      surveyCode: '8012',
      surveyEn:
        'Census of Agriculture: Environmental Geography Aggregations of Census Farm Units',
      surveyFr:
        "Recensement de l'agriculture : agrégations des fermes de recensement aux géographies environnementales",
    },
    {
      surveyCode: '8013',
      surveyEn: 'Longitudinal Employment Analysis Program',
      surveyFr: "Programme d'analyse longitudinale de l'emploi",
    },
    {
      surveyCode: '8014',
      surveyEn: 'Respondent Selection Study for the General Social Survey',
      surveyFr:
        "Étude sur la sélection des répondants pour l'Enquête sociale générale",
    },
  ],
  subject: [
    {
      subjectCode: '10',
      subjectEn: 'Government',
      subjectFr: 'Gouvernement',
    },
    {
      subjectCode: '11',
      subjectEn: 'Income, pensions, spending and wealth',
      subjectFr: 'Revenu, pensions, dépenses et richesse',
    },
    {
      subjectCode: '12',
      subjectEn: 'International trade',
      subjectFr: 'Commerce international',
    },
    {
      subjectCode: '13',
      subjectEn: 'Health',
      subjectFr: 'Santé',
    },
    {
      subjectCode: '14',
      subjectEn: 'Labour',
      subjectFr: 'Travail',
    },
    {
      subjectCode: '15',
      subjectEn: 'Languages',
      subjectFr: 'Langues',
    },
    {
      subjectCode: '16',
      subjectEn: 'Manufacturing',
      subjectFr: 'Fabrication',
    },
    {
      subjectCode: '17',
      subjectEn: 'Population and demography',
      subjectFr: 'Population et démographie',
    },
    {
      subjectCode: '18',
      subjectEn: 'Prices and price indexes',
      subjectFr: 'Prix et indices des prix',
    },
    {
      subjectCode: '19',
      subjectEn: 'Statistical methods',
      subjectFr: 'Méthodes statistiques',
    },
    {
      subjectCode: '20',
      subjectEn: 'Retail and wholesale',
      subjectFr: 'Commerce de détail et de gros',
    },
    {
      subjectCode: '21',
      subjectEn: 'Business and consumer services and culture',
      subjectFr: 'Services aux entreprises et aux consommateurs et culture',
    },
    {
      subjectCode: '22',
      subjectEn: 'Information and communications technology ',
      subjectFr: "Technologies de l'information et des communications ",
    },
    {
      subjectCode: '23',
      subjectEn: 'Transportation',
      subjectFr: 'Transport',
    },
    {
      subjectCode: '24',
      subjectEn: 'Travel and tourism',
      subjectFr: 'Voyages et tourisme',
    },
    {
      subjectCode: '25',
      subjectEn: 'Energy',
      subjectFr: 'Énergie',
    },
    {
      subjectCode: '27',
      subjectEn: 'Science and technology',
      subjectFr: 'Sciences et technologie',
    },
    {
      subjectCode: '32',
      subjectEn: 'Agriculture',
      subjectFr: 'Agriculture',
    },
    {
      subjectCode: '33',
      subjectEn: 'Business performance and ownership',
      subjectFr: 'Rendement des entreprises et appartenance',
    },
    {
      subjectCode: '34',
      subjectEn: 'Construction',
      subjectFr: 'Construction',
    },
    {
      subjectCode: '35',
      subjectEn: 'Crime and justice',
      subjectFr: 'Crime et justice',
    },
    {
      subjectCode: '36',
      subjectEn: 'Economic accounts',
      subjectFr: 'Comptes économiques',
    },
    {
      subjectCode: '37',
      subjectEn: 'Education, training and learning',
      subjectFr: 'Éducation, formation et apprentissage',
    },
    {
      subjectCode: '38',
      subjectEn: 'Environment',
      subjectFr: 'Environnement',
    },
    {
      subjectCode: '39',
      subjectEn: 'Families and households',
      subjectFr: 'Familles et ménages',
    },
    {
      subjectCode: '41',
      subjectEn: 'Aboriginal peoples',
      subjectFr: 'Peuples autochtones',
    },
    {
      subjectCode: '42',
      subjectEn: 'Children and youth',
      subjectFr: 'Enfants et jeunes',
    },
    {
      subjectCode: '43',
      subjectEn: 'Immigration and ethnocultural diversity',
      subjectFr: 'Immigration et diversité ethnoculturelle',
    },
    {
      subjectCode: '44',
      subjectEn: 'Seniors',
      subjectFr: 'Aînés',
    },
    {
      subjectCode: '45',
      subjectEn: 'Society and community',
      subjectFr: 'Société et communauté',
    },
    {
      subjectCode: '46',
      subjectEn: 'Housing',
      subjectFr: 'Logement',
    },
    {
      subjectCode: '1001',
      subjectEn: 'Government/Balance sheets',
      subjectFr: 'Gouvernement/Bilans',
    },
    {
      subjectCode: '1002',
      subjectEn: 'Government/Employment and remuneration',
      subjectFr: 'Gouvernement/Emploi et rémunération',
    },
    {
      subjectCode: '1003',
      subjectEn: 'Government/Government business enterprises',
      subjectFr: 'Gouvernement/Entreprises publiques',
    },
    {
      subjectCode: '1004',
      subjectEn: 'Government/Monetary authorities',
      subjectFr: 'Gouvernement/Autorités monétaires',
    },
    {
      subjectCode: '1005',
      subjectEn: 'Government/Revenue and expenditures',
      subjectFr: 'Gouvernement/Recettes et dépenses',
    },
    {
      subjectCode: '1099',
      subjectEn: 'Government/Other content related to Government',
      subjectFr: 'Gouvernement/Autre contenu lié à Gouvernement',
    },
    {
      subjectCode: '1101',
      subjectEn:
        'Income, pensions, spending and wealth/Household and family assets, debts and wealth',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Actif, endettement et richesse des ménages et des familles',
    },
    {
      subjectCode: '1102',
      subjectEn:
        'Income, pensions, spending and wealth/Household spending and savings',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Dépenses et épargne des ménages',
    },
    {
      subjectCode: '1103',
      subjectEn:
        'Income, pensions, spending and wealth/Household, family and personal income',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Revenu des ménages, des familles et des particuliers',
    },
    {
      subjectCode: '1104',
      subjectEn:
        'Income, pensions, spending and wealth/Low income and inequality',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Faible revenu et inégalité',
    },
    {
      subjectCode: '1105',
      subjectEn:
        'Income, pensions, spending and wealth/Pensions and retirement income programs',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Pensions et programmes de revenu de retraite',
    },
    {
      subjectCode: '1106',
      subjectEn:
        'Income, pensions, spending and wealth/Personal and household taxation',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Imposition des particuliers et des ménages',
    },
    {
      subjectCode: '1107',
      subjectEn: 'Income, pensions, spending and wealth/Charitable donations',
      subjectFr: 'Revenu, pensions, dépenses et richesse/Dons de charité',
    },
    {
      subjectCode: '1108',
      subjectEn: 'Income, pensions, spending and wealth/High income',
      subjectFr: 'Revenu, pensions, dépenses et richesse/Revenu élévé',
    },
    {
      subjectCode: '1199',
      subjectEn:
        'Income, pensions, spending and wealth/Other content related to Income, pensions, spending and wealth',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Autre contenu lié à Revenu, pensions, dépenses et richesse',
    },
    {
      subjectCode: '1201',
      subjectEn: 'International trade/Merchandise imports and exports',
      subjectFr:
        'Commerce international/Importations et exportations de marchandises',
    },
    {
      subjectCode: '1202',
      subjectEn: 'International trade/Service imports and exports',
      subjectFr:
        'Commerce international/Importations et exportations de services',
    },
    {
      subjectCode: '1203',
      subjectEn: 'International trade/Trade patterns',
      subjectFr: 'Commerce international/Structure des échanges',
    },
    {
      subjectCode: '1299',
      subjectEn:
        'International trade/Other content related to International trade',
      subjectFr:
        'Commerce international/Autre contenu lié à Commerce international',
    },
    {
      subjectCode: '1301',
      subjectEn: 'Health/Disability',
      subjectFr: 'Santé/Incapacité',
    },
    {
      subjectCode: '1302',
      subjectEn: 'Health/Diseases and physical health conditions',
      subjectFr: 'Santé/Maladies et état de santé physique',
    },
    {
      subjectCode: '1303',
      subjectEn: 'Health/Environmental factors',
      subjectFr: 'Santé/Facteurs environnementaux',
    },
    {
      subjectCode: '1304',
      subjectEn: 'Health/Health care services',
      subjectFr: 'Santé/Services de soins de santé',
    },
    {
      subjectCode: '1305',
      subjectEn: 'Health/Life expectancy and deaths',
      subjectFr: 'Santé/Espérance de vie et décès',
    },
    {
      subjectCode: '1306',
      subjectEn: 'Health/Lifestyle and social conditions',
      subjectFr: 'Santé/Mode de vie et conditions sociales',
    },
    {
      subjectCode: '1307',
      subjectEn: 'Health/Mental health and well-being',
      subjectFr: 'Santé/Santé mentale et bien-être',
    },
    {
      subjectCode: '1308',
      subjectEn: 'Health/Pregnancy and births',
      subjectFr: 'Santé/Grossesses et naissances',
    },
    {
      subjectCode: '1309',
      subjectEn: 'Health/Prevention and detection of disease',
      subjectFr: 'Santé/Prévention et détection de la maladie',
    },
    {
      subjectCode: '1310',
      subjectEn: 'Health/Health measures',
      subjectFr: 'Santé/Mesures de la santé',
    },
    {
      subjectCode: '1399',
      subjectEn: 'Health/Other content related to Health',
      subjectFr: 'Santé/Autre contenu lié Santé',
    },
    {
      subjectCode: '1401',
      subjectEn: 'Labour/Earnings, wages and non-wage benefits',
      subjectFr: 'Travail/Gains, salaires et avantages sociaux',
    },
    {
      subjectCode: '1402',
      subjectEn: 'Labour/Employment and unemployment',
      subjectFr: 'Travail/Emploi et chômage',
    },
    {
      subjectCode: '1403',
      subjectEn:
        'Labour/Employment insurance, social assistance and other transfers',
      subjectFr: 'Travail/Assurance-emploi, aide sociale et autres transferts',
    },
    {
      subjectCode: '1404',
      subjectEn: 'Labour/Hours of work and work arrangements',
      subjectFr: 'Travail/Heures de travail et conditions de travail',
    },
    {
      subjectCode: '1405',
      subjectEn: 'Labour/Job training and apprenticeship programs',
      subjectFr:
        'Travail/Formation professionnelle et programmes pour apprentis',
    },
    {
      subjectCode: '1406',
      subjectEn: 'Labour/Job vacancies, labour mobility and layoffs',
      subjectFr:
        "Travail/Postes vacants, mobilité de la main-d'oeuvre et mises à pied",
    },
    {
      subjectCode: '1407',
      subjectEn: 'Labour/Commuting to work',
      subjectFr: 'Travail/Déplacement du domicile au lieu de travail',
    },
    {
      subjectCode: '1408',
      subjectEn: 'Labour/Globalization and the labour market',
      subjectFr: 'Travail/Mondialisation et marché du travail',
    },
    {
      subjectCode: '1409',
      subjectEn: 'Labour/Unionization and industrial relations',
      subjectFr: 'Travail/Syndicalisation et relations industrielles',
    },
    {
      subjectCode: '1410',
      subjectEn: 'Labour/Unpaid work',
      subjectFr: 'Travail/Travail non rémunéré',
    },
    {
      subjectCode: '1411',
      subjectEn: 'Labour/Work transitions and life stages',
      subjectFr: 'Travail/Transitions professionnelles et stades de la vie',
    },
    {
      subjectCode: '1412',
      subjectEn: 'Labour/Workplace organization, innovation and performance',
      subjectFr:
        'Travail/Organisation du milieu de travail, innovation et rendement',
    },
    {
      subjectCode: '1413',
      subjectEn: 'Labour/Workplace health and work absences',
      subjectFr: 'Travail/Santé du milieu de travail et absences du travail',
    },
    {
      subjectCode: '1499',
      subjectEn: 'Labour/Other content related to Labour',
      subjectFr: 'Travail/Autre contenu lié à Travail',
    },
    {
      subjectCode: '1504',
      subjectEn: 'Languages/Knowledge of languages',
      subjectFr: 'Langues/Connaissances des langues',
    },
    {
      subjectCode: '1507',
      subjectEn: 'Languages/Language groups',
      subjectFr: 'Langes/Groupes linguistiques',
    },
    {
      subjectCode: '1508',
      subjectEn: 'Languages/Use of languages',
      subjectFr: 'Langues/Utilisation des langues',
    },
    {
      subjectCode: '1599',
      subjectEn: 'Languages/Other content related to Languages',
      subjectFr: 'Langues/Autre contenu lié à Langues',
    },
    {
      subjectCode: '1601',
      subjectEn: 'Manufacturing/Chemicals, plastics and rubber',
      subjectFr: 'Fabrication/Produits chimiques, plastique et en caoutchouc',
    },
    {
      subjectCode: '1602',
      subjectEn: 'Manufacturing/Food, beverage and tobacco',
      subjectFr: 'Fabrication/Aliments, boissons et tabac',
    },
    {
      subjectCode: '1603',
      subjectEn: 'Manufacturing/Machinery, computers and electronics',
      subjectFr:
        'Fabrication/Machines, produits informatiques et électroniques',
    },
    {
      subjectCode: '1604',
      subjectEn: 'Manufacturing/Non-metallic mineral and metal',
      subjectFr: 'Fabrication/Minéraux non métalliques et métaux',
    },
    {
      subjectCode: '1605',
      subjectEn: 'Manufacturing/Petroleum and coal',
      subjectFr: 'Fabrication/Pétrole et charbon',
    },
    {
      subjectCode: '1606',
      subjectEn: 'Manufacturing/Textiles, clothing and leather',
      subjectFr: 'Fabrication/Textiles, vêtements et cuir',
    },
    {
      subjectCode: '1607',
      subjectEn: 'Manufacturing/Transportation equipment',
      subjectFr: 'Fabrication/Matériel de transport',
    },
    {
      subjectCode: '1608',
      subjectEn: 'Manufacturing/Wood, paper and printing',
      subjectFr: 'Fabrication/Bois, papier et impression',
    },
    {
      subjectCode: '1609',
      subjectEn: 'Manufacturing/Other manufactured products',
      subjectFr: 'Fabrication/Autres produits manufacturés',
    },
    {
      subjectCode: '1610',
      subjectEn: 'Manufacturing/Technology use',
      subjectFr: 'Fabrication/Utilisation de la technologie',
    },
    {
      subjectCode: '1611',
      subjectEn: 'Manufacturing/Innovative manufacturing plants',
      subjectFr: 'Fabrication/Usines innovateurs',
    },
    {
      subjectCode: '1612',
      subjectEn:
        'Manufacturing/Fertilizer production, inventories and shipments',
      subjectFr: "Fabrication/Production, stocks et livraisons d'engrais",
    },
    {
      subjectCode: '1699',
      subjectEn: 'Manufacturing/Other content related to Manufacturing',
      subjectFr: 'Fabrication/Autre contenu lié à Fabrication',
    },
    {
      subjectCode: '1701',
      subjectEn: 'Population and demography/Historical demographic statistics',
      subjectFr:
        'Population et démographie/Statistiques démographiques historiques',
    },
    {
      subjectCode: '1702',
      subjectEn: 'Population and demography/Fertility (births)',
      subjectFr: 'Population et démographie/Fécondité (naissances)',
    },
    {
      subjectCode: '1704',
      subjectEn: 'Population and demography/Mortality (deaths)',
      subjectFr: 'Population et démographie/Mortalité (décès)',
    },
    {
      subjectCode: '1707',
      subjectEn: 'Population and demography/Internal migration',
      subjectFr: 'Population et démographie/Migration interne',
    },
    {
      subjectCode: '1708',
      subjectEn: 'Population and demography/International migration',
      subjectFr: 'Population et démographie/Migration internationale',
    },
    {
      subjectCode: '1709',
      subjectEn: 'Population and demography/Population aging',
      subjectFr: 'Population et démographie/Vieillissement de la population',
    },
    {
      subjectCode: '1710',
      subjectEn: 'Population and demography/Population estimates',
      subjectFr: 'Population et démographie/Estimations démographiques',
    },
    {
      subjectCode: '1711',
      subjectEn: 'Population and demography/Population projections',
      subjectFr: 'Population et démographie/Projections démographiques',
    },
    {
      subjectCode: '1712',
      subjectEn: 'Population and demography/Population counts',
      subjectFr: 'Population et démographie/Chiffres de population',
    },
    {
      subjectCode: '1799',
      subjectEn:
        'Population and demography/Other content related to Population and demography',
      subjectFr:
        'Population et démographie/Autre contenu lié à Population et démographie',
    },
    {
      subjectCode: '1801',
      subjectEn: 'Prices and price indexes/Agriculture price indexes',
      subjectFr: "Prix et indices des prix/Indices des prix de l'agriculture",
    },
    {
      subjectCode: '1802',
      subjectEn: 'Prices and price indexes/Consumer price indexes',
      subjectFr: 'Prix et indices des prix/Indices des prix à la consommation',
    },
    {
      subjectCode: '1803',
      subjectEn:
        'Prices and price indexes/Intercity and international price comparisons',
      subjectFr:
        'Prix et indices des prix/Comparaisons des prix intervilles et internationaux',
    },
    {
      subjectCode: '1804',
      subjectEn:
        'Prices and price indexes/International merchandise trade price indexes',
      subjectFr:
        'Prix et indices des prix/Indices des prix du commerce international de marchandises',
    },
    {
      subjectCode: '1805',
      subjectEn: 'Prices and price indexes/Producer price indexes',
      subjectFr: 'Prix et indices des prix/Indices des prix à la production',
    },
    {
      subjectCode: '1806',
      subjectEn: 'Prices and price indexes/Economic accounts price indexes',
      subjectFr:
        'Prix et indices des prix/Indices des prix des comptes économiques',
    },
    {
      subjectCode: '1899',
      subjectEn:
        'Prices and price indexes/Other content related to Prices and price indexes',
      subjectFr:
        'Prix et indices des prix/Autre contenu lié à Prix et indices des prix',
    },
    {
      subjectCode: '1901',
      subjectEn: 'Statistical methods/Administrative data',
      subjectFr: 'Méthodes statistiques/Données administratives',
    },
    {
      subjectCode: '1902',
      subjectEn: 'Statistical methods/Collection and questionnaires',
      subjectFr: 'Méthodes statistiques/Collecte et questionnaires',
    },
    {
      subjectCode: '1903',
      subjectEn: 'Statistical methods/Data analysis',
      subjectFr: 'Méthodes statistiques/Analyse des données',
    },
    {
      subjectCode: '1904',
      subjectEn:
        'Statistical methods/Disclosure control and data dissemination',
      subjectFr:
        'Méthodes statistiques/Contrôle de la divulgation et diffusion de données',
    },
    {
      subjectCode: '1905',
      subjectEn: 'Statistical methods/Editing and imputation',
      subjectFr: 'Méthodes statistiques/Vérification et imputation',
    },
    {
      subjectCode: '1906',
      subjectEn: 'Statistical methods/Frames and coverage',
      subjectFr: 'Méthodes statistiques/Bases de sondage et couverture',
    },
    {
      subjectCode: '1907',
      subjectEn: 'Statistical methods/History and context',
      subjectFr: 'Méthodes statistiques/Histoire et contexte',
    },
    {
      subjectCode: '1908',
      subjectEn: 'Statistical methods/Inference and foundations',
      subjectFr: 'Méthodes statistiques/Inférence et fondements',
    },
    {
      subjectCode: '1909',
      subjectEn: 'Statistical methods/Quality assurance',
      subjectFr: 'Méthodes statistiques/Assurance de la qualité',
    },
    {
      subjectCode: '1910',
      subjectEn: 'Statistical methods/Response and nonresponse',
      subjectFr: 'Méthodes statistiques/Réponse et non-réponse',
    },
    {
      subjectCode: '1911',
      subjectEn: 'Statistical methods/Simulations',
      subjectFr: 'Méthodes statistiques/Simulations',
    },
    {
      subjectCode: '1912',
      subjectEn: 'Statistical methods/Statistical techniques',
      subjectFr: 'Méthodes statistiques/Techniques statistiques',
    },
    {
      subjectCode: '1913',
      subjectEn: 'Statistical methods/Survey design',
      subjectFr: 'Méthodes statistiques/Plan de sondage',
    },
    {
      subjectCode: '1914',
      subjectEn: 'Statistical methods/Time series',
      subjectFr: 'Méthodes statistiques/Séries chronologiques',
    },
    {
      subjectCode: '1915',
      subjectEn: 'Statistical methods/Weighting and estimation',
      subjectFr: 'Méthodes statistiques/Pondération et estimation',
    },
    {
      subjectCode: '1999',
      subjectEn:
        'Statistical methods/Other content related to  Statistical methods',
      subjectFr:
        'Méthodes statistiques/Autre contenu lié à Méthodes statistiques ',
    },
    {
      subjectCode: '2001',
      subjectEn: 'Retail and wholesale/Retail sales by type of product',
      subjectFr:
        'Commerce de détail et de gros/Ventes au détail selon le type de produit',
    },
    {
      subjectCode: '2002',
      subjectEn: 'Retail and wholesale/Retail sales by type of store',
      subjectFr:
        'Commerce de détail et de gros/Ventes au détail selon le type de magasin',
    },
    {
      subjectCode: '2003',
      subjectEn: 'Retail and wholesale/Wholesale sales and inventories',
      subjectFr:
        'Commerce de détail et de gros/Ventes et stocks des grossistes',
    },
    {
      subjectCode: '2099',
      subjectEn:
        'Retail and wholesale/Other content related to Retail and wholesale',
      subjectFr:
        'Commerce de détail et de gros/Autre contenu lié à Commerce de détail et de gros',
    },
    {
      subjectCode: '2102',
      subjectEn: 'Business and consumer services and culture/Culture',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Culture',
    },
    {
      subjectCode: '2104',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs',
    },
    {
      subjectCode: '2199',
      subjectEn:
        'Business and consumer services and culture/Other content related to Business and consumer services and culture',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Autre contenu lié à Services aux entreprises et aux consommateurs et culture',
    },
    {
      subjectCode: '2203',
      subjectEn:
        'Information and communications technology/Information and communications technology sector',
      subjectFr:
        "Technologies de l'information et des communications/Secteur des technologies de l'information et des communications",
    },
    {
      subjectCode: '2204',
      subjectEn: 'Information and communications technology/Internet use',
      subjectFr:
        "Technologies de l'information et des communications/Utilisation d'Internet",
    },
    {
      subjectCode: '2206',
      subjectEn:
        'Information and communications technology/Telecommunications industry',
      subjectFr:
        "Technologies de l'information et des communications/Industrie des télécommunications",
    },
    {
      subjectCode: '2207',
      subjectEn:
        'Information and communications technology/Television and radio industries',
      subjectFr:
        "Technologies de l'information et des communications/Industries de la radiodiffusion et de la télédiffusion",
    },
    {
      subjectCode: '2299',
      subjectEn:
        'Information and communications technology/Other content related to Information and communications technology',
      subjectFr:
        "Technologies de l'information et des communications/Autre contenu lié à Technologies de l'information et des communications",
    },
    {
      subjectCode: '2301',
      subjectEn: 'Transportation/Air transportation',
      subjectFr: 'Transport/Transport aérien',
    },
    {
      subjectCode: '2302',
      subjectEn: 'Transportation/Couriers and messengers',
      subjectFr: 'Transport/Messageries et services de messagers',
    },
    {
      subjectCode: '2303',
      subjectEn: 'Transportation/Rail transportation',
      subjectFr: 'Transport/Transport ferroviaire',
    },
    {
      subjectCode: '2304',
      subjectEn: 'Transportation/Road transportation',
      subjectFr: 'Transport/Transport routier',
    },
    {
      subjectCode: '2306',
      subjectEn: 'Transportation/Water transportation',
      subjectFr: 'Transport/Transport maritime',
    },
    {
      subjectCode: '2399',
      subjectEn: 'Transportation/Other content related to Transportation',
      subjectFr: 'Transport/Autre contenu lié à Transport',
    },
    {
      subjectCode: '2401',
      subjectEn: 'Travel and tourism/Domestic travel',
      subjectFr: 'Voyages et tourisme/Voyages intérieurs',
    },
    {
      subjectCode: '2402',
      subjectEn: 'Travel and tourism/International travel',
      subjectFr: 'Voyages et tourisme/Voyages internationaux',
    },
    {
      subjectCode: '2403',
      subjectEn: 'Travel and tourism/Tourism employment',
      subjectFr: 'Voyages et tourisme/Emploi généré par le tourisme',
    },
    {
      subjectCode: '2404',
      subjectEn: 'Travel and tourism/Tourism indicators',
      subjectFr: 'Voyages et tourisme/Indicateurs du tourisme',
    },
    {
      subjectCode: '2405',
      subjectEn: 'Travel and tourism/Travel and traveller characteristics',
      subjectFr:
        'Voyages et tourisme/Caractéristiques des voyages et des voyageurs',
    },
    {
      subjectCode: '2499',
      subjectEn:
        'Travel and tourism/Other content related to Travel and tourism',
      subjectFr: 'Voyages et tourisme/Autre contenu lié à Voyages et tourisme',
    },
    {
      subjectCode: '2502',
      subjectEn: 'Energy/Energy supply and use',
      subjectFr: "Énergie/Disponibilité et utilisation d'énergie",
    },
    {
      subjectCode: '2504',
      subjectEn: 'Energy/Electricity and renewable energy',
      subjectFr: 'Énergie/Électricité et énergie renouvelable',
    },
    {
      subjectCode: '2506',
      subjectEn: 'Energy/Pipelines',
      subjectFr: 'Énergie/Oléoducs',
    },
    {
      subjectCode: '2507',
      subjectEn: 'Energy/Fossil fuels',
      subjectFr: 'Énergie/Énergies fossiles',
    },
    {
      subjectCode: '2599',
      subjectEn: 'Energy/Other content related to Energy',
      subjectFr: 'Énergie/Autre contenu lié à Énergie',
    },
    {
      subjectCode: '2701',
      subjectEn: 'Science and technology/Biotechnology and nanotechnology',
      subjectFr: 'Sciences et technologie/Biotechnologie et nanotechnologie',
    },
    {
      subjectCode: '2702',
      subjectEn:
        'Science and technology/Human resources in science and technology',
      subjectFr:
        'Sciences et technologie/Ressources humaines en sciences et technologie',
    },
    {
      subjectCode: '2703',
      subjectEn: 'Science and technology/Innovation and business strategy',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise",
    },
    {
      subjectCode: '2704',
      subjectEn: 'Science and technology/Geomatics and geospatial technologies',
      subjectFr:
        'Sciences et technologie/Technologies géomatiques et géospatiales',
    },
    {
      subjectCode: '2705',
      subjectEn: 'Science and technology/Research and development',
      subjectFr: 'Sciences et technologie/Recherche et développement',
    },
    {
      subjectCode: '2799',
      subjectEn:
        'Science and technology/Other content related to Science and technology',
      subjectFr:
        'Sciences et technologie/Autre contenu lié à Sciences et technologie',
    },
    {
      subjectCode: '3201',
      subjectEn: 'Agriculture/Crops and horticulture',
      subjectFr: 'Agriculture/Cultures et horticulture',
    },
    {
      subjectCode: '3202',
      subjectEn: 'Agriculture/Farm financial statistics',
      subjectFr:
        'Agriculture/Statistiques financières des exploitations agricoles',
    },
    {
      subjectCode: '3203',
      subjectEn: 'Agriculture/Farms and farm operators',
      subjectFr: 'Agriculture/Exploitations et exploitants agricoles',
    },
    {
      subjectCode: '3204',
      subjectEn: 'Agriculture/Livestock and aquaculture',
      subjectFr: 'Agriculture/Bétail et aquaculture',
    },
    {
      subjectCode: '3205',
      subjectEn: 'Agriculture/Food and nutrition',
      subjectFr: 'Agriculture/Aliments et nutrition',
    },
    {
      subjectCode: '3206',
      subjectEn: 'Agriculture/Land use and environmental practices',
      subjectFr:
        'Agriculture/Utilisation des terres et pratiques environnementales',
    },
    {
      subjectCode: '3207',
      subjectEn: 'Agriculture/Agricultural boundary files',
      subjectFr: 'Agriculture/Fichiers des limites des régions agricoles',
    },
    {
      subjectCode: '3299',
      subjectEn: 'Agriculture/Other content related to Agriculture',
      subjectFr: 'Agriculture/Autre contenu lié à Agriculture',
    },
    {
      subjectCode: '3301',
      subjectEn: 'Business performance and ownership/Business dynamics',
      subjectFr:
        'Rendement des entreprises et appartenance/Dynamique des entreprises',
    },
    {
      subjectCode: '3302',
      subjectEn: 'Business performance and ownership/Business ownership',
      subjectFr:
        'Rendement des entreprises et appartenance/Propriété des entreprises',
    },
    {
      subjectCode: '3303',
      subjectEn:
        'Business performance and ownership/Financial statements and performance',
      subjectFr:
        'Rendement des entreprises et appartenance/États financiers et rendement',
    },
    {
      subjectCode: '3399',
      subjectEn:
        'Business performance and ownership/Other content related to Business performance and ownership',
      subjectFr:
        'Rendement des entreprises et appartenance/Autre contenu lié à Rendement des entreprises et appartenance',
    },
    {
      subjectCode: '3401',
      subjectEn: 'Construction/Construction materials',
      subjectFr: 'Construction/Matériaux de construction',
    },
    {
      subjectCode: '3402',
      subjectEn: 'Construction/Machinery and equipment',
      subjectFr: 'Construction/Machines et matériel',
    },
    {
      subjectCode: '3403',
      subjectEn: 'Construction/Non-residential construction',
      subjectFr: 'Construction/Construction non résidentielle',
    },
    {
      subjectCode: '3405',
      subjectEn: 'Construction/Investment in construction',
      subjectFr: 'Construction/Investissements en construction',
    },
    {
      subjectCode: '3406',
      subjectEn: 'Construction/Property values',
      subjectFr: 'Construction/Valeurs des propriétés',
    },
    {
      subjectCode: '3407',
      subjectEn: 'Construction/Capital and repair expenditures',
      subjectFr: 'Construction/Dépenses en immobilisations et réparations',
    },
    {
      subjectCode: '3408',
      subjectEn: 'Construction/Housing starts',
      subjectFr: 'Construction/Mises en chantier',
    },
    {
      subjectCode: '3409',
      subjectEn: 'Construction/Building permits',
      subjectFr: 'Construction/Permis de bâtir',
    },
    {
      subjectCode: '3410',
      subjectEn: 'Construction/Infrastructure',
      subjectFr: 'Construction/Infrastructure',
    },
    {
      subjectCode: '3499',
      subjectEn: 'Construction/Other content related to Construction',
      subjectFr: 'Construction/Autre contenu lié à Construction',
    },
    {
      subjectCode: '3501',
      subjectEn: 'Crime and justice/Correctional services',
      subjectFr: 'Crime et justice/Services correctionnels',
    },
    {
      subjectCode: '3502',
      subjectEn: 'Crime and justice/Courts',
      subjectFr: 'Crime et justice/Tribunaux',
    },
    {
      subjectCode: '3503',
      subjectEn: 'Crime and justice/Crimes and offences',
      subjectFr: 'Crime et justice/Crimes et infractions',
    },
    {
      subjectCode: '3504',
      subjectEn: 'Crime and justice/Police services',
      subjectFr: 'Crime et justice/Services de police',
    },
    {
      subjectCode: '3505',
      subjectEn: 'Crime and justice/Victimization',
      subjectFr: 'Crime et justice/Victimisation',
    },
    {
      subjectCode: '3599',
      subjectEn: 'Crime and justice/Other content related to Crime and justice',
      subjectFr: 'Crime et justice/Autre contenu lié à Crime et justice',
    },
    {
      subjectCode: '3601',
      subjectEn: 'Economic accounts/Stock and consumption of fixed capital',
      subjectFr: 'Comptes économiques/Stock et consommation de capital fixe',
    },
    {
      subjectCode: '3602',
      subjectEn: 'Economic accounts/Environment accounts',
      subjectFr: "Comptes économiques/Comptes de l'environnement",
    },
    {
      subjectCode: '3603',
      subjectEn: 'Economic accounts/Government finance statistics',
      subjectFr: 'Comptes économiques/Finances publiques',
    },
    {
      subjectCode: '3604',
      subjectEn: 'Economic accounts/International accounts',
      subjectFr: 'Comptes économiques/Comptes internationaux',
    },
    {
      subjectCode: '3605',
      subjectEn:
        'Economic accounts/National accounts and Gross Domestic Product',
      subjectFr:
        'Comptes économiques/Comptes nationaux et produit intérieur brut',
    },
    {
      subjectCode: '3606',
      subjectEn: 'Economic accounts/Productivity accounts',
      subjectFr: 'Comptes économiques/Comptes de la productivité',
    },
    {
      subjectCode: '3607',
      subjectEn: 'Economic accounts/Purchasing power parities',
      subjectFr: "Comptes économiques/Parités de pouvoir d'achat",
    },
    {
      subjectCode: '3608',
      subjectEn: 'Economic accounts/Satellite accounts',
      subjectFr: 'Comptes économiques/Comptes satellites',
    },
    {
      subjectCode: '3699',
      subjectEn: 'Economic accounts/Other content related to Economic accounts',
      subjectFr: 'Comptes économiques/Autre contenu lié à Comptes économiques',
    },
    {
      subjectCode: '3701',
      subjectEn: 'Education, training and learning/Adult learning',
      subjectFr:
        'Éducation, formation et apprentissage/Apprentissage des adultes',
    },
    {
      subjectCode: '3702',
      subjectEn:
        'Education, training and learning/Financial resources invested in education',
      subjectFr:
        "Éducation, formation et apprentissage/Ressources financières investies dans l'éducation",
    },
    {
      subjectCode: '3703',
      subjectEn: 'Education, training and learning/Education indicators',
      subjectFr:
        "Éducation, formation et apprentissage/Indicateurs de l'éducation",
    },
    {
      subjectCode: '3704',
      subjectEn:
        'Education, training and learning/Educational attainment and qualifications',
      subjectFr:
        'Éducation, formation et apprentissage/Niveau de scolarité et qualifications',
    },
    {
      subjectCode: '3707',
      subjectEn: 'Education, training and learning/Literacy',
      subjectFr: 'Éducation, formation et apprentissage/Littératie',
    },
    {
      subjectCode: '3708',
      subjectEn:
        'Education, training and learning/Education and labour market outcomes',
      subjectFr:
        'Éducation, formation et apprentissage/Éducation et résultats sur le marché du travail',
    },
    {
      subjectCode: '3711',
      subjectEn: 'Education, training and learning/Apprenticeship and trades',
      subjectFr: 'Éducation, formation et apprentissage/Apprentis et métiers',
    },
    {
      subjectCode: '3712',
      subjectEn: 'Education, training and learning/Early childhood education',
      subjectFr:
        'Éducation, formation et apprentissage/Éducation de la petite enfance',
    },
    {
      subjectCode: '3714',
      subjectEn:
        'Education, training and learning/Elementary and secondary education',
      subjectFr:
        'Éducation, formation et apprentissage/Études primaires et secondaires',
    },
    {
      subjectCode: '3715',
      subjectEn: 'Education, training and learning/Postsecondary education',
      subjectFr: 'Éducation, formation et apprentissage/Études postsecondaires',
    },
    {
      subjectCode: '3716',
      subjectEn: 'Education, training and learning/Student pathways',
      subjectFr:
        'Éducation, formation et apprentissage/Cheminement des étudiants',
    },
    {
      subjectCode: '3799',
      subjectEn:
        'Education, training and learning/Other content related to Education, training and learning',
      subjectFr:
        'Éducation, formation et apprentissage/Autre contenu lié à Éducation, formation et apprentissage',
    },
    {
      subjectCode: '3801',
      subjectEn: 'Environment/Air and climate',
      subjectFr: 'Environnement/Air et climat',
    },
    {
      subjectCode: '3802',
      subjectEn: 'Environment/Environmental quality',
      subjectFr: "Environnement/Qualité de l'environnement",
    },
    {
      subjectCode: '3803',
      subjectEn: 'Environment/Environmental protection',
      subjectFr: "Environnement/Protection de l'environnement",
    },
    {
      subjectCode: '3804',
      subjectEn: 'Environment/Natural resources',
      subjectFr: 'Environnement/Ressources naturelles',
    },
    {
      subjectCode: '3807',
      subjectEn: 'Environment/Pollution and waste',
      subjectFr: 'Environnement/Pollution et déchets',
    },
    {
      subjectCode: '3808',
      subjectEn: 'Environment/Household environmental practices',
      subjectFr: 'Environnement/Pratiques environnementales des ménages',
    },
    {
      subjectCode: '3809',
      subjectEn: 'Environment/Ecoregion profiles',
      subjectFr: "Environnement/Profils d'écorégions",
    },
    {
      subjectCode: '3810',
      subjectEn: 'Environment/Natural disasters',
      subjectFr: 'Environnement/Désastres naturels',
    },
    {
      subjectCode: '3811',
      subjectEn: 'Environment/Flora and fauna',
      subjectFr: 'Environnement/Flore et faune',
    },
    {
      subjectCode: '3899',
      subjectEn: 'Environment/Other content related to Environment',
      subjectFr: 'Environnement/Autre contenu lié à Environnement',
    },
    {
      subjectCode: '3901',
      subjectEn: 'Families and households/Divorce and separation',
      subjectFr: 'Familles et ménages/Divorce et séparation',
    },
    {
      subjectCode: '3902',
      subjectEn: 'Families and households/Families',
      subjectFr: 'Familles et ménages/Familles',
    },
    {
      subjectCode: '3903',
      subjectEn: 'Families and households/Households',
      subjectFr: 'Familles et ménages/Ménages',
    },
    {
      subjectCode: '3905',
      subjectEn: 'Families and households/Individuals',
      subjectFr: 'Familles et ménages/Particuliers',
    },
    {
      subjectCode: '3906',
      subjectEn: 'Families and households/Marriage and common-law unions',
      subjectFr: 'Familles et ménages/Mariage et union libre',
    },
    {
      subjectCode: '3999',
      subjectEn:
        'Families and households/Other content related to Families and households',
      subjectFr: 'Familles et ménages/Autre contenu lié à Familles et ménages',
    },
    {
      subjectCode: '4101',
      subjectEn:
        'Aboriginal peoples/Demographic characteristics and Aboriginal groups',
      subjectFr:
        'Peuples autochtones/Caractéristiques démographiques et groupes autochtones',
    },
    {
      subjectCode: '4102',
      subjectEn: 'Aboriginal peoples/Education, learning and skills',
      subjectFr: 'Peuples autochtones/Éducation, apprentissage et compétences',
    },
    {
      subjectCode: '4103',
      subjectEn: 'Aboriginal peoples/Health and well-being',
      subjectFr: 'Peuples autochtones/Santé et bien-être',
    },
    {
      subjectCode: '4104',
      subjectEn: 'Aboriginal peoples/Crime and victimization',
      subjectFr: 'Peuples autochtones/Criminalité et victimisation',
    },
    {
      subjectCode: '4105',
      subjectEn: 'Aboriginal peoples/Language and culture',
      subjectFr: 'Peuples autochtones/Langues et cultures',
    },
    {
      subjectCode: '4106',
      subjectEn: 'Aboriginal peoples/Living arrangements and housing',
      subjectFr: 'Peuples autochtones/Situation des particuliers et logement',
    },
    {
      subjectCode: '4107',
      subjectEn: 'Aboriginal peoples/Work',
      subjectFr: 'Peuples autochtones/Travail',
    },
    {
      subjectCode: '4108',
      subjectEn: 'Aboriginal peoples/Income and spending',
      subjectFr: 'Peuples autochtones/Revenu et dépenses',
    },
    {
      subjectCode: '4109',
      subjectEn: 'Aboriginal peoples/Aboriginal population profiles',
      subjectFr: 'Peuples autochtones/Profils de la population autochtone ',
    },
    {
      subjectCode: '4110',
      subjectEn: 'Aboriginal peoples/Aboriginal children',
      subjectFr: 'Peuples autochtones/Enfants autochtones',
    },
    {
      subjectCode: '4199',
      subjectEn:
        'Aboriginal peoples/Other content related to Aboriginal peoples',
      subjectFr: 'Peuples autochtones/Autre contenu lié à Peuples autochtones',
    },
    {
      subjectCode: '4201',
      subjectEn: 'Children and youth/Child development and behaviour',
      subjectFr: "Enfants et jeunes/Développement et comportement de l'enfant",
    },
    {
      subjectCode: '4202',
      subjectEn: 'Children and youth/Education',
      subjectFr: 'Enfants et jeunes/Éducation',
    },
    {
      subjectCode: '4203',
      subjectEn: 'Children and youth/Health of children and youth',
      subjectFr: 'Enfants et jeunes/Santé des enfants et des jeunes ',
    },
    {
      subjectCode: '4204',
      subjectEn: 'Children and youth/Immigrant children and youth',
      subjectFr: 'Enfants et jeunes/Enfants et jeunes immigrants',
    },
    {
      subjectCode: '4205',
      subjectEn: 'Children and youth/Labour market activities for youth',
      subjectFr:
        'Enfants et jeunes/Activités sur le marché du travail pour les jeunes',
    },
    {
      subjectCode: '4206',
      subjectEn: 'Children and youth/Low income families',
      subjectFr: 'Enfants et jeunes/Familles à faible revenu',
    },
    {
      subjectCode: '4209',
      subjectEn: 'Children and youth/Violence among children and youth',
      subjectFr: 'Enfants et jeunes/Violence chez les enfants et les jeunes',
    },
    {
      subjectCode: '4210',
      subjectEn: 'Children and youth/Child care',
      subjectFr: 'Enfants et jeunes/Soins aux enfants',
    },
    {
      subjectCode: '4211',
      subjectEn: 'Children and youth/Youth crime and justice',
      subjectFr: 'Enfants et jeunes/Crime et justice chez les jeunes',
    },
    {
      subjectCode: '4213',
      subjectEn: 'Children and youth/Children at home',
      subjectFr: "Enfants et jeunes/Présence d'enfants à la maison",
    },
    {
      subjectCode: '4299',
      subjectEn:
        'Children and youth/Other content related to Children and youth',
      subjectFr: 'Enfants et jeunes/Autre contenu lié à Enfants et jeunes',
    },
    {
      subjectCode: '4301',
      subjectEn: 'Immigration and ethnocultural diversity/Citizenship',
      subjectFr: 'Immigration et diversité ethnoculturelle/Citoyenneté',
    },
    {
      subjectCode: '4303',
      subjectEn:
        'Immigration and ethnocultural diversity/Generations in Canada',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Générations au Canada',
    },
    {
      subjectCode: '4305',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents',
    },
    {
      subjectCode: '4308',
      subjectEn: 'Immigration and ethnocultural diversity/Visible minorities',
      subjectFr: 'Immigration et diversité ethnoculturelle/Minorités visibles',
    },
    {
      subjectCode: '4309',
      subjectEn: 'Immigration and ethnocultural diversity/Ethnicity',
      subjectFr: 'Immigration et diversité ethnoculturelle/Origine ethnique',
    },
    {
      subjectCode: '4310',
      subjectEn:
        'Immigration and ethnocultural diversity/Religious affiliation',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Appartenance religieuse',
    },
    {
      subjectCode: '4399',
      subjectEn:
        'Immigration and ethnocultural diversity/Other content related to Immigration and ethnocultural diversity',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Autre contenu relié à Immigration et diversité ethnoculturelle',
    },
    {
      subjectCode: '4401',
      subjectEn: 'Seniors/Health and disability among seniors',
      subjectFr: 'Aînés/Santé et incapacité chez les aînés',
    },
    {
      subjectCode: '4402',
      subjectEn: 'Seniors/Income, pensions and wealth',
      subjectFr: 'Aînés/Revenu, pension et patrimoine',
    },
    {
      subjectCode: '4403',
      subjectEn: 'Seniors/Work and retirement',
      subjectFr: 'Aînés/Travail et retraite',
    },
    {
      subjectCode: '4404',
      subjectEn: 'Seniors/Care and social support',
      subjectFr: 'Aînés/Soins et soutien social',
    },
    {
      subjectCode: '4405',
      subjectEn: 'Seniors/Elder abuse and victimization',
      subjectFr: 'Aînés/Victimisation et abus envers les aînés',
    },
    {
      subjectCode: '4406',
      subjectEn: 'Seniors/Housing and living arrangements of seniors',
      subjectFr: 'Aînés/Logement et situation dans le ménage des aînés',
    },
    {
      subjectCode: '4499',
      subjectEn: 'Seniors/Other content related to Seniors',
      subjectFr: 'Aînés/Autre contenu lié à Aînés',
    },
    {
      subjectCode: '4501',
      subjectEn: 'Society and community/Religion',
      subjectFr: 'Société et communauté/Religion',
    },
    {
      subjectCode: '4502',
      subjectEn: 'Society and community/Rural Canada',
      subjectFr: 'Société et communauté/Canada rural',
    },
    {
      subjectCode: '4503',
      subjectEn: 'Society and community/Civic participation',
      subjectFr: 'Société et communauté/Participation communautaire',
    },
    {
      subjectCode: '4504',
      subjectEn: 'Society and community/Time use',
      subjectFr: 'Société et communauté/Emploi du temps',
    },
    {
      subjectCode: '4505',
      subjectEn: 'Society and community/Volunteering and donating',
      subjectFr: 'Société et communauté/Don et bénévolat',
    },
    {
      subjectCode: '4506',
      subjectEn: 'Society and community/Women and gender',
      subjectFr: 'Société et communauté/Femmes et rapports entre les sexes',
    },
    {
      subjectCode: '4507',
      subjectEn: 'Society and community/Equity and inclusion',
      subjectFr: 'Société et communauté/Égalité et inclusion',
    },
    {
      subjectCode: '4508',
      subjectEn: 'Society and community/Social and personal networks',
      subjectFr: 'Société et communauté/Réseaux sociaux et personnels',
    },
    {
      subjectCode: '4509',
      subjectEn: 'Society and community/Cannabis',
      subjectFr: 'Société et communauté/Cannabis',
    },
    {
      subjectCode: '4599',
      subjectEn:
        'Society and community/Other content related to Society and community',
      subjectFr:
        'Société et communauté/Autre contenue lié à  Société et communauté',
    },
    {
      subjectCode: '4601',
      subjectEn: 'Housing/Dwelling characteristics',
      subjectFr: 'Logement/Caractéristiques du logement',
    },
    {
      subjectCode: '4602',
      subjectEn: 'Housing/Housing costs and affordability',
      subjectFr: "Logement/Coût de l'habitation et abordabilité du logement",
    },
    {
      subjectCode: '4603',
      subjectEn: 'Housing/Housing price indexes',
      subjectFr: 'Logement/Indices des prix des logements',
    },
    {
      subjectCode: '4604',
      subjectEn: 'Housing/Housing and living arrangements',
      subjectFr: 'Logement/Logement et situation dans le ménage',
    },
    {
      subjectCode: '4605',
      subjectEn: 'Housing/Residential construction and investment',
      subjectFr: 'Logement/Construction résidentielle et investissements',
    },
    {
      subjectCode: '4606',
      subjectEn: 'Housing/Vacancy rates',
      subjectFr: "Logement/Taux d'inoccupation",
    },
    {
      subjectCode: '4699',
      subjectEn: 'Housing/Other content related to Housing',
      subjectFr: 'Logement/Autre contenu lié à Logement',
    },
    {
      subjectCode: '110101',
      subjectEn:
        'Income, pensions, spending and wealth/Household and family assets, debts and wealth/Household and family debt',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Actif, endettement et richesse des ménages et des familles/Endettement des ménages et des familles',
    },
    {
      subjectCode: '110102',
      subjectEn:
        'Income, pensions, spending and wealth/Household and family assets, debts and wealth/Net worth',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Actif, endettement et richesse des ménages et des familles/Valeur nette',
    },
    {
      subjectCode: '110199',
      subjectEn:
        'Income, pensions, spending and wealth/Household and family assets, debts and wealth/Other content related to Household and family assets, debts and wealth',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Actif, endettement et richesse des ménages et des familles/Autre contenu lié à Actif, endettement et richesse des ménages et des familles',
    },
    {
      subjectCode: '110201',
      subjectEn:
        'Income, pensions, spending and wealth/Household spending and savings/Household spending',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Dépenses et épargne des ménages/Dépenses des ménages',
    },
    {
      subjectCode: '110202',
      subjectEn:
        'Income, pensions, spending and wealth/Household spending and savings/Shelter costs',
      subjectFr:
        "Revenu, pensions, dépenses et richesse/Dépenses et épargne des ménages/Coûts d'habitation",
    },
    {
      subjectCode: '110203',
      subjectEn:
        'Income, pensions, spending and wealth/Household spending and savings/Savings',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Dépenses et épargne des ménages/Épargne',
    },
    {
      subjectCode: '110299',
      subjectEn:
        'Income, pensions, spending and wealth/Household spending and savings/Other content related to Household spending and savings',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Dépenses et épargne des ménages/Autre contenu lié à Dépenses et épargne des ménages',
    },
    {
      subjectCode: '110301',
      subjectEn:
        'Income, pensions, spending and wealth/Household, family and personal income/Family income',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Revenu des ménages, des familles et des particuliers/Revenu des familles',
    },
    {
      subjectCode: '110302',
      subjectEn:
        'Income, pensions, spending and wealth/Household, family and personal income/Household income',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Revenu des ménages, des familles et des particuliers/Revenu des ménages',
    },
    {
      subjectCode: '110303',
      subjectEn:
        'Income, pensions, spending and wealth/Household, family and personal income/Personal income',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Revenu des ménages, des familles et des particuliers/Revenu des particuliers',
    },
    {
      subjectCode: '110304',
      subjectEn:
        'Income, pensions, spending and wealth/Household, family and personal income/Sources of income',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Revenu des ménages, des familles et des particuliers/Sources de revenu',
    },
    {
      subjectCode: '110399',
      subjectEn:
        'Income, pensions, spending and wealth/Household, family and personal income/Other content related to Household, family and personal income',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Revenu des ménages, des familles et des particuliers/Autre contenu lié à Revenu des ménages, des familles et des particuliers',
    },
    {
      subjectCode: '110401',
      subjectEn:
        'Income, pensions, spending and wealth/Low income and inequality/Income inequality',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Faible revenu et inégalité/Inégalité',
    },
    {
      subjectCode: '110402',
      subjectEn:
        'Income, pensions, spending and wealth/Low income and inequality/Low income',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Faible revenu et inégalité/Faible revenu',
    },
    {
      subjectCode: '110499',
      subjectEn:
        'Income, pensions, spending and wealth/Low income and inequality/Other content related to Low income and inequality',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Faible revenu et inégalité/Autre contenu lié à Faible revenu et inégalité',
    },
    {
      subjectCode: '110501',
      subjectEn:
        'Income, pensions, spending and wealth/Pensions and retirement income programs/Pension plans and funds',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Pensions et programmes de revenu de retraite/Régimes et fonds de pension',
    },
    {
      subjectCode: '110502',
      subjectEn:
        'Income, pensions, spending and wealth/Pensions and retirement income programs/Registered Retirement Savings Plan (RRSP)',
      subjectFr:
        "Revenu, pensions, dépenses et richesse/Pensions et programmes de revenu de retraite/Régime enregistré d'épargne-retraite (REER)",
    },
    {
      subjectCode: '110503',
      subjectEn:
        'Income, pensions, spending and wealth/Pensions and retirement income programs/Retirement planning',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Pensions et programmes de revenu de retraite/Planification de la retraite',
    },
    {
      subjectCode: '110599',
      subjectEn:
        'Income, pensions, spending and wealth/Pensions and retirement income programs/Other content related to Pensions and retirement income programs',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Pensions et programmes de revenu de retraite/Autre contenu lié à Pensions et programmes de revenu de retraite',
    },
    {
      subjectCode: '110601',
      subjectEn:
        'Income, pensions, spending and wealth/Personal and household taxation/Income taxes',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Imposition des particuliers et des ménages/Impôt sur le revenu',
    },
    {
      subjectCode: '110602',
      subjectEn:
        'Income, pensions, spending and wealth/Personal and household taxation/Property taxes',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Imposition des particuliers et des ménages/Impôt foncier',
    },
    {
      subjectCode: '110699',
      subjectEn:
        'Income, pensions, spending and wealth/Personal and household taxation/Other content related to Personal and household taxation',
      subjectFr:
        'Revenu, pensions, dépenses et richesse/Imposition des particuliers et des ménages/Autre contenu lié à Imposition des particuliers et des ménages',
    },
    {
      subjectCode: '130201',
      subjectEn: 'Health/Diseases and physical health conditions/Arthritis',
      subjectFr: 'Santé/Maladies et état de santé physique/Arthrite',
    },
    {
      subjectCode: '130203',
      subjectEn: 'Health/Diseases and physical health conditions/Cancer',
      subjectFr: 'Santé/Maladies et état de santé physique/Cancer',
    },
    {
      subjectCode: '130204',
      subjectEn:
        'Health/Diseases and physical health conditions/Cardiovascular diseases',
      subjectFr:
        'Santé/Maladies et état de santé physique/Maladies cardiovasculaires',
    },
    {
      subjectCode: '130205',
      subjectEn: 'Health/Diseases and physical health conditions/Diabetes',
      subjectFr: 'Santé/Maladies et état de santé physique/Diabète',
    },
    {
      subjectCode: '130206',
      subjectEn:
        'Health/Diseases and physical health conditions/Blood pressure',
      subjectFr: 'Santé/Maladies et état de santé physique/Tension artérielle',
    },
    {
      subjectCode: '130207',
      subjectEn: 'Health/Diseases and physical health conditions/Influenza',
      subjectFr: 'Santé/Maladies et état de santé physique/Grippe',
    },
    {
      subjectCode: '130208',
      subjectEn: 'Health/Diseases and physical health conditions/Injuries',
      subjectFr: 'Santé/Maladies et état de santé physique/Blessures',
    },
    {
      subjectCode: '130209',
      subjectEn:
        'Health/Diseases and physical health conditions/Body weight and obesity',
      subjectFr:
        "Santé/Maladies et état de santé physique/Poids corporel et l'obésité",
    },
    {
      subjectCode: '130210',
      subjectEn:
        'Health/Diseases and physical health conditions/Pain and discomfort',
      subjectFr:
        'Santé/Maladies et état de santé physique/Douleurs et malaises',
    },
    {
      subjectCode: '130211',
      subjectEn:
        'Health/Diseases and physical health conditions/Neurological conditions',
      subjectFr:
        'Santé/Maladies et état de santé physique/Problèmes neurologiques',
    },
    {
      subjectCode: '130212',
      subjectEn:
        'Health/Diseases and physical health conditions/Sexually transmitted diseases',
      subjectFr:
        'Santé/Maladies et état de santé physique/Maladies transmissibles sexuellement',
    },
    {
      subjectCode: '130218',
      subjectEn: 'Health/Diseases and physical health conditions/Asthma',
      subjectFr: 'Santé/Maladies et état de santé physique/Asthme',
    },
    {
      subjectCode: '130219',
      subjectEn:
        'Health/Diseases and physical health conditions/Chronic obstructive pulmonary disease',
      subjectFr:
        'Santé/Maladies et état de santé physique/Maladie pulmonaire obstructive chronique',
    },
    {
      subjectCode: '130221',
      subjectEn:
        'Health/Diseases and physical health conditions/Chronic conditions',
      subjectFr: 'Santé/Maladies et état de santé physique/Maladies chroniques',
    },
    {
      subjectCode: '130299',
      subjectEn:
        'Health/Diseases and physical health conditions/Other content related to Diseases and physical health conditions',
      subjectFr:
        'Santé/Maladies et état de santé physique/Autre contenu lié à Maladies et état de santé physique',
    },
    {
      subjectCode: '130301',
      subjectEn: 'Health/Environmental factors/Exposure to chemicals',
      subjectFr:
        'Santé/Facteurs environnementaux/Exposition aux produits chimiques',
    },
    {
      subjectCode: '130302',
      subjectEn: 'Health/Environmental factors/Second-hand smoke',
      subjectFr: 'Santé/Facteurs environnementaux/Fumée secondaire',
    },
    {
      subjectCode: '130303',
      subjectEn: 'Health/Environmental factors/Heavy metals',
      subjectFr: 'Santé/Facteurs environnementaux/Métaux lourds',
    },
    {
      subjectCode: '130399',
      subjectEn:
        'Health/Environmental factors/Other content related to Environmental factors',
      subjectFr:
        'Santé/Facteurs environnementaux/Autre contenu lié à Facteurs environnementaux',
    },
    {
      subjectCode: '130401',
      subjectEn: 'Health/Health care services/Access to health care',
      subjectFr: 'Santé/Services de soins de santé/Accès aux soins de santé',
    },
    {
      subjectCode: '130402',
      subjectEn: 'Health/Health care services/Hospitalization',
      subjectFr: 'Santé/Services de soins de santé/Hospitalisation',
    },
    {
      subjectCode: '130403',
      subjectEn: 'Health/Health care services/Patient satisfaction',
      subjectFr: 'Santé/Services de soins de santé/Satisfaction des patients',
    },
    {
      subjectCode: '130404',
      subjectEn: 'Health/Health care services/Health care providers',
      subjectFr:
        'Santé/Services de soins de santé/Fournisseurs de soins de santé',
    },
    {
      subjectCode: '130405',
      subjectEn: 'Health/Health care services/Residential care',
      subjectFr:
        'Santé/Services de soins de santé/Soins pour bénéficiaires internes',
    },
    {
      subjectCode: '130406',
      subjectEn: 'Health/Health care services/Home care and caregivers',
      subjectFr: 'Santé/Services de soins de santé/Soins à domicile et aidants',
    },
    {
      subjectCode: '130499',
      subjectEn:
        'Health/Health care services/Other content related to Health care services',
      subjectFr:
        'Santé/Services de soins de santé/Autre contenu lié à Services de soins de santé',
    },
    {
      subjectCode: '130501',
      subjectEn: 'Health/Life expectancy and deaths/Causes of death',
      subjectFr: 'Santé/Espérance de vie et décès/Causes de décès',
    },
    {
      subjectCode: '130502',
      subjectEn:
        'Health/Life expectancy and deaths/Infant mortality and fetal deaths (stillbirths)',
      subjectFr:
        'Santé/Espérance de vie et décès/Mortalité infantile et morts foetales (mortinaissances)',
    },
    {
      subjectCode: '130503',
      subjectEn: 'Health/Life expectancy and deaths/Life expectancy',
      subjectFr: 'Santé/Espérance de vie et décès/Espérance de vie',
    },
    {
      subjectCode: '130504',
      subjectEn: 'Health/Life expectancy and deaths/Mortality and death rates',
      subjectFr:
        'Santé/Espérance de vie et décès/Mortalité et taux de mortalité',
    },
    {
      subjectCode: '130506',
      subjectEn: 'Health/Life expectancy and deaths/Survival rates',
      subjectFr: 'Santé/Espérance de vie et décès/Taux de survie',
    },
    {
      subjectCode: '130599',
      subjectEn:
        'Health/Life expectancy and deaths/Other content related to Life expectancy and deaths',
      subjectFr:
        'Santé/Espérance de vie et décès/Autre contenu lié à Espérance de vie et décès',
    },
    {
      subjectCode: '130601',
      subjectEn: 'Health/Lifestyle and social conditions/Alcohol and drug use',
      subjectFr:
        "Santé/Mode de vie et conditions sociales/Consommation d'alcool et de drogues",
    },
    {
      subjectCode: '130602',
      subjectEn: 'Health/Lifestyle and social conditions/Nutrition',
      subjectFr: 'Santé/Mode de vie et conditions sociales/Nutrition',
    },
    {
      subjectCode: '130603',
      subjectEn: 'Health/Lifestyle and social conditions/Physical activity',
      subjectFr: 'Santé/Mode de vie et conditions sociales/Activité physique',
    },
    {
      subjectCode: '130604',
      subjectEn: 'Health/Lifestyle and social conditions/Smoking',
      subjectFr: 'Santé/Mode de vie et conditions sociales/Tabagisme',
    },
    {
      subjectCode: '130605',
      subjectEn: 'Health/Lifestyle and social conditions/Prescription drug use',
      subjectFr:
        'Santé/Mode de vie et conditions sociales/Consommation de médicaments sur ordonnance',
    },
    {
      subjectCode: '130606',
      subjectEn:
        'Health/Lifestyle and social conditions/Sense of community belonging',
      subjectFr:
        "Santé/Mode de vie et conditions sociales/Sentiment d'appartenance à la communauté locale",
    },
    {
      subjectCode: '130607',
      subjectEn: 'Health/Lifestyle and social conditions/Food insecurity',
      subjectFr:
        'Santé/Mode de vie et conditions sociales/Insécurité alimentaire',
    },
    {
      subjectCode: '130608',
      subjectEn:
        'Health/Lifestyle and social conditions/Socioeconomic conditions and health',
      subjectFr:
        'Santé/Mode de vie et conditions sociales/Conditions socioéconomiques et la santé',
    },
    {
      subjectCode: '130699',
      subjectEn:
        'Health/Lifestyle and social conditions/Other content related to Lifestyle and social conditions',
      subjectFr:
        'Santé/Mode de vie et conditions sociales/Autre contenu lié à Mode de vie et conditions sociales',
    },
    {
      subjectCode: '130701',
      subjectEn: 'Health/Mental health and well-being/Depression',
      subjectFr: 'Santé/Santé mentale et bien-être/Dépression',
    },
    {
      subjectCode: '130702',
      subjectEn: 'Health/Mental health and well-being/Emotional disorders',
      subjectFr: 'Santé/Santé mentale et bien-être/Troubles affectifs',
    },
    {
      subjectCode: '130703',
      subjectEn: 'Health/Mental health and well-being/Mental illness',
      subjectFr: 'Santé/Santé mentale et bien-être/Maladies mentales',
    },
    {
      subjectCode: '130704',
      subjectEn: 'Health/Mental health and well-being/Stress',
      subjectFr: 'Santé/Santé mentale et bien-être/Stress',
    },
    {
      subjectCode: '130706',
      subjectEn: 'Health/Mental health and well-being/Mental health care',
      subjectFr: 'Santé/Santé mentale et bien-être/Soins de santé mentale',
    },
    {
      subjectCode: '130707',
      subjectEn:
        'Health/Mental health and well-being/Perceived or self-rated health',
      subjectFr:
        'Santé/Santé mentale et bien-être/Santé perçue ou auto-évaluation de la santé',
    },
    {
      subjectCode: '130708',
      subjectEn: 'Health/Mental health and well-being/Suicide',
      subjectFr: 'Santé/Santé mentale et bien-être/Suicide',
    },
    {
      subjectCode: '130799',
      subjectEn:
        'Health/Mental health and well-being/Other content related to Mental health and well-being',
      subjectFr:
        'Santé/Santé mentale et bien-être/Autre contenu lié à Santé mentale et bien-être',
    },
    {
      subjectCode: '130801',
      subjectEn: 'Health/Pregnancy and births/Birth weight',
      subjectFr: 'Santé/Grossesses et naissances/Poids à la naissance',
    },
    {
      subjectCode: '130802',
      subjectEn: 'Health/Pregnancy and births/Births and birth rates',
      subjectFr:
        'Santé/Grossesses et naissances/Naissances et taux de fécondité',
    },
    {
      subjectCode: '130803',
      subjectEn: 'Health/Pregnancy and births/Breastfeeding',
      subjectFr: 'Santé/Grossesses et naissances/Allaitement maternel',
    },
    {
      subjectCode: '130804',
      subjectEn: 'Health/Pregnancy and births/Pregnancy',
      subjectFr: 'Santé/Grossesses et naissance/Grossesse',
    },
    {
      subjectCode: '130899',
      subjectEn:
        'Health/Pregnancy and births/Other content related to Pregnancy and births',
      subjectFr:
        'Santé/Grossesses et naissances/Autre contenu lié à Grossesses et aux naissances',
    },
    {
      subjectCode: '140101',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Earnings and wages by occupation, industry or sector',
      subjectFr:
        "Travail/Gains, salaires et avantages sociaux/Gains et salaires selon la profession, l'industrie ou le secteur",
    },
    {
      subjectCode: '140102',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Earnings and wages by region or location',
      subjectFr:
        'Travail/Gains, salaires et avantages sociaux/Gains et salaires selon la région ou le lieu',
    },
    {
      subjectCode: '140103',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Earnings by age or sex',
      subjectFr:
        "Travail/Gains, salaires et avantages sociaux/Gains selon l'âge ou le sexe",
    },
    {
      subjectCode: '140104',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Earnings of immigrants',
      subjectFr:
        'Travail/Gains, salaires et avantages sociaux/Gains des immigrants',
    },
    {
      subjectCode: '140105',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Education, skills and earnings',
      subjectFr:
        'Travail/Gains, salaires et avantages sociaux/Éducation, compétences et gains',
    },
    {
      subjectCode: '140106',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Minimum wage or low-paid work',
      subjectFr:
        'Travail/Gains, salaires et avantages sociaux/Salaire minimum ou travail peu rémunéré',
    },
    {
      subjectCode: '140107',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Non-wage benefits',
      subjectFr:
        'Travail/Gains, salaires et avantages sociaux/Avantages sociaux',
    },
    {
      subjectCode: '140108',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Parents, families and earnings',
      subjectFr:
        'Travail/Gains, salaires et avantages sociaux/Parents, familles et gains',
    },
    {
      subjectCode: '140199',
      subjectEn:
        'Labour/Earnings, wages and non-wage benefits/Other content related to Earnings, wages and non-wage benefits',
      subjectFr:
        'Travail/Gains, salaires et avantages sociaux/Autre contenu lié à Gains, salaires et avantages sociaux',
    },
    {
      subjectCode: '140201',
      subjectEn:
        'Labour/Employment and unemployment/Employment by occupation, industry or sector',
      subjectFr:
        "Travail/Emploi et chômage/Emploi selon la profession, l'industrie ou le secteur",
    },
    {
      subjectCode: '140202',
      subjectEn:
        'Labour/Employment and unemployment/Education and the labour market',
      subjectFr: 'Travail/Emploi et chômage/Éducation et marché du travail',
    },
    {
      subjectCode: '140203',
      subjectEn: 'Labour/Employment and unemployment/Regional labour markets',
      subjectFr: 'Travail/Emploi et chômage/Marchés du travail régionaux',
    },
    {
      subjectCode: '140204',
      subjectEn:
        'Labour/Employment and unemployment/Immigrants in the labour market',
      subjectFr:
        'Travail/Emploi et chômage/Immigrants sur le marché du travail',
    },
    {
      subjectCode: '140205',
      subjectEn:
        'Labour/Employment and unemployment/Labour force characteristics',
      subjectFr:
        'Travail/Emploi et chômage/Caractéristiques de la population active',
    },
    {
      subjectCode: '140207',
      subjectEn: 'Labour/Employment and unemployment/Unemployment',
      subjectFr: 'Travail/Emploi et chômage/Chômage',
    },
    {
      subjectCode: '140208',
      subjectEn:
        'Labour/Employment and unemployment/Women in the labour market',
      subjectFr: 'Travail/Emploi et chômage/Femmes sur le marché du travail',
    },
    {
      subjectCode: '140209',
      subjectEn:
        'Labour/Employment and unemployment/Youth and young adults in the labour market',
      subjectFr:
        'Travail/Emploi et chômage/Jeunes et jeunes adultes sur le marché du travail',
    },
    {
      subjectCode: '140210',
      subjectEn:
        'Labour/Employment and unemployment/Aboriginal peoples and the labour market',
      subjectFr:
        'Travail/Emploi et chômage/Peuples autochtones et marché du travail',
    },
    {
      subjectCode: '140211',
      subjectEn: 'Labour/Employment and unemployment/Labour market overview',
      subjectFr: 'Travail/Emploi et chômage/Aperçu du marché du travail',
    },
    {
      subjectCode: '140299',
      subjectEn:
        'Labour/Employment and unemployment/Other content related to Employment and unemployment',
      subjectFr:
        'Travail/Emploi et chômage/Autre contenu lié à Emploi et chômage',
    },
    {
      subjectCode: '140401',
      subjectEn: 'Labour/Hours of work and work arrangements/Hours of work',
      subjectFr:
        'Travail/Heures de travail et conditions de travail/Heures de travail',
    },
    {
      subjectCode: '140402',
      subjectEn:
        'Labour/Hours of work and work arrangements/Part-time and non-permanent employment',
      subjectFr:
        'Travail/Heures de travail et conditions de travail/Emplois à temps partiel et non permanents',
    },
    {
      subjectCode: '140403',
      subjectEn: 'Labour/Hours of work and work arrangements/Self-employment',
      subjectFr:
        'Travail/Heures de travail et conditions de travail/Travail autonome',
    },
    {
      subjectCode: '140404',
      subjectEn: 'Labour/Hours of work and work arrangements/Working from home',
      subjectFr:
        'Travail/Heures de travail et conditions de travail/Travail à domicile',
    },
    {
      subjectCode: '140499',
      subjectEn:
        'Labour/Hours of work and work arrangements/Other content related to Hours of work and work arrangements',
      subjectFr:
        'Travail/Heures de travail et conditions de travail/Autre contenu lié à Heures de travail et conditions de travail',
    },
    {
      subjectCode: '140701',
      subjectEn: 'Labour/Commuting to work/Commuting flows',
      subjectFr:
        'Travail/Déplacement du domicile au lieu de travail/Itinéraires des déplacements à partir du domicile vers le lieu de travail',
    },
    {
      subjectCode: '140702',
      subjectEn: 'Labour/Commuting to work/Commuting to work characteristics',
      subjectFr:
        'Travail/Déplacement du domicile au lieu de travail/Caractéristiques des déplacements à partir du domicile vers le lieu de travail',
    },
    {
      subjectCode: '140703',
      subjectEn: 'Labour/Commuting to work/Workplace type',
      subjectFr:
        'Travail/Déplacement du domicile au lieu de travail/Type de lieu de travail',
    },
    {
      subjectCode: '140799',
      subjectEn:
        'Labour/Commuting to work/Other content related to Commuting to work',
      subjectFr:
        'Travail/Déplacement du domicile au lieu de travail/Autre contenu lié à Déplacement du domicile au lieu de travail',
    },
    {
      subjectCode: '150401',
      subjectEn: 'Languages/Knowledge of languages/Aboriginal languages',
      subjectFr: 'Langues/Connaissance des langues/Langues autochtones',
    },
    {
      subjectCode: '150402',
      subjectEn: 'Languages/Knowledge of languages/Immigrant languages',
      subjectFr: 'Langues/Connaissance des langues/Langues immigrantes',
    },
    {
      subjectCode: '150403',
      subjectEn:
        'Languages/Knowledge of languages/Official languages and English-French bilingualism',
      subjectFr:
        'Langues/Connaissance des langues/Langues officielles et bilinguisme français-anglais',
    },
    {
      subjectCode: '150499',
      subjectEn:
        'Languages/Knowledge of languages/Other content related to Knowledge of languages',
      subjectFr:
        'Langues/Connaissance des langues/Autre contenu lié à Connaissance des langues',
    },
    {
      subjectCode: '150701',
      subjectEn: 'Languages/Language groups/First official language spoken',
      subjectFr:
        'Langues/Groupes linguistiques/Première langue officielle parlée',
    },
    {
      subjectCode: '150702',
      subjectEn: 'Languages/Language groups/Mother tongue',
      subjectFr: 'Langues/Groupes linguistiques/Langue maternelle',
    },
    {
      subjectCode: '150703',
      subjectEn: 'Languages/Language groups/Official language minorities',
      subjectFr: 'Langues/Groupes linguistiques/Minorités de langue officielle',
    },
    {
      subjectCode: '150799',
      subjectEn:
        'Languages/Language groups/Other content related to Language groups',
      subjectFr:
        'Langues/Groupes linguistiques/Autre contenu lié à Groupes linguistiques',
    },
    {
      subjectCode: '150801',
      subjectEn: 'Languages/Use of languages/Languages spoken at home',
      subjectFr: 'Langues/Utilisation des langues/Langues parlées à la maison',
    },
    {
      subjectCode: '150802',
      subjectEn: 'Languages/Use of languages/Languages used at work',
      subjectFr: 'Langues/Utilisation des langues/Langues utilisées au travail',
    },
    {
      subjectCode: '150899',
      subjectEn:
        'Languages/Use of languages/Other content related to Use of languages',
      subjectFr:
        'Langues/Utilisation des langues/Autre contenu lié à Utilisation des langues',
    },
    {
      subjectCode: '170801',
      subjectEn: 'Population and demography/International migration/Emigration',
      subjectFr:
        'Population et démographie/Migration internationale/Émigration',
    },
    {
      subjectCode: '170802',
      subjectEn:
        'Population and demography/International migration/Immigration',
      subjectFr:
        'Population et démographie/Migration internationale/Immigration',
    },
    {
      subjectCode: '170803',
      subjectEn:
        'Population and demography/International migration/Non-permanent residents',
      subjectFr:
        'Population et démographie/Migration internationale/Résidents non permanents',
    },
    {
      subjectCode: '170899',
      subjectEn:
        'Population and demography/International migration/Other content related to International migration',
      subjectFr:
        'Population et démographie/Migration internationale/Autre contenu lié à Migration internationale',
    },
    {
      subjectCode: '171001',
      subjectEn:
        'Population and demography/Population estimates/Annual population estimates',
      subjectFr:
        'Population et démographie/Estimations démographiques/Estimations démographiques annuelles',
    },
    {
      subjectCode: '171003',
      subjectEn:
        'Population and demography/Population estimates/Quarterly population estimates',
      subjectFr:
        'Population et démographie/Estimations démographiques/Estimations démographiques trimestrielles',
    },
    {
      subjectCode: '171004',
      subjectEn:
        'Population and demography/Population estimates/Subprovincial population estimates',
      subjectFr:
        'Population et démographie/Estimations démographiques/Estimations démographiques infraprovinciales',
    },
    {
      subjectCode: '171099',
      subjectEn:
        'Population and demography/Population estimates/Other content related to Population estimates',
      subjectFr:
        'Population et démographie/Estimations démographiques/Autre contenu lié à  Estimations démographiques',
    },
    {
      subjectCode: '171101',
      subjectEn:
        'Population and demography/Population projections/Aboriginal population',
      subjectFr:
        'Population et démographie/Projections démographiques/Population autochtone',
    },
    {
      subjectCode: '171102',
      subjectEn:
        'Population and demography/Population projections/Ethnocultural diversity',
      subjectFr:
        'Population et démographie/Projections démographiques/Diversité ethnoculturelle',
    },
    {
      subjectCode: '171103',
      subjectEn:
        'Population and demography/Population projections/Labour force',
      subjectFr:
        'Population et démographie/Projections démographiques/Population active',
    },
    {
      subjectCode: '171104',
      subjectEn:
        'Population and demography/Population projections/Population projections by provinces and territories',
      subjectFr:
        'Population et démographie/Projections démographiques/Projections démographiques selon les provinces et les territoires',
    },
    {
      subjectCode: '171199',
      subjectEn:
        'Population and demography/Population projections/Other content related to Population projections',
      subjectFr:
        'Population et démographie/Projections démographiques/Autre contenu lié à  Projections démographiques',
    },
    {
      subjectCode: '171201',
      subjectEn: 'Population and demography/Population counts/Age and sex',
      subjectFr: 'Population et démographie/Chiffres de population/Âge et sexe',
    },
    {
      subjectCode: '171202',
      subjectEn:
        'Population and demography/Population counts/Total population counts',
      subjectFr:
        'Population et démographie/Chiffres de population/Chiffres totals de population',
    },
    {
      subjectCode: '171203',
      subjectEn:
        'Population and demography/Population counts/Families and marital status',
      subjectFr:
        'Population et démographie/Chiffres de population/Familles et état matrimonial ',
    },
    {
      subjectCode: '171299',
      subjectEn:
        'Population and demography/Population counts/Other content related to Population counts',
      subjectFr:
        'Population et démographie/Chiffres de population/Autre contenu lié à Chiffres de population',
    },
    {
      subjectCode: '180501',
      subjectEn:
        'Prices and price indexes/Producer price indexes/Construction price indexes',
      subjectFr:
        'Prix et indices des prix/Indices des prix à la production/Indices des prix à la construction',
    },
    {
      subjectCode: '180502',
      subjectEn:
        'Prices and price indexes/Producer price indexes/Industrial product price indexes',
      subjectFr:
        'Prix et indices des prix/Indices des prix à la production/Indices des prix des produits industriels',
    },
    {
      subjectCode: '180503',
      subjectEn:
        'Prices and price indexes/Producer price indexes/Machinery and equipment price indexes',
      subjectFr:
        'Prix et indices des prix/Indices des prix à la production/Indices des prix des machines et du matériel',
    },
    {
      subjectCode: '180504',
      subjectEn:
        'Prices and price indexes/Producer price indexes/Service price indexes',
      subjectFr:
        'Prix et indices des prix/Indices des prix à la production/Indices des prix des services',
    },
    {
      subjectCode: '180599',
      subjectEn:
        'Prices and price indexes/Producer price indexes/Other content related to Producer price indexes',
      subjectFr:
        'Prix et indices des prix/Indices des prix à la production/Autre contenu lié à Indices des prix à la production',
    },
    {
      subjectCode: '210201',
      subjectEn:
        'Business and consumer services and culture/Culture/Film, television and video production',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Culture/Production cinématographique, télévisuelle et vidéo',
    },
    {
      subjectCode: '210202',
      subjectEn:
        'Business and consumer services and culture/Culture/Trade in culture goods and services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Culture/Commerce des biens et de services de la culture',
    },
    {
      subjectCode: '210203',
      subjectEn:
        'Business and consumer services and culture/Culture/Music and performing arts',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Culture/Musique et arts du spectacle',
    },
    {
      subjectCode: '210204',
      subjectEn:
        'Business and consumer services and culture/Culture/Publishing',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Culture/Édition',
    },
    {
      subjectCode: '210206',
      subjectEn:
        'Business and consumer services and culture/Culture/Radio and television broadcasting',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Culture/Radiodiffusion et télédiffusion',
    },
    {
      subjectCode: '210299',
      subjectEn:
        'Business and consumer services and culture/Culture/Other content related to Culture',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Culture/Autre contenu lié à Culture',
    },
    {
      subjectCode: '210401',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Accounting and consulting services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Services de comptabilité et de conseils',
    },
    {
      subjectCode: '210402',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Advertising services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Services de publicité',
    },
    {
      subjectCode: '210404',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Rental, leasing and real estate services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Services immobiliers et services de location et de location à bail',
    },
    {
      subjectCode: '210407',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Architect, engineering, design and surveying and mapping services',
      subjectFr:
        "Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Services d'architecte, d'ingéniere, de conception et de prospection, d'arpentage et de cartographie",
    },
    {
      subjectCode: '210408',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Accommodation and food services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Hébergement et services de restauration',
    },
    {
      subjectCode: '210409',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Sports and leisure',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Sports et loisirs',
    },
    {
      subjectCode: '210410',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Software development and computer services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Développement de logiciels et les services informatiques',
    },
    {
      subjectCode: '210411',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Repair and maintenance services',
      subjectFr:
        "Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Services de réparation et d'entretien",
    },
    {
      subjectCode: '210412',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Employment services',
      subjectFr:
        "Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Services d'emploi",
    },
    {
      subjectCode: '210413',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Travel agencies and tour operators',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Agences de voyages et voyagistes',
    },
    {
      subjectCode: '210414',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Personal services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Services personnels',
    },
    {
      subjectCode: '210499',
      subjectEn:
        'Business and consumer services and culture/Business and consumer services/Other content related to Business and consumer services',
      subjectFr:
        'Services aux entreprises et aux consommateurs et culture/Services aux entreprises et aux consommateurs/Autre contenu lié à Services aux entreprises et aux consommateurs ',
    },
    {
      subjectCode: '220401',
      subjectEn:
        'Information and communications technology/Internet use/Business and government Internet use',
      subjectFr:
        "Technologies de l'information et des communications/Utilisation d'Internet/Utilisation d'Internet par les entreprises et les gouvernements",
    },
    {
      subjectCode: '220402',
      subjectEn:
        'Information and communications technology/Internet use/E-commerce',
      subjectFr:
        "Technologies de l'information et des communications/Utilisation d'Internet/Commerce électronique",
    },
    {
      subjectCode: '220403',
      subjectEn:
        'Information and communications technology/Internet use/Individual and household Internet use',
      subjectFr:
        "Technologies de l'information et des communications/Utilisation d'Internet/Utilisation d'Internet par les particuliers et les ménages",
    },
    {
      subjectCode: '220499',
      subjectEn:
        'Information and communications technology/Internet use/Other content related to Internet use',
      subjectFr:
        "Technologies de l'information et des communications/Utilisation d'Internet/Autre contenu lié à Utilisation d'Internet",
    },
    {
      subjectCode: '230101',
      subjectEn: 'Transportation/Air transportation/Air fares',
      subjectFr: 'Transport/Transport aérien/Tarifs aériens',
    },
    {
      subjectCode: '230102',
      subjectEn:
        'Transportation/Air transportation/Air passenger origin and destination',
      subjectFr:
        'Transport/Transport aérien/Origine et destination des passagers aériens',
    },
    {
      subjectCode: '230103',
      subjectEn: 'Transportation/Air transportation/Aircraft movements',
      subjectFr: "Transport/Transport aérien/Mouvements d'aéronefs",
    },
    {
      subjectCode: '230104',
      subjectEn: 'Transportation/Air transportation/Airport activity',
      subjectFr: 'Transport/Transport aérien/Activité aéroportuaire',
    },
    {
      subjectCode: '230105',
      subjectEn:
        'Transportation/Air transportation/Aviation financial and operating statistics',
      subjectFr:
        "Transport/Transport aérien/Statistiques financières et d'exploitation de l'aviation",
    },
    {
      subjectCode: '230199',
      subjectEn:
        'Transportation/Air transportation/Other content related to Air transportation',
      subjectFr:
        'Transport/Transport aérien/Autre contenu lié à Transport aérien',
    },
    {
      subjectCode: '230401',
      subjectEn: 'Transportation/Road transportation/Trucking industry',
      subjectFr: 'Transport/Transport routier/Industrie du camionnage',
    },
    {
      subjectCode: '230402',
      subjectEn: 'Transportation/Road transportation/Motor vehicles',
      subjectFr: 'Transport/Transport routier/Véhicules automobiles',
    },
    {
      subjectCode: '230403',
      subjectEn:
        'Transportation/Road transportation/Passenger bus and transit industries',
      subjectFr:
        'Transport/Transport routier/Industries du transport de passagers par autobus et du transport',
    },
    {
      subjectCode: '230404',
      subjectEn: 'Transportation/Road transportation/Passenger-kilometres',
      subjectFr: 'Transport/Transport routier/Passagers-kilomètres',
    },
    {
      subjectCode: '230405',
      subjectEn: 'Transportation/Road transportation/Vehicle-kilometres',
      subjectFr: 'Transport/Transport routier/Véhicules-kilomètres',
    },
    {
      subjectCode: '230499',
      subjectEn:
        'Transportation/Road transportation/Other content related to Road transportation',
      subjectFr:
        'Transport/Transport routier/Autre contenu lié à Transport routier',
    },
    {
      subjectCode: '250701',
      subjectEn: 'Energy/Fossil fuels/Coal',
      subjectFr: 'Énergie/Énergies fossiles/Charbon',
    },
    {
      subjectCode: '250702',
      subjectEn: 'Energy/Fossil fuels/Crude oil and natural gas',
      subjectFr: 'Énergie/Énergies fossiles/Pétrole brut et gaz naturel',
    },
    {
      subjectCode: '250703',
      subjectEn: 'Energy/Fossil fuels/Petroleum products',
      subjectFr: 'Énergie/Énergies fossiles/Produits pétroliers',
    },
    {
      subjectCode: '250799',
      subjectEn: 'Energy/Fossil fuels/Other content related to Fossil fuels',
      subjectFr:
        'Énergie/Énergies fossiles/Autre contenu lié à Énergies fossiles',
    },
    {
      subjectCode: '270301',
      subjectEn:
        'Science and technology/Innovation and business strategy/Software licensing and advanced technology use',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise/Licence de logiciel et utilisation des technologies de pointe",
    },
    {
      subjectCode: '270302',
      subjectEn:
        'Science and technology/Innovation and business strategy/Products and processes',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise/Produits et processus",
    },
    {
      subjectCode: '270303',
      subjectEn:
        'Science and technology/Innovation and business strategy/Enterprise and subsidiary activities',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise/Activités des entreprises et des filiales",
    },
    {
      subjectCode: '270304',
      subjectEn:
        'Science and technology/Innovation and business strategy/Organizational and management practices',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise/Pratiques organisationnelles et de gestion",
    },
    {
      subjectCode: '270305',
      subjectEn:
        'Science and technology/Innovation and business strategy/Industrial activities',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise/Activités industrielles ",
    },
    {
      subjectCode: '270306',
      subjectEn:
        'Science and technology/Innovation and business strategy/Patents, copyrights and trademarks',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise/Brevets, droits d'auteur et marques de commerce",
    },
    {
      subjectCode: '270399',
      subjectEn:
        'Science and technology/Innovation and business strategy/Other content related to Innovation and business strategy',
      subjectFr:
        "Sciences et technologie/Innovation et stratégies d'entreprise/Autre contenu lié à Innovation et stratégies d'entreprise",
    },
    {
      subjectCode: '270501',
      subjectEn:
        'Science and technology/Research and development/Institutional expenditures and activities',
      subjectFr:
        'Sciences et technologie/Recherche et développement/Dépenses et activités du secteur institutionnel',
    },
    {
      subjectCode: '270502',
      subjectEn:
        'Science and technology/Research and development/Private expenditures and activities',
      subjectFr:
        'Sciences et technologie/Recherche et développement/Dépenses et activités du secteur privé',
    },
    {
      subjectCode: '270503',
      subjectEn:
        'Science and technology/Research and development/Public expenditures and activities',
      subjectFr:
        'Sciences et technologie/Recherche et développement/Dépenses et activités du secteur public',
    },
    {
      subjectCode: '270505',
      subjectEn:
        'Science and technology/Research and development/Health expenditures and activities',
      subjectFr:
        'Sciences et technologie/Recherche et développement/Dépenses et activités du secteur de la santé',
    },
    {
      subjectCode: '270599',
      subjectEn:
        'Science and technology/Research and development/Other content related to Research and development',
      subjectFr:
        'Sciences et technologie/Recherche et développement/Autre contenu lié à Recherche et développement',
    },
    {
      subjectCode: '320101',
      subjectEn: 'Agriculture/Crops and horticulture/Grains and field crops',
      subjectFr:
        'Agriculture/Cultures et horticulture/Grains et grandes cultures',
    },
    {
      subjectCode: '320102',
      subjectEn: 'Agriculture/Crops and horticulture/Vegetables',
      subjectFr: 'Agriculture/Cultures et horticulture/Légumes',
    },
    {
      subjectCode: '320104',
      subjectEn: 'Agriculture/Crops and horticulture/Fruits, berries and nuts',
      subjectFr:
        'Agriculture/Cultures et horticulture/Fruits, petits fruits et noix',
    },
    {
      subjectCode: '320105',
      subjectEn: 'Agriculture/Crops and horticulture/Greenhouses and nurseries',
      subjectFr: 'Agriculture/Cultures et horticulture/Serres et pépinières',
    },
    {
      subjectCode: '320106',
      subjectEn:
        'Agriculture/Crops and horticulture/Organic farming and genetic modification',
      subjectFr:
        'Agriculture/Cultures et horticulture/Agriculture biologique et modification génétique',
    },
    {
      subjectCode: '320107',
      subjectEn: 'Agriculture/Crops and horticulture/Maple, honey and bees',
      subjectFr:
        "Agriculture/Cultures et horticulture/L'Érable, miel et abeilles",
    },
    {
      subjectCode: '320199',
      subjectEn:
        'Agriculture/Crops and horticulture/Other content related to Crops and horticulture',
      subjectFr:
        'Agriculture/Cultures et horticulture/Autre contenu lié à Cultures et horticulture',
    },
    {
      subjectCode: '320201',
      subjectEn:
        'Agriculture/Farm financial statistics/Farm revenue and expenses',
      subjectFr:
        "Agriculture/Statistiques financières des exploitations agricoles/Revenu et dépenses d'exploitation agricole",
    },
    {
      subjectCode: '320202',
      subjectEn: 'Agriculture/Farm financial statistics/Farm capital',
      subjectFr:
        'Agriculture/Statistiques financières des exploitations agricoles/Capital agricole',
    },
    {
      subjectCode: '320204',
      subjectEn:
        'Agriculture/Farm financial statistics/Farm and off-farm income',
      subjectFr:
        'Agriculture/Statistiques financières des exploitations agricoles/Revenu agricole et non agricole',
    },
    {
      subjectCode: '320299',
      subjectEn:
        'Agriculture/Farm financial statistics/Other content related to Farm financial statistics',
      subjectFr:
        'Agriculture/Statistiques financières des exploitations agricoles/Autre contenu lié à Statistiques financières des exploitations agricoles ',
    },
    {
      subjectCode: '320301',
      subjectEn:
        'Agriculture/Farms and farm operators/Demographic characteristics',
      subjectFr:
        'Agriculture/Exploitations et exploitants agricoles/Caractéristiques démographiques',
    },
    {
      subjectCode: '320302',
      subjectEn:
        'Agriculture/Farms and farm operators/Farm classification and type',
      subjectFr:
        'Agriculture/Exploitations et exploitants agricoles/Classification et type de ferme',
    },
    {
      subjectCode: '320399',
      subjectEn:
        'Agriculture/Farms and farm operators/Other content related to Farms and farm operators',
      subjectFr:
        'Agriculture/Exploitations et exploitants agricoles/Autre contenu lié à Exploitations et exploitants agricoles',
    },
    {
      subjectCode: '320401',
      subjectEn: 'Agriculture/Livestock and aquaculture/Aquaculture',
      subjectFr: 'Agriculture/Bétail et aquaculture/Aquaculture',
    },
    {
      subjectCode: '320402',
      subjectEn: 'Agriculture/Livestock and aquaculture/Cattle, pigs and sheep',
      subjectFr: 'Agriculture/Bétail et aquaculture/Bovins, porcs et moutons',
    },
    {
      subjectCode: '320403',
      subjectEn: 'Agriculture/Livestock and aquaculture/Dairy products',
      subjectFr: 'Agriculture/Bétail et aquaculture/Produits laitiers',
    },
    {
      subjectCode: '320404',
      subjectEn: 'Agriculture/Livestock and aquaculture/Meat products',
      subjectFr: 'Agriculture/Bétail et aquaculture/Produits de viande',
    },
    {
      subjectCode: '320405',
      subjectEn: 'Agriculture/Livestock and aquaculture/Poultry and eggs',
      subjectFr: 'Agriculture/Bétail et aquaculture/Volailles et oeufs',
    },
    {
      subjectCode: '320407',
      subjectEn:
        'Agriculture/Livestock and aquaculture/Fur, pelt and wool products',
      subjectFr:
        'Agriculture/Bétail et aquaculture/Produits des fourrures, peaux et laine',
    },
    {
      subjectCode: '320408',
      subjectEn: 'Agriculture/Livestock and aquaculture/Alternative livestock',
      subjectFr: 'Agriculture/Bétail et aquaculture/Espèces alternatives',
    },
    {
      subjectCode: '320499',
      subjectEn:
        'Agriculture/Livestock and aquaculture/Other content related to Livestock and aquaculture',
      subjectFr:
        'Agriculture/Bétail et aquaculture/Autre contenu lié à Bétail et aquaculture',
    },
    {
      subjectCode: '320601',
      subjectEn:
        'Agriculture/Land use and environmental practices/Environmental practices',
      subjectFr:
        'Agriculture/Utilisation des terres et pratiques environnementales/Pratiques environnementales',
    },
    {
      subjectCode: '320604',
      subjectEn:
        'Agriculture/Land use and environmental practices/Farm area, land tenure and land use',
      subjectFr:
        "Agriculture/Utilisation des terres et pratiques environnementales/Superficie agricole, mode d'occupation et utilisation des terres",
    },
    {
      subjectCode: '320606',
      subjectEn:
        'Agriculture/Land use and environmental practices/Water use and irrigation',
      subjectFr:
        "Agriculture/Utilisation des terres et pratiques environnementales/Utilisation de l'eau et irrigation",
    },
    {
      subjectCode: '320699',
      subjectEn:
        'Agriculture/Land use and environmental practices/Other content related to Land use and environmental practices',
      subjectFr:
        'Agriculture/Utilisation des terres et pratiques environnementales/Autre contenu lié à Utilisation des terres et pratiques environnementales ',
    },
    {
      subjectCode: '330101',
      subjectEn:
        'Business performance and ownership/Business dynamics/Business adaptation and adjustment',
      subjectFr:
        'Rendement des entreprises et appartenance/Dynamique des entreprises/Adaptation et ajustement des entreprises',
    },
    {
      subjectCode: '330102',
      subjectEn:
        'Business performance and ownership/Business dynamics/Entry, exit, mergers and growth',
      subjectFr:
        'Rendement des entreprises et appartenance/Dynamique des entreprises/Création, disparitions, fusions et croissance',
    },
    {
      subjectCode: '330103',
      subjectEn:
        'Business performance and ownership/Business dynamics/Current business conditions',
      subjectFr:
        'Rendement des entreprises et appartenance/Dynamique des entreprises/Conditions actuelles des entreprises',
    },
    {
      subjectCode: '330104',
      subjectEn:
        'Business performance and ownership/Business dynamics/Regional and urban profiles',
      subjectFr:
        'Rendement des entreprises et appartenance/Dynamique des entreprises/Profils régionaux et urbains',
    },
    {
      subjectCode: '330105',
      subjectEn:
        'Business performance and ownership/Business dynamics/Small and medium sized business',
      subjectFr:
        'Rendement des entreprises et appartenance/Dynamique des entreprises/Petites et moyennes entreprises',
    },
    {
      subjectCode: '330199',
      subjectEn:
        'Business performance and ownership/Business dynamics/Other content related to Business dynamics',
      subjectFr:
        'Rendement des entreprises et appartenance/Dynamique des entreprises/Autre contenu lié à Dynamique des entreprises',
    },
    {
      subjectCode: '330201',
      subjectEn:
        'Business performance and ownership/Business ownership/Foreign and domestic control',
      subjectFr:
        'Rendement des entreprises et appartenance/Propriété des entreprises/Contrôle étranger et canadien',
    },
    {
      subjectCode: '330202',
      subjectEn:
        'Business performance and ownership/Business ownership/Multinationals',
      subjectFr:
        'Rendement des entreprises et appartenance/Propriété des entreprises/Multinationales',
    },
    {
      subjectCode: '330299',
      subjectEn:
        'Business performance and ownership/Business ownership/Other content related to Business ownership',
      subjectFr:
        'Rendement des entreprises et appartenance/Propriété des entreprises/Autre contenu lié à Propriété des entreprises',
    },
    {
      subjectCode: '330301',
      subjectEn:
        'Business performance and ownership/Financial statements and performance/Corporate taxation',
      subjectFr:
        'Rendement des entreprises et appartenance/États financiers et rendement/Fiscalité des entreprises',
    },
    {
      subjectCode: '330302',
      subjectEn:
        'Business performance and ownership/Financial statements and performance/Financial institutions and intermediaries',
      subjectFr:
        'Rendement des entreprises et appartenance/États financiers et rendement/Institutions et intermédiaires financiers',
    },
    {
      subjectCode: '330303',
      subjectEn:
        'Business performance and ownership/Financial statements and performance/Financial performance',
      subjectFr:
        'Rendement des entreprises et appartenance/États financiers et rendement/Performance financière',
    },
    {
      subjectCode: '330304',
      subjectEn:
        'Business performance and ownership/Financial statements and performance/Financial markets',
      subjectFr:
        'Rendement des entreprises et appartenance/États financiers et rendement/Marchés financiers',
    },
    {
      subjectCode: '330305',
      subjectEn:
        'Business performance and ownership/Financial statements and performance/Operating statistics',
      subjectFr:
        "Rendement des entreprises et appartenance/États financiers et rendement/Statistiques d'exploitation",
    },
    {
      subjectCode: '330399',
      subjectEn:
        'Business performance and ownership/Financial statements and performance/Other content related to Financial statements and performance',
      subjectFr:
        'Rendement des entreprises et appartenance/États financiers et rendement/Autre contenu lié à États financiers et rendement',
    },
    {
      subjectCode: '350101',
      subjectEn:
        'Crime and justice/Correctional services/Adult correctional services',
      subjectFr:
        'Crime et justice/Services correctionnels/Services correctionnels pour adultes',
    },
    {
      subjectCode: '350102',
      subjectEn:
        'Crime and justice/Correctional services/Youth correctional services',
      subjectFr:
        'Crime et justice/Services correctionnels/Services correctionnels pour jeunes',
    },
    {
      subjectCode: '350199',
      subjectEn:
        'Crime and justice/Correctional services/Other content related to Correctional services',
      subjectFr:
        'Crime et justice/Services correctionnels/Autre contenu lié à Services correctionnels',
    },
    {
      subjectCode: '350201',
      subjectEn: 'Crime and justice/Courts/Adult criminal courts',
      subjectFr: 'Crime et justice/Tribunaux/Tribunaux criminels pour adultes',
    },
    {
      subjectCode: '350202',
      subjectEn: 'Crime and justice/Courts/Civil courts',
      subjectFr: 'Crime et justice/Tribunaux/Tribunaux civils',
    },
    {
      subjectCode: '350203',
      subjectEn: 'Crime and justice/Courts/Youth courts',
      subjectFr: 'Crime et justice/Tribunaux/Tribunaux de la jeunesse',
    },
    {
      subjectCode: '350204',
      subjectEn: 'Crime and justice/Courts/Legal aid',
      subjectFr: 'Crime et justice/Tribunaux/Aide juridique',
    },
    {
      subjectCode: '350299',
      subjectEn: 'Crime and justice/Courts/Other content related to Courts',
      subjectFr: 'Crime et justice/Tribunaux/Autre contenu lié à Tribunaux',
    },
    {
      subjectCode: '350302',
      subjectEn: 'Crime and justice/Crimes and offences/Hate crimes',
      subjectFr: 'Crime et justice/Crimes et infractions/Crimes haineux',
    },
    {
      subjectCode: '350303',
      subjectEn: 'Crime and justice/Crimes and offences/Homicides',
      subjectFr: 'Crime et justice/Crimes et infractions/Homicides',
    },
    {
      subjectCode: '350304',
      subjectEn: 'Crime and justice/Crimes and offences/Sexual assaults',
      subjectFr: 'Crime et justice/Crimes et infractions/Agressions sexuelles',
    },
    {
      subjectCode: '350305',
      subjectEn: 'Crime and justice/Crimes and offences/Crime rates',
      subjectFr: 'Crime et justice/Crimes et infractions/Taux de criminalité',
    },
    {
      subjectCode: '350306',
      subjectEn: 'Crime and justice/Crimes and offences/Crime Severity Index',
      subjectFr:
        'Crime et justice/Crimes et infractions/Indice de gravité de la criminalité',
    },
    {
      subjectCode: '350399',
      subjectEn:
        'Crime and justice/Crimes and offences/Other content related to Crimes and offences',
      subjectFr:
        'Crime et justice/Crimes et infractions/Autre contenu lié à Crimes et infractions',
    },
    {
      subjectCode: '350501',
      subjectEn: 'Crime and justice/Victimization/Family violence',
      subjectFr: 'Crime et justice/Victimisation/Violence familiale',
    },
    {
      subjectCode: '350502',
      subjectEn: 'Crime and justice/Victimization/Transition homes',
      subjectFr: "Crime et justice/Victimisation/Maisons d'hébergement",
    },
    {
      subjectCode: '350503',
      subjectEn: 'Crime and justice/Victimization/Victim services',
      subjectFr: 'Crime et justice/Victimisation/Services aux victimes',
    },
    {
      subjectCode: '350504',
      subjectEn:
        'Crime and justice/Victimization/Victimization of children and youth',
      subjectFr:
        'Crime et justice/Victimisation/Victimisation des enfants et jeunes',
    },
    {
      subjectCode: '350505',
      subjectEn: 'Crime and justice/Victimization/Victimization of seniors',
      subjectFr: 'Crime et justice/Victimisation/Victimisation des aînés',
    },
    {
      subjectCode: '350506',
      subjectEn: 'Crime and justice/Victimization/Victimization of women',
      subjectFr: 'Crime et justice/Victimisation/Victimisation des femmes',
    },
    {
      subjectCode: '350599',
      subjectEn:
        'Crime and justice/Victimization/Other content related to Victimization',
      subjectFr:
        'Crime et justice/Victimisation/Autre contenu lié à Victimisation',
    },
    {
      subjectCode: '360301',
      subjectEn:
        'Economic accounts/Government finance statistics/Government financial flows and balance sheets',
      subjectFr:
        'Comptes économiques/Finances publiques/Flux financiers et bilan des administrations publiques',
    },
    {
      subjectCode: '360302',
      subjectEn:
        'Economic accounts/Government finance statistics/Government revenue and expenditures',
      subjectFr:
        'Comptes économiques/Finances publiques/Recettes et dépenses des administrations publiques',
    },
    {
      subjectCode: '360399',
      subjectEn:
        'Economic accounts/Government finance statistics/Other content related to Government finance statistics',
      subjectFr:
        'Comptes économiques/Finances publiques/Autre contenu lié à Finances publiques',
    },
    {
      subjectCode: '360401',
      subjectEn:
        'Economic accounts/International accounts/Balance of international payments',
      subjectFr:
        'Comptes économiques/Comptes internationaux/Balance des paiements internationaux',
    },
    {
      subjectCode: '360402',
      subjectEn:
        'Economic accounts/International accounts/International investment position',
      subjectFr:
        'Comptes économiques/Comptes internationaux/Bilan des investissements internationaux',
    },
    {
      subjectCode: '360403',
      subjectEn:
        'Economic accounts/International accounts/International trade in services',
      subjectFr:
        'Comptes économiques/Comptes internationaux/Commerce international de services',
    },
    {
      subjectCode: '360404',
      subjectEn:
        'Economic accounts/International accounts/International transactions in securities',
      subjectFr:
        'Comptes économiques/Comptes internationaux/Opérations internationales en valeurs mobilières',
    },
    {
      subjectCode: '360405',
      subjectEn:
        'Economic accounts/International accounts/Portfolio investment abroad',
      subjectFr:
        "Comptes économiques/Comptes internationaux/Investissements de portefeuille à l'étranger",
    },
    {
      subjectCode: '360499',
      subjectEn:
        'Economic accounts/International accounts/Other content related to International accounts',
      subjectFr:
        'Comptes économiques/Comptes internationaux/Autre contenu lié à Comptes intrernationaux',
    },
    {
      subjectCode: '360501',
      subjectEn:
        'Economic accounts/National accounts and Gross Domestic Product/Financial flows and national balance sheet accounts',
      subjectFr:
        'Comptes économiques/Comptes nationaux et produit intérieur brut/Comptes des flux financiers et du bilan national',
    },
    {
      subjectCode: '360502',
      subjectEn:
        'Economic accounts/National accounts and Gross Domestic Product/Gross Domestic Product by income and by expenditure accounts',
      subjectFr:
        'Comptes économiques/Comptes nationaux et produit intérieur brut/Produit intérieur brut en termes de revenus et de dépenses',
    },
    {
      subjectCode: '360503',
      subjectEn:
        'Economic accounts/National accounts and Gross Domestic Product/Gross Domestic Product by industry accounts',
      subjectFr:
        'Comptes économiques/Comptes nationaux et produit intérieur brut/Produit intérieur brut par comptes des industries',
    },
    {
      subjectCode: '360504',
      subjectEn:
        'Economic accounts/National accounts and Gross Domestic Product/Supply and use tables',
      subjectFr:
        'Comptes économiques/Comptes nationaux et produit intérieur brut/Tableaux des ressources et des emplois',
    },
    {
      subjectCode: '360599',
      subjectEn:
        'Economic accounts/National accounts and Gross Domestic Product/Other content related to National accounts and Gross Domestic Product',
      subjectFr:
        'Comptes économiques/Comptes nationaux et produit intérieur brut/Autre contenu lié à Comptes nationaux et produit intérieur brut',
    },
    {
      subjectCode: '360601',
      subjectEn: 'Economic accounts/Productivity accounts/Labour productivity',
      subjectFr:
        'Comptes économiques/Comptes de la productivité/Productivité du travail',
    },
    {
      subjectCode: '360602',
      subjectEn:
        'Economic accounts/Productivity accounts/Multifactor productivity',
      subjectFr:
        'Comptes économiques/Comptes de la productivité/Productivité multifactorielle',
    },
    {
      subjectCode: '360699',
      subjectEn:
        'Economic accounts/Productivity accounts/Other content related to Productivity accounts',
      subjectFr:
        'Comptes économiques/Comptes de la productivité/Autre contenu lié à Comptes de la productivité',
    },
    {
      subjectCode: '360801',
      subjectEn: 'Economic accounts/Satellite accounts/Culture accounts',
      subjectFr:
        'Comptes économiques/Comptes satellites/Compte satellite de la culture',
    },
    {
      subjectCode: '360802',
      subjectEn: 'Economic accounts/Satellite accounts/Pension accounts',
      subjectFr:
        'Comptes économiques/Comptes satellites/Compte satellite des pensions',
    },
    {
      subjectCode: '360803',
      subjectEn: 'Economic accounts/Satellite accounts/Tourism accounts',
      subjectFr:
        'Comptes économiques/Comptes satellites/Compte satellite du tourisme',
    },
    {
      subjectCode: '360804',
      subjectEn: 'Economic accounts/Satellite accounts/Underground economy',
      subjectFr: 'Comptes économiques/Comptes satellites/Économie souterraine',
    },
    {
      subjectCode: '360805',
      subjectEn:
        'Economic accounts/Satellite accounts/Natural resources accounts',
      subjectFr:
        'Comptes économiques/Comptes satellites/Compte satellite des ressources naturelles',
    },
    {
      subjectCode: '360806',
      subjectEn: 'Economic accounts/Satellite accounts/Cannabis accounts',
      subjectFr:
        'Comptes économiques/Comptes satellites/Compte satellite du cannabis',
    },
    {
      subjectCode: '360899',
      subjectEn:
        'Economic accounts/Satellite accounts/Other content related to Satellite accounts',
      subjectFr:
        'Comptes économiques/Comptes satellites/Autre contenu lié à Comptes satellites',
    },
    {
      subjectCode: '370201',
      subjectEn:
        'Education, training and learning/Financial resources invested in education/Financial resources invested in elementary and secondary education',
      subjectFr:
        "Éducation, formation et apprentissage/Ressources financières investies dans l'éducation/Ressources financières investies dans l'enseignement primaire et secondaire",
    },
    {
      subjectCode: '370202',
      subjectEn:
        'Education, training and learning/Financial resources invested in education/Financial resources invested in postsecondary education',
      subjectFr:
        "Éducation, formation et apprentissage/Ressources financières investies dans l'éducation/Ressources financières investies dans l'enseignement postsecondaire",
    },
    {
      subjectCode: '370299',
      subjectEn:
        'Education, training and learning/Financial resources invested in education/Other content related to Financial resources invested in education',
      subjectFr:
        "Éducation, formation et apprentissage/Ressources financières investies dans l'éducation/Autre contenu lié à Ressources financières investies dans l'éducation ",
    },
    {
      subjectCode: '370301',
      subjectEn:
        'Education, training and learning/Education indicators/Characteristics of the school-age population, indicators',
      subjectFr:
        "Éducation, formation et apprentissage/Indicateurs de l'éducation/Caractéristiques de la population d'âge scolaire, indicateurs",
    },
    {
      subjectCode: '370302',
      subjectEn:
        'Education, training and learning/Education indicators/Elementary and secondary education, indicators',
      subjectFr:
        "Éducation, formation et apprentissage/Indicateurs de l'éducation/Études primaires et secondaires, indicateurs",
    },
    {
      subjectCode: '370303',
      subjectEn:
        'Education, training and learning/Education indicators/Financing of education systems, indicators',
      subjectFr:
        "Éducation, formation et apprentissage/Indicateurs de l'éducation/Financement des systèmes d'éducation, indicateurs",
    },
    {
      subjectCode: '370304',
      subjectEn:
        'Education, training and learning/Education indicators/Postsecondary education, indicators',
      subjectFr:
        "Éducation, formation et apprentissage/Indicateurs de l'éducation/Études postsecondaires, indicateurs",
    },
    {
      subjectCode: '370305',
      subjectEn:
        'Education, training and learning/Education indicators/Transitions and outcomes, indicators',
      subjectFr:
        "Éducation, formation et apprentissage/Indicateurs de l'éducation/Transitions et résultats, indicateurs",
    },
    {
      subjectCode: '370399',
      subjectEn:
        'Education, training and learning/Education indicators/Other education indicators',
      subjectFr:
        "Éducation, formation et apprentissage/Indicateurs de l'éducation/Autres indicateurs de l'éducation",
    },
    {
      subjectCode: '371401',
      subjectEn:
        'Education, training and learning/Elementary and secondary education/Enrolments and attendance, elementary and secondary',
      subjectFr:
        'Éducation, formation et apprentissage/Études primaires et secondaires/Effectifs et fréquentation scolaire, études primaires et secondaires',
    },
    {
      subjectCode: '371402',
      subjectEn:
        'Education, training and learning/Elementary and secondary education/Graduates, elementary and secondary',
      subjectFr:
        'Éducation, formation et apprentissage/Études primaires et secondaires/Diplômés, études primaires et secondaires',
    },
    {
      subjectCode: '371403',
      subjectEn:
        'Education, training and learning/Elementary and secondary education/Teachers and educators',
      subjectFr:
        'Éducation, formation et apprentissage/Études primaires et secondaires/Enseignants et éducateurs',
    },
    {
      subjectCode: '371499',
      subjectEn:
        'Education, training and learning/Elementary and secondary education/Other content related to Elementary and secondary education',
      subjectFr:
        'Éducation, formation et apprentissage/Études primaires et secondaires/Autre contenu lié à Études primaires et secondaires',
    },
    {
      subjectCode: '371501',
      subjectEn:
        'Education, training and learning/Postsecondary education/Enrolments and attendance, postsecondary',
      subjectFr:
        'Éducation, formation et apprentissage/Études postsecondaires/Effectifs et fréquentation scolaire, études postsecondaires',
    },
    {
      subjectCode: '371502',
      subjectEn:
        'Education, training and learning/Postsecondary education/Faculty and teachers',
      subjectFr:
        'Éducation, formation et apprentissage/Études postsecondaires/Corps professoral et enseignants',
    },
    {
      subjectCode: '371503',
      subjectEn:
        'Education, training and learning/Postsecondary education/Field of study',
      subjectFr:
        "Éducation, formation et apprentissage/Études postsecondaires/Domaines d'études",
    },
    {
      subjectCode: '371504',
      subjectEn:
        'Education, training and learning/Postsecondary education/Graduates, postsecondary',
      subjectFr:
        'Éducation, formation et apprentissage/Études postsecondaires/Diplômés, études secondaires',
    },
    {
      subjectCode: '371505',
      subjectEn:
        'Education, training and learning/Postsecondary education/Location of study',
      subjectFr:
        'Éducation, formation et apprentissage/Études postsecondaires/Lieu des études',
    },
    {
      subjectCode: '371506',
      subjectEn:
        'Education, training and learning/Postsecondary education/Student financial assistance and debt',
      subjectFr:
        'Éducation, formation et apprentissage/Études postsecondaires/Aide financière aux études et endettement étudiant',
    },
    {
      subjectCode: '371508',
      subjectEn:
        'Education, training and learning/Postsecondary education/Tuition and other fees',
      subjectFr:
        'Éducation, formation et apprentissage/Études postsecondaires/Frais de scolarité et autres frais',
    },
    {
      subjectCode: '371599',
      subjectEn:
        'Education, training and learning/Postsecondary education/Other content related to Postsecondary education',
      subjectFr:
        'Éducation, formation et apprentissage/Études postsecondaires/Autre contenu lié à Études secondaires',
    },
    {
      subjectCode: '380403',
      subjectEn: 'Environment/Natural resources/Land and forests',
      subjectFr: 'Environnement/Ressources naturelles/Terres et forêts',
    },
    {
      subjectCode: '380404',
      subjectEn: 'Environment/Natural resources/Water',
      subjectFr: 'Environnement/Ressources naturelles/Eau',
    },
    {
      subjectCode: '380405',
      subjectEn: 'Environment/Natural resources/Energy and mineral resources',
      subjectFr:
        'Environnement/Ressources naturelles/Ressources énergétiques et minérales',
    },
    {
      subjectCode: '380499',
      subjectEn:
        'Environment/Natural resources/Other content related to Natural resources',
      subjectFr:
        'Environnement/Ressources naturelles/Autre contenu lié à Ressources naturelles',
    },
    {
      subjectCode: '380701',
      subjectEn:
        'Environment/Pollution and waste/Accidents involving dangerous goods',
      subjectFr:
        'Environnement/Pollution et déchets/Accidents impliquant des marchandises dangereuses',
    },
    {
      subjectCode: '380703',
      subjectEn: 'Environment/Pollution and waste/Greenhouse gases',
      subjectFr: 'Environnement/Pollution et déchets/Gaz à effet de serre',
    },
    {
      subjectCode: '380704',
      subjectEn: 'Environment/Pollution and waste/Waste management',
      subjectFr: 'Environnement/Pollution et déchets/Gestion des déchets',
    },
    {
      subjectCode: '380799',
      subjectEn:
        'Environment/Pollution and waste/Other content related to Pollution and waste',
      subjectFr:
        'Environnement/Pollution et déchets/Autre contenu lié à Pollution et déchets',
    },
    {
      subjectCode: '420101',
      subjectEn:
        'Children and youth/Child development and behaviour/Healthy behaviours among youth',
      subjectFr:
        "Enfants et jeunes/Développement et comportement de l'enfant/Comportements de santé chez les jeunes",
    },
    {
      subjectCode: '420102',
      subjectEn:
        'Children and youth/Child development and behaviour/Risk behaviours among youth',
      subjectFr:
        "Enfants et jeunes/Développement et comportement de l'enfant/Comportements à risque chez les jeunes",
    },
    {
      subjectCode: '420103',
      subjectEn:
        'Children and youth/Child development and behaviour/Self-perceptions among youth',
      subjectFr:
        "Enfants et jeunes/Développement et comportement de l'enfant/Autoperceptions chez les jeunes",
    },
    {
      subjectCode: '420104',
      subjectEn:
        'Children and youth/Child development and behaviour/Home life among youth',
      subjectFr:
        "Enfants et jeunes/Développement et comportement de l'enfant/Vie familiale chez les jeunes",
    },
    {
      subjectCode: '420199',
      subjectEn:
        'Children and youth/Child development and behaviour/Other content related to Child development and behaviour',
      subjectFr:
        "Enfants et jeunes/Développement et comportement de l'enfant/Autre contenu lié à Développement et comportement de l'enfant",
    },
    {
      subjectCode: '430501',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Education, training and skills',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Éducation, formation et compétences',
    },
    {
      subjectCode: '430502',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Families and households',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Familles et ménages',
    },
    {
      subjectCode: '430503',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Health and well-being of immigrants',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Santé et bien-être des immigrants',
    },
    {
      subjectCode: '430504',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Labour and income',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Travail et revenu',
    },
    {
      subjectCode: '430506',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Languages of immigrants',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Langues des immigrants',
    },
    {
      subjectCode: '430507',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Population, demography and place of birth',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Population, démographie et lieu de naissance',
    },
    {
      subjectCode: '430508',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Immigration status and period of immigration ',
      subjectFr:
        "Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Statut d'immigration et période d'immigration",
    },
    {
      subjectCode: '430599',
      subjectEn:
        'Immigration and ethnocultural diversity/Immigrants and non-permanent residents/Other content related to Immigrants and non-permanent residents',
      subjectFr:
        'Immigration et diversité ethnoculturelle/Immigrants et résidents non permanents/Autre contenu lié à Immigrants et résidents non permanents',
    },
  ],
  classificationType: [
    {
      classificationTypeCode: 1,
      classificationTypeEn: 'Geography',
      classificationTypeFr: 'Géographie',
    },
    {
      classificationTypeCode: 10,
      classificationTypeEn: 'HFCE',
      classificationTypeFr: 'DCFM',
    },
    {
      classificationTypeCode: 11,
      classificationTypeEn: 'HS 6-digit level',
      classificationTypeFr: 'SH niveau 6',
    },
    {
      classificationTypeCode: 12,
      classificationTypeEn: 'IOIC2011Link1961',
      classificationTypeFr: 'CIES2011lien1961',
    },
    {
      classificationTypeCode: 13,
      classificationTypeEn: 'IOIC2011Link1997',
      classificationTypeFr: 'CIES2011lien1997',
    },
    {
      classificationTypeCode: 14,
      classificationTypeEn: 'LFSSPEC',
      classificationTypeFr: 'EPASPEC',
    },
    {
      classificationTypeCode: 15,
      classificationTypeEn: 'LFSSPEC2007',
      classificationTypeFr: 'EPASPEC2007',
    },
    {
      classificationTypeCode: 16,
      classificationTypeEn: 'NAICS1997',
      classificationTypeFr: 'SCIAN1997',
    },
    {
      classificationTypeCode: 17,
      classificationTypeEn: 'NAICS2002',
      classificationTypeFr: 'SCIAN2002',
    },
    {
      classificationTypeCode: 18,
      classificationTypeEn: 'NAICS2007',
      classificationTypeFr: 'SCIAN2007',
    },
    {
      classificationTypeCode: 19,
      classificationTypeEn: 'NAICS2012',
      classificationTypeFr: 'SCIAN2012',
    },
    {
      classificationTypeCode: 2,
      classificationTypeEn: 'Category',
      classificationTypeFr: 'Catégorie',
    },
    {
      classificationTypeCode: 20,
      classificationTypeEn: 'NAPCS',
      classificationTypeFr: 'SCPAN',
    },
    {
      classificationTypeCode: 21,
      classificationTypeEn: 'NAPCS_V',
      classificationTypeFr: 'SCPAN_V',
    },
    {
      classificationTypeCode: 22,
      classificationTypeEn: 'NAPCS2012',
      classificationTypeFr: 'SCPAN2012',
    },
    {
      classificationTypeCode: 23,
      classificationTypeEn: 'NOCS2001',
      classificationTypeFr: 'CNPS2001',
    },
    {
      classificationTypeCode: 24,
      classificationTypeEn: 'NOCS2006',
      classificationTypeFr: 'CNPS2006',
    },
    {
      classificationTypeCode: 25,
      classificationTypeEn: 'RETTRDSPEC',
      classificationTypeFr: 'COMDETSPEC',
    },
    {
      classificationTypeCode: 26,
      classificationTypeEn: 'RETTRDSPEC6',
      classificationTypeFr: 'COMDETSPEC6',
    },
    {
      classificationTypeCode: 27,
      classificationTypeEn: 'SCCAI2011',
      classificationTypeFr: 'CTPZI2011',
    },
    {
      classificationTypeCode: 28,
      classificationTypeEn: 'SCG',
      classificationTypeFr: 'CTB',
    },
    {
      classificationTypeCode: 29,
      classificationTypeEn: 'SIC1980E',
      classificationTypeFr: 'CTI1980E',
    },
    {
      classificationTypeCode: 3,
      classificationTypeEn: 'Commodity',
      classificationTypeFr: 'Produit',
    },
    {
      classificationTypeCode: 30,
      classificationTypeEn: 'Standard Industrial Classification, 1960 (SIC)',
      classificationTypeFr: "Classification type d'industries, 1960 (CTI)",
    },
    {
      classificationTypeCode: 31,
      classificationTypeEn: 'Standard Industrial Classification, 1970 (SIC)',
      classificationTypeFr: 'Classification type des industries, 1970 (CTI)',
    },
    {
      classificationTypeCode: 32,
      classificationTypeEn: 'Violations',
      classificationTypeFr: 'Infractions',
    },
    {
      classificationTypeCode: 33,
      classificationTypeEn: 'WHLSTRDSPEC',
      classificationTypeFr: 'COMGROSSPEC',
    },
    {
      classificationTypeCode: 34,
      classificationTypeEn:
        'World Health Organization, International Classification of Diseases for Oncology, Second Edition (ICD-O-2)',
      classificationTypeFr:
        "Organisation mondiale de la santé, Classification internationale des maladies pour l'oncologie, Deuxième édition (CIM-O-2)",
    },
    {
      classificationTypeCode: 35,
      classificationTypeEn:
        'World Health Organization, International Classification of Diseases for Oncology, Third Edition (ICD-O-3)',
      classificationTypeFr:
        "Organisation mondiale de la santé, Classification internationale des maladies pour l'oncologie, Troisième édition (CIM-O-3)",
    },
    {
      classificationTypeCode: 36,
      classificationTypeEn:
        'World Health Organization, International Classification of Diseases, Ninth Revision (ICD-9)',
      classificationTypeFr:
        'Organisation mondiale de la santé, Classification internationale des maladies, Neuvième révision (CIM-9)',
    },
    {
      classificationTypeCode: 37,
      classificationTypeEn:
        'World Health Organization, International Statistical Classification of Diseases and Related Health Problems, Tenth Revision (ICD-10)',
      classificationTypeFr:
        'Organisation mondiale de la santé, Classification statistique internationale des maladies et des problèmes de santé connexes, Dixième révision (CIM-10)',
    },
    {
      classificationTypeCode: 38,
      classificationTypeEn: 'NOCS2011',
      classificationTypeFr: 'CNP2011',
    },
    {
      classificationTypeCode: 39,
      classificationTypeEn: 'LFSSPEC2012',
      classificationTypeFr: 'EPASPEC2012',
    },
    {
      classificationTypeCode: 4,
      classificationTypeEn: 'Industry',
      classificationTypeFr: 'Industrie',
    },
    {
      classificationTypeCode: 40,
      classificationTypeEn: 'Product',
      classificationTypeFr: 'Produit',
    },
    {
      classificationTypeCode: 41,
      classificationTypeEn: 'NAPCS2017CPPI',
      classificationTypeFr: 'SCPAN2017IPOP',
    },
    {
      classificationTypeCode: 42,
      classificationTypeEn: 'NAICS2017',
      classificationTypeFr: 'SCIAN2017',
    },
    {
      classificationTypeCode: 43,
      classificationTypeEn: 'SDAC2003',
      classificationTypeFr: 'CTAD2003',
    },
    {
      classificationTypeCode: 44,
      classificationTypeEn: 'NAPCS2017',
      classificationTypeFr: 'SCPAN2017',
    },
    {
      classificationTypeCode: 45,
      classificationTypeEn: 'BEC4',
      classificationTypeFr: 'GCE4',
    },
    {
      classificationTypeCode: 46,
      classificationTypeEn: 'Health regions 2015',
      classificationTypeFr: 'Régions sociosanitaires de 2015',
    },
    {
      classificationTypeCode: 47,
      classificationTypeEn: 'Health regions 2017',
      classificationTypeFr: 'Régions sociosanitaires de 2017',
    },
    {
      classificationTypeCode: 48,
      classificationTypeEn: 'NOC2016',
      classificationTypeFr: 'CNP2016',
    },
    {
      classificationTypeCode: 49,
      classificationTypeEn:
        'World Health Organization, International Statistical Classification of Diseases and Related Health Problems, Ninth Revision (ICD-9) and Tenth Revision (ICD-10)',
      classificationTypeFr:
        'Organisation mondiale de la Santé, Classification statistique internationale des maladies et des problèmes de santé connexes, Neuvième révision (CIM-9) et Dixième révision (CIM-10)',
    },
    {
      classificationTypeCode: 5,
      classificationTypeEn: 'Business sector industries',
      classificationTypeFr: 'Les industries du secteur des entreprises',
    },
    {
      classificationTypeCode: 50,
      classificationTypeEn: 'CIP2016VAR',
      classificationTypeFr: 'CPE2016VAR',
    },
    {
      classificationTypeCode: 51,
      classificationTypeEn: 'NAICS2017v2',
      classificationTypeFr: 'SCIAN2017v2',
    },
    {
      classificationTypeCode: 52,
      classificationTypeEn: 'CIP2016VARPG',
      classificationTypeFr: 'CPE2016VARRP',
    },
    {
      classificationTypeCode: 53,
      classificationTypeEn: 'SCCAI2016',
      classificationTypeFr: 'CTPZI2016',
    },
    {
      classificationTypeCode: 54,
      classificationTypeEn: 'CIP2016VARSTEMandBHASE',
      classificationTypeFr: 'CPE2016VARSTGMetSACHES',
    },
    {
      classificationTypeCode: 6,
      classificationTypeEn: 'CCOFOG2014',
      classificationTypeFr: 'CCFAPC2014',
    },
    {
      classificationTypeCode: 7,
      classificationTypeEn: 'CGFS2014',
      classificationTypeFr: 'SFPC2014',
    },
    {
      classificationTypeCode: 8,
      classificationTypeEn: 'CIP2000SPEC',
      classificationTypeFr: 'CPE2000SPEC',
    },
    {
      classificationTypeCode: 9,
      classificationTypeEn: 'CIP2011SPEC',
      classificationTypeFr: 'CPE2011SPEC',
    },
  ],
  securityLevel: [
    {
      securityLevelCode: 0,
      securityLevelRepresentationEn: null,
      securityLevelRepresentationFr: null,
      securityLevelDescEn: 'public',
      securityLevelDescFr: 'public',
    },
    {
      securityLevelCode: 1,
      securityLevelRepresentationEn: 'x',
      securityLevelRepresentationFr: 'x',
      securityLevelDescEn:
        'suppressed to meet the confidentiality requirements of the Statistics Act',
      securityLevelDescFr:
        'confidentiel en vertu des dispositions de la Loi sur la statistique',
    },
  ],
  terminated: [
    {
      codeId: 0,
      codeTextEn: 'active',
      codeTextFr: 'actif',
      displayCodeEn: null,
      displayCodeFr: null,
    },
    {
      codeId: 1,
      codeTextEn: 'terminated',
      codeTextFr: 'terminé',
      displayCodeEn: 't',
      displayCodeFr: 't',
    },
  ],
  wdsResponseStatus: [
    {
      codeId: 0,
      codeTextEn: 'Success',
      codeTextFr: 'Succès',
    },
    {
      codeId: 1,
      codeTextEn: 'Invalid date',
      codeTextFr: 'Date invalide',
    },
    {
      codeId: 2,
      codeTextEn: 'Invalid cube and series combination',
      codeTextFr: 'Combinaison invalide de cube et de série',
    },
    {
      codeId: 3,
      codeTextEn: 'Request failed',
      codeTextFr: 'La demande a échouée',
    },
    {
      codeId: 4,
      codeTextEn: 'Vector is invalid',
      codeTextFr: 'Vecteur invalide',
    },
    {
      codeId: 5,
      codeTextEn: 'Cube product id is invalid',
      codeTextFr: 'Identificateur du produit invalide',
    },
    {
      codeId: 6,
      codeTextEn: 'Cube is currently being published. Please try again later.',
      codeTextFr:
        'Le cube est en cours de publication. Veuillez réessayer plus tard.',
    },
    {
      codeId: 7,
      codeTextEn:
        'Cube is not available. For more information, contact us\n(toll-free 1-800-263-1136;   514-283-8300; STATCAN.infostats-infostats.STATCAN@canada.ca).',
      codeTextFr:
        "Le cube n'est pas disponible. Pour plus d'information, contactez-nous\nsans frais 1-800-263-1136; 514-283-8300;   STATCAN.infostats-infostats.STATCAN@canada.ca).",
    },
    {
      codeId: 8,
      codeTextEn: 'Invalid number of reference periods',
      codeTextFr: 'Nombre de périodes de référence invalide.',
    },
  ],
}

interface IUom {
  memberUomCode: number
  memberUomEn: string
  memberUomFr: string
}

export function getUomById(uomId: number): IUom {
  return codeSets.uom.find(entry => entry.memberUomCode === uomId)
}