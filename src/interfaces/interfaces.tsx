import { Dispatch, SetStateAction } from "react";

// src\utils
export interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}
export interface UtilsProps {
  services: ServicesProps[];
  selectedService: string;
  serviceImage: string;
  value1: string;
  value2: string;
  name: string;
  setServices: React.Dispatch<React.SetStateAction<ServicesProps[]>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setValue1: React.Dispatch<React.SetStateAction<string>>;
  setValue2: React.Dispatch<React.SetStateAction<string>>;
}
export interface HandleDeleteServiceProps {
  id: number;
  setServices: React.Dispatch<React.SetStateAction<ServicesProps[]>>;
}

// для графиков
export interface GridItemProps {
  title: string;
  dataKey: string;
  children?: React.ReactNode;
  className?: string;
}
export interface LegendProps {
  // title: string;
  data: { ton?: string; value: number }[];
  colors: string[];
}
export interface PieChartItemProps {
  title: string;
  data: { value: number }[];
  className?: string;
  headerStyles?: string;
  wrapperStyles?: string;
}

// src\components\CommonLayout\Profile.tsx
export interface IProfilePages {
  activeTab: string;
  toggleSidebar?: () => void;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

// src\components\NavMenu\NavMenu.tsx
export interface NavMenuProps {
  isCollapsed: boolean;
  toggleSidebar?: () => void;
}
export interface NavLinkProps {
  src: string;
  href: string;
  title: string;
  className: string;
  isCollapsed: boolean;
  linkStyles: string;
  color: string;
  onClick?: () => void;
}

// src\components\CommonLayout\ProfileInputs.tsx
export interface ProfileFormData {
  titles: string[];
  placeholders: string[];
  placeholdersImage: string[];
  className?: string;
  prefix: string;
  type: string;
  classNameWrapper?: string;
  onClicks?: (() => void)[];
}

// src\app\ServicesPage
// src\utils
// src\components\ServicesPage
export interface ServicesProps {
  serviceImage: string;
  selectedService: string;
  name: string;
  status: boolean;
  className?: string;
  token?: string;
  login?: string;
  password?: string;
}

// src\components\ServicesPage
export type ServicesAddProps = Pick<UtilsProps, "services" | "setServices"> & {
  name?: string;
  loading: boolean;
  error: string | null;
};
export type ServicesFormProps = Pick<
  UtilsProps,
  "services" | "setServices" | "selectedService" | "serviceImage"
> & {
  className?: string;
  showLoader: () => void;
  token?: string;
  name: string;
};
export type IServicesProps = Pick<UtilsProps, "services" | "setServices"> & {
  serviceImage: string;
  selectedService: string;
  name: string;
  status: boolean;
  className?: string;
  token?: string;
};

// src\components\FeedbackPage
export interface FeedbackChatProps {
  handleClick: () => void;
  handleLayoutClick?: () => void;
}
export interface IFeedbackLayoutLeft {
  isCommunication: boolean;
  handleClick: () => void;
}

// src\components\FeedbackPage\FeedbackMessage.tsx
export interface IFeedbackMessage {
  right?: boolean;
}

// src\components\authPage\authPage.tsx
export interface IAuthPageProps {
  onLogin: () => void;
  onToggle: () => void;
  title: string;
  switchTitle: string;
  switchText: string;
  buttonText: string;
  isLoginPage: boolean;
}

// src\components\DashboardPage\RatingCard.tsx
export interface InfoCardProps {
  title: string;
  value: string;
}
// src\components\DashboardPage\InfoSection.tsx
// src\components\DashboardPage\SwitchDash.tsx
export interface SwitchProps {
  isDistribution: boolean;
  setIsDistribution: (value: boolean) => void;
}

// src\components\SettingsPage\EmployeeList.tsx
export interface EmployeeItemProps {
  name: string;
  email: string;
  role: string;
  imageSrc: string;
}

// src\app\PaymentsPage\page.tsx
export interface CardProps {
  title: string;
  value: string;
  buttonText: string;
  onButtonClick: () => void;
}

// src/components/PaymentsPage/TableRow.tsx
export interface TableRowProps {
  type: string;
  description: string;
  amount: number;
  date: string;
}
