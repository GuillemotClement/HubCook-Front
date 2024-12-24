export default function HomePage() {
  return (
    <div
      className="hero min-h-screen rounded-md overflow-hidden"
      style={{
        backgroundImage: "url(https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-neutral-content text-center ">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold">HubCook</h1>
          <p className="mb-5">
            La cuisine facile
          </p>
          <button className="btn ">Get Started</button>
        </div>
      </div>
    </div>
  )
}