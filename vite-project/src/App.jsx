import { useState, useEffect } from 'react'
import dataEmoji from '../public/data/emoji.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faPoo } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [search, setSearch] = useState("");
  const [newData, setData] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let data = dataEmoji.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))
    setData(data)
  }, [search, amount])

  return (
    <>
      <section>
        <h1>Emoji Search <FontAwesomeIcon className='icon' icon={faGamepad} /></h1>
        <p>A simple emoji search tool made with React Js <FontAwesomeIcon className='iconpo' icon={faPoo} /></p>
        <input className='input' placeholder='search your a keyword' type="text" value={search} onInput={(e) => setSearch(e.target.value)} />
        <div className='grid'>
          {
            newData.map((item, i) => <li className='item' key={i}> {item.emoji} </li>)
          }
        </div>
      </section>
    </>
  )
}

export default App
