import BackButton from "../components/BackButton";

const Error = () => {
  return (
    <div
      className="min-h-96 p-10 flex flex-col flex-1 items-center justify-center gap-5 "
      style={{
        backgroundImage:
          "url('https://64.media.tumblr.com/1ada14b60cf5b70a887b045d6e83fbd4/tumblr_ol6o615mfP1qa9gmgo2_1280.jpg')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-8xl text-center p-4 text-purple-700 font-bold bg-white/40 rounded-lg shadow-2xl w-fit">Error 404</h2>
      <p className="text-6xl text-center p-4 text-purple-700 font-bold bg-white/40 rounded-lg shadow-2xl w-fit">Page not found...</p>
      <BackButton path={"/"} />
    </div>
  );
};
export default Error;
