import { Link } from 'react-router-dom'

import catGunGif from './assets/cat-gun.gif'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-10 text-center">
        <h1 className="text-5xl font-bold text-[#6699CC]">Hello World</h1>
        <p className="mt-6 text-lg text-[#F8FAFC]">
          Stop venturing into the unknown!
        </p>
        <img
          src={catGunGif}
          alt="Support Me GIF"
          className="mx-auto my-6 w-100 rounded-lg shadow-md"
        />
        <Link
          to="/"
          className="inline-block rounded-lg border border-[#6699CC]/30 px-6 py-2 font-semibold text-[#F8FAFC] transition hover:border-[#6699CC]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
