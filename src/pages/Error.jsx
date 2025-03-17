const Error = () => {
  return (
    <div className="min-h-96 p-10 flex flex-col items-center justify-center gap-5">
        <h2 className="text-8xl text-center">Error 404</h2>
        <p className="text-6xl text-center">Page not found...</p>
        <button className="px-3 py-2 border border-amber-600 rounded-xl shadow-lg cursor-pointer">Zurück zur Startseite</button>
    </div>
  )
}
export default Error