export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-10 text-center">
        <h1 className="text-5xl font-extrabold text-[#6699CC]">Hello World</h1>
        <p className="mt-6 text-lg text-[#4A5568]">
          Please PayLah/PayNow to <span className="font-semibold">Zheng Yang</span> to support the development of this website
        </p>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3A1cnRndHhjdTVsbWl0OXpoZHcyZTR1Znp4bHp5c2RyMGNxdnQ0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oxHQfvDzo7VhSRy8M/giphy.gif"
          alt="Support Me GIF"
          className="mx-auto my-6 w-64 rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}
