import { motion, useScroll } from 'motion/react';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="p-20  font-mono ">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="w-full h-5 bg-amber-600 origin-bottom-left border-t-2 border-b-2 border-white top-0 left-0 bottom-5 fixed"
        ></motion.div>
        <h1 className="text-4xl font-bold text-center mb-10">
          this is heading that i provided
        </h1>
        <p className=" text-center  text-amber-200 font-bold text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          iusto nemo! Nihil rerum quia corrupti nisi! Iste perspiciatis, amet
          praesentium ducimus dolor recusandae ratione illo, voluptatum rem
          dolorum molestiae at! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Assumenda atque maxime ipsum eligendi, consectetur
          quia sit tenetur. Id reiciendis, vitae culpa aliquid voluptates
          tenetur quo, beatae illo et ut iure. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptates soluta maiores, quasi fugit a
          consectetur neque fuga dicta commodi, sequi numquam odit est, et ipsa
          quod vero voluptatibus culpa <br></br>
          <br></br> autem.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Doloremque, perferendis voluptates fuga illo numquam odio quam
          nihil et rem! Velit porro minus tenetur, iure distinctio repellendus
          laudantium ab possimus quaerat. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Fugit, itaque error dolores repudiandae
          earum assumenda, delectus esse distinctio incidunt et, repellat
          nesciunt natus. Fugit laborum quos consequatur, sed accusantium culpa.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur
          earum vel perferendis et enim atque nisi provident quasi? Ab quaerat
          sint ullam debitis deserunt alias magni veritatis aliquam
          consequuntur? <br></br>
          <br></br> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tempore culpa pariatur, aliquid, beatae magni nisi fuga minima labore
          quos harum repellendus eum libero animi iusto suscipit quis quia,
          accusantium illo? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Similique porro sequi, error odit laborum nihil dolorum
          excepturi temporibus amet corporis! Voluptatibus, vitae dicta.
          Voluptate vitae odio maiores laborum cum voluptatibus. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Tenetur architecto cum
          voluptatum exercitationem dolorum harum non perferendis explicabo
          aperiam cumque veniam,<br></br>
          <br></br> amet, nemo iusto voluptas sapiente quaerat, delectus sint
          consectetur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptate illum dolor animi dolore expedita delectus quis, modi quo
          iusto ipsa voluptas tempora hic error accusantium nihil doloribus
          repellat dicta saepe.
        </p>
      </div>
    </>
  );
}

export default App;
