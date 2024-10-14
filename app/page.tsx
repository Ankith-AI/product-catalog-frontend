import Container from "@/components/container";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import ContactForm from "@/components/ContactForm";
import Slider from "@/components/Slider";

function Home() {
  return (
    <Container>
      <Hero></Hero>
      <Slider></Slider>
      <Featured></Featured>
      <ContactForm></ContactForm>
    </Container>
  );
}

export default Home;
