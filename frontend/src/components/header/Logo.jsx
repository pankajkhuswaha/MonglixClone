import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Logo = () => {
    const site = useSelector((st) => st.site.data);

    return (
        <>{site.logo ? (
            <Link to={"/"}>
                <img
                    className="w-[100px] h-[50px] md:w-[120px] md:h-[60px]"
                    src={site.logo}
                    alt="logo"
                />
            </Link>
        ) : (
            <Link
                to={"/"}
                style={{
                    color: site.primarybg,
                    fontWeight: "bold",
                    fontSize: "30px",
                }}
            >
                {site.name}
            </Link>
        )}</>
    )
}

export default Logo