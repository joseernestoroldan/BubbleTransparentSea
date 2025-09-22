import { SidebarSection } from "../SidebarSection/SidebarSection";
import { Sidebar, SidebarContent } from "../ui/sidebar";
import { Home, Info, Map, CreditCard, BookOpen, HelpCircle, Mail,} from "lucide-react"

// Menu items.
const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Info, label: "About Us", href: "/about" },
  { icon: Map, label: "Available Tours", href: "/tours" },
  { icon: CreditCard, label: "Subscription Plans", href: "/plans" },
  { icon: BookOpen, label: "Blog", href: "/blog" },
  { icon: HelpCircle, label: "FAQ", href: "/faq" },
  { icon: Mail, label: "Contact", href: "/contact" },
]



export function AppSidebar() {
  return (
    <Sidebar
      side="right"
      variant="sidebar"
      className="bg-gradient bg-gradient-to-b from-cyan-700 to-sky-950 border-none"
    >
      <SidebarContent className=" bg-gradient bg-gradient-to-b from-cyan-700 to-sky-950 border-none flex flex-col items-center justify-start m-4 overflow-hidden">
        <div className="flex flex-col items-center justify-start w-full h-screen border-l border-white border-opacity-50">
          <SidebarSection nameSection="Submarine Tours" items={menuItems} />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
