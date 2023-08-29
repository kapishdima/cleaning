export const services = {
  Vinnitsa: {
    "Підтримуюче прибирання": {
      "до 50 м2": "800 грн",
      "до 70 м2": "950 грн",
      "до 120 м2": "1450 грн",
      "до 150 м2": "1800 грн",
      "від 150 м2": "13 грн/м2",

      "Помити витяжку": "Від 350 грн",
      "Помити посуд": "100 грн / год",
      "Помити духову шафу": "Від 400 грн",
      "Протерти шафи всередині": "Від 20 грн / шт",
      "Помити холодильник": "Від 350 грн",
      "Вимити кахель + шви": "80 грн / м2",
      "Почистити шви на підлозі/стінах": "50 грн / м2",
      "Прибрати додатковий санвузол": "Від 350 грн",
      "Домашні улюбленці": "+ 200 грн",
      "Хімчистка штор парогенератором від пилу та шкідників":
        "Від 250 грн/пара",
      Прасування: "180 грн / год",
    },
  },
};

export const getServiceValue = (city, category, name) => {
  const value = services[city][category][name];

  if (!value) {
    return "";
  }

  return value;
};
