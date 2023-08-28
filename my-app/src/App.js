import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Typo from "./components/Typo";
import { ReactComponent as LogoIcon } from './svg/clip.svg'


function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-50px py-110px px-20px sm:px-50px xl:px-55px">
        <h1 className="uppercase text-white text-48 text-center">contact us</h1>
        <form>
          <div className="grid-cols-1fr sm:grid-cols-2fr xl:grid-cols-3fr grid gap-30px">
            <label className="flex flex-col gap-10px">
              <Typo text="First name" />
              <Input placeholder="Name"/>
            </label>
            <label className="flex flex-col gap-10px">
              <Typo text="Last name" />
              <Input placeholder="Name"/>
            </label>
            <label className="flex flex-col gap-10px">
              <Typo text="Phone number" />
              <Input placeholder="+12345678910"/>
            </label>
            <label className="flex flex-col gap-10px">
              <Typo text="Email" />
              <Input placeholder="Email@domain.com"/>
            </label>
            <label className="flex flex-col gap-10px">
              <Typo text="Link" />
              <Input placeholder="https://"/>
            </label>
            <div />
            <label className="flex flex-col gap-10px sm:col-span-2">
              <Typo text="Message" />
              <Textarea placeholder="Message...." />
            </label>
            <label className="flex gap-5px h-52px items-end mt-30px items-center">
              <LogoIcon />
              <input type="file" className="opacity-0 absolute w-110px"/>
              <Typo text="Attach file" />
            </label>
          </div>
          <div className="flex justify-center mt-50px">
            <button
              type="submit"
              className="px-48px py-12px bg-green rounded-circle">
              <p className="text-14 text-black_2">Send my message</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
