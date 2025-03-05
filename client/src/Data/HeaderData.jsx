const HeaderData = {
  topHeader: {
    logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6590698-b589-4567-9623-e80907bfb73c/d9j20em-36c0b847-bfac-431c-b999-023364fda0f4.png/v1/fill/w_400,h_400,strp/random_logo_by_madmindbreaker_d9j20em-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2NTkwNjk4LWI1ODktNDU2Ny05NjIzLWU4MDkwN2JmYjczY1wvZDlqMjBlbS0zNmMwYjg0Ny1iZmFjLTQzMWMtYjk5OS0wMjMzNjRmZGEwZjQucG5nIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2M2NTkwNjk4LWI1ODktNDU2Ny05NjIzLWU4MDkwN2JmYjczY1wvbWFkbWluZGJyZWFrZXItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.sl2-6oTNlfGZpo45gdK8qEiCPUl2eXEky4lwJSWSqgE",
    contactOptions: [{ label: "AppName", number: "1800 XXX XXX" }],
    appName: "Quizo",
    languages: [
      { code: "en", name: "English" },
      { code: "ar", name: "Arabic" },
      { code: "fr", name: "French" },
      { code: "de", name: "German" },
      { code: "zh-CN", name: "Chinese" },
    ],
  },

  //

  sideHeader: {
    navItems: (authStatus) => [
      { name: "Home", slug: "/", active: true },
      { name: "Profile", slug: "/profile", active: authStatus },
      { name: "Take Quiz", slug: "/quiz", active: true },
      { name: "CreateQuiz", slug: "/customQuiz", active: true },
      { name: "Contibute", slug: "/questions", active: true },
      //   { name: "Learn More", slug: "#", active: true },
      { name: "About", slug: "#", active: true },
      //   { name: "How to Use", slug: "#", active: true },
    ],
    // authItems: (authStatus) => [
    //   { name: "Support", slug: "#", active: true },
    //   //   { name: "Login", slug: "/login", active: !authStatus },
    //   {
    //     // name: "Logout",
    //     // slug: "/logout",
    //     // active: authStatus,
    //     // component: (
    //     //   <button className="">
    //     //     Logout
    //     //   </button>
    //     // ), // Replace with your actual Logout button component
    //   },
    // ],
  },
};

export default HeaderData;
