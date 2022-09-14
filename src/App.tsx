import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";
import logoImg from "./assets/logo-nlw-esports.svg";

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1344px] mx-auto my-20">
      <img src={logoImg} alt="eSports Logo" />

      <h1 className="font-black mt-20 text-6xl text-white">
        Seu&nbsp;
        <span className="bg-clip-text bg-nlw-gradient text-transparent">
          duo
        </span>
        &nbsp;está aqui.
      </h1>

      <div className="gap-6 grid grid-cols-6 mt-16">
        <a href="" className="overflow-hidden relative rounded-lg">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="overflow-hidden relative rounded-lg">
          <img src="/game-2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="overflow-hidden relative rounded-lg">
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="overflow-hidden relative rounded-lg">
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="overflow-hidden relative rounded-lg">
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="overflow-hidden relative rounded-lg">
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-nlw-gradient mt-8 overflow-hidden pt-1 rounded-lg self-stretch">
        <div className="bg-[#2A2634] flex items-center justify-between px-8 py-6">
          <div>
            <strong className="block font-black text-2xl text-white">
              Não encontrou seu duo?
            </strong>

            <span className="block text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="bg-violet-500 flex gap-3 hover:bg-violet-600 items-center rounded text-white px-4 py-4">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
