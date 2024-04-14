import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, FC, ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import axios from "axios";
import { AnimeProps } from "../interfaces/AnimeProps";
import { Transition } from 'react-transition-group';
import { Icon } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Form from 'react-bootstrap/Form';
import Snackbar from '@mui/joy/Snackbar';
import Alert from '@mui/material/Alert';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Props {
    animeList: AnimeProps["animeList"],
    setAnimeList: Dispatch<SetStateAction<AnimeProps["animeList"]>>,
    animeName: string,
    setNameInForm: Dispatch<SetStateAction<string>>
}


const SubmitModal: FC<Props> = ({ animeList, setAnimeList, animeName, setNameInForm }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [AlertsnackbarOpen, setAlertSnackbarOpen] = useState(false);

    const url = "http://localhost:3000/recieveForm";

    const [name, setName] = useState(animeName);
    const [point, setPoint] = useState<AnimeProps | any>(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        setName(animeName)
    })

    const setPointinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPoint(event.target.value);
    }

    const setDescriptioninputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const animeData = { name, point, description }

        axios.post(url, {
            name: name,
            point: point,
            type: "Not implement yet (create function in SubmitModal() in components)",
            description: description
        }).then(res => {
            console.log(res.data)
        })

        setAnimeList([...animeList, animeData])
        setName("");
        setNameInForm("");
        setPoint("");
        setDescription("")

        setOpen(false);
        setSnackbarOpen(true)
    }

    const handleAlert = () => {
        setAlertSnackbarOpen(true)
    }


    return (
        <React.Fragment>
            <Button variant="plain" color="neutral" onClick={() => { if (!name) { setAlertSnackbarOpen(true) } else { console.log(name); setOpen(true); } }} startDecorator={<FavoriteIcon fontSize="inherit" />}>
                Save your anime
            </Button>
            <Transition in={open} timeout={400}>
                {(state: string) => (
                    <Modal
                        keepMounted
                        open={!['exited', 'exiting'].includes(state)}
                        onClose={() => setOpen(false)}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: 'none',
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                        entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility: state === 'exited' ? 'hidden' : 'visible',
                        }}
                    >
                        <ModalDialog variant='plain' sx={{
                            opacity: 0,
                            transition: `opacity 300ms`,
                            ...{
                                entering: { opacity: 1 },
                                entered: { opacity: 1 },
                            }[state],
                        }}>
                            <DialogTitle>Create a new memory</DialogTitle>
                            <DialogContent>Tell something to yourself in the future about this anime.</DialogContent>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <Stack spacing={2}>
                                    {/* <FormControl>
                                        <FormLabel>Point</FormLabel>
                                        <Input autoFocus required value={point} name="point" type="number" onChange={setPointinputHandler} />
                                    </FormControl> */}
                                    <FormControl>
                                        <FormLabel>Description</FormLabel>
                                        <Form.Control as="textarea" rows={3} value={description} name="description" type="text" onChange={setDescriptioninputHandler} />

                                    </FormControl>
                                    <Button type="submit">Submit</Button>

                                </Stack>
                            </form>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>
            <Snackbar
                variant="soft"
                color="success"
                open={snackbarOpen}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                startDecorator={<FavoriteIcon />}
                endDecorator={
                    <Button
                        onClick={() => setSnackbarOpen(false)}
                        size="sm"
                        variant="soft"
                        color="success"
                    >
                        Dismiss
                    </Button>
                }
            >
                Your message was sent successfully.
            </Snackbar>
            <Snackbar
                variant="soft"
                color="danger"
                open={AlertsnackbarOpen}
                onClose={() => setAlertSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                startDecorator={<ErrorOutlineIcon />}
                endDecorator={
                    <Button
                        onClick={() => setAlertSnackbarOpen(false)}
                        size="sm"
                        variant="soft"
                        color="danger"
                    >
                        Dismiss
                    </Button>
                }
            >
                You haven't entered an anime name yet.
            </Snackbar>


        </React.Fragment>
    );
}

export default SubmitModal

