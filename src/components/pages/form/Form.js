import React, { useState, useEffect} from "react";
import "./GrievanceForm.css";
import { db } from "../../../firebase";
import toast, { Toaster } from "react-hot-toast";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import {
    collection,
    getDocs,
    addDoc,
  } from "firebase/firestore";

export default function Form () {

  const MAX_LENGTH_SN = 9;
  const MAX_LENGTH_CN = 11;
  const MAX_EXPLANATION = 1000;


    const [StudentNumber, setStudentNumber] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName ] = useState("");
    const [middleName, setmiddleName ] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNumber, setContactNumber ] = useState("");
    const [CurrentCollege, setCurrentCollege ] = useState("");
    const [CurrentYear, setCurrentYear ] = useState("");
    const [ClassificationConcern, setClassificationConcern ] = useState("");
    const [NatureConcern, setNatureConcern ] = useState("");
    const [Concern, setConcern ] = useState("");
    const [rows, setRows] = useState([]);
    const empCollectionRef = collection(db, "Testing");
    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessage2, setErrorMessage2] = useState("");
    const [errorMessage3, setErrorMessage3] = useState("");
    const [errorMessage4, setErrorMessage4] = useState("");


    
    const handleSubmit = async (e) => {

        if (firstName === "" && lastName ==="" && middleName === "" && Email === "" && StudentNumber === "" && ContactNumber === ""  && CurrentCollege === "" && CurrentYear === "" && ClassificationConcern === "" && NatureConcern === "" && Concern === "") console.log("missing field");
        else {
        e.preventDefault();
        setLoader(true)

        await addDoc(empCollectionRef, {
            firstName: firstName,
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
        })
        .then(() => {
        getUsers();
        // Swal.fire("Submitted!", "Your File has been Submitted.","success")
        toast.success("Grievance Form Submitted")
        setLoader(false)
        })
        .catch((error) => {
            toast.error("Something went wrong")
            setLoader(false);
          });
    };
    };


    useEffect(() => {
        getUsers();
      }, []);
    
    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

// STUDENT NUMBER
useEffect(() => {

  if (StudentNumber.length < MAX_LENGTH_SN) {
    setErrorMessage("Format: 9 digits");
  } else if (StudentNumber.length > MAX_LENGTH_SN) {
    setErrorMessage("The number exceeded the limit")
  } 

}, [StudentNumber, errorMessage]);

// EMAIL

  useEffect(() => {
    if (!Email.endsWith('@plm.edu.ph')) {
      setErrorMessage2("Format:___@plm.edu.ph")
    } else if (Email.endsWith('@plm.edu.ph')) {
      setErrorMessage2("Valid Email")
    } 
  }, [Email, errorMessage2]);

// CONTACT NUMBER

useEffect(() => {

  if (ContactNumber.length < MAX_LENGTH_CN) {
    setErrorMessage3("Format: 11 Digits");
  } else if (ContactNumber.length > MAX_LENGTH_CN) {
    setErrorMessage3("The number exceeded the limit")
  }
}, [ContactNumber, errorMessage3]);

// SHORT DESCRIPTION

