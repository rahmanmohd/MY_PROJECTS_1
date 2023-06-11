const applicant={
    RegistrationType: regtype,
    PresentState : form_state,
    UserName: username,
    Aadhaar : aadhaar,
    Gender : gender,
    Email_Id : email,
   CurrentAddress : caddress,
    PermanentAddress : paddress,
    Zone : zone,
    Mobile:phone
    }
    const vehicle={
    VehicleNumber:vehicleNumber,
    vehicleType:vehicleType,
    JourneyType:journeyType,
    Purpose:purpose,
    PassFrom:passFrom,
    PassTo:passTo,
    FromState:fromState,
    ToState:toState,
    Remarks:remarks
    }
    var members=[];
    const member={
    Member : i,
   Name: name,
   Age: age,
   Phone: mphone
    }
    members.push(member)

    const Members={
    MemberDetails:members
    }
    var aadhaarURL=null;
    var covidURL=null;
    this.uploadaadhaarref=firebase.storage().ref(`aadhaar/${this.state.aadhaar_card.name}`).put(this.state.aadhaar_card)
    this.uploadaadhaarref.on('state_changed',(snapshot)=>{
    this.progress1=Math.round(snapshot.bytesTransferred/snapshot.
   totalBytes)*100;
    },
    (error)=>{
    alert(error);
    },
    ()=>{
    firebase.storage().ref('aadhaar').child(this.state.aadhaar_card.name).getDownloadURL().then((url)=>{
    console.log(this.state.aadhaar_card.name+" "+url);
   
    aadhaarURL=url;
    }).then(()=>{
    console.log(this.state.covid_report)
    this.uploadcovidref=firebase.storage().ref(`covid/${this.state.covid_report.name}`).put(this.state.covid_report)
    this.uploadcovidref.on('state_changed',(snapshot)=>{
    this.progress2=Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
    },
    (error)=>{
    alert(error);
    },
    ()=>{
    firebase.storage().ref('covid').child(this.state.covid_report.name).getDownloadURL().then((url)=>{
    console.log(this.state.aadhaar_card.name+" "+url);
    covidURL=url;
    }).then(()=>{
    const Epass={
    ApplicantDetails:applicant,
   VehicleDetails:vehicle,
   MembersTravelling:Members,
   AadhaarURL:aadhaarURL,
   CovidURL:covidURL,
   TrackingStatus:false,
   ReferenceId:this.state.reference_id,
    Status:"pending"
    }
    console.log(Epass)
    this.ref.push(Epass);
    }).then(()=>{
    window.location.reload();
    })
    })
    })
    }) 
    sendEmail=(e)=> {
        e.preventDefault()
        if(!(this.state.user_reg)||!(this.state.email_reg)){
        alert("Please check name and email.")
        return
        }
        let refid=this.generate(e);
        e.target.message.value=`Your Epass form has been registered successfu
       lly.Please use this reference id : ${refid} to track the status of your applic
       ation`
        e.target.user_email.value=""+document.getElementById("email").value
        e.target.user_name.value=""+document.getElementById("username").value
        console.log(e.target.user_name.value)
        console.log(e.target.user_email.value)
        console.log(e.target.message.value)
        console.log(e.target)
        emailjs.sendForm('service_4qf4xs5', 'template_pjid1gy', e.target, 'user_fBSeNDM76AhjJfVcZYKqz')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        })
        }
    
        const express = require("express");
        const app = express.Router();
        // const querystring=require('query-string');
        // const pos=express();
        app.get("/", function (req, res) {
        // querystring.parse();
        console.log(req.query.phone);
        console.log("zsfzdzfzf");
        var accountSid = "AC90612e1c44f44fc62dbd2670271ef440"; // Your Account SIDfrom www.twilio.com/console
        var authToken = "5af7a3c2bbf0f9613f6efdbf746cbfd3"; 
        console.log("zsfzdzfzf");
        var twilio = require("twilio");
        var client = new twilio(accountSid, authToken);
        console.log("zsfzdzfzf");
        client.messages
        .create({
        body: "e-pass granted",
        to: "+91"+req.query.phone, // Text this number
        from: "+12564742827", // From a valid Twilio number
        })
        .then((message) => res.send("Message Sent "))
        .then(()=>{console.log("dgdxg");})
        });
        module.exports=app; 