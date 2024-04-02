<template>
  <div class="mt-5">
    <div class="row card1 mx-5 mt-5 mb-5 h-auto">
      <div
        class="col-lg-6 col-md-6 col-sm-12 h-sm-25 mt-5 my-auto mb-lg-4 mb-sm-0"
      >
        <img :src="doc.image" class="rounded-circle mt-2" />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 my-auto pb-lg-0 pb-sm-3">
        <h2>{{ doc.name }}</h2>
        <h3 class="spe">{{ doc.spe }}</h3>
        <h3>{{ doc.des }}</h3>
        <h3 class="spe">{{ doc.location }}</h3>
        <p>EGP 300/1-hour Session</p>
        <div class="rate mb-3 mt-lg-5 mt-sm-0">
          <svg
            v-if="doc.rate >= 1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            />
          </svg>
          <svg
            v-if="doc.rate >= 2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            /></svg
          ><svg
            v-if="doc.rate >= 3"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            /></svg
          ><svg
            v-if="doc.rate >= 4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            />
          </svg>
          <svg
            v-if="doc.rate >= 5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            />
          </svg>
        </div>
        <a href="#check-availability"
          ><button class="primaryButton">Booking Now</button></a
        >
      </div>
    </div>

    <div class="row container">
      <h4 class="text-center ms-5">Location</h4>

      <p v-if="doc.location === 'Giza'" class="text-center ms-5">
        City Clinic, 11 Nadi Al Saeed, Ad Doqi, {{ doc.location }} Governorate
      </p>
      <p v-if="doc.location === 'Alexandria'" class="text-center ms-5">
        E.S Clinic, 29 Taha Hamdi, Sidi Gaber, Sidi Gaber District,
        {{ doc.location }} Governorate
      </p>
      <p v-if="doc.location === 'Cairo'" class="text-center ms-5">
        Care Clinic, 27 Oraby, Al Azbakeya, {{ doc.location }} Governorate
      </p>
      <p v-if="doc.location === 'Mansoura'" class="text-center ms-5">
        Biondi Clinic, st El Amro, 2 Tower, Samia El Gamal, Mansoura Qism 2, El
        Mansoura 1, Dakahlia Governorate
      </p>
      <p v-if="doc.location === 'Behira'" class="text-center ms-5">
        InShape Clinic Damanhour, Star Palace Tower, Abd El-Salam El-Shazly,
        Shobra, Damanhour, Beheira Governorate
      </p>
      <p v-if="doc.location === 'Luxor'" class="text-center ms-5">
        Luxor Medical Center (LMC), Luxor City, Luxor, Luxor Governorate
      </p>
      <p v-if="doc.location === 'Aswan'" class="text-center ms-5">
        Diamond clinic, Al Matar, Sheyakhah Thalethah, Aswan 1, Aswan
        Governorate
      </p>
      <p v-if="doc.location === 'Banha'" class="text-center ms-5">
        Life clinic, F58Q+599, Qism Banha, Banha, Al Qalyubia Governorate
      </p>
      <p v-if="doc.location === 'Sinai'" class="text-center ms-5">
        The Clinic, Block 167/1 First Section, Off 90 Street, Health Care City,
        {{ doc.location }} Governorate
      </p>
      <p v-if="doc.location === 'Taba'" class="text-center ms-5">
        The Clinic, Block 167/1 First Section, Off 90 Street, Health Care City,
        {{ doc.location }} Governorate
      </p>
      <p v-if="doc.location === 'Swiss'" class="text-center ms-5">
        The Clinic, Block 167/1 First Section, Off 90 Street, Health Care City,
        {{ doc.location }} Governorate
      </p>
      <p v-if="doc.location === 'Tanta'" class="text-center ms-5">
        Medic8, حسان بن ثابت, Tanta Qism 2, Tanta, Gharbia Governorate
      </p>
      <iframe
        v-if="doc.location === 'Giza'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 giza"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110521.12790774622!2d31.087325219837123!3d30.043018338299383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458413355a3a7bd%3A0x87e45824aa5cf64!2sCity%20Clinic!5e0!3m2!1sen!2seg!4v1698367496417!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Alexandria'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 alex"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78184.22848220418!2d30.072505040207574!3d31.181673932917978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c501ffe71b31%3A0x8b92357f3ff89504!2sE.S%20Clinic!5e0!3m2!1sar!2seg!4v1698449292744!5m2!1sar!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Cairo'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 cairo"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.385276925226!2d31.217007218116628!3d30.059469157934156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584094f5f75bdd%3A0xacfa56fd581967b9!2sCare%20Clinic!5e0!3m2!1sen!2seg!4v1698797072869!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Mansoura'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 mansoura"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.316848746996!2d31.341382527422734!3d31.041366489414578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79df2f05d0e39%3A0x56a83e158414390d!2sBiondi%20Clinic!5e0!3m2!1sen!2seg!4v1698797407474!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Behira'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 behira"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438673.20593005384!2d30.160896490146033!3d30.79886447169161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f66b931a9d83e1%3A0x27214b66dd11c480!2sInShape%20Clinic%20Damanhour!5e0!3m2!1sen!2seg!4v1698797837944!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Luxor'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 luxor"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57524.5901768512!2d32.61800978005592!3d25.694923763645537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14491431db11038f%3A0x19cbc9b03997c4a4!2sLuxor%20Medical%20Center%20(LMC)!5e0!3m2!1sen!2seg!4v1698798182286!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Aswan'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 aswan"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29138.044600865007!2d32.87941696907982!3d24.09250614097903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436651bd8835711%3A0x5b99759c9a02990c!2sDiamond%20clinic!5e0!3m2!1sen!2seg!4v1698798476299!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Banha'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 banha"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27513.56058623694!2d31.16769331244116!3d30.458912338914597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7dffc5f039bb7%3A0xbf1fc1ec312033ba!2sLife%20clinic!5e0!3m2!1sen!2seg!4v1698798677746!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Tanta'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 tanta"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27418.73806092042!2d30.978628213227648!3d30.79303490771324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9dd2dfb5c67%3A0x79ea86ef60102ac7!2sMedic8!5e0!3m2!1sen!2seg!4v1698799301281!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Sini'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 sinai"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888255.7973191955!2d30.483804112911056!3d29.581899507846668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd7a690138b%3A0xb0c7a3b57b2ed123!2sThe%20Clinic!5e0!3m2!1sen!2seg!4v1698799013992!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        v-if="doc.location === 'Siwa'"
        class="google-map mt-2 mx-auto text-center me-5 mb-5 sinai"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888255.7973191955!2d30.483804112911056!3d29.581899507846668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd7a690138b%3A0xb0c7a3b57b2ed123!2sThe%20Clinic!5e0!3m2!1sen!2seg!4v1698799013992!5m2!1sen!2seg"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <hr />
    <div class="row container mb-5 d-flex" id="check-availability">
      <!-- <h3 class="text-center">Booking</h3> -->
      <div class="time col-lg-3 col-md-6 col-sm-12 mb-5">
        <!-- <select name="year" id="year">
          <option>year</option>
          <option value="2022" disabled>2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <select name="year" id="year">
          <option>month</option>
          <option value="1" disabled>1</option>
          <option value="2" disabled>2</option>
          <option value="3" disabled>3</option>
          <option value="4" disabled>4</option>
          <option value="5" disabled>5</option>
          <option value="6" disabled>6</option>
          <option value="7" disabled>7</option>
          <option value="8" disabled>8</option>
          <option value="9" disabled>9</option>
          <option value="10" disabled>10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select name="day" id="day">
          day
          <option>day</option>
          <option value="1" disabled>1</option>
          <option value="2" disabled>2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" disabled>5</option>
          <option value="6">6</option>
          <option value="7" disabled>7</option>
          <option value="8">8</option>
          <option value="9" disabled>9</option>
          <option value="10" disabled>10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15" disabled>15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19" disabled>19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22" disabled>22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28" disabled>28</option>
          <option value="29">29</option>
          <option value="30">30</option>
        </select>
        <select>
          <option value="">Time</option>
          <option value="">2:30PM</option>
          <option value="" disabled>4:00PM</option>
          <option value="">6:00PM</option>
          <option value="">9:30PM</option>
          <option value="" disabled>11:00PM</option>
          <option value="">11:50PM</option>
        </select> -->
      </div>

      <div class="col-lg-8 col-md-6 col-sm-12" v-if="user.role == 'user'">
        <form action="" @submit.prevent="handelSubmit">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Patient Name"
              v-model="formValuse.patient"
            />
            <label for="floatingInput">Patient Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="doctor Name"
              v-model="formValuse.doctor"
            />
            <label for="floatingInput">Doctor Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Day"
              v-model="formValuse.day"
            />
            <label for="floatingInput">Day</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Date"
              v-model="formValuse.date"
            />
            <label for="floatingInput">Date</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Time"
              v-model="formValuse.time"
            />
            <label for="floatingInput">Time</label>
          </div>
          <button class="secondaryButton">Book</button>
        </form>
      </div>
      <div class="card  col-8 text-start h-auto"  v-if="user.role == 'doctor'">
        <h2 class="text-center">Apointment</h2>
              <div v-for="(apointment, index) in user.booking" :key='index'>
                <div class="d-flex gap-3"><h3>patient: </h3><p>{{apointment.patient}}</p></div>
                <div class="d-flex gap-3"><h3>Doctor: </h3><p>{{apointment.doctor}}</p></div>
                <div class="d-flex gap-3"><h3>Date: </h3><p>{{apointment.date}}</p></div>
                <div class="d-flex gap-3"><h3>Day: </h3><p>{{apointment.day}}</p></div>
                <div class="d-flex gap-3"><h3>Time: </h3><p>{{apointment.time}}</p></div>
                <button class="btn btn-danger" @click="deleteItem(index)">Delete</button>
                <hr>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DoctorDetaile",
  props: ["docname"],
  data() {
    return {
      id: "",
      doc: {},

      formValuse: {
        patient: "",
        doctor: "",
        date: "",
        day: "",
        time: "",
      },
      hagz: [],
      user: {},
    };
  },
  created() {
    this.getDoctorById();
    this.user = JSON.parse(localStorage.getItem("user"));
    this.formValuse.patient = this.user.userName;
  },
  methods: {
    getDoctorById() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/allDoctors/${this.id}`)
        .then((res) => {
          this.doc = res.data;
          this.formValuse.doctor = res.data.name;
        })
        .catch((err) => console.log(err));
    },
    deleteItem(index){
          this.user.booking.splice(index,1);
          localStorage.setItem('user',JSON.stringify(this.user));
          axios.put(`http://localhost:3000/users/${this.user.id}`,this.user).then((res)=>{
            console.log(res.data);
          }).catch(err=>console.log(err))
        },
    handelSubmit() {
      this.user.booking.push(this.formValuse);
      localStorage.setItem('user',JSON.stringify(this.user))
      this.doc.booking.push(this.formValuse);
      axios
        .put(`http://localhost:3000/allDoctors/${this.doc.id}`, this.doc)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      axios
        .put(`http://localhost:3000/users/${this.user.id}`, this.user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        alert('Booking Successfully')
          this.$router.push('/')
      // this.$router.push("`/doctors/doctordetails/${doc.id}`")
    },
    computed: {
      handelSearch() {
        return this.hagz.filter((elem) =>
          elem.patient
            .toLowerCase()
            .includes(this.formValuse.patient.toLowerCase())
        );
      },
    },
  },
};
</script>

