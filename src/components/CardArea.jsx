// import React,{useEffect,useState} from 'react';
// import Card from './Card';
// import '../assets/css/CardArea.css';

// const CardArea = () => {
//   const [cardsLength,setCardsLength] = useState(8);
//   const [cardsArr,setCardsArr] = useState([]);

//   useEffect(()=>{
//     setCardsArr(JSON.parse(localStorage.getItem("cards")));
//     console.log("useEffect",cardsArr);
//   },[]);

//   useEffect(()=>{
//     console.log("cardsArr",cardsArr);
//     localStorage.setItem("cards",JSON.stringify(cardsArr));
//   },[cardsArr]);

//   return (
//     <div className="cardarea">
//         {[...Array(cardsLength)].map((e,i)=>{
//           if(cardsArr.includes(i))
//           return <Card key={i} cardsArr={cardsArr} id={i} visible={true}/>;
//           else
//           return <Card key={i} cardsArr={cardsArr} id={i} visible={false}/>;
//         })}
//     </div>
//   )
// }

// export default CardArea


import React,{useEffect,useState} from 'react';
import Card from './Card';
import '../assets/css/CardArea.css';

const CardArea = () => {
  const [cardsLength,setCardsLength] = useState(8);
  const [cardsArr,setCardsArr] = useState(null);

  useEffect(()=>{
    setCardsArr(JSON.parse(localStorage.getItem("cards")));
    console.log("useEffect",cardsArr);
  },[]);

  useEffect(()=>{
    if(!cardsArr) return;

    console.log("cardsArr",cardsArr);
    localStorage.setItem("cards",JSON.stringify(cardsArr));
  },[cardsArr]);

  return (
    <div className="cardarea">
        {[...Array(cardsLength)].map((e,i)=>{
          if(cardsArr && cardsArr.includes(i))
          return <Card key={i} cardsArr={cardsArr} id={i} visible={true}/>;
          else
          return <Card key={i} cardsArr={cardsArr} id={i} visible={false}/>;
        })}
    </div>
  )
}

export default CardArea