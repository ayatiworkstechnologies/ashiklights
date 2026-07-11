import type { IconType } from "react-icons";
import {
  FiAward,
  FiCalendar,
  FiHome,
  FiMapPin,
  FiMaximize,
  FiPhone,
  FiShoppingBag,
  FiStar,
  FiTool,
  FiUploadCloud,
  FiUser,
  FiArrowRight,
  FiArrowUp,
  FiArrowDown,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  mail: FiMail,
  phone: FiPhone,
  whatsapp: FaWhatsapp,
  google: FaGoogle,
  user: FiUser,
  home: FiHome,
  pin: FiMapPin,
  wallet: FiShoppingBag,
  calendar: FiCalendar,
  star: FiStar,
  showroom: FiShoppingBag,
  diamond: FiMaximize,
  measure: FiTool,
  award: FiAward,
  upload: FiUploadCloud,
  arrowRight: FiArrowRight,
  arrowUp: FiArrowUp,
  arrowDown: FiArrowDown,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name] ?? FiStar;
  return <Component className={className || "ui-icon"} aria-hidden="true" />;
}
