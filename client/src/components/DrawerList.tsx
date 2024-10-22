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

export default function DrawerList() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("Guesthouse");

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
        anchor="right"
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
                      name: "AnimeList",
                      icon: <HomeRoundedIcon />,
                    },
                    {
                      name: "Coming soon",
                      icon: <HourglassTopIcon />,
                    },
                    {
                      name: "Coming soon",
                      icon: <HourglassTopIcon />,
                    },
                    {
                      name: "Coming soon",
                      icon: <HourglassTopIcon />,
                    },
                  ].map((item) => (
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: "none",
                        "&:hover": { bgcolor: "background.level1" },
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

            <FormControl orientation="horizontal">
              <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                <FormLabel sx={{ typography: "title-sm" }}>
                  Coming soon
                </FormLabel>
                <FormHelperText sx={{ typography: "body-sm" }}>
                  Coming soon.
                </FormHelperText>
              </Box>
              <Switch />
            </FormControl>
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
    </React.Fragment>
  );
}
