import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Table: "Table",
      Hierarchy: "Hierarchy",
      Loading: "Loading",
      AddingNode: "Adding node",
      Close: "Close",
      Add: "Add",
      Name: "Name",
      EnterName: "Enter name",
      NameExists: "This name already exists",
      IncorrectNameFormat: "Incorrect name format",
      IPAddress: "IP-address",
      IncorrectIPFormat: "Incorrect IP format",
      Port: "Port",
      IncorrectPortNumberFormat: "Incorrect port number format",
      Node: "Node",
      ChangeCurrentNode: "Change current node",
      AddingFilter: "Adding filter",
      Filter: "Filter",
      EnterFilter: "Enter filter",
      FillThisField: "Fill this field",
      ConfirmFilter: "Confirm filter",
    },
  },
  ru: {
    translation: {
      Table: "Таблица",
      Hierarchy: "Иерархия",
      Loading: "Загрузка",
      AddingNode: "Добавление узла",
      Close: "Закрыть",
      Add: "Добавить",
      Name: "Имя",
      EnterName: "Введите имя",
      NameExists: "Такое имя уже существует",
      IncorrectNameFormat: "Неккоректный формат имени",
      IPAddress: "IP-адрес",
      IncorrectIPFormat: "Некорректный формат IP-адреса",
      Port: "Порт",
      IncorrectPortNumberFormat: "Некорректный формат номера порта",
      Node: "Узел",
      ChangeCurrentNode: "Изменить выбранный узел",
      AddingFilter: "Добавление фильтра",
      Filter: "Фильтр",
      EnterFilter: "Введите фильтр",
      FillThisField: "Заполните поле",
      ConfirmFilter: "Применить фильтр",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
