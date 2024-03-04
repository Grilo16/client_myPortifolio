import { skillData } from "../Skills";

const {react, javascript, java, html, css, spring} = {...skillData}

export const duckysRevenge3D = {
  projectName: "Ducky's Revenge 3D",
  banner: "/projectsMedia/DuckysRevenge3D/Banner.png",
  links: [
    {
      label: "Client Repo",
      link: "https://github.com/Grilo16/client-duckys-revenge-3d",
    },
    {
      label: "Live Project",
      link: "https://www.duckydomain.com/",
    },
  ],
  overview: [
    "Dive into the immersive world of Ducky's Revenge this time in 3D.", 
    "Embark on an epic journey and engage again in heart-pounding game of shooting skeletons with blackholes.",
    "With the adition of another dimension, now ducky can finally his wings and fly"
  ],
  stack: {
    frontEnd: react,
    languages: [javascript, html, css],
  },

  pages: [
    {
      pageTitle: "Loading Screen",
      media: "/projectsMedia/DuckysRevenge3D/LoadingScreen_duckysRevenge3D.png",
      texts: [
        "Gear up for action as you're greeted by the Loading Screen of Ducky's Revenge 3D.",
        "The adventure is about to begin"
      ],
    },
    {
      pageTitle: "Starting Game",
      media: "/projectsMedia/DuckysRevenge3D/StartingGame_duckysRevenge3D.png",
      texts: [
        "Game on! Now get ready to blast these skeletons", 
      ],
    },
    {
      pageTitle: "Moving Camera",
      media: "/projectsMedia/DuckysRevenge3D/MovingCamera_duckysRevenge3D.gif",
      texts: [
        "Shift your perspective! You're free to look around and explore your surroundings.",
        "You can move the camera by moving your cursor on top of the screen",
        "Now that you can look around the sky is the limit!"
      ],
    },
    {
      pageTitle: "Aiming and Shooting",
      media:
        "/projectsMedia/DuckysRevenge3D/AimingAndShooting_duckysRevenge3D.gif",
      texts: [
        "Now we're looking good, lets shoot some blackholes",
        "Point ducky towards your target, and click to shoot!",
        "The fun never ends!!",
      ],
    },
    {
      pageTitle: "Moving Ducky",
      media: "/projectsMedia/DuckysRevenge3D/MovingDucky_duckysRevenge3D.gif",
      texts: [
        "Now to exploring, you can move ducky using WASD or the Arrow keys",
        "To help ducky conquer the skies, press the space bar!",
      ],
    },
    {
      pageTitle: "Object Colision",
      media:
        "/projectsMedia/DuckysRevenge3D/ObjectColision_duckysRevenge3D.gif",
      texts: [
        "Ducky's Revenge brings a whole set of physics interactions to the game", 
        "Now ducky can finally move the nefarious spikey objects and evil skeletons"
      ],
    },
    {
      pageTitle: "Blackhole Gravitational Pull",
      media:
        "/projectsMedia/DuckysRevenge3D/BlackholeGravitationalPull_duckysRevenge3D.gif",
      texts: [
        "Blackholes are known for their strong gravitational pull.",
        "And now ducky shoots true blackholes that can pull any object in the game.",
      ],
    },
    {
      pageTitle: "Game Menu",
      media: "/projectsMedia/DuckysRevenge3D/GameMenu_duckysRevenge3D.gif",
      texts: [
        "Once you're done shooting skeletons, you can pause the game by clicking on the menu button",
        "In the menu you can checkout othe pages in the game, and visit the OG Ducky's Revenge for the nostalgia"
      ],
    },
    {
      pageTitle: "About Page",
      media: "/projectsMedia/DuckysRevenge3D/AboutPage_duckysRevenge3D.png",
      texts: [
        "Well here you can find some more info about me!",
        "I hope ducky's aventures has brought you joy =D",
        ],
    },
  ],
};


