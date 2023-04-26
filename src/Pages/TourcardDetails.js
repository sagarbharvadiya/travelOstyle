// import React, { useEffect, useState } from "react";
// import detailImg from "../images/detailspageimg1.jpg";
// import placeImg from "../images/londonbridge.jpg";
// import "../css/pages.css";
// import { useParams } from "react-router-dom";
// import client from "../Client";

// const TourcardDetails = () => {
//   const { slug } = useParams();
//   const [entry, setEntry] = useState(null);
//   useEffect(() => {
//     const fetchdetailsPage = async () => {
//       try {
//         const response = await client.getEntries({
//           content_type: "package",
//           "fields.slug": slug,
//         });
//         if (response.items.length) {
//           setEntry(response.items);
//           console.log(response.items);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchdetailsPage();
//   }, [slug]);

//   return (
//     <>
//       <div className="page-container" tabIndex={0}>
//         <div className="tour-details-container">
//           <div className="card-details">
//             <h1>COSTA RICA ITINERARY (9N/10D)</h1>
//             <img
//               className="content-img"
//               src={detailImg}
//               alt="man-standing-besides-church"
//             />
//             <h2 className="content-heading">About Itinerary</h2>
//             <p className="content-info">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout. The
//               point of using Lorem Ipsum is that it has a more-or-less normal
//               distribution of letters, as opposed to using 'Content here,
//               content here', making it look like readable English. Many desktop
//               publishing packages and web page editors now use Lorem Ipsum as
//               their default model text, and a search for 'lorem ipsum' will
//               uncover many web sites still in their infancy.
//             </p>
//             <button className="tour-book-btn">Book Now</button>
//             <button className="tour-query-btn">Submit Query</button>
//           </div>
//         </div>

//         <div className="tour-map">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.288961634382!2d-0.0903025740590879!3d51.50791446066668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035159bb13c5%3A0xa61e28267c3563ac!2sLondon%20Bridge!5e0!3m2!1sen!2sin!4v1681972116941!5m2!1sen!2sin"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//             title="london bridge"
//           ></iframe>
//         </div>

//         <div className="timeline-container">
//           <div className="timeline-div">
//             <div className="timeline-left-div">
//               <div className="sticky-top">
//                 <span className="day-details-btn">Day 1</span>
//               </div>
//             </div>
//             <div className="timeline-right-div">
//               <div className="day-details-box">
//                 <div className="day-info">
//                   <h4>Arrival in London</h4>
//                   <div className="tour-details-star-folder">
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                   </div>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout. The point of using Lorem Ipsum is that it has a
//                     more-or-less normal distribution of letters, as opposed to
//                     using, making it look like readable English. Many desktop
//                     publishing packages and web page editors now use Lorem Ipsum
//                     as their default model.
//                   </p>
//                   <ul>
//                     <li>Breakfast</li>
//                     <li>Dinner</li>
//                   </ul>
//                 </div>
//                 <div className="place-img">
//                   <img src={placeImg} alt="London-bridge" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="timeline-div">
//             <div className="timeline-left-div">
//               <div className="sticky-top">
//                 <span className="day-details-btn">Day 2</span>
//               </div>
//             </div>
//             <div className="timeline-right-div">
//               <div className="day-details-box">
//                 <div className="day-info">
//                   <h4>Arrival in London</h4>
//                   <div className="tour-details-star-folder">
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                     <a href="#"><i class="fa-solid fa-star"></i></a>
//                   </div>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout. The point of using Lorem Ipsum is that it has a
//                     more-or-less normal distribution of letters, as opposed to
//                     using, making it look like readable English. Many desktop
//                     publishing packages and web page editors now use Lorem Ipsum
//                     as their default model.
//                   </p>
//                   <ul>
//                     <li>Breakfast</li>
//                     <li>Dinner</li>
//                   </ul>
//                 </div>
//                 <div className="place-img">
//                   <img src={placeImg} alt="London-bridge" />
//                 </div>
//               </div>
//             </div>
//           </div>

//         <div>
//           {entry &&
//             entry.map((info) => {
//               const { packageTitle, packageStartingPrice, itineraries } =
//                 info.fields;
//               const id = info.fields.sys;
//               return (
//                 <>
//                   <div className="tour-details-container" key={id}>
//                     <div className="card-details">
//                       <h1>{packageTitle}</h1>
//                       <span>{packageStartingPrice}</span>
//                       <img
//                         className="content-img"
//                         src={detailImg}
//                         alt="man-standing-besides-church"
//                       />
//                       <h2 className="content-heading">About Itinerary</h2>
//                       <p className="content-info">
//                         It is a long established fact that a reader will be
//                         distracted by the readable content of a page when
//                         looking at its layout. The point of using Lorem Ipsum is
//                         that it has a more-or-less normal distribution of
//                         letters, as opposed to using 'Content here, content
//                         here', making it look like readable English. Many
//                         desktop publishing packages and web page editors now use
//                         Lorem Ipsum as their default model text, and a search
//                         for 'lorem ipsum' will uncover many web sites still in
//                         their infancy.
//                       </p>
//                       <button className="tour-book-btn">Book Now</button>
//                       <button className="tour-query-btn">Submit Query</button>
//                     </div>
//                   </div>
//                   <div className="timeline-container">
//                     {itineraries &&
//                       itineraries.map((itenary, index) => {
//                         const { title, localLunch, description } =
//                           itenary.fields;
//                         const meal = localLunch ? (
//                           <li>Local Lunch</li>
//                         ) : (
//                           <>
//                             <li>Breakfast</li>
//                             <li>Dinner</li>
//                           </>
//                         );
//                         //code for extracting name of place
//                         const titleParts = title.split(":");
//                         const placeName =
//                           titleParts.length > 1 ? titleParts[1].trim() : "";