<style scoped>
img {
  width: 70%;
  height: 70%;
  max-width: 100%;
  padding-left: 15px;
  -webkit-transition: all 0.9s ease;
  -moz-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  -ms-transition: all 0.9s ease;
}

svg {
  color: #c59b08;
}
.card1 {
  background-color: #f2e9c9;
  margin-top: 100px !important;
  border-radius: 100px;
}

.days {
  background-color: #f2e9c9;
  /* margin-left: 100px !important; */
}
.primaryButton {
  border: rgba(43, 52, 103, 1) 3px;
  border-radius: 24px;
  color: white;
  background-color: rgba(43, 52, 103, 1);
  padding: 10px;
  margin: 10px;
}
.secondaryButton {
  border: rgba(72, 169, 166, 1) solid 3px;
  border-radius: 20px;
  padding-left: 21px;
  padding-right: 21px;

  color: rgba(69, 69, 69, 1);
  background-color: transparent;
  font-size: 24px;
  margin: 10px;
}
.google-map {
  width: 80%;
}
.spe {
  color: #48a9a6;
}
h2 {
  color: #2b3467;
}
ul {
  list-style-position: inside;
}

.card {
      border-radius: 20px;
      background-color: rgba(242, 233, 201, 1);
      padding: 50px;
     
    }
    h3,h2{
      color:#1C315E;
    }
    p{
       font-size: 25px;
    }
</style>
