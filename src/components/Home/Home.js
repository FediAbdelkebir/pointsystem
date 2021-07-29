import React,{useState} from 'react';

function Home() {

  const [isRed,setRed]=useState(false);
  const [count,setCount]=useState(0);

  const [User,setUser]=useState({
    NomEmploye: 'Fedi',
    PrenomEmploye: 'Abdelkebir',
    DateNaissance: '12/20/1998',
    DateDebutContract: '25/09/2021',
    DateFinContract: '25/09/2040',
    NBR_POINTS: 1,
    NBR_TACHES: 1,
    TACHES: ['Creation Mt3 7aja'],
    EMail: 'abdelkebir.fedi@esprit.tn',
    NumTel: 58205523,
    Password: 'Ya Latif',
    
  });

  var Increment = () =>{
    setCount(count+1);
    setUser(User);
  }
  return (
   <div>{count}
<br>
</br>
<button onClick={Increment}> 
 Testing Stuff
</button>
<br></br>
    {User.NomEmploye}
    <br></br>
    {User.PrenomEmploye}
    <br></br>
    {User.DateNaissance}
    <br></br>
    {User.DateDebutContract}
    <br></br>
    {User.DateFinContract}
    <br></br>
    {User.NBR_POINTS}
    <br></br>
    {User.NBR_TACHES}
    <br></br>
    {User.TACHES}
    <br></br>
    {User.EMail}
    <br></br>
    {User.NumTel}
    <br></br>
    {User.Password}

   </div> 
  );
}

export default Home;
