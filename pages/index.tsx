import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Jumbotron
        header="Hi, I am Joshua"
        body={<div>I am a Software Developer</div>}
      />
      <div>HI</div>
    </Layout>
  );
}
