import React, { useState } from "react";
import clsx from "clsx";

interface ReviewNavbarProps {}

const ProfileNavbar: React.FC<ReviewNavbarProps> = ({}) => {
  return (
    <main>
      <nav
        className={clsx(
          "flex justify-between px-8 items-center py-3 font-['kanit'] bg-[#9B2226]"
        )}
      >
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* logo */}
            <a href="/" className="text-3xl font-mono text-white">
              FreeCPE
            </a>
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-3">
          {/* Profile icon link */}
          <a href="/profile" className="text-3xl">
            <img src="/images/profile_icon.png" alt="Profile Icon" className="w-15 h-8" />
          </a>
        </section>
      </nav>
      <hr className="" />
    </main>
  );
};

export default ProfileNavbar;