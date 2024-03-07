import React, {useState} from 'react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
  "clientId": "678025368459-dg52eaakngqp108n0tqkvprhnmia0sv6.apps.googleusercontent.com",
  "apiKey": "AIzaSyABsLzK8HI-veeFJHomglR_I0qyM6pD9D0",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config)

const GoogleCalanderPage = () => {
  
  const [meetings, updateMeetings] = useState([]);

  const container = {
    border: "1px solid",
    margin: "15px",
    padding: "10px"
  }

  const signinGoogleCalander = () => {
    apiCalendar.handleAuthClick();
  } 

  const showListOfEvent = () => {
    const maxDayEvents = 10;

    apiCalendar.listUpcomingEvents(maxDayEvents).then(({ result }) => {
      console.log(result);
      updateMeetings(result.items);
    });
  }

  const convertISOString = (isoString) => {
    var date = new Date(isoString);
    // Extract day, month, and year components
    var day = date.getDate();
    var month = date.getMonth() + 1; // Adding 1 because months are zero-based
    var year = date.getFullYear() % 100; // Getting the last two digits of the year
    // Extract time components
    var hours = date.getHours();
    var amOrPm = hours >= 12 ? 'PM' : 'AM';
    var minutes = date.getMinutes();
    // Format day, month, and year components
    day = (day < 10) ? '0' + day : day; // Adding leading zero if necessary
    month = (month < 10) ? '0' + month : month; // Adding leading zero if necessary
    year = (year < 10) ? '0' + year : year; // Adding leading zero if necessary
    hours = (hours < 10) ? '0' + hours : hours; // Adding leading zero if necessary
    minutes = (minutes < 10) ? '0' + minutes : minutes; // Adding leading zero if necessary
    // Construct the desired format
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ' ' + amOrPm;
  }

  const googleMeetInvites = meetings.map((invite, index) => {
    return(
      <div key={index} style={container}>
        <p>Meeting Title : {invite.summary}</p>
        <p>Meeting Creator : {invite.creator.email}</p>
        <p>Meeting Time : {convertISOString(invite.start.dateTime)}</p>
        <p>Meeting Description : </p>
        <p>{invite.description}</p>
        <p>Meeting Link : <a href={invite.hangoutLink}>{invite.hangoutLink}</a></p>
      </div>
    )
  })

  return (
    <div>
      <h2>Google Calander Page</h2>
      <h3>First, click signin to Google Calander</h3>
      <button onClick={() => signinGoogleCalander()}>Sign Google Calander</button>
      <br/>
      <h3>Second, click to load all the Calander events</h3>
      <button onClick={() => showListOfEvent()}>Show List of Events</button>
      {googleMeetInvites}
    </div>
  );
};

export default GoogleCalanderPage;