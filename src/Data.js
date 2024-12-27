import {
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { BiMessage } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";

export const NavLinks = [
  {
    name: "Home",
    icon: (
      <HomeIcon className="w-6 h-6 text-primary font-bold group-hover:text-green-500" />
    ),
    href: "/",
  },
  {
    name: "About",
    icon: (
      <UserGroupIcon className="w-6 h-6 text-primary group-hover:text-green-500" />
    ),
    href: "/about",
  },
  {
    name: "Gallery",
    icon: (
      <GrGallery className="w-5 h-5 text-primary group-hover:text-green-500" />
    ),
    href: "/gallery",
  },
  {
    name: "Contact Us",
    icon: (
      <BiMessage className="w-6 h-6 text-primary group-hover:text-gray-950" />
    ),
    href: "/contact-us",
  },
];
export const Faqs = [
  {
    id: 1,
    question: 
    "What are fibroids, and how do they develop?",
    answer:
    "Fibroids are non-cancerous growths that develop in the uterus. They are composed of muscle and fibrous tissue and can vary in size and location. The exact cause of fibroid development is not fully understood, but hormonal factors and genetic predisposition are believed to play a role.",
  },
  {
    id: 2,
    question:
    "What are the symptoms of fibroids, and how do they affect a person's daily life?",
    answer:
    "Symptoms of fibroids can vary depending on their size, location, and number. Common symptoms include heavy or prolonged menstrual periods, pelvic pain or pressure, frequent urination, constipation, and abdominal bloating. Fibroids can also cause fertility issues and complications during pregnancy.",
  },
  {
    id: 3,
    question:
      "What is fibroid embolization, and how does it work as \n  a treatment option?",
      answer:
      "Fibroid embolization, also known as uterine artery embolization (UAE), is a minimally invasive procedure used to treat fibroids. It involves blocking the blood supply to the fibroids, causing them to shrink and alleviating symptoms. During the procedure, tiny particles are injected into the blood vessels that supply the fibroids, cutting off their blood flow.",
    },
    {
    id: 4,
    question:
      "What are the potential risks and complications associated with fibroid embolization?",
    answer:
      "Like any medical procedure, fibroid embolization carries potential risks and complications. These can include infection, bleeding, injury to surrounding structures, allergic reactions to contrast dye, and the rare possibility of complications related to the embolization material reaching unintended areas.",
    },
    {
    id: 5,
    question:
      "How does fibroid embolization compare to other treatment options for fibroids, such as surgery or medication?",
    answer:
      "When compared to other treatment options, such as surgery (e.g., hysterectomy or myomectomy) or medication (e.g., hormonal therapy), fibroid embolization offers several advantages. It is a less invasive procedure, avoiding the need for major surgery and reducing recovery time. It also preserves the uterus, making it an option for women who wish to retain their fertility. However, the choice of treatment depends on factors such as the size and location of fibroids, the severity of symptoms, desire for future pregnancy, and individual patient preferences. It is important to discuss the available options with a healthcare provider to determine the most suitable treatment approach.",
  },
];
