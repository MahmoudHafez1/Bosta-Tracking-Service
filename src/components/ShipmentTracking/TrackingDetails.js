import { Stack, Typography } from '@mui/material'

const TrackingDetails = ({ data = [{ label: 'label', value: 'value' }] }) => {
  return (
    <Stack direction='row' justifyContent='space-between' gap={2}>
      {data?.map((item, index) => (
        <TrackingDetailsItem
          key={index}
          label={item.label}
          value={item.value}
          color={item.color}
        />
      ))}
    </Stack>
  )
}

export default TrackingDetails

const TrackingDetailsItem = ({ label, value, color }) => {
  return (
    <Stack gap={2}>
      <Typography color={'gray'} variant='body2'>
        {label}
      </Typography>
      <Typography color={color || 'black'} variant='h6'>
        {value}
      </Typography>
    </Stack>
  )
}
