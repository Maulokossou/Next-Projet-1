import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import { inter } from "@/app/ui/fonts";
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';


const cards = [
  { title: "Produit 1", description: "Description du produit 1", action: "Acheter" },
  { title: "Produit 2", description: "Description du produit 2", action: "Voir plus" },
  { title: "Produit 3", description: "Description du produit 3", action: "Souscrire" },
  { title: "Produit 4", description: "Description du produit 4", action: "Nous contacter" },
  { title: "Produit 5", description: "Description du produit 5", action: "Nous contacter" },
  { title: "Produit 6", description: "Description du produit 6", action: "Nous contacter" },
];

export default function Page() {
  return (
    <main className="flex h-screen flex-col shadow-md">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Acceuil</a></li>
              <li><a>À propos</a></li>
              <li>
                <a>Service</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                </ul>
              </li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Prodmast</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Acceuil</a></li>
            <li><a>À propos</a></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a> <Link
            href="/login"
            className="flex items-center gap-5 self-end rounded-3xl bg-blue-500 px-6 py-3 text-sm font-medium text-white"
          >
            <span>Se connecter</span>
          </Link></a>
        </div>
      </div>

      <div className='relative bg-gray-100'>
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <h1 className="text-white text-3xl ml-4 mb-4 lg:text-5xl font-bold">
            Bienvenue sur Prodmast
          </h1>
          <div>
          </div>
        </div>
        <div className="absolute inset-0 flex gap-2 items-center ml-4 lg:mt-24 mt-24 justify-start z-10">
          <button className="border border-blue-600 bg-blue-600 text-white px-4 py-3 rounded-3xl ">Commencer</button>
          <button className="px-4 py-3 bg-white rounded-3xl text-blue-600 border border-blue-600">Essayer gratuitement</button>
        </div>


        {/* Image en dessous */}
        <div className="w-full h-[400px] lg:h-[400px]">
          <img
            src="https://cdn.pixabay.com/photo/2024/09/02/11/27/ai-generated-9016524_960_720.jpg"
            alt="Header Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className='bg-blue-600 p-10 py-14 border border-blue-600'>
        <div className='text-center pb-8'>
          <h1 className="text-white text-3xl font-bold">Découvrez nos offres</h1>
          <p className="text-white text-base">Découvrez nos services et produits exclusifs</p>
        </div>
        <div className=' flex flex-wrap gap-4  '>
          {cards.map((card, index) => (
            <div key={index} className="card bg-blue-400 text-white w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-end">
                  <button className="p-4 bg-blue-600 rounded-3xl">{card.action}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='p-8'>
        <div className="flex flex-col md:flex-row items-center gap-4 p-4">
          <div className="w-full md:w-1/2">
            <div className="card image-full shadow-xl">
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/09/18/35/rio-de-janeiro-979750_960_720.jpg"
                  alt="Shoes"
                  className="w-full"
                />
              </figure>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-justify">
            <h1 className='text-3xl'>Notre Entreprise</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora similique cupiditate perferendis ipsa eveniet delectus. Quas, eligendi voluptates maxime veritatis laborum, repudiandae odio asperiores sequi, quis incidunt dolores assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quasi nobis temporibus placeat enim eaque perspiciatis totam quidem optio, nam mollitia, atque dolorem nesciunt. Maiores consequatur expedita fuga laudantium non.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

      </div>

      <div className="bg-blue-600 py-14 flex justify-center items-center max-h-screen">
        <div className="w-full max-w-md">
          <div className="text-center text-white">
            <h1 className="text-3xl mb-4">Contactez-nous</h1>
            <form className="border rounded-lg bg-white p-8 m-4 shadow-lg">
              <label className="input input-bordered mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#04141a"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="text-black rounded-3xl grow border-none hover:border-none focus:outline-none focus:ring-0"
                  placeholder="Nom et Prénom"
                />
              </label>

              <label className="input input-bordered mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#04141a"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="text-black grow border-none hover:border-none focus:outline-none focus:ring-0"
                  placeholder="Email"
                />
              </label>

              <label className="input input-bordered mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#04141a"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="text-black grow border-none hover:border-none focus:outline-none focus:ring-0"
                  placeholder="Mot de passe"
                />
              </label>
              <button className=' border w-full py-3 bg-blue-600 text-white rounded-lg'>Envoyer un message</button>
            </form>

          </div>
        </div>
      </div>



      <footer className="footer bg-blue-300 text-black p-14 shadow-md">
        <nav>
          <h6 className="footer-title">SERVICES</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className='text-black'>
          <h6 className="footer-title">NOTRE ENTREPRISE</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">LÉGAL</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-blue-500 text-white px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current">
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className='font-bold'>
            MY-APP. Copyright 2024
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
