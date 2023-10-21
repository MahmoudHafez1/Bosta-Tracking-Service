import {
  Stack,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const steps = [
  'Shipment created',
  'Shipment recieved from the provider',
  'Shipment out for delivery',
  'Delivered',
]

const TrackingStepper = ({ currentStatus }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [color, setColor] = useState('')

  const { t, i18n } = useTranslation()

  useEffect(() => {
    switch (currentStatus) {
      case 'TICKET_CREATED':
        setActiveStep(0)
        break
      case 'PACKAGE_RECEIVED':
        setActiveStep(1)
        break
      case 'DELIVERED':
        setActiveStep(3)
        setColor('green')
        break
      case 'CANCELLED':
        setActiveStep(2)
        setColor('red')
        break
      default:
        setActiveStep(2)
        setColor('orange')
        break
    }
  }, [currentStatus])

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={
        <StepConnector
          sx={{
            transform: i18n.language === 'ar' && {
              lg: 'translateX(115%)',
              md: 'translateX(120%)',
              sm: 'translateX(125%)',
              xs: 'translateX(145%)',
            },
          }}
        />
      }
    >
      {steps.map((label, index) => (
        <Step
          key={label}
          sx={{
            '& .MuiStepLabel-root .Mui-completed': {
              color, // circle color (COMPLETED)
            },

            '& .MuiStepLabel-root .Mui-active': {
              color, // circle color (ACTIVE)
            },
            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'black', // Just text label (COMPLETED)
              },
            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
              color: 'black', // Just text label (ACTIVE)
            },
          }}
        >
          <StepLabel>
            {activeStep === 2 && index === 2 ? (
              <Stack>
                <Typography fontWeight={600}>{t(label)}</Typography>
                <Typography color={color}> {t(currentStatus)}</Typography>
              </Stack>
            ) : (
              <Typography fontWeight={600}>{t(label)}</Typography>
            )}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default TrackingStepper
