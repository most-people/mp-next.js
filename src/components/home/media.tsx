import { useSnackbar } from 'notistack'
import './media.scss'

export default function Media() {
  const { enqueueSnackbar } = useSnackbar()
  return (
    <div data-aos="fade-up" id="media-box">
      <img
        src="/img/media/discord.svg"
        alt="discord"
        onClick={() =>
          enqueueSnackbar('Success! You successfully mint 1 NFT(2/3 NFTs)!', {
            variant: 'success',
          })
        }
      />
      <img
        src="/img/media/x.svg"
        alt="x"
        onClick={() =>
          enqueueSnackbar('Warning!', {
            variant: 'warning',
          })
        }
      />
      <img
        src="/img/media/opensea.svg"
        alt="opensea"
        onClick={() =>
          enqueueSnackbar('Congratulations! Info', {
            variant: 'info',
          })
        }
      />
      <img src="/img/media/medium.svg" alt="medium" />
    </div>
  )
}
