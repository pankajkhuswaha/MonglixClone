import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  const [SingleProductData, setSingleProductData] = useState(
    data || localStorage.getItem("SingleProductData")
  );

  useEffect(() => {
    if (SingleProductData) {
      localStorage.setItem(
        "SingleProductData",
        JSON.stringify(SingleProductData)
      );
    }
  }, [SingleProductData]);

  return (
    <div>
      {SingleProductData ? (
        <Stack display={"flex"} flexDirection={"row"}>
          <Stack flex={8}>
            <h2>{SingleProductData.name}</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            perspiciatis ipsum praesentium saepe voluptatibus minus. Praesentium
            incidunt dolor cum eveniet quam asperiores totam, aspernatur error
            voluptate magni commodi porro at atque ut repellat obcaecati, id
            laudantium doloremque architecto officiis in explicabo aliquam
            provident! Rerum error accusantium, vero molestiae adipisci natus
            consectetur? Laborum ab itaque quo ducimus reiciendis obcaecati
            tempore nam quod blanditiis aut deserunt excepturi magni, cupiditate
            dicta perferendis a incidunt porro ipsam iste saepe ipsum, ea cumque
            numquam. Quia molestias totam dolorum inventore quos reprehenderit
            officiis eligendi provident ex accusamus dignissimos repudiandae
            facilis magnam consequuntur ipsam, quibusdam eum at pariatur culpa
            placeat deleniti doloremque voluptatibus quis? Cupiditate itaque
            atque porro possimus hic explicabo voluptas ea reprehenderit fugiat
            a. Beatae inventore possimus sint nostrum neque, nihil, molestias
            ipsa consequatur, in at delectus tenetur recusandae quia fugiat
            minus laudantium aliquam minima pariatur ea totam asperiores dolorem
            obcaecati qui quisquam. Fugiat incidunt sapiente dignissimos quasi,
            accusamus aliquid quaerat officiis nam voluptas labore iure
            assumenda unde illo earum placeat amet nisi molestias laboriosam
            rem, magni tempore nihil voluptate nesciunt quidem? Officiis,
            aspernatur libero doloremque repudiandae iste quae impedit fugiat.
            Enim quis accusamus cum obcaecati minima. Modi, et assumenda labore
            rem quia ad! Quo, odio. Sint, corrupti eius? Animi modi distinctio
            vero aut earum similique excepturi cum velit possimus asperiores!
            Deleniti autem, culpa incidunt reiciendis ea amet possimus hic,
            molestiae corporis eligendi quae! Aut, voluptate earum esse quia
            dignissimos ea dolore expedita voluptatum eos temporibus dolor
            quibusdam saepe est, eius rem incidunt obcaecati, perferendis
            assumenda voluptatem? Quibusdam totam impedit quo soluta natus eum
            officiis adipisci reiciendis enim blanditiis. Iusto ipsum asperiores
            ducimus corrupti accusamus magni eaque laboriosam accusantium
            placeat? Facere quia nobis incidunt, qui temporibus nihil, inventore
            unde optio eius deserunt consequatur ea error tempora sunt deleniti
            consectetur rerum est quas, eum voluptates necessitatibus
            perspiciatis totam odio voluptatum! Nulla aliquid officiis cum enim
            doloribus in nisi veniam quis laudantium, odio a explicabo nam est
            suscipit, quod voluptate similique. Amet ducimus obcaecati, tenetur
            ea possimus, consequuntur ut ad debitis harum quos accusamus nam
            nisi hic illo. Sunt minus minima ullam veniam, officiis provident,
            ipsam ipsum, eius natus deleniti nostrum sapiente quos totam autem
            blanditiis sint accusantium voluptatum? Fugiat minus totam
            accusamus, fugit unde ipsam laborum! Officiis eos ad aliquam soluta,
            eum distinctio ratione incidunt cumque dolor nemo, autem quisquam
            repellat delectus ullam repudiandae necessitatibus? Iure repellat
            placeat architecto atque illo quibusdam saepe, itaque, ratione
            soluta quidem dolore facere provident sint tenetur veniam numquam
            id. Pariatur blanditiis dignissimos magni perspiciatis quaerat
            officia explicabo quod saepe sed beatae! Vitae, nesciunt? Impedit
            ipsum id consequuntur laudantium minima praesentium, explicabo odio.
            Dolore, quae fugiat ab veritatis accusantium expedita ea quo quaerat
            nobis quos facilis. Architecto sed ab dolorum, aliquam iure tenetur
            sequi est et eos esse praesentium placeat ullam, fugiat corrupti
            numquam exercitationem? Corrupti laboriosam quos dolorem ipsa illo
            nisi rerum aspernatur, id aliquam sit velit! Ex aut accusamus fuga.
            Quidem sunt consequuntur, libero deserunt eaque ipsum sed doloribus
            laboriosam veritatis, in, accusamus maiores esse similique error quo
            facilis.
          </Stack>
          <Stack
            position={"sticky"}
            flex={2}
            p={2}
            sx={{ boxShadow: "0 2px 7px #dfdfdf" }}
          >
            <p>Price: {SingleProductData.price}</p>
          </Stack>
        </Stack>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetail;
