import React, { useState } from 'react'

import './description.css'

const Description = (props) => {

  const descriptionAG = [{titre:'Artemisia Annua est une plante 100% naturelle et vrac, tiges et feuilles pour tisane et décoction.', dcp:"Ce sont des chercheurs de l'université de Washington, aux États-Unis, sous la direction des Drs Narenda Singh et Henry Lai, qui on tire cette conclusion de leur vaste étude. Cette plante est une armoise, Artemesia Annua, que la MTC utilise depuis des millénaires pour traiter le paludisme, a des propriétés mises en lumière dans les années 1960-70 par des chercheurs de l'Académie de médecine traditionnelle chinoise qui avaient extrait le principe actif, l'artemesine, a basse temperature et par l'ether."},
    {titre: 'Proprietes et Bienfaits', dcp:"Traitement antipaludique en préventif et curatif, combat la fièvre, puissant vermifuge, anti-oxydant (protection contre les maladies cardiovasculaires, cancers et vieillissement de la peau), nettoie et stimule le flux sanguin, apaise les regles douloureuses, diabete type 2 (diminue le taux de glucose dans le sang), bilharziose, ulcere de Buruli, douleurs articulaires, douleurs musculaires, effets antibacteriens, tonifiant, diuretique, stimule la secretion du suc gastrique, favorise l'appetit, soulage les troubles digestifs (coliques, diarrhees chroniques, douleurs viscerales, sensation de distension, flatulences), constipation, anti-spasmodique, en soutien aux traitements anti-cancer (du sein, de la prostate et des poumons associe a des complements de fer bio-disponibles), bain de bouche pour les affections bucco-dentaires, fievre typhide."},
    {titre: 'Caracteristique', dcp:"Qualite: Pure, naturelle et biologique, sans aucun additif, agriculture sans pesticide | Pays d'origine: Senegal | Conditions de conditionnement: Gelules en gelatine de boeuf, 400mg | Conditions de conservations: Stocker dans un endroit frais et sec, a l'abri de l'humidite, de tout agent oxydant et d'une source lumineuse."}
  ]

  const descriptionAI = [{titre:'Artemisia Annua Infusette.', dcp:"Ce sont des chercheurs de l'université de Washington, aux États-Unis, sous la direction des Drs Narenda Singh et Henry Lai, qui on tire cette conclusion de leur vaste étude. Cette plante est une armoise, Artemesia Annua, que la MTC utilise depuis des millénaires pour traiter le paludisme, a des propriétés mises en lumière dans les années 1960-70 par des chercheurs de l'Académie de médecine traditionnelle chinoise qui avaient extrait le principe actif, l'artemesine, a basse temperature et par l'ether."},
    {titre: 'y', dcp:'g'},
    {titre: 'f', dcp:'h'}
  ]

  const descriptionCG = [{titre:'Courrousol Gellule', dcp:"Ce sont des chercheurs de l'université de Washington, aux États-Unis, sous la direction des Drs Narenda Singh et Henry Lai, qui on tire cette conclusion de leur vaste étude. Cette plante est une armoise, Artemesia Annua, que la MTC utilise depuis des millénaires pour traiter le paludisme, a des propriétés mises en lumière dans les années 1960-70 par des chercheurs de l'Académie de médecine traditionnelle chinoise qui avaient extrait le principe actif, l'artemesine, a basse temperature et par l'ether."},
    {titre: 'y', dcp:'g'},
    {titre: 'f', dcp:'h'}
  ]

  const descriptionCI = [{titre:'Courrosol Infusette', dcp:"Ce sont des chercheurs de l'université de Washington, aux États-Unis, sous la direction des Drs Narenda Singh et Henry Lai, qui on tire cette conclusion de leur vaste étude. Cette plante est une armoise, Artemesia Annua, que la MTC utilise depuis des millénaires pour traiter le paludisme, a des propriétés mises en lumière dans les années 1960-70 par des chercheurs de l'Académie de médecine traditionnelle chinoise qui avaient extrait le principe actif, l'artemesine, a basse temperature et par l'ether."},
    {titre: 'y', dcp:'g'},
    {titre: 'f', dcp:'h'}
  ]

  const descriptionMG = [{titre:'Moringa Gellule', dcp:"Ce sont des chercheurs de l'université de Washington, aux États-Unis, sous la direction des Drs Narenda Singh et Henry Lai, qui on tire cette conclusion de leur vaste étude. Cette plante est une armoise, Artemesia Annua, que la MTC utilise depuis des millénaires pour traiter le paludisme, a des propriétés mises en lumière dans les années 1960-70 par des chercheurs de l'Académie de médecine traditionnelle chinoise qui avaient extrait le principe actif, l'artemesine, a basse temperature et par l'ether."},
    {titre: 'y', dcp:'g'},
    {titre: 'f', dcp:'h'}
  ]

  const descriptionMI = [{titre:'Moringa Infusette', dcp:"Ce sont des chercheurs de l'université de Washington, aux États-Unis, sous la direction des Drs Narenda Singh et Henry Lai, qui on tire cette conclusion de leur vaste étude. Cette plante est une armoise, Artemesia Annua, que la MTC utilise depuis des millénaires pour traiter le paludisme, a des propriétés mises en lumière dans les années 1960-70 par des chercheurs de l'Académie de médecine traditionnelle chinoise qui avaient extrait le principe actif, l'artemesine, a basse temperature et par l'ether."},
    {titre: 'y', dcp:'g'},
    {titre: 'f', dcp:'h'}
  ]

  const descriptions = [ descriptionAG, descriptionAI, descriptionCG, descriptionCI, descriptionMG, descriptionMI]

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