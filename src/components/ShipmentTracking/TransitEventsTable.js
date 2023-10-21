import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const TransitEventsTable = ({ transitEvents }) => {
  const [rows, setRows] = useState([])

  const { i18n, t } = useTranslation()

  useEffect(() => {
    setRows(
      transitEvents.map((item) => ({
        location: item.hub,
        date: format(new Date(item.timestamp), 'dd-MM-yyyy'),
        time: format(new Date(item.timestamp), 'hh:mm a'),
        details: item.state,
      }))
    )
  }, [transitEvents])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#FAFAFA' }}>
            <TableCell
              align={i18n.language === 'en' ? 'left' : 'right'}
              sx={{
                fontSize: { md: '18px', sm: '16px', xs: '14px' },
                fontWeight: 600,
              }}
            >
              {t('Location')}
            </TableCell>
            <TableCell
              align={i18n.language === 'en' ? 'left' : 'right'}
              sx={{
                fontSize: { md: '18px', sm: '16px', xs: '14px' },
                fontWeight: 600,
              }}
            >
              {t('Date')}
            </TableCell>
            <TableCell
              align={i18n.language === 'en' ? 'left' : 'right'}
              sx={{
                fontSize: { md: '18px', sm: '16px', xs: '14px' },
                fontWeight: 600,
              }}
            >
              {t('Time')}
            </TableCell>
            <TableCell
              align={i18n.language === 'en' ? 'left' : 'right'}
              sx={{
                fontSize: { md: '18px', sm: '16px', xs: '14px' },
                fontWeight: 600,
              }}
            >
              {t('Details')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                align={i18n.language === 'en' ? 'left' : 'right'}
                sx={{ fontSize: { md: '16px', xs: '14px' }, fontWeight: 600 }}
              >
                {row.location || '-'}
              </TableCell>
              <TableCell
                align={i18n.language === 'en' ? 'left' : 'right'}
                sx={{ fontSize: { md: '16px', xs: '14px' }, fontWeight: 600 }}
              >
                {t(row.date)}
              </TableCell>
              <TableCell
                align={i18n.language === 'en' ? 'left' : 'right'}
                sx={{
                  fontSize: { md: '16px', xs: '14px' },
                  fontWeight: 600,
                  direction: 'ltr',
                }}
              >
                {t(row.time)}
              </TableCell>
              <TableCell
                align={i18n.language === 'en' ? 'left' : 'right'}
                sx={{ fontSize: { md: '16px', xs: '14px' }, fontWeight: 600 }}
              >
                {t(row.details)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TransitEventsTable