useEffect(() => {
  if(Concern.length < MAX_EXPLANATION) {
    setErrorMessage4("Give a short narrative of your concern")
  } else if (Concern.length > MAX_EXPLANATION){
    setErrorMessage4("You have reached the maximum character limit")
  }
}, [Concern, errorMessage4])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Toaster />

      <div className="placeholder__wrapper">
        <div className="desc1">
          <p>
            {/* The name and photo associated with your Google account will be
            recorded when you upload files and submit this form. Your email is
            not part of your response. */}
            This online Student Assistance and Grievance Help Desk Form is created 
            by the PLM Supreme Student Council - Student Rights and Welfare Commission to assist the PLM students 
            with their concerns and to continue serving the demands of its constituents as the PLM community shifts all 
            transactions on digital platforms for the Academic Year 2020-2021. 
          </p>
          <p>
            Let the PLM-SSC STRAW Commissions know your urgent concerns or questions by simply filling out and submitting 
            this form (The student council and student directors from the PLM-SSC STRAW Commission may reach you through your 
            contact details to assist you further on your concern/s).
          </p>
          <p>
          The information that you will disclose with us will remain confidential until, with your consent, it is necessary 
          for taking action. #NagkakaisangPamantasan
          </p>
        </div>

        <Divider/>

        <h2 className="studentProfile">Student Profile</h2>

    <Box
      sx={{
        marginTop: '20px',
        flexFlow: 'row',
        width: 900,
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      
      {/*STUDENT NUMBER*/}
      <TextField
        fullWidth
        error={StudentNumber.length > MAX_LENGTH_SN}
        helperText={errorMessage}
        label="Student Number"
        id="outlined-error"
        value={StudentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
        inputProps={{
          type: "text",
          inputMode: "numeric",
          pattern: "[0-9]{9}",
        }}
        required
      />

      {/*EMAIL ADDRESS*/}
      <TextField
        fullWidth
        helperText={errorMessage2}
        label="Email Address"
        id="outlined-error"
        value={Email} 
        onChange={(e) => setEmail(e.target.value)}
        inputProps={{
          type: "text",
          pattern: ".*@plm.edu.ph$",
        }}
        required 
        />

      {/*CONTACT NUMBER*/}
      <TextField
        fullWidth
        error = {ContactNumber.length > MAX_LENGTH_CN}
        helperText={errorMessage3}
        label="Contact Number"
        id="outlined-error"
        value={ContactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        inputProps={{
          type: "text",
          inputMode: "numeric",
          pattern: "[0-9]{11}",
        }}
        required
      />
      
    </Box>  



    <Box
      sx={{
        marginTop: '40px',
        marginBottom: '20px',
        flexFlow: 'row',
        width: 900,
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      {/*LAST NAME*/}
      <TextField
        fullWidth
        helperText={"Please enter your Last Name"}
        label="Last Name"
        id="outlined-error"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
        required 
      />
      {/*FIRST NAME*/}
      <TextField
        fullWidth
        helperText={"Please enter your First Name"}
        label="First Name"
        id="outlined-error"
        value={firstName}
        onChange={(e) => setfirstName(e.target.value)}
        required 
      />
      {/*middle NAME*/}
       <TextField
        fullWidth
        helperText={"Please enter your middle name"}
        label="Middle Name (if available)"
        id="outlined-error"
        value={middleName}
        onChange={(e) => setmiddleName(e.target.value)}
      />
      
    </Box>  
    <Divider light/>

    
    <Box
      sx={{
        marginTop: '40px',
        marginBottom: '20px',
        flexFlow: 'row',
        width: 900,
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >

      {/*CURRENT COLLEGE*/}
      <FormControl 
         sx={{
          m: 1, 
          minWidth: 120,
          width: 900,
        }}>
        <InputLabel id="demo-simple-select-helper-label">Current College</InputLabel>
        <Select
          value={CurrentCollege}
          label="Current College"
          onChange={(e) => setCurrentCollege(e.target.value)}
          required
        >

          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"College of Architecture and Urban Planning"}>College of Architecture and Urban Planning</MenuItem>
          <MenuItem value={"College of Education"}>College of Education</MenuItem>
          <MenuItem value={"College of Engineering and Technology"}>College of Engineering and Technology</MenuItem>
          <MenuItem value={"College of Humanities, Arts, and Social Sciences"}>College of Humanities, Arts, and Social Sciences</MenuItem>
          <MenuItem value={"College of Law"}>College of Law</MenuItem>
          <MenuItem value={"College of Nursing"}>College of Nursing</MenuItem>
          <MenuItem value={"College of College of Physical Therapy"}>College of Physical Therapy</MenuItem>
          <MenuItem value={"College of Science"}>College of Science</MenuItem>
          <MenuItem value={"PLM Business School"}>PLM Business School</MenuItem>
          <MenuItem value={"PLM School of Government"}>PLM School of Government</MenuItem>
        </Select>
        <FormHelperText>Please choose your current college</FormHelperText>
      </FormControl>

      {/*CURRENT YEAR LEVEL*/}
      <FormControl 
         sx={{
          m: 1, 
          minWidth: 120,
          width: 900,
        }}>
        <InputLabel id="demo-simple-select-helper-label">Current Year Level</InputLabel>
        <Select
          value={CurrentYear}
          label="Current Year Level"
          onChange={(e) => setCurrentYear(e.target.value)}
          required
        >

          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"1st Year"}>1st Year</MenuItem>
          <MenuItem value={"2nd Year"}>2nd Year</MenuItem>
          <MenuItem value={"3rd Year"}>3rd Year</MenuItem>
          <MenuItem value={"4th Year"}>4th Year</MenuItem>
          <MenuItem value={"5th Year"}>5th Year</MenuItem>
          <MenuItem value={"6th Year"}>6th Year</MenuItem>
          <MenuItem value={"7th Year"}>7th Year</MenuItem>
        </Select>
        <FormHelperText>Please choose your current year level</FormHelperText>
      </FormControl>
    </Box>


    <Box
      sx={{
        marginTop: '40px',
        justifyContent: "space-between",
        marginBottom: '20px',
        flexFlow: 'row',
        width: 900,
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >

      {/*CLASSIFICATION OF CONCERNS*/}
      <FormControl 
         sx={{
          m: 1, 
          minWidth: 120,
          width: 900,

        }}>
        <InputLabel id="demo-simple-select-helper-label">Classification of Concern</InputLabel>
        <Select
          value={ClassificationConcern}
          label="Classification of Concern"
          onChange={(e) => setClassificationConcern(e.target.value)}
          required
        >

          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Grievances"}>Grievances</MenuItem>
          <MenuItem value={"Queries"}>Queries</MenuItem>
          <MenuItem value={"Suggestions"}>Suggestions</MenuItem>
        </Select>
        <FormHelperText>Please choose the correct classification</FormHelperText>
      </FormControl>

       {/*NATURE OF CONCERN*/}
      <FormControl 
         sx={{
          m: 1, 
          minWidth: 120,
          width: 900,

        }}>
        <InputLabel id="demo-simple-select-helper-label">Nature of Concern</InputLabel>
        <Select
          value={NatureConcern}
          label="Nature of Concern"
          onChange={(e) => setNatureConcern(e.target.value)}
          required
        >

          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Academic"}>Academic</MenuItem>
          <MenuItem value={"Non-Academic"}>Non-Academic</MenuItem>
        </Select>
        <FormHelperText>Please choose the nature of concern</FormHelperText>
      </FormControl>
    </Box>

    {/*CONCERN*/}
    <Box sx={{
    marginTop: '40px',
    marginBottom: '20px',
    flexFlow: 'row',
    width: 900,
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    '& > :not(style)': { m: 1 },
    
  }}
  autoComplete="off"
  
  >
  <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label="Concern"
          helperText={errorMessage4}
          error={Concern.length > MAX_EXPLANATION}
          multiline
          required
          value={Concern}
          onChange={(e) => setConcern(e.target.value)}
          minRows={5}
        />   
  </Box>

  </div>
      <div className="forInput">
        <button
          type="submit"
          style={{ background: loader ? "#ccc" : "#F4E12F", }}>
          Submit
        </button>
      </div>
    </form>
  );
};



