"use client";

import { useEffect, useState } from "react";
import { ServicesProps } from "@/interfaces/interfaces";
import ServicesAdd from "@/components/ServicesPage/ServicesAdd";
import ServicesTable from "@/components/ServicesPage/ServicesTable";
import styles from "../../styles/ServicesPage/Services.module.scss";
import axios from "axios";
import API_URL from "../../../config";

const Services = () => {
  const [services, setServices] = useState<ServicesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await axios.get<ServicesProps[]>(`${API_URL}/services`);
      setServices(response.data);
    } catch (err) {
      console.error("Ошибка при получении данных:", err);
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "Не удалось загрузить данные.");
      } else {
        setError("Не удалось загрузить данные.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="p-10 bg-[#f2f4f6] w-full h-screen max-[1200px]:p-5">
      <h2 className="text-[22px] font-semibold">Сервисы</h2>
      <div className={styles.ServicesWrapper}>
        <ServicesTable
          services={services}
          setServices={setServices}
          loading={loading}
          error={error}
        />
        <ServicesAdd
          services={services}
          setServices={setServices}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Services;