//                         //code for extracting day
//                         const dayNum =
//                           titleParts.length > 1 ? titleParts[0].trim() : "";
//                         return (
//                           <div className="timeline-div" key={index}>
//                             <div className="timeline-left-div">
//                               <div className="sticky-top">
//                                 <span className="day-details-btn">
//                                   {dayNum}
//                                 </span>
//                               </div>
//                             </div>
//                             <div className="timeline-right-div">
//                               <div className="day-details-box">
//                                 <div className="day-info">
//                                   <h4>{placeName}</h4>
//                                   {description.content.map((desc, index1) => {
//                                     return <p>{desc.content[0].value}</p>;
//                                   })}
//                                   <ul>{meal}</ul>
//                                 </div>
//                                 <div className="place-img">
//                                   <img src={placeImg} alt="London-bridge" />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                   </div>
//                 </>
//               );
//             })}

//         </div>
//       </div>
//     </>
//   )

// export default TourcardDetails;





import React, { useEffect, useState } from "react";
import detailImg from "../images/detailspageimg1.jpg";
import placeImg from "../images/londonbridge.jpg";
import "../css/pages.css";
import { useParams } from "react-router-dom";
import client from "../Client";

const TourcardDetails = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);
  useEffect(() => {
    const fetchdetailsPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "package",
          "fields.slug": slug,
        });
        if (response.items.length) {
          setEntry(response.items);
          console.log(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchdetailsPage();
  }, [slug]);

  return (
    <>
      <div className="page-container" tabIndex={0}>
        <div className="tour-details-container">
          <div className="card-details">
            <h1>COSTA RICA ITINERARY (9N/10D)</h1>
            <img
              className="content-img"
              src={detailImg}
              alt="man-standing-besides-church"
            />
            <h2 className="content-heading">About Itinerary</h2>
            <p className="content-info">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <button className="tour-book-btn">Book Now</button>
            <button className="tour-query-btn">Submit Query</button>
          </div>
        </div>

        <div className="tour-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.288961634382!2d-0.0903025740590879!3d51.50791446066668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035159bb13c5%3A0xa61e28267c3563ac!2sLondon%20Bridge!5e0!3m2!1sen!2sin!4v1681972116941!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="london bridge"
          ></iframe>
        </div>

        <div className="timeline-container">
          <div className="timeline-div">
            <div className="timeline-left-div">
              <div className="sticky-top">
                <span className="day-details-btn">Day 1</span>
              </div>
            </div>
            <div className="timeline-right-div">
              <div className="day-details-box">
                <div className="day-info">
                  <h4>Arrival in London</h4>
                  <div className="tour-details-star-folder">
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using, making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model.
                  </p>
                  <ul>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </div>
                <div className="place-img">
                  <img src={placeImg} alt="London-bridge" />
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-div">
            <div className="timeline-left-div">
              <div className="sticky-top">
                <span className="day-details-btn">Day 2</span>
              </div>
            </div>
            <div className="timeline-right-div">
              <div className="day-details-box">
                <div className="day-info">
                  <h4>Arrival in London</h4>
                  <div className="tour-details-star-folder">
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                    <a href="#"><i class="fa-solid fa-star"></i></a>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using, making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model.
                  </p>
                  <ul>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </div>
                <div className="place-img">
                  <img src={placeImg} alt="London-bridge" />
                </div>
              </div>
            </div>
          </div>

          <div>
          {entry &&
            entry.map((info) => {
              const { packageTitle, packageStartingPrice, itineraries } =
                info.fields;
              const id = info.fields.sys;
              return (
                <>
                  <div className="tour-details-container" key={id}>
                    <div className="card-details">
                      <h1>{packageTitle}</h1>
                      <span>{packageStartingPrice}</span>
                      <img
                        className="content-img"
                        src={detailImg}
                        alt="man-standing-besides-church"
                      />
                      <h2 className="content-heading">About Itinerary</h2>
                      <p className="content-info">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
                      </p>
                      <button className="tour-book-btn">Book Now</button>
                      <button className="tour-query-btn">Submit Query</button>
                    </div>
                  </div>
                  <div className="timeline-container">
                    {itineraries &&
                      itineraries.map((itenary, index) => {
                        const { title, localLunch, description } =
                          itenary.fields;
                        const meal = localLunch ? (
                          <li>Local Lunch</li>
                        ) : (
                          <>
                            <li>Breakfast</li>
                            <li>Dinner</li>
                          </>
                        );
                        //code for extracting name of place
                        const titleParts = title.split(":");
                        const placeName =
                          titleParts.length > 1 ? titleParts[1].trim() : "";

                        //code for extracting day
                        const dayNum =
                          titleParts.length > 1 ? titleParts[0].trim() : "";
                        return (
                          <div className="timeline-div" key={index}>
                            <div className="timeline-left-div">
                              <div className="sticky-top">
                                <span className="day-details-btn">
                                  {dayNum}
                                </span>
                              </div>
                            </div>
                            <div className="timeline-right-div">
                              <div className="day-details-box">
                                <div className="day-info">
                                  <h4>{placeName}</h4>
                                  {description.content.map((desc, index1) => {
                                    return <p>{desc.content[0].value}</p>;
                                  })}
                                  <ul>{meal}</ul>
                                </div>
                                <div className="place-img">
                                  <img src={placeImg} alt="London-bridge" />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default TourcardDetails;