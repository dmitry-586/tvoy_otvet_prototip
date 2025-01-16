import { EmployeeList } from "@/components/SettingsPage/EmployeeList";
import MobileEmployeeList from "@/components/SettingsPage/MobileEmployeeList";
import { NotificationSettings } from "@/components/SettingsPage/NotificationSettings";

const Settings = () => {
  return (
    <div className="flex-1 w-full p-10 bg-[#f2f4f6] h-max max-[1200px]:p-5 max-[400px]:px-[10px]">
      <h2 className="text-[22px] font-semibold">Настройки</h2>
      <div className="flex gap-3 max-[1380px]:flex-col max-[1380px]:gap-5">
        <EmployeeList />
        <MobileEmployeeList />
        <NotificationSettings />
      </div>
    </div>
  );
};

export default Settings;
