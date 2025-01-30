export default function RoundButton({ label, width }) {
  return (
    <>
      <button
        className={`bg-gl hover:bg-gd hover:text-shadow-white text-white text-s h-16 ease-in-out duration-200 rounded-full`}
        style={{
          width: `${width}rem`,
          minWidth: "9rem", // Correctement défini avec une syntaxe JS valide
        }}
        // Applique la largeur dynamique ici
      >
        <p className="text-xl">{label}</p>
      </button>
    </>
  );
}
