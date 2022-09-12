import React, { useState } from 'react'

import './description.css'

const Description = (props) => {

  const descriptionAG = [{titre:'Artemisia Annua Gellule', dcp:"L'artemisia annua est une plante glabre originaire de chine. L'artemisia est proposée sous forme de tisanes ou comme complement alimentaire. Cette plante contient plusieurs substances actives, mais elle est réputée à travers le monde pour l'artémisinine qu'elle contient, une substance active utilisée pour lutter, en autre, contre le paludisme (malaria) et certaines formes de cancer."},
    {titre: 'Proprietes et Bienfaits', dcp:"L'artemisia annua est utilisée dans le traitement des différentes formes de paludisme. Cette plante possède également des propriétés antivirales ainsi qu'un effet stimulant immunitaire sur plusieurs infections. Outre ses bienfaits sur le système immunitaire et le cancer, l' Artémisia Annua se révèle également très efficace dans le traitement de diverses autres pathologies qui attaquent l'organisme. En effet, elle soigne les troubles intestinaux et digestifs : flatulences, vers intestinaux, diarrhées."},
    {titre: 'En Savoir Plus', dcp:"Bientot Disponible"}
  ]

  const descriptionAI = [{titre:'Artemisia Annua Infusette.', dcp:"L'artemisia annua est une plante glabre originaire de chine. L'artemisia est proposée sous forme de tisanes ou comme complement alimentaire. Cette plante contient plusieurs substances actives, mais elle est réputée à travers le monde pour l'artémisinine qu'elle contient, une substance active utilisée pour lutter, en autre, contre le paludisme (malaria) et certaines formes de cancer."},
    {titre: 'Proprietes et Bienfaits', dcp:"L'artemisia annua est utilisée dans le traitement des différentes formes de paludisme. Cette plante possède également des propriétés antivirales ainsi qu'un effet stimulant immunitaire sur plusieurs infections. Outre ses bienfaits sur le système immunitaire et le cancer, l' Artémisia Annua se révèle également très efficace dans le traitement de diverses autres pathologies qui attaquent l'organisme. En effet, elle soigne les troubles intestinaux et digestifs : flatulences, vers intestinaux, diarrhées."},
    {titre: 'En Savoir Plus', dcp:'Bientot Disponible'}
  ]

  const descriptionBi = [{titre:'Bissap Infusettes', dcp:"L'infusion de fleurs d'hibiscus (bissap) est digestive et diurétique. Elle est fortement conseillée pour le bon fonctionnement de l'intestin. Très efficace contre les troubles digestifs et la constipation, cette boisson aide au transit intestinale et nettoie le système digestif (léger laxatif). Pour ceux souffrant d'hypertension, ou tout simplement pour ceux qui veulent la prévenir, l'infusion d'hibiscus représente un remède naturel de choix. Les études ont montrées une diminution de la pression artérielle de la même façon que certains médicaments et une dimunition du taux de 'mauvais' cholestérol"},
    {titre: 'Proprietes et Bienfaits', dcp:"Si vous avez tendance a faire de l'hypertension, consommer du bissap peut vous etre d'une aide precieuse. En effet, la boisson a base d'hibiscus fait diminuer la pression arterielle. Il arrive que votre volume sanguin soit trop elevé. Des lors, votre pression arterielle augmente et les risques d'AVC aussi."},
    {titre: 'En Savoir Plus', dcp:'Bientot Disponible'}
  ]

  const descriptionCI = [{titre:'Corossol Infusette', dcp:"Les feuilles de Graviola contiennent des substances interéssantes telles que les acétogenines aui détiennent de puissantes qctivité anti)inflamatoires; anti-virale (herpes); anti-bactériennes, qnti-parasitaires, pesticides, anthelminthique et antimicrobienne. Les feuilles du Graviola Corossol contiennent aussi des quantités appéciable de vita,ines, entre autres,la vitamine E et la vitamine C, B1 et B2."},
    {titre: 'Proprietes et Bienfaits', dcp:"Douleurs et inflammations chroniques, dépression, spasmes musculaires, douleurs arthritiques et articulaires, diabète, hypertension, infections microbiennes et parasitiques, problèmes digestives, insomnies, infections des voies urinaires, aide à évacuer l'acide urique du sang (la Goutte), maladies hépatiques, problèmes cutanés (eczéma, psoriasis,...). "},
    {titre: 'En Savoir Plus', dcp:'Bientot Disponible'}
  ]

  const descriptionMG = [{titre:'Moringa Gellule', dcp:"Les feuilles de Moringa Oleifera sont d'une grande valeur nutritives, elles sont notamment riche en vitamines (B1, B2, B3, B5, B6, B8, A, C, E, K, ...) en minéraux (calcium, magnesium, potassium, zinc ...), en Oligo-élements essentiels (Fer, Cuivre, Soufre) ainsi qu'en Protéines bio disponibles."},
    {titre: 'Proprietes et Bienfaits', dcp:"Les feuilles de moringa pourraient guérir plus de 300 maladies. En phytothérapie la poudre de feuilles de moringa est indiquée pour stimuler le système immunitaire, réduire la fatigue, abaisser la pression artérielle, ameliorer la digestion et le transit, renforcer les capacités cognitives, lutter contre la malnutrition, combler les carences nutritives, aider à atteindre et à maintenir un bon taux de cholestérol, combat l'anémie, la perte d'appétit ..."},
    {titre: 'En Savoir Plus', dcp:'Bientot Disponible'}
  ]

  const descriptionMI = [{titre:'Moringa Infusette', dcp:"Les feuilles de Moringa Oleifera sont d'une grande valeur nutritives, elles sont notamment riche en vitamines (B1, B2, B3, B5, B6, B8, A, C, E, K, ...) en minéraux (calcium, magnesium, potassium, zinc ...), en Oligo-élements essentiels (Fer, Cuivre, Soufre) ainsi qu'en Protéines bio disponibles."},
    {titre: 'Proprietes et Bienfaits', dcp:"Les feuilles de moringa pourraient guérir plus de 300 maladies. En phytothérapie la poudre de feuilles de moringa est indiquée pour stimuler le système immunitaire, réduire la fatigue, abaisser la pression artérielle, ameliorer la digestion et le transit, renforcer les capacités cognitives, lutter contre la malnutrition, combler les carences nutritives, aider à atteindre et à maintenir un bon taux de cholestérol, combat l'anémie, la perte d'appétit ..."},
    {titre: 'En Savoir Plus', dcp:'Bientot Disponible'}
  ]

  const descriptions = [ descriptionAG, descriptionAI, descriptionBi, descriptionCI, descriptionMG, descriptionMI]

  const [descp, setDescp] = useState(0)

  const getDescp = () => {
    setDescp(0)
  }
  const getBf = () => {
    setDescp(1)
  }
  const getMore = () => {
    setDescp(2)
  }


  return (
    <div className='description'>
      <div className='barre-button'>
        <button onClick={getDescp} className='btn btn-outline-secondary'>Description du Produit</button>
        <button onClick={getBf} className='btn btn-outline-secondary'>Bien Faits</button>
        <button onClick={getMore} className='btn btn-outline-secondary'>En S'avoir Plus</button>
      </div>

      <div className='full-text-descp'>
        <h6>{descriptions[props.produit][descp].titre}</h6>
        <br />
        <p>{descriptions[props.produit][descp].dcp}</p>
      </div>

    </div>
  )
}

export default Description