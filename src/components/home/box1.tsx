'use client'
import Media from '@/components/home/media'
import Marquee from 'react-fast-marquee'
import { useState } from 'react'
import './box1.scss'
import { Button, TextField } from '@mui/material'
import { useSnackbar } from 'notistack'
import MpPopover from '@/components/MpPopover'

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
    enqueueSnackbar('Sorry, something went wrong. Please try again later.', { variant: 'error' })
  }

  const ConnectWallet = (
    <div id="connect-wallet" className="animate__animated animate__flipInX">
      <Button className="wallet">
        <img src="/img/wallet/metamask.webp" alt="metamask" />
        <span>Metamask</span>
      </Button>
      <Button className="wallet">
        <img src="/img/wallet/coinbase.webp" alt="coinbase" />
        <span>Coinbase Wallet</span>
      </Button>
      <Button className="wallet">
        <img src="/img/wallet/wallet-connect.webp" alt="wallet-connect" />
        <span>Wallet Connect</span>
      </Button>
    </div>
  )

  return (
    <div className="home-box1">
      <Media />
      <main>
        <header>
          <img data-aos="fade-right" className="logo" src="/img/home/logo.webp" alt="logo" />
          <div data-aos="fade-left" className="btn-box">
            <Button className="profile" variant="outlined">
              PROFILE
            </Button>

            <MpPopover content={ConnectWallet}>
              <Button className="connect-wallet" variant="contained">
                CONNECT WALLET
              </Button>
            </MpPopover>
          </div>
        </header>
        <h1 data-aos="fade-up">Welcome to ER Universe</h1>
        <h3 data-aos="zoom-out-down">Co-create new stories, lifestyles and civilizations…</h3>
        <div data-aos="zoom-out-up" className="form">
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
            <Button className="btn" onClick={() => setNumber(number - 1 <= 1 ? 1 : number - 1)}>
              -
            </Button>
            <TextField className="number" value={number} onChange={numberChange} />
            <Button className="btn" onClick={() => setNumber(number + 1)}>
              +
            </Button>
          </div>
          <div className="tip">Whitelists of EdgeRunners can mint 1h in advance</div>
          <Button className="mint" variant="contained" onClick={mint}>
            MINT
          </Button>
        </div>
      </main>
      <footer>
        <div className="rect"></div>
        <div className="rect-oblique">
          <Marquee pauseOnHover autoFill>
            <span className="marquee-item">EdgeRunners</span>
          </Marquee>
        </div>
      </footer>
    </div>
  )
}
