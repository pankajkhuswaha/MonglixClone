import SecurityIcon from '@mui/icons-material/Security';
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { useSelector } from 'react-redux';
const Dummyfeature = () => {
    const site = useSelector((st) => st.site.data);

  const data = [
    {
      icon: (
        <RocketLaunchIcon
          style={{ fontSize: "34px", color: site.primarybg, marginBottom: "2px" }}
        />
      ),
      head: "Free Delivery",
      para: " For All Orders",
    },
    {
      icon: (
        <RotateLeftIcon
          style={{ fontSize: "44px", color: site.primarybg, marginBottom: "2px" }}
        />
      ),
      head: "90 Days Return",
      para: "If goods have problems",
    },
    {
      icon: (
        <SecurityIcon
          style={{ fontSize: "34px", color: site.primarybg, marginBottom: "2px" }}
        />
      ),
      head: "Secure Payment",
      para: "100% secure payment",
    },
    {
      icon: (
        <RocketLaunchIcon
          style={{ fontSize: "34px", color: site.primarybg, marginBottom: "2px" }}
        />
      ),
      head: "24/7 Support",
      para: " Dedicated support",
    },
    {
      icon: (
        <CardGiftcardIcon
          style={{ fontSize: "34px", color: site.primarybg, marginBottom: "2px" }}
        />
      ),
      head: "Gift Service",
      para: "Support gift service",
    },
  ];
  return (
    <>
      <div style={{borderColor:'gray'}} className="border rounded-md mt-2 gap-7 md:gap-6 p-4 flex flex-row justify-between flex-wrap">
        {data.map((ele, id) => {
        return(
            <div key={id} className="pr-[55px] md:flex-none flex gap-3 items-center ">
            {ele.icon}
            <div className='flex flex-col'>

            <p className="md:text-2xl text-xl font-bold text-gray-600">{ele.head}</p>
            <p className="text-sm  text-gray-600"> {ele.para}</p>
            </div>
          </div>
        )  
      
        })}
      </div>
    </>
  );
};

export default Dummyfeature;
