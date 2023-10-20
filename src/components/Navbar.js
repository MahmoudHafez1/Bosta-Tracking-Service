import * as React from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Button,
  ListItemText,
  Stack,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTranslation } from 'react-i18next'
import { ArabicLogo, EnglishLogo } from '../assets/icons/Logo'
import TrackShipmentMenu from './TrackShipmentMenu'

const drawerWidth = 240
const navItems = ['Home', 'Prices', 'Call Sales']

export default function DrawerAppBar(props) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const changeLanguage = () => {
    i18n.changeLanguage(lang === 'ar' ? 'en' : 'ar')
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={t(item)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button
        sx={{
          textTransform: 'none',
          fontWeight: 800,
          fontSize: '18px',
          width: '100%',
          '&:hover': {
            backgroundColor: '#fff',
          },
        }}
        onClick={changeLanguage}
      >
        {i18n.language === 'en' ? 'عربي' : 'Eng'}
      </Button>
      <Divider />
      <Stack>
        <Button
          color='secondary'
          sx={{
            textTransform: 'none',
            fontWeight: 800,
            fontSize: '18px',
          }}
        >
          {t('Sign In')}
        </Button>
      </Stack>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component='nav'
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          padding: { lg: '16px 70px', xs: 0 },
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            flexDirection: i18n.language === 'en' ? 'row' : 'row-reverse',
            justifyContent: 'space-between',
          }}
        >
          <Stack
            direction={'row'}
            flexDirection={lang === 'en' ? 'row' : 'row-reverse'}
            alignItems='center'
            gap={12}
          >
            {lang === 'en' ? <EnglishLogo /> : <ArabicLogo />}
            <Stack
              gap={3}
              direction='row'
              flexDirection={lang === 'en' ? 'row' : 'row-reverse'}
              sx={{ display: { xs: 'none', lg: 'flex' } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  color='secondary'
                  sx={{
                    textTransform: 'none',
                    fontWeight: 800,
                    fontSize: '18px',
                    '&:hover': {
                      backgroundColor: '#fff',
                      color: 'primary.main',
                    },
                  }}
                >
                  {t(item)}
                </Button>
              ))}
            </Stack>
          </Stack>

          <Stack
            direction={'row'}
            flexDirection={lang === 'en' ? 'row' : 'row-reverse'}
            alignItems='center'
          >
            <TrackShipmentMenu />
            <Stack
              direction={'row'}
              sx={{ display: { xs: 'none', lg: 'flex' } }}
              flexDirection={lang === 'en' ? 'row' : 'row-reverse'}
            >
              <Button
                color='secondary'
                sx={{
                  textTransform: 'none',
                  fontWeight: 800,
                  fontSize: '18px',
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: 'primary.main',
                    textDecoration: 'underline',
                  },
                }}
              >
                {t('Sign In')}
              </Button>
              <Button
                sx={{
                  textTransform: 'none',
                  fontWeight: 800,
                  fontSize: '18px',
                  '&:hover': {
                    backgroundColor: '#fff',
                  },
                }}
                onClick={changeLanguage}
              >
                {lang === 'en' ? 'عربي' : 'Eng'}
              </Button>
            </Stack>
            <Button
              color='secondary'
              onClick={handleDrawerToggle}
              sx={{
                display: { lg: 'none' },
              }}
            >
              <MenuIcon />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
