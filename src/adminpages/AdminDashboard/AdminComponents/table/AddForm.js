import { Box, Button, IconButton, Select, TextField, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from '@mui/material/MenuItem';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { db, firebaseApp } from "../../../../firebase";
import Swal from 'sweetalert2';


export default function AddForm({fid,closeEvent}) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [middleName, setmiddleName] = useState("");
    const [Email, setEmail] = useState("");
    const [StudentNumber, setStudentNumber] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [CurrentCollege, setCurrentCollege] = useState("");
    const [CurrentYear, setCurrentYear] = useState("");
    const [ClassificationConcern, setClassificationConcern] = useState("");
    const [NatureConcern, setNatureConcern] = useState("");
    const [Concern, setConcern] = useState("");
    const [Status, setStatus] = useState("");
    const [rows, setRows] = useState([]);
    const empCollectionRef = collection(db, "Testing");


    const handlefirstNameChange = (event) => {
        setfirstName(event.target.value);
    };

    const handlelastNameChange = (event) => {
        setlastName(event.target.value);
    };

    
    const handlemiddleNameChange = (event) => {
        setmiddleName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleStudentNumberChange = (event) => {
        setStudentNumber(event.target.value);
    };

    const handleContactNumberChange = (event) => {
        setContactNumber(event.target.value);
    };

    const handleCurrentCollegeChange = (event) => {
        setCurrentCollege(event.target.value);
    };

    const handleCurrentYearChange = (event) => {
        setCurrentYear(event.target.value);
    };

    const handleClassificationConcernChange = (event) => {
        setClassificationConcern(event.target.value);
    };

    const handleNatureConcernChange = (event) => {
        setNatureConcern(event.target.value);
    };

    const handleConcernChange = (event) => {
        setConcern(event.target.value);
    };


     const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const createUser = async () => {
        await addDoc(empCollectionRef, {
            firstname: firstName,
            lastName: lastName,
            middleName: middleName,
            Email: Email,
            StudentNumber: StudentNumber,
            ContactNumber: ContactNumber,
            CurrentCollege: CurrentCollege,
            CurrentYear: CurrentYear,
            ClassificationConcern: ClassificationConcern,
            NatureConcern: NatureConcern,
            Concern: Concern,
            Status: Status,
            
        });
        getUsers();
        closeEvent();
        Swal.fire("Submitted!", "Your File has been Submitted.","success")

    };

    useEffect(() => {
        getUsers();
      }, []);

    
    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    

    const currencies = [
        {
          value: 'Pending',
          label: 'Pending',
        },
        {
          value: 'Completed',
          label: 'Completed',
        },
  
      ];

      const statuses = [
        {
          value: 'Pending',
          label: 'Pending',
        },
        {
          value: 'Fulfilled',
          label: 'Fulfilled',
        },

        {
          value: 'Rejected',
          label: 'Rejected',
        },
    
  
      ];

      const CurrentCollegeOption = [
        {
          value: "College of Architecture and Urban Planning",
          label: "College of Architecture and Urban Planning",
        },
        {
          value: "College of Education",
          label: "College of Education",
        },
        {
          value: "College of Engineering and Technology",
          label: "College of Engineering and Technology",
        },
        {
          value: "College of Humanities, Arts, and Social Sciences",
          label: "College of Humanities, Arts, and Social Sciences",
        },
        {
          value: "College of Law",
          label: "College of Law",
        },
        {
          value: "College of Nursing",
          label: "College of Nursing",
        },
        {
          value: "College of College of Physical Therapy",
          label: "College of College of Physical Therapy",
        },
        {
          value: "College of Science",
          label: "College of Science",
        },
        {
          value: "PLM Business School",
          label: "PLM Business School",
        },
        {
          value: 'PLM School of Government',
          label: 'PLM School of Government',
        },
    
  
      ];

      const CurrentYearOption = [
        {
          value: "1st Year",
          label: "1st Year",
        },
        {
          value: "2nd Year",
          label: "2nd Year",
        },
        {
          value: "3rd Year",
          label: "3rd Year",
        },
        {
          value: "4th Year",
          label: "4th Year",
        },
        {
          value: "5th Year",
          label: "5th Year",
        },
        {
          value: "6th Year",
          label: "6th Year",
        },
        {
          value: "7th Year",
          label: "7th Year",
        },
  
      ];
  
      const ClassificationConcernOption = [
        {
          value: "Grievances",
          label: "Grievances",
        },
        {
          value: "Queries",
          label: "Queries",
        },
        {
          value: "Suggestions",
          label: "Suggestions",
        },
  
      ];

      const NatureConcernOption = [
        {
            value: "Academic",
            label: "Academic",
        },
        {
            value: "Non-Academic",
            label: "Non-Academic",
        }
      ]



  return (
    <>
        <Box sx ={{ m :2}} />
        <Typography variant="h5" align="center">
            Add Entry
        </Typography>
        <IconButton
            style = {{ position: "absolute", top: "0", right: "0"}}
            onClick = {closeEvent}
        >
            <CloseIcon/>
        </IconButton>
        <Box height={20} />
        <Grid container spacing = {2} >
            <Grid item xs={6}>
                <TextField 
                id ="outlined-basic" 
                label="First Name" 
                variant="outlined" 
                size ="small" 
                sx = {{ minWidth: "100%"}}
                onChange={handlefirstNameChange}
                value={firstName}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                id ="outlined-basic" 
                label="Last Name" 
                variant="outlined" 
                size ="small" 
                sx = {{ minWidth: "100%"}}
                onChange={handlelastNameChange}
                value={lastName}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                id ="outlined-basic" 
                label="Middle Name" 
                variant="outlined" 
                size ="small" 
                sx = {{ minWidth: "100%"}}
                onChange={handlemiddleNameChange}
                value={middleName}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                id ="outlined-basic" 
                label="Email" 
                variant="outlined" 
                size ="small" 
                sx = {{ minWidth: "100%"}}
                onChange={handleEmailChange}
                value={Email}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                id ="outlined-basic" 
                label="Student Number" 
                variant="outlined" 
                size ="small" 
                sx = {{ minWidth: "100%"}}
                onChange={handleStudentNumberChange}
                value={StudentNumber}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                id ="outlined-basic" 
                label="Contact Number" 
                variant="outlined" 
                size ="small" 
                sx = {{ minWidth: "100%"}}
                onChange={handleContactNumberChange}
                value={ContactNumber}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id ="outlined-basic" 
                    label=" Current College"
                    variant="outlined" 
                    select
                    size ="small" 
                    onChange={handleCurrentCollegeChange}
                    value={CurrentCollege}
                    sx = {{ minWidth: "100%"}}
                    >
                    {CurrentCollegeOption.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}

                    </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id ="outlined-basic" 
                    label="Current Year"
                    variant="outlined" 
                    select
                    size ="small" 
                    onChange={handleCurrentYearChange}
                    value={CurrentYear}
                    sx = {{ minWidth: "100%"}}
                    >
                    {CurrentYearOption.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}

                    </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id ="outlined-basic" 
                    label="Classification of Concern"
                    variant="outlined" 
                    select
                    size ="small" 
                    onChange={handleClassificationConcernChange}
                    value={ClassificationConcern}
                    sx = {{ minWidth: "100%"}}
                    >
                    {ClassificationConcernOption.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}

                    </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id ="outlined-basic" 
                    label="Nature of Concern"
                    variant="outlined" 
                    select
                    size ="small" 
                    onChange={handleNatureConcernChange}
                    value={NatureConcern}
                    sx = {{ minWidth: "100%"}}
                    >
                    {NatureConcernOption.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}

                    </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id ="outlined-basic" 
                    label="Concern"
                    variant="outlined" 
                    size ="small" 
                    onChange={handleConcernChange}
                    value={Concern}
                    sx = {{ minWidth: "100%"}}
                    >
                    </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id ="outlined-basic" 
                    label="Status"
                    variant="outlined" 
                    select
                    size ="small" 
                    onChange={handleStatusChange}
                    value={Status}
                    sx = {{ minWidth: "100%"}}
                    >
                    {statuses.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}

                    </TextField>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" align="center">
                    <Button variant ="contained" onClick={createUser}>
                        Submit
                    </Button>
                </Typography>
            </Grid>
        </Grid>
        <Box sx ={{ m: 4}}/>
    </>
  )
};
