import { Typography } from "@material-tailwind/react";
import imgEchangeur from "../assets/image/echangeur.jpeg"
 
function Banner() {
  return (
    <figure className="relative h-56 w-full">
      <img
        className="h-full w-full object-cover object-center"
        src= {imgEchangeur}
        alt="image echangeur de limete"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            KIN-CITY
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          Echangeur de Limete
        </Typography>
      </figcaption>
    </figure>
  );
}

export default Banner