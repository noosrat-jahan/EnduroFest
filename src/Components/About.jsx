import React from 'react';

import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';


const About = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className='w-10/12 mx-auto mt-10 text-center'>
            <h1 className='text-4xl text-purple-800 font-semibold text-center uppercase mb-5'>About <span className='text-orange-500'>Endurofest</span></h1>
            <p className='font-poppins'>
                Welcome to Endurofest, where every stride tells a story! <br />

                We are more than just a marathon – we are a celebration of passion, endurance, and community. Whether you're a seasoned athlete, a first-time runner, or someone seeking adventure, Endurofest offers something for everyone. <br /><br />

                From thrilling marathons to fun-filled charity runs, and even obstacle challenges, our diverse events are designed to inspire, motivate, and bring people together. With every step you take, you're not just crossing finish lines – you're creating memories, pushing limits, and joining a vibrant community of dreamers and doers. <br /> <br />

                Join us at Endurofest and let’s make every mile count!
            </p>


            <div className='my-10'>
                <h1 className='text-4xl text-orange-500 font-semibold text-left uppercase mb-5'>FAQ</h1>
                <Accordion
                    expanded={expanded}
                    onChange={handleExpansion}
                    slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 400 } }}
                    sx={[
                        expanded
                            ? {
                                [`& .${accordionClasses.region}`]: {
                                    height: 'auto',
                                },
                                [`& .${accordionDetailsClasses.root}`]: {
                                    display: 'block',
                                },
                            }
                            : {
                                [`& .${accordionClasses.region}`]: {
                                    height: 0,
                                },
                                [`& .${accordionDetailsClasses.root}`]: {
                                    display: 'none',
                                },
                            },
                    ]}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">1. What types of events does Endurofest offer?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Endurofest features a variety of events, including marathons, half-marathons, fun runs, obstacle courses, and charity runs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">2. How can I register for an event?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>

                            You can register online through our official website. Simply select your desired event, fill out the form, and complete the payment process.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">3. Who can participate in Endurofest ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Endurofest is open to everyone! Whether you're a professional athlete or a beginner, there's an event suited for your fitness level.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">4.What should I bring on race day ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>

                            Participants should bring a copy of their registration confirmation, a valid ID, and any essentials like water bottles or energy snacks.Event - specific requirements will be shared before the race.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">5. Can I volunteer at Endurofest ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>

                            Absolutely! We welcome volunteers to help with organizing, guiding participants, and ensuring the event runs smoothly.Details are available on our website.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default About;










