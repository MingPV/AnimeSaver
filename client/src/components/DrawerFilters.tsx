import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import Switch from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";
import TuneIcon from "@mui/icons-material/TuneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import Done from "@mui/icons-material/Done";
import MenuIcon from "@mui/icons-material/Menu";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CloudIcon from "@mui/icons-material/Cloud";
import BarChartIcon from "@mui/icons-material/BarChart";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import ListofAnime from "./ListofAnime";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import ListIcon from "@mui/icons-material/List";
import ViewListIcon from "@mui/icons-material/ViewList";
import ComputerIcon from "@mui/icons-material/Computer";

interface Anime {
  animeName: string;
  point: number;
  description: string;
  genre: [string];
  _id: number;
}

export default function DrawerFilters() {
  const [animes, setanimes] = useState<Anime[]>([]);
  const [myGenre, setMyGenre] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [averageGenre, setAverageGenre] = useState([
    80, 70, 60, 70, 50, 70, 60, 70, 90, 60,
  ]);

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("Guesthouse");
  const [openList, setOpenList] = React.useState(false);
  const [openStat, setOpenStat] = React.useState(false);
  const [openCommunity, setOpenCommunity] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  //const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

  // You:A  Average:B

  const data = [
    {
      subject: "Action",
      A: myGenre[0],
      B: averageGenre[0],
      fullMark: 100,
    },
    {
      subject: "Adventure",
      A: myGenre[1],
      B: averageGenre[1],
      fullMark: 100,
    },
    {
      subject: "Comedy",
      A: myGenre[2],
      B: averageGenre[2],
      fullMark: 100,
    },
    {
      subject: "Drama",
      A: myGenre[3],
      B: averageGenre[3],
      fullMark: 100,
    },
    {
      subject: "Sport",
      A: myGenre[4],
      B: averageGenre[4],
      fullMark: 100,
    },
    {
      subject: "Fantasy",
      A: myGenre[5],
      B: averageGenre[5],
      fullMark: 100,
    },
    {
      subject: "Horror",
      A: myGenre[6],
      B: averageGenre[6],
      fullMark: 100,
    },
    {
      subject: "Phychological",
      A: myGenre[7],
      B: averageGenre[7],
      fullMark: 100,
    },
    {
      subject: "Romance",
      A: myGenre[8],
      B: averageGenre[8],
      fullMark: 100,
    },
    {
      subject: "Sci-Fi",
      A: myGenre[9],
      B: averageGenre[9],
      fullMark: 100,
    },
  ];

  useEffect(() => {
    getdata3();
  });

  async function getdata3() {
    const data = await fetch("http://localhost:3003/AnimeList").then((r) =>
      r.json()
    );
    setanimes(data.doc);
    calPercentGenre();
    // console.log(myGenre)
  }

  async function calPercentGenre() {
    let myAnimeCount = 0;
    let myGenreX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // action adventure comedy drama ... sci-fi

    //console.log(animes)

    for (let i = 0; i < animes.length; i++) {
      myAnimeCount++;
      const anime = animes[i];
      for (let j = 0; j < anime.genre.length; j++) {
        const animegenre = anime.genre[j];
        switch (animegenre) {
          case "Action":
            myGenreX[0]++;
            break;
          case "Adventure":
            myGenreX[1]++;
            break;
          case "Comedy":
            myGenreX[2]++;
            break;
          case "Drama":
            myGenreX[3]++;
            break;
          case "Sport":
            myGenreX[4]++;
            break;
          case "Fantasy":
            myGenreX[5]++;
            break;
          case "Horror":
            myGenreX[6]++;
            break;
          case "Phychological":
            myGenreX[7]++;
            break;
          case "Romance":
            myGenreX[8]++;
            break;
          case "Sci-Fi":
            myGenreX[9]++;
            break;
        }
      }
    }

    for (let i = 0; i < myGenre.length; i++) {
      myGenreX[i] = (myGenreX[i] * 100) / myAnimeCount;
      //console.log(tmp)
      //console.log(myGenreX[i])
      // console.log(myGenreX)
    }

    setMyGenre(myGenreX);
  }

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
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Menu</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl>
              <FormLabel sx={{ typography: "title-md", fontWeight: "bold" }}>
                Features
              </FormLabel>
              <RadioGroup
                value={type || ""}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: 1.5,
                  }}
                >
                  {[
                    {
                      name: "Anime List",
                      icon: <ComputerIcon />,
                    },
                    {
                      name: "Statistics",
                      icon: <BarChartIcon />,
                    },
                    // {
                    //   name: "Community",
                    //   icon: <PublicIcon />,
                    // },
                    // {
                    //   name: "User Profile",
                    //   icon: <PersonIcon />,
                    // },
                  ].map((item, index) => (
                    <div
                      onClick={() => {
                        if (item.name == "Anime List") {
                          setOpenList(true);
                        } else if (item.name == "Statistics") {
                          setOpenStat(true);
                        } else if (item.name == "Community") {
                          setOpenCommunity(false);
                        } else if (item.name == "User Profile") {
                          setOpenProfile(false);
                        }
                      }}
                    >
                      <Card
                        key={item.name}
                        sx={{
                          boxShadow: "none",
                          "&:hover": {
                            bgcolor: "background.level1",
                          },
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
                                    "var(--joy-palette-primary-outlinedBorder)",
                                }),
                                "&:hover": {
                                  bgcolor: "transparent",
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
                <FormLabel sx={{ typography: "title-sm" }}>Dark mode</FormLabel>
                <FormHelperText sx={{ typography: "body-sm" }}>
                  Coming soon.
                </FormHelperText>
              </Box>
              <Switch />
            </FormControl>

            {/* <FormControl orientation="horizontal">
              <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                <FormLabel sx={{ typography: "title-sm" }}>
                  Coming soon
                </FormLabel>
                <FormHelperText sx={{ typography: "body-sm" }}>
                  Coming soon.
                </FormHelperText>
              </Box>
              <Switch />
            </FormControl> */}
          </DialogContent>

          <Divider sx={{ mt: "auto" }} />
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
                setType("");
              }}
            >
              Clear
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </Stack>
        </Sheet>
      </Drawer>

      <Drawer
        size="lg"
        variant="plain"
        anchor="left"
        open={openList}
        onClose={() => setOpenList(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            backgroundColor: "white",
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Anime List</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />

          <DialogContent sx={{ gap: 2 }}>
            <ListofAnime />
          </DialogContent>

          <Divider sx={{ mt: "auto" }} />
        </Sheet>
      </Drawer>

      <Drawer
        size="lg"
        variant="plain"
        anchor="left"
        open={openStat}
        onClose={() => setOpenStat(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            backgroundColor: "white",
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Statistics</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />

          <ResponsiveContainer width="100%" height="90%">
            <RadarChart cx="50%" cy="47%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Average"
                dataKey="B"
                stroke="#FFC9F6"
                fill="#FFC9F6"
                fillOpacity={0.6}
              />
              <Radar
                name="You"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>

          <Divider sx={{ mt: "auto" }} />
        </Sheet>
      </Drawer>
      <Drawer
        size="lg"
        variant="plain"
        anchor="left"
        open={openCommunity}
        onClose={() => setOpenCommunity(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            backgroundColor: "white",
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>Comminity</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />

          <DialogContent sx={{ gap: 2 }}></DialogContent>

          <Divider sx={{ mt: "auto" }} />
        </Sheet>
      </Drawer>
      <Drawer
        size="md"
        variant="plain"
        anchor="left"
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            backgroundColor: "white",
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <DialogTitle>User Profile</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />

          <DialogContent sx={{ gap: 2 }}></DialogContent>

          <Divider sx={{ mt: "auto" }} />
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
