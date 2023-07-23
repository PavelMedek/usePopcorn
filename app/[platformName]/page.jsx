"use client";

import { useRouter } from "next/navigation";

import { platforms } from "@/lib/data";
import { useState } from "react";
import MobileNavBar from "@/components/Sidebar/MobileNavBar";

const Page = ({ params }) => {
  const name = params.platformName;

  const platform = platforms.find((el) => el.name === params.platformName);

  if (!platform) {
    return <div>No platform</div>;
  }

  return (
    <>
      <p>{name}</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti
      enim quo vitae dicta inventore cum sequi aperiam, sed totam quibusdam odio
      cupiditate eos vel magnam. Eius soluta veniam placeat repellat, amet
      beatae qui quo officiis repellendus reprehenderit quibusdam voluptatum
      accusamus pariatur molestias nam enim aperiam nihil dolorum quia ut
      corrupti asperiores cumque consectetur. Rerum doloremque repellendus
      dolores fugiat! Laborum ipsum accusantium pariatur minima quia sunt, ut
      magnam similique vel! Facere quae accusamus officia explicabo porro
      distinctio numquam odio minima ea, quasi delectus. Nulla nemo quae
      temporibus tempora beatae, eligendi maiores aperiam culpa ex nesciunt
      provident consectetur repellat adipisci pariatur ad in commodi nihil quam
      fugit cum ut quas quaerat ab. Asperiores id repudiandae doloremque. Eum,
      libero alias odio veritatis ipsum voluptate natus corporis labore cum
      ratione aliquid in autem, molestiae praesentium. Fugit, nihil libero, quis
      mollitia doloribus soluta quaerat non quod consequuntur aliquam, beatae
      expedita? Est, incidunt! Voluptas eligendi magni tempora eos optio animi
      dignissimos? Nihil ea odit autem perferendis eaque, commodi reprehenderit
      corporis, sequi praesentium fuga dicta repudiandae accusantium placeat
      ipsa omnis cupiditate optio velit consequuntur dolores eligendi! Amet
      eveniet delectus quibusdam quasi. Facilis quae veniam dicta, maxime
      blanditiis ex molestias at quas, culpa explicabo dolorem ea minima
      exercitationem quod. Reprehenderit eos eligendi qui ducimus expedita odit
      voluptate soluta et esse doloribus dolorum similique beatae iusto,
      accusantium odio officia, impedit, labore in architecto a? Veritatis
      aliquam et facere, illum eaque aperiam dolor dolorum quibusdam assumenda
      consequuntur fuga nulla debitis blanditiis iste odit, sequi dicta ducimus
      corrupti. Reprehenderit vel dolore optio cupiditate commodi provident
      reiciendis quae incidunt. Fuga, vero. Illo, quisquam voluptatibus facere
      beatae sequi neque pariatur molestias expedita assumenda optio eius
      nostrum quas quo enim dolorem error a praesentium saepe aspernatur ipsa,
      deleniti numquam aliquam. Quam porro enim molestiae. Accusamus non
      suscipit recusandae in, vitae, quisquam consectetur assumenda unde
      voluptatibus omnis, repellat ipsam laudantium id? A illo perspiciatis
      delectus ab explicabo sequi? Deserunt unde quo, iure facere doloremque
      quam aut beatae aliquam consequuntur iste perspiciatis delectus earum!
      Tempora impedit dolores quidem aliquid assumenda. Rem voluptatem provident
      enim alias animi officia deleniti debitis eius quidem eum distinctio
      placeat libero iste vel illum excepturi veniam fugit nisi at voluptas
      perspiciatis, dolores delectus laborum nulla. Vel earum quis itaque
      corrupti ex maxime minus nulla inventore iste? Voluptatibus veniam eaque
      error! Esse facilis minima minus sed rem expedita porro praesentium
      repudiandae cum magnam nam, doloribus sit. Velit alias, nisi, recusandae
      optio totam ipsam praesentium facere sunt eaque similique dolores debitis
      fuga dicta quasi nostrum officia delectus, ipsum consequatur. Et, veniam
      consequuntur accusantium quisquam quaerat asperiores iure nemo est in
      esse, neque quas. Officia, a reprehenderit. Nemo enim ipsa harum adipisci
      omnis, consectetur facere illo fuga odio reprehenderit vel nisi rem sed
      ratione explicabo. Neque exercitationem enim corporis, nihil autem fugiat
      quisquam earum sapiente harum et obcaecati ab quas, in omnis deserunt.
      Corporis laboriosam nisi alias! Tempora corporis doloribus eos eaque ipsam
      quod veniam maiores iste sit sed. Earum, molestias animi veritatis itaque
      illum, rerum sunt iste magni ad cum id atque aut vel dignissimos?
      Temporibus ratione repellendus sunt quibusdam pariatur vel provident ipsum
      voluptatum dolore magnam placeat veniam et, similique aliquid? Maiores
      maxime facere officia dolorem totam nam suscipit harum, reprehenderit, ex
      in nesciunt quos aut. Tempora, aperiam aspernatur. Ipsam iusto, quidem,
      laborum recusandae inventore voluptas ut dolore blanditiis ratione
      adipisci consectetur explicabo facere suscipit dolorum facilis. Minima
      doloremque officia eligendi numquam animi praesentium nihil illum itaque
      suscipit voluptatibus, incidunt aut odit esse iste quibusdam accusantium
      obcaecati molestiae debitis dolores facilis ipsam optio ad. Magnam hic est
      praesentium excepturi id quia fugiat eaque numquam ad optio perferendis
      eligendi dolor, voluptatibus molestiae facere. Quas, quod magnam
      cupiditate sunt rerum facilis inventore, ipsam officia nostrum blanditiis
      est sint fugit alias nobis quo dicta optio explicabo aliquid labore
      accusantium? Alias, ipsam est. Dolor ratione quae, veritatis delectus
      dignissimos minus facere quibusdam, laboriosam, vero id ipsam ut saepe rem
      blanditiis? Quae reiciendis nemo necessitatibus architecto! Assumenda
      vitae quisquam nemo ex repellat repellendus rerum pariatur tenetur minus
      ipsam quaerat, fuga ipsum aspernatur earum quibusdam quas, ratione tempore
      provident laboriosam doloremque. Earum, voluptatem cum corporis ipsum
      aliquam fugiat molestiae velit possimus, rerum soluta excepturi eum
      laboriosam temporibus. Aut velit enim quo impedit esse perferendis! Atque
      accusamus, cupiditate necessitatibus saepe in beatae explicabo at
      consequatur odit quisquam enim minus placeat distinctio incidunt
      reprehenderit voluptates. Nemo, blanditiis alias temporibus laboriosam
      ipsa tempora hic error consequatur explicabo accusamus. Doloribus nobis
      quasi inventore magni. Tempora, quis? Iusto consequatur omnis, odio autem
      perferendis cum quo suscipit, mollitia sint officia quasi eligendi rerum
      corrupti minima ratione dolorem culpa. Nesciunt dolore consequuntur
      architecto ipsam vero ab rem ipsum autem adipisci? Deserunt ullam magni
      qui debitis eum voluptatum aperiam harum ex cumque? Culpa, ex consequatur
      deleniti numquam minima laudantium, ad odit, ipsum ipsam quidem facilis
      iusto dolorem facere ullam alias? Nemo dolorum consectetur dolore
      provident id tempore quam temporibus! Expedita magnam a illo! Pariatur
      dolore laudantium qui consequatur voluptatum dolorem? Exercitationem ullam
      doloribus quod deserunt in architecto cupiditate soluta, aliquam eaque
      aperiam similique modi possimus culpa laboriosam adipisci, minus ab nobis
      aliquid temporibus. Aliquam, dolore eveniet alias maiores labore
      consequuntur corrupti adipisci. Odit aliquid sed facilis, dolorem
      explicabo libero cumque repellendus at ex porro! Atque natus laborum
      accusantium ab? Quis officia ducimus cum nisi, unde pariatur obcaecati
      illum consectetur? Quae optio commodi numquam minus error nulla, sint
      doloremque molestiae odit fugit obcaecati velit quidem blanditiis ipsa
      nostrum necessitatibus quam harum quos laudantium pariatur aperiam sequi
      laborum voluptatum! Quaerat voluptatibus voluptatum cupiditate tempore,
      excepturi maxime modi repudiandae reiciendis ut perspiciatis quia non
      accusantium accusamus facilis aspernatur ducimus perferendis molestias
      autem rem minus laboriosam molestiae quod dolorem. Minus cumque assumenda
      iusto amet hic fugit ipsam voluptatum dolorum nihil, eius aliquid eligendi
      illo in quos est natus quibusdam! Quisquam ipsa libero laboriosam? Veniam
      perferendis modi ut nesciunt maxime soluta praesentium perspiciatis, sit
      at. Quia hic dolorum velit eveniet alias quod excepturi veniam rerum
      aperiam incidunt et fugit soluta ut, unde, est, neque debitis voluptas id
      vel fugiat. Qui doloremque ex eum aperiam dolor ea eligendi fugiat illo
      quibusdam esse!
    </>
  );
};

export default Page;
