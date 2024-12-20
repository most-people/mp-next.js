'use client'
import Media from '@/components/home/media'
import { useState } from 'react'
import './box1.scss'
import { Button } from '@mui/material'
import { useSnackbar } from 'notistack'

export default function HomeBox1() {
  const { enqueueSnackbar } = useSnackbar()
  const [number, setNumber] = useState(1)
  const numberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 如果需要将输入值转换为数字
    const v = parseInt(event.target.value)
    if (isNaN(v)) {
      setNumber(1)
    } else if (v < 1) {
      setNumber(1)
    } else {
      setNumber(v)
    }
  }

  const mint = () => {
    enqueueSnackbar('Congratulations! You successfully mint 1 NFT(2/3 NFTs)!', {
      variant: 'success',
    })
    // enqueueSnackbar('Sorry, something went wrong. Please try again later.', { variant: 'error' })
  }
  return (
    <div className="home-box1">
      <Media />
      <main>
        <header>
          <img className="logo" src="/img/home/logo.webp" alt="logo" />
          <div className="btn-box">
            <Button className="profile" variant="outlined">
              Profile
            </Button>
            <Button className="connect-wallet" variant="contained">
              Connect wallet
            </Button>
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
            <div className="btn" onClick={() => setNumber(number - 1 <= 1 ? 1 : number - 1)}>
              -
            </div>
            <input className="number" value={number} onChange={numberChange} />
            <div className="btn" onClick={() => setNumber(number + 1)}>
              +
            </div>
          </div>
          <div className="tip">Whitelists of EdgeRunners can mint 1h in advance</div>
          <Button className="mint" variant="contained" onClick={mint}>
            MINT
          </Button>
        </form>
      </main>
    </div>
  )
}
