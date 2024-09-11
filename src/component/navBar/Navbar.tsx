const Navbar = () => {
  return (
    <header className="navbar bg-base-100 mb-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-accent" href="#">
          AnotherWay
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profil
                <span className="badge badge-success badge-outline">New</span>
              </a>
            </li>
            <li>
              <a>Paramêtre</a>
            </li>
            <li>
              <a className="text-error">Deconnexion</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
