import { Bubbles } from "./components/Bubbles/Bubbles";
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { SubHeader } from "./components/SubHeader/SubHeader";

export default function Home() {
  return (
    <div className="flex justify-center items-start w-full min-h-screen px-16 py-32">
      <div className="flex flex-col justify-start items-center space-y-8">
        <Header>Bubble Transparent Sea</Header>
        <SubHeader>Where the ocean&apos;s secrets come to light.</SubHeader>
        <div className="flex justify-center items-center gap-8">
          <Button>Take a tour</Button>
          <Button>Sign Up</Button>
        </div>
        <Bubbles />
      </div>
    </div>
  );
}
