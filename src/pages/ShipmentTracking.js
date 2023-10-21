import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TrackingDetails from '../components/ShipmentTracking/TrackingDetails'
import ReportTrackingBox from '../components/ShipmentTracking/ReportTrackingBox'
import TrackingStepper from '../components/ShipmentTracking/TrackingStepper'
import TransitEventsTable from '../components/ShipmentTracking/TransitEventsTable'
import DataContext from '../context/DataContext'

const ShipmentTracking = () => {
  const { trackingNumber } = useContext(DataContext)

  const { t, i18n } = useTranslation()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [trackingData, setTrackingData] = useState()

  const fetchTrackingData = useCallback(
    async (trackingNumber) => {
      try {
        setError(null)
        setLoading(true)
        const response = await axios.get(
          `https://tracking.bosta.co/shipments/track/${trackingNumber}`
        )
        const data = response.data
        setTrackingData({
          trackingNumber: data.TrackingNumber,
          status: data.CurrentStatus?.state,
          lastUpdate: data.CurrentStatus?.timestamp,
          promisedDate: data.PromisedDate,
          provider: data.provider,
          transitEvents: data.TransitEvents,
        })
      } catch (err) {
        setError(err.response)
      } finally {
        setLoading(false)
      }
    },
    [setError, setLoading, setTrackingData]
  )

  console.log(trackingData)

  useEffect(() => {
    if (trackingNumber) {
      fetchTrackingData(trackingNumber)
    }
  }, [trackingNumber, fetchTrackingData])

  return (
    <Stack
      sx={{
        paddingTop: '150px',
        paddingBottom: '30px',
        flex: 1,
        paddingX: { md: '70px', xs: '10px' },
      }}
    >
      {loading ? (
        // handle loading
        <Stack alignItems={'center'} justifyContent='center'>
          <CircularProgress />
        </Stack>
      ) : error ? (
        // handle error
        <Stack spacing={4} pt={'50px'} alignItems='center'>
          {error.status === 404 && (
            <Typography>{`${t('Shipment No.')} ${trackingNumber}`}</Typography>
          )}
          <Box
            padding={4}
            backgroundColor='#FEF2F2'
            maxWidth={'600px'}
            borderRadius='8px'
          >
            <Typography>
              {error.status === 404
                ? t(
                    'No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.'
                  )
                : t('Sorry, something went wrong')}
            </Typography>
          </Box>
        </Stack>
      ) : !trackingData ? (
        // handle no tracking number and no data (initial state)
        <Stack alignItems={'center'} pt={'50px'}>
          <Box
            padding={4}
            backgroundColor='#def2f8'
            maxWidth={'600px'}
            borderRadius='8px'
            alignItems={'center'}
          >
            <Typography>
              {t(
                'Please enter your tracking number by clicking track shipment button above'
              )}
            </Typography>
          </Box>
        </Stack>
      ) : (
        //handle data
        <Stack spacing={4}>
          <Stack border='1px solid rgba(0, 0, 0, 0.12)' borderRadius={'10px'}>
            <Stack paddingY={4} paddingX={{ xs: 2, sm: 4, md: 8 }}>
              <TrackingDetails
                data={[
                  {
                    label: `${t('Shipment No.')} ${
                      trackingData.trackingNumber
                    }`,
                    value: t(trackingData.status),
                    color:
                      trackingData.status === 'DELIVERED'
                        ? 'green'
                        : trackingData.status === 'CANCELLED'
                        ? 'red'
                        : 'orange',
                  },
                  {
                    label: `${t('last Update')}`,
                    value: trackingData.lastUpdate?.split('T')[0],
                  },
                  {
                    label: `${t('Provider Name')}`,
                    value: trackingData.provider,
                  },
                  {
                    label: `${t('Deliver Date')}`,
                    value: trackingData.promisedDate?.split('T')[0],
                  },
                ]}
              />
            </Stack>
            <Divider sx={{ width: '100%' }} />
            <Stack paddingY={4}>
              <TrackingStepper currentStatus={trackingData.status} />
            </Stack>
          </Stack>

          <Grid container rowGap={2}>
            <Grid
              item
              xs={12}
              lg={8.5}
              sx={{
                pr: i18n.language === 'en' ? { lg: 4, xs: 0 } : 0,
                pl: i18n.language === 'ar' ? { lg: 4, xs: 0 } : 0,
              }}
            >
              <Typography mb={2} variant='body1'>
                {t('Shipment Details')}
              </Typography>
              <TransitEventsTable transitEvents={trackingData.transitEvents} />
            </Grid>
            <Grid item xs={12} lg={3.5}>
              <Typography mb={2} variant='body1'>
                {t('Delivery Address')}
              </Typography>
              <Stack
                gap={2}
                direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'column' }}
                justifyContent={{ md: 'space-between', sm: 'space-between' }}
              >
                <Box
                  padding={{ xs: 2, md: 4 }}
                  border='0.5px solid rgba(0,0,0,0.12)'
                  borderRadius={'5px'}
                  sx={{ backgroundColor: '#FAFAFA' }}
                >
                  <Typography variant='body2'>
                    امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك
                    ٣٣
                  </Typography>
                </Box>
                <ReportTrackingBox />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      )}
    </Stack>
  )
}

export default ShipmentTracking
