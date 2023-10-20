import { useContext, useState, useCallback } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import { InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import DataContext from '../context/DataContext'

const TrackShipmentMenu = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const { setTrackingNumber } = useContext(DataContext)

  const [trackingNumberInput, setTrackingNumberInput] = useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onSubmit = useCallback(() => {
    if (!trackingNumberInput) return
    setTrackingNumber(trackingNumberInput)
  }, [setTrackingNumber, trackingNumberInput])

  return (
    <div>
      <Button
        id='track-shipment-btn'
        aria-controls={open ? 'track-shipment-body' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          fontSize: '18px',
          fontWeight: 800,
          padding: '21px 28px',
          marginX: '15px',
        }}
      >
        {t('Track Shipment')}
      </Button>
      <Menu
        id='track-shipment-body'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'track-shipment-btn',
        }}
      >
        <Stack padding={'25px'} spacing={2}>
          <Typography>Track Your Shipment</Typography>
          <OutlinedInput
            fullWidth
            variant='outlined'
            placeholder='Search'
            value={trackingNumberInput}
            onChange={(e) => setTrackingNumberInput(e.target.value)}
            endAdornment={
              <InputAdornment position='end'>
                <Button variant='contained' color='primary' onClick={onSubmit}>
                  <Search />
                </Button>
              </InputAdornment>
            }
          />
        </Stack>
      </Menu>
    </div>
  )
}

export default TrackShipmentMenu
