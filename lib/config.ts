import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;
export const whyUsItems: {
  title: string;
  description: string;
  icon: IconName
}[] = [
  {
    title: "Безопасность",
    description: "Мы надёжно шифруем ваши данные",
    icon: "Lock",
  },
  {
    title: "Скорость",
    description: "Молниеносная загрузка и стабильная работа",
    icon: "CircleGauge",
  },
  {
    title: "Поддержка 24/7",
    description: "Отвечаем на ваши вопросы в любое время суток",
    icon: "Headset",
  },
  {
    title: "Простой интерфейс",
    description: "Интуитивно понятный дизайн без лишнего",
    icon: "LayoutDashboard",
  },
  {
    title: "Надёжность",
    description: "Стабильная система, проверенная тестами и временем",
    icon: "ShieldCheck",
  },
];