export const duckysRevenge = {
  projectName: "Ducky's Revenge",
  banner: "/projectsMedia/DuckysRevenge/Banner.png",
  links: [
    {
      label: "Client Repo",
      link: "https://github.com/Grilo16/DuckysRevengeGitHost",
    },
    {
      label: "Live Project",
      link: "https://grilo16.github.io/DuckysRevengeGitHost/",
    },
  ],
  overview:[
    "Ducky's Revenge is all about unleashing your creativity and having a blast with personalized map design and exciting gameplay. With the latest tech like React and JavaScript, it's all about ensuring smooth and fun user experiences.",

    "With easy controls and cool features like adjustable camera zoom, players can dive into creating custom maps. Whether you're placing ducks, adding enemies, or navigating the game, Ducky's Revenge lets you make the gaming world your own.",
  ],
  stack: {
    frontEnd: react,
    languages: [javascript, html, css],
  },
  pages: [
    {
      pageTitle: "Home Screen",
      media: "/projectsMedia/DuckysRevenge/HomeScreen.png",
      texts: [
        "Welcome to the heart of the duck action! On the Home Screen, you're greeted with the vibrant game environment, teeming with potential adventures.",
        "Here you can choose to dive right into the gameplay or unleash your creative side by crafting your own custom maps.",
      ],
    },

    {
      pageTitle: "Place a duck",
      media: "/projectsMedia/DuckysRevenge/placingDuck.gif",
      texts: [
        "Dive into the Map Creation mode and let your creativity run wild.", 
        "Just remember to save a map you must add at least one duck.",
      ],
    },
    {
      pageTitle: "Placing Objects and Enemies",
      media: "/projectsMedia/DuckysRevenge/addingMapElements.gif",
      texts: [
        "You may add as many enemies and obstacles as you wish before saving the game.",
        "Once you've crafted your masterpiece, save it to revisit anytime or share with fellow gamers for a thrilling showdown.",
      ],
    },
    {
      pageTitle: "Adjust camera zoom",
      media: "/projectsMedia/DuckysRevenge/CameraZoom.gif",
      texts: [
        "Using ctrl+scroll + up or down to zoom in or out you can place map elements in a much larger area.",
        "Unlimited fun space!"
      ],
    },
    {
      pageTitle: "Gameplay and Controls",
      media: "/projectsMedia/DuckysRevenge/duckyRevengeGameplay.gif",
      texts: [
        "You can move ducky using the arrow keys and shoot blackholes by pressing space bar. Lastly you can press escape to access the game menu.",
        "Gameplay involves aiming and shooting at the skeleton enemies, sharp blocks are indestructible and ducky cannot walk over them, they are also able to stop ducky's projectile.",

      ],
    },
  ],
};


export const RogueBookings = {
  projectName: "Rogue Bookings",
  banner: "/projectsMedia/RogueBookings/Banner.png",
  links: [
    {
      label: "Client Repo",
      link: "https://github.com/Grilo16/RogueBookingsClient",
    },
    {
      label: "Server Repo",
      link: "https://github.com/Grilo16/RogueBookingsServer",
    },
    {
      label: "Live Project",
      link: "https://grilo16.github.io/RogueBookingsClient/",
    },
  ],
  overview: [

    "Rogue bookings is a platform aimed at helping yoga and other fitness instructors to form a comunity and create a business.",
    "Here you can create or join a company as well as signing up to classes or creating classes to teach others.",
    "This app helps users manage the schedule and attendance of their classes and teams!"
    
  ],
  stack: {
    frontEnd: react,
    backEnd: spring,
    languages: [java, javascript, html, css],
  },
  pages: [
    {
      pageTitle: "Sign up page",
      media: "/projectsMedia/RogueBookings/RogueBookingsSignUp.png",
      texts: [
        "Sign up and join the Rogue Bookings community!",
      ],
    },
    {
      pageTitle: "Login page",
      media: "/projectsMedia/RogueBookings/RogueBookingsLogin.png",

      texts: [
        "Once Signed up login with your fresh acount to begin your experience",
      ],
    },
    {
      pageTitle: "User dashboard",
      media: "/projectsMedia/RogueBookings/RogueBookingsUserDashboard.png",
      texts: [
        "Your command center! View and manage your schedule, classes, and bookings from one convenient dashboard.",,
      ],
    },
    {
      pageTitle: "Creating a business",
      media: "/projectsMedia/RogueBookings/RogueBookingsCreatingABusiness.png",

      texts: [
        "Ready to start your own business? Create your company profile and begin offering classes and services to your community.",
      ],
    },
    {
      pageTitle: "Joining a business",
      media: "/projectsMedia/RogueBookings/RogueBookingsJoinBusiness.png",

      texts: [
        "Explore and join existing businesses within the Rogue Bookings network.",
        "Join classes, book appointments, and engage with your local fitness community.",
      ],
    },

    {
      pageTitle: "Viewing events schedule",
      media: "/projectsMedia/RogueBookings/RogueBookingsBusinessSchedule.png",
      texts: [
        "Stay organized and informed! View upcoming events, classes, and appointments on your personalized schedule."
      ],
    },
    {
      pageTitle: "Viewing Students",
      media:
        "/projectsMedia/RogueBookings/RogueBookingsBusinessViewStudents.png",

      texts: [
        "Get to know your students!",
        "Access detailed profiles and information about your students to provide personalized instruction and support.",
      ],
    },
    {
      pageTitle: "Viewing Teachers",
      media:
        "/projectsMedia/RogueBookings/RogueBookingsBusinessViewTeachers.png",

      texts: [
        "Connect with your team!",
        "View profiles and information about your fellow teachers to collaborate and coordinate class schedules and activities.",
      ],
    },
  ],
};
