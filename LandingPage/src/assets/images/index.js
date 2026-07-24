// Centralized Image Assets Directory for FlexiFitPay Landing Page
import navBarLogo from './NavBar.png';
import whyChooseRightside from './WhyChooseRightside.png';
import whyChooseLeft from './WhyChooseLeft.png';
import whyChooseLeftBg from './WhyChooseleftbackground.png';
import whyChooseBargraph from './WhyChoseBargraphLeft.png';
import missionMan from './MissionMan.jpg';
import instantApproval from './InstantApproval.png';
import fasterPayment from './FasterPayment.png';
import seamlessExperience from './SeamlessExperience.png';
import exceptionalFeatureImg from './ExceptionalfeaturesImage.png';
import exceptionalFeatureBgImg from './ExceptionalFeaturesBackgroundImage.png';
import workImage from './Work Image.png';
import bgImageGrid from './Bg Image.png';
import bgImageAbout from './Bg ImageAbout.png';
import teamOne from './TeamOne.png';
import teamTwo from './TeamTwo.png';
import teamThree from './TeamThree.png';

export const images = {
  brand: {
    navLogo: navBarLogo
  },
  hero: {
    manWithPhone: whyChooseLeft,
    avatar1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    avatar2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    avatar3: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  },
  features: {
    bgGrid: bgImageGrid
  },
  whyChoose: {
    patientApproval: whyChooseLeft,
    bgImage: whyChooseLeftBg,
    bargraph: whyChooseBargraph,
    walletCards: whyChooseRightside
  },
  benefits: {
    instantApproval: instantApproval,
    fasterPayment: fasterPayment,
    seamlessExperience: seamlessExperience
  },
  exceptionalFeature: {
    userWithPhone: exceptionalFeatureImg,
    bgImage: exceptionalFeatureBgImg
  },
  about: {
    missionMan: missionMan,
    bgGrid: bgImageAbout,
    team: [teamOne, teamTwo, teamThree]
  },
  process: {
    manLaptop: workImage,
    testimonialAuthor: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
  }
};
