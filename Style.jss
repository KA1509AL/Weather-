import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    '& input': {
      padding: '10px',
      border: 'none',
      borderRadius: '20px',
      width: '250px',
      outline: 'none',
      fontSize: '16px',
    },
    '& button': {
      padding: '10px 15px',
      marginLeft: '10px',
      border: 'none',
      borderRadius: '20px',
      background: '#fff',
      color: '#0072ff',
      fontSize: '16px',
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        background: '#e0e0e0',
      },
    },
  },
  weatherInfo: {
    textAlign: 'center',
    '& h2': {
      fontSize: '28px',
      marginBottom: '10px',
    },
    '& p': {
      fontSize: '18px',
      margin: '5px 0',
    },
  },
  temperature: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: '100px',
    height: '100px',
  },
});

export default useStyles;
