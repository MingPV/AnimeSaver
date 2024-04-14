import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import TuneIcon from '@mui/icons-material/TuneRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import Done from '@mui/icons-material/Done';
import MenuIcon from '@mui/icons-material/Menu';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import ListofAnime from './ListofAnime';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function DrawerFilters() {
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('Guesthouse');
    const [openList, setOpenList] = React.useState(false);
    const [openStat, setOpenStat] = React.useState(false);
    const [openCommunity, setOpenCommunity] = React.useState(false);
    const [openProfile, setOpenProfile] = React.useState(false);

    //const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    const data = [
        {
            subject: 'Action',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Adventure',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Comedy',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Drama',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Sport',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'Fantasy',
            A: 65,
            B: 85,
            fullMark: 150,
        },
        {
            subject: 'Horror',
            A: 65,
            B: 85,
            fullMark: 150,
        },
        {
            subject: 'Phychological',
            A: 65,
            B: 85,
            fullMark: 150,
        },
        {
            subject: 'Romance',
            A: 65,
            B: 85,
            fullMark: 150,
        },
        {
            subject: 'Sci-Fi',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];

    return (
        <React.Fragment>
            <Button
                variant="soft"
                color="neutral"
                startDecorator={<MenuIcon />}
                onClick={() => setOpen(true)}
            >
                Menu
            </Button>
            <Drawer
                size="md"
                variant="plain"
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: 'transparent',
                            p: { md: 3, sm: 0 },
                            boxShadow: 'none',
                        },
                    },
                }}
            >
                <Sheet
                    sx={{
                        borderRadius: 'md',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <DialogTitle>Menu</DialogTitle>
                    <ModalClose />
                    <Divider sx={{ mt: 'auto' }} />
                    <DialogContent sx={{ gap: 2 }}>
                        <FormControl>
                            <FormLabel sx={{ typography: 'title-md', fontWeight: 'bold' }}>
                                Features
                            </FormLabel>
                            <RadioGroup
                                value={type || ''}
                                onChange={(event) => {
                                    setType(event.target.value);
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                                        gap: 1.5,
                                    }}
                                >
                                    {[
                                        {
                                            name: 'Anime List',
                                            icon: <HomeRoundedIcon />,
                                        },
                                        {
                                            name: 'Statistics',
                                            icon: <BarChartIcon />,
                                        },
                                        {
                                            name: 'Community',
                                            icon: <PublicIcon />,
                                        },
                                        {
                                            name: 'User Profile',
                                            icon: <PersonIcon />,
                                        },
                                    ].map((item) => (
                                        <div onClick={
                                            () => {
                                                if (item.name == "Anime List") {
                                                    setOpenList(true)
                                                } else if (item.name == "Statistics") {
                                                    setOpenStat(true);
                                                } else if (item.name == "Community") {
                                                    setOpenCommunity(true);
                                                } else if (item.name == "User Profile") {
                                                    setOpenProfile(true)
                                                }
                                            }
                                        }>
                                            <Card
                                                key={item.name}
                                                sx={{
                                                    boxShadow: 'none',
                                                    '&:hover': { bgcolor: 'background.level1' },
                                                }}
                                            >
                                                <CardContent>
                                                    {item.icon}
                                                    <Typography level="title-md">{item.name}</Typography>
                                                </CardContent>
                                                <Radio

                                                    disableIcon
                                                    overlay
                                                    checked={type === item.name}
                                                    variant="outlined"
                                                    color="neutral"
                                                    value={item.name}
                                                    sx={{ mt: -2 }}
                                                    slotProps={{
                                                        action: {
                                                            sx: {
                                                                ...(type === item.name && {
                                                                    borderWidth: 2,
                                                                    borderColor:
                                                                        'var(--joy-palette-primary-outlinedBorder)',
                                                                }),
                                                                '&:hover': {
                                                                    bgcolor: 'transparent',
                                                                },
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Card>
                                        </div>

                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>

                        <hr />

                        <Typography level="title-md" fontWeight="bold" sx={{ mt: 2 }}>
                            Website Effects
                        </Typography>
                        <FormControl orientation="horizontal">
                            <Box sx={{ flex: 1, pr: 1 }}>
                                <FormLabel sx={{ typography: 'title-sm' }}>
                                    Dark mode
                                </FormLabel>
                                <FormHelperText sx={{ typography: 'body-sm' }}>
                                    Coming soon.
                                </FormHelperText>
                            </Box>
                            <Switch />
                        </FormControl>

                        <FormControl orientation="horizontal">
                            <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                                <FormLabel sx={{ typography: 'title-sm' }}>Coming soon</FormLabel>
                                <FormHelperText sx={{ typography: 'body-sm' }}>
                                    Coming soon.
                                </FormHelperText>
                            </Box>
                            <Switch />
                        </FormControl>
                    </DialogContent>

                    <Divider sx={{ mt: 'auto' }} />
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        useFlexGap
                        spacing={1}
                    >
                        <Button
                            variant="outlined"
                            color="neutral"
                            onClick={() => {
                                setType('');
                            }}
                        >
                            Clear
                        </Button>
                        <Button onClick={() => setOpen(false)}>Save</Button>
                    </Stack>
                </Sheet>

            </Drawer>

            <Drawer size="lg"
                variant="plain"
                anchor='left'
                open={openList}
                onClose={() => setOpenList(false)}
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: 'transparent',
                            p: { md: 3, sm: 0 },
                            boxShadow: 'none',
                        },
                    },
                }}>

                <Sheet
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 'md',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <DialogTitle>Anime List</DialogTitle>
                    <ModalClose />
                    <Divider sx={{ mt: 'auto' }} />

                    <DialogContent sx={{ gap: 2 }}>
                        <ListofAnime />
                    </DialogContent>

                    <Divider sx={{ mt: 'auto' }} />

                </Sheet>
            </Drawer>

            <Drawer size="lg"
                variant="plain"
                anchor='left'
                open={openStat}
                onClose={() => setOpenStat(false)}
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: 'transparent',
                            p: { md: 3, sm: 0 },
                            boxShadow: 'none',
                        },
                    },
                }}>

                <Sheet
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 'md',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <DialogTitle>Statistics</DialogTitle>
                    <ModalClose />
                    <Divider sx={{ mt: 'auto' }} />

                    <ResponsiveContainer width="100%" height="100%"  >
                        <RadarChart cx="50%" cy="47%" outerRadius="80%" data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name="Average" dataKey="B" stroke="#FFC9F6" fill="#FFC9F6" fillOpacity={0.6} />
                            <Radar name="You" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </ResponsiveContainer>



                    <Divider sx={{ mt: 'auto' }} />

                </Sheet>
            </Drawer>
            <Drawer size="lg"
                variant="plain"
                anchor='left'
                open={openCommunity}
                onClose={() => setOpenCommunity(false)}
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: 'transparent',
                            p: { md: 3, sm: 0 },
                            boxShadow: 'none',
                        },
                    },
                }}>

                <Sheet
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 'md',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <DialogTitle>Comminity</DialogTitle>
                    <ModalClose />
                    <Divider sx={{ mt: 'auto' }} />

                    <DialogContent sx={{ gap: 2 }}>

                    </DialogContent>

                    <Divider sx={{ mt: 'auto' }} />

                </Sheet>
            </Drawer>
            <Drawer size="md"
                variant="plain"
                anchor='left'
                open={openProfile}
                onClose={() => setOpenProfile(false)}
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: 'transparent',
                            p: { md: 3, sm: 0 },
                            boxShadow: 'none',
                        },
                    },
                }}>

                <Sheet
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 'md',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <DialogTitle>User Profile</DialogTitle>
                    <ModalClose />
                    <Divider sx={{ mt: 'auto' }} />

                    <DialogContent sx={{ gap: 2 }}>

                    </DialogContent>

                    <Divider sx={{ mt: 'auto' }} />

                </Sheet>
            </Drawer>


        </React.Fragment >
    );
}