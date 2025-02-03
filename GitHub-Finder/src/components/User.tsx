import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

function User({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) {

  return (
    <div className="w-60 flex flex-col bg-white rounded-2xl mt-3 overflow-hidden relative text-black pb-5 shadow-2xl">
        <div className="bg-gray-700 h-36">
        </div>
      <img src={avatar_url} alt="Foto de perfil do usuario" className="h-32 w-32 rounded-full border-4 border-white absolute z-10 top-18 ml-5"/>
      <Link className="ml-auto mr-3 mt-3 border-2 border-blue-950 text-blue-950 p-2 rounded-3xl" to={`/respos/${login}`}>Ver melhores projetos</Link>
      <div className="mt-2 ml-9 flex flex-col gap-3">
          <h1 className="text-blue-950 font-extrabold text-2xl">{login}</h1>
          {location && (
            <p>
              <MdLocationPin />
              <span>{location}</span>
            </p>
          )}
          <div className="flex gap-5 font-semibold">
            <div>
              <p>Seguidores: <span className="text-blue-950">{followers}</span></p>
            </div>
            <div>
              <p>Seguindo: <span className="text-blue-950">{following}</span></p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default User;
