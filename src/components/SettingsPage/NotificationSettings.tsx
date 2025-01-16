import Image from "next/image";
import styles from "../../styles/SettingsPage/Settings.module.scss";

export const NotificationSettings = () => (
  <div className="rounded-[20px] bg-white p-5 max-w-[400px] mt-5 max-[1380px]:max-w-[750px] max-[1380px]:mt-0 max-[740px]:max-w-[400px]">
    <div className="pb-5 border-b">
      <h3 className="text-[#212134]">Настройка оповещений</h3>
    </div>
    <div className="max-[1380px]:flex max-[1380px]:gap-5 max-[740px]:flex-col">
      <div className="max-w-[340px]">
        <p className="text-[#C0C0C0] text-sm mt-5">
          Телефоны, на которые приходят уведомления о работе сервиса
          в международном формате
        </p>
        <div className="flex flex-col gap-[6px] mt-4">
          <label className="text-xs text-[#00000080]">Телефон</label>
          <input
            type="text"
            name="Название магазина"
            className="border max-w-[320px] h-[50px] rounded-full px-4 text-sm outline-[#915DFA]"
            defaultValue="+7 999 888-77-66"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex gap-3 text-sm bg-[#7C3FF9] rounded-full w-[150px] h-9 mt-3 justify-center items-center text-white">
            <Image
              src="/settingsPage/plus.svg"
              alt="plus"
              width={12}
              height={12}
            />
            <p>Добавить</p>
          </button>
          <button className="flex gap-3 text-sm bg-[#7C3FF9] rounded-full w-[158px] h-9 mt-3 justify-center items-center text-white">
            <p>Показать список</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <p className="text-[#C0C0C0] text-sm mt-5">
          Почты, на которые приходят отзывы
        </p>
        <div>
          <div className="flex flex-col gap-[6px] mt-4">
            <label className="text-xs text-[#00000080]">Почта</label>
            <input
              type="text"
              name="Название магазина"
              className="border max-w-[320px] h-[50px] rounded-full px-4 text-sm outline-[#915DFA]"
              defaultValue="pochta228@gmail.com"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex gap-3 text-sm bg-[#7C3FF9] rounded-full w-[150px] h-9 mt-3 justify-center items-center text-white">
              <Image
                src="/settingsPage/plus.svg"
                alt="plus"
                width={12}
                height={12}
              />
              <p>Добавить</p>
            </button>
            <button className="flex gap-3 text-sm bg-[#7C3FF9] rounded-full w-[158px] h-9 mt-3 justify-center items-center text-white">
              <p>Показать список</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p className="text-[#C0C0C0] text-sm mt-5">
        Какие отзывы будут приходить
      </p>
      <div className={styles.checkbox}>
        <input type="checkbox" id="checkbox" className="size-5" />
        <label htmlFor="checkbox" className="cursor-pointer">
          Негативные
        </label>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" id="checkbox2" className="size-5" />
        <label htmlFor="checkbox2" className="cursor-pointer">
          Нераспознанные
        </label>
      </div>
    </div>
  </div>
);
