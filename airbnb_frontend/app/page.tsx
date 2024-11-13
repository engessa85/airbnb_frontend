import Image from "next/image";
import Categories from "./components/Categories";
import PropirityList from "./components/proporities/PropirityList";

export default function Home() {
  return (
    <main>
      <Categories />
      <PropirityList/>
    </main>
    
  );
}
