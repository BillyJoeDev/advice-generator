import { useEffect, useState } from 'react';
import './Main.css';

function Main() {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  function getData() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => {
        return response.json();
      })
      .then(result => {
        setId(result.slip.id);
        setAdvice(result.slip.advice);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="wrapper">
      <div className='container'>
        <h1>ADVICE #{id}</h1>
        <p>{advice}</p>
        <div className='divider'></div>
        <button className='dice-button' onClick={getData} />
      </div>
    </main>
  );
}

export default Main;
