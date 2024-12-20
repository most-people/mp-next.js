import { useState, useRef } from 'react'
import { Popper } from '@mui/material'

export default function MpPopover({
  children,
  content,
}: {
  children: React.ReactNode
  content: React.ReactNode
}) {
  const [show, setShow] = useState(false)
  const anchorRef = useRef(null)

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} ref={anchorRef}>
      {children}
      <Popper open={show} anchorEl={anchorRef.current}>
        {content}
      </Popper>
    </div>
  )
}
