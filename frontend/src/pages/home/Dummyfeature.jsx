import SecurityIcon from "@mui/icons-material/Security";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
// import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { useSelector } from "react-redux";
const Dummyfeature = () => {
  const site = useSelector((st) => st.site.data);

  const data = [
    {
      icon: (
        <RocketLaunchIcon
          style={{
            fontSize: "34px",
            color: site.primarybg,
            marginBottom: "2px",
          }}
        />
      ),
      head: "Free Delivery",
      para: " For All Orders",
    },

    {
      icon: (
        <SecurityIcon
          style={{
            fontSize: "34px",
            color: site.primarybg,
            marginBottom: "2px",
          }}
        />
      ),
      head: "Secure Payment",
      para: "100% secure payment",
    },
    {
      icon: (
        <RocketLaunchIcon
          style={{
            fontSize: "34px",
            color: site.primarybg,
            marginBottom: "2px",
          }}
        />
      ),
      head: "24/7 Support",
      para: " Dedicated support",
    },
    {
      icon: (
        <CardGiftcardIcon
          style={{
            fontSize: "34px",
            color: site.primarybg,
            marginBottom: "2px",
          }}
        />
      ),
      head: "Gift Service",
      para: "Support gift service",
    },
  ];
  return (
    <>
      <br />
      <div
        className="row gap-2 box-border justify-center"
      >
        {data.map((ele, id) => {
          return (
            <div
              key={id}
              className="w-full sm:w-[48%] lg:w-[23%] px-4 m-1 border p-2 rounded-md md:flex-none flex md:gap-3 gap-1 items-center "
            >
              {ele.icon}
              <div className="flex w-full flex-col">
                <p className="md:text-2xl text-sm font-bold text-gray-600">
                  {ele.head}
                </p>
                <p className="text-sm  text-gray-600"> {ele.para}</p>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </>
  );
};

export default Dummyfeature;
