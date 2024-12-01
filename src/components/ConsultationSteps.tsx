import { Search, Calendar, Mountain } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const ConsultationSteps = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: t("search"),
      description: t("searchDescription")
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: t("book"),
      description: t("bookDescription")
    },
    {
      icon: <Mountain className="h-12 w-12 text-primary" />,
      title: t("travel"),
      description: t("travelDescription")
    }
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          {t("howItWorks")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSteps;