import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import ReviewForm from './ReviewForm';
// import Review from './Review';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   margin-left: auto;
//   margin-right: auto;
// `;

// const Column = styled.div`
//   background: #fff;
//   max-width: 50%;
//   width: 50%;
//   float: left;
//   height: 100vh;
//   overflow-x: scroll;
//   overflow-y: scroll;
//   overflow: scroll;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   &:last-child {
//     background: black;
//     border-top: 1px solid rgba(255, 255, 255, 0.5);
//   }
// `;

// const Main = styled.div`
//   padding-left: 60px;
// `;

const Airline = (props) => {
  //   const [airline, setAirline] = useState({});
  //   const [review, setReview] = useState({});
  //   const [loaded, setLoaded] = useState(false);

  //   useEffect(() => {
  //     const slug = props.match.params.slug;
  //     const url = `/api/v1/airlines/${slug}`;

  //     axios
  //       .get(url)
  //       .then((resp) => {
  //         setAirline(resp.data);
  //         setLoaded(true);
  //         console.log(resp.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  //   const handleChange = (e) => {
  //     e.preventDefault();
  //     setReview(Object.assign({ ...review, [e.target.name]: e.target.value }));
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const csrfToken = document.querySelector('[name=csrf-token]').content;
  //     axios.defaults.headers.common['X_CSRF_TOKEN'] = csrfToken;

  //     const airline_id = airline.data.id;
  //     axios
  //       .post('/api/v1/reviews', { review, airline_id })
  //       .then((resp) => {
  //         console.log(resp.data.data);
  //         const included = [...airline.included, resp.data.data];
  //         setAirline({ ...airline, included });
  //         setReview({ title: '', description: '', score: 0 });
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   const setRating = (score, e) => {
  //     e.preventDefault();
  //     setReview({ ...review, score });
  //   };

  //   // Again, this basically says, wait until the everyting is loaded to begin mapping (looping over the list of reviews)
  //   let reviews;
  //   if (loaded && airline.included) {
  //     reviews = airline.included.map((item, index) => {
  //       return <Review key={index} attributes={item.attributes} />;
  //     });
  //   }

  return (
    // <Wrapper>
    //   {loaded && (
    //     <Fragment>
    //       <Column>
    //         <Main>
    //           <Header
    //             attributes={airline.data.attributes}
    //             reviews={airline.included}
    //           />
    //           {reviews}
    //         </Main>
    //       </Column>
    //       <Column>
    //         <ReviewForm
    //           handleChange={handleChange}
    //           handleSubmit={handleSubmit}
    //           attributes={airline.data.attributes}
    //           setRating={setRating}
    //           review={review}
    //         />
    //       </Column>
    //     </Fragment>
    //   )}
    // </Wrapper>
    <div>This is the airline show view</div>
  );
};

export default Airline;
