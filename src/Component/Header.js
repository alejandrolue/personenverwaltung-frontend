import {
    AppBar, Toolbar,
    Typography, Button
} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
//import Brightness2Icon from '@material-ui/icons/Brightness2';
//import MenuIcon from '@material-ui/icons/Menu';
//import WbSunnyIcon from '@material-ui/icons/WbSunny';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'absolute',
        backgroundColor: deepPurple[900],
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            marginLeft: drawerWidth,
            zIndex: theme.zIndex.drawer + 1,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#000000',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    darkModeIcons: {
        marginRight: theme.spacing(0),
        color: '#ffffff',
    },
    profile: {
        marginRight: theme.spacing(2),
        color: '#ffffff',
    },
    logo: {
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 600,
        color: '#ffffff',
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1, alignCenter: 'center' }}>
                    Personenverwaltung
                </Typography>
            </Toolbar>
        </AppBar>
    );
}