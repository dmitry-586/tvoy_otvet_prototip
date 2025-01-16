import ServicesBrick from "./ServicesBrick";
import { ServicesAddProps } from "@/interfaces/interfaces";
import styles from "../../styles/ServicesPage/Services.module.scss";

const TableHeader: React.FC = () => (
  <div className="w-full h-[52px] border-b flex justify-between items-center pl-5 pr-10 text-[#32324D]">
    <p>Название</p>
    <p>Статус</p>
  </div>
);

const LoadingOrError: React.FC<{ message: string }> = ({ message }) => (
  <div className={styles.ServicesTableWrapper}>
    <TableHeader />
    <div className="flex-1 flex p-5 text-[#32324D]">
      <p>{message}</p>
    </div>
  </div>
);

const ServicesTable: React.FC<ServicesAddProps> = ({
  services,
  setServices,
  loading,
  error,
}) => {
  if (loading) {
    return <LoadingOrError message="Загрузка..." />;
  }

  if (error) {
    return <LoadingOrError message={error} />;
  }

  return (
    <div className={styles.ServicesTableWrapper}>
      <TableHeader />
      <div className="flex-1 flex-col overflow-y-auto">
        {services.map((service, index) => (
          <ServicesBrick
            services={services}
            setServices={setServices}
            name={service.name}
            key={index}
            status={service.status}
            selectedService={service.selectedService}
            serviceImage={service.serviceImage}
            className="fade-in"
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesTable;
