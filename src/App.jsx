import Bars from "./components/Bars"
import Header from "./components/Header"
import Attribution from "./components/Attribution"

import data from "./assets/json/data.json"

export default function App() {
  return (
    <>
      <main className='card'>
        <Header />
        <article className='card__stats'>
          <h2>Spending - Last 7 days</h2>
          <section className='card__stats__bars-section'>
            {data.map((bar, index)=>(
              <Bars key={index} amount={bar.amount} day={bar.day}/>
            ))}
          </section>
          <hr/>
          <section className='card__stats__expense'>
            <div>
              <h3>Total this month</h3>
              <p>$478.33</p>
            </div>
            <div>
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </section>
        </article>
      </main>
      <Attribution />
    </>
  )
}
