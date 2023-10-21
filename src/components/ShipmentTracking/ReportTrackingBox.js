import { Button, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import queryImg from '../../assets/images/query.png'

const ReportTrackingBox = () => {
  const { t } = useTranslation()
  return (
    <Stack
      direction={'row'}
      padding={2}
      border='1px solid rgba(0, 0, 0, 0.12)'
      borderRadius={'5px'}
      minWidth='310px'
    >
      <img src={queryImg} alt='tracking-query' width={'120px'} />
      <Stack justifyContent={'space-around'}>
        <Typography variant='body2'>
          {t('Is there a problem with your shipment ?!')}
        </Typography>
        <Button
          variant='contained'
          sx={{
            textTransform: 'none',
            fontSize: { md: '18px', xs: '16px' },
            fontWeight: 600,
          }}
        >
          {t('Report a problem')}
        </Button>
      </Stack>
    </Stack>
  )
}

export default ReportTrackingBox
