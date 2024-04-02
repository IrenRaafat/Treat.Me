<template>
    <div class="container text-center">
            <br>
            <form>
                <div style="color:#2B3467;"><h3>My Bookings</h3></div>
                <br>
                <p>Cancellations are available for 2 days after the booking or at least 24 hours before the appointment.</p>
                <br>
                <div class="row col-12">
                    <div class="row col-4">
                        <div class="col-6">
                            <img class="rounded-circle" src="../../assets/d2.jpg" width="80%" height="70%">
                        </div>
                        <div class="col-6">
                            <br>
                            <p>Rehab Aly</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <br>
                        <p style="color: #48A9A6;">Pediatrics</p>
                    </div>
                    <div class="col-5">
                        <br>
                        <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
    </svg> Thurs, 20th Now  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
    </svg> 5:00 PM - 6:00 PM</pre>
                    </div>
                </div>
                <br>
                <div class="row col-12">
                    <div class="row col-4">
                        <div class="col-6">
                            <img class="rounded-circle" src="../../assets/d1.jpg" width="80%" height="75%">
                        </div>
                        <div class="col-6">
                            <br>
                            <p>Dr. Mourad El Kashef</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <br>
                        <p style="color: #48A9A6;">Cardiology</p>
                    </div>
                    <div class="col-5">
                        <br>
                        <pre><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
    </svg> Thurs, 27th Nov  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
    </svg> 5:00 PM - 6:00 PM</pre>
                    </div>
                </div>
                <br>
            <div class="text-center">
                <button type="button" class="btn" style="background-color: #2B3467;"><a href="#" class="text-light">Done</a></button>&nbsp;
                <button type="button" class="btn" id="skip"><a href="/CancelPage" class="text-darck">Cancel this booking</a></button>
            </div>
            </form>
        </div>
</template>

<script>
    export default {
        name:'MyBookings'
    }
</script>

<style scoped>
    /* form{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background-color: #F2E9C9;
    height: 70%;
    width: 60%;
    box-shadow: 5px 5px 5px rgb(126, 127, 128);
    border-radius: 20px;
  } */
    form{
    border-radius: 20px;
    background-color: #F2E9C9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    box-shadow: 5px 5px 5px rgb(126, 127, 128);
    height: 70%;
    width: 60%;
  }

  /* #container{
      width:40%;
     height: 400px; 
      border-radius: 20px;
      background-color: #F2E9C9;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      box-shadow: 5px 5px 5px rgb(126, 127, 128);
      color: #2B3467;
  }; */


#skip{
    border: solid #48A9A6 2px;
  }
</style>