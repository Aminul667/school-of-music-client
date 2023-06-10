import useClasses from "../../../hooks/useClasses";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const PopularClasses = () => {
  const [classes] = useClasses();
  console.log(classes);

  return (
    <div>
      <h2 className="titlePrimary">Popular Classes</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 30,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {classes.map((classItem) => (
          <SwiperSlide key={classItem._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={classItem.photo} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{classItem.name}</h2>
                <p>{classItem.Instructor}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularClasses;
