import './box1.scss'
import { Button } from '@mui/material'

export default function HomeBox1() {
  return (
    <div className="home-box1">
      <main>
        <header>
          <img className="logo" src="/img/home/logo.webp" alt="logo" />
          <div className="btn-box">
            <Button variant="outlined">Profile</Button>
            <Button variant="contained">Connect wallet</Button>
          </div>
        </header>
        <h1>Welcome to ER Universe</h1>
        <h3>Co-create new stories, lifestyles and civilizations…</h3>
        <form>
          <div className="item">
            <div className="left">Pre-sale</div>
            <div className="right">
              12.28,2022 8:00 PM–12.29,2022
              <br />
              6:59 PM (UTC+9)
            </div>
          </div>
          <div className="item">
            <div className="left">Pre-sale</div>
            <div className="right">0.035 ETH</div>
          </div>
          <div className="item">
            <div className="left">Public-sale</div>
            <div className="right">0.055 ETH</div>
          </div>
          <div className="number-box">
            <div className="btn">-</div>
            <input type="number" />
            <div className="btn">+</div>
          </div>
        </form>
      </main>
    </div>
  )
}
