import { Meteor } from 'meteor/meteor';

import {
  insertDefaultUsers,
  insertDefaultNominations
} from '/server/lib/defaultDataRelated'

Meteor.startup(() => {
  // code to run on server at startup
  insertDefaultUsers([{
    username: 'superadmin',
    email: 'superadmin@kaztravel.kz',
    password: 'superadmin',
    profile: {
      name: 'superadmin',
      isAdmin: true
    }
  }])

  const nominations = [
    {
      name: {
        ru: "Лучший проект событийного туризма",
        kz: "",
        en: ""
      },
      shortDescription: "фестивали конкурсы концерты спектакли",
      suffix: "event"
    },
    {
      name: {
        ru: "Лучшая туристская компания",
        kz: "",
        en: ""
      },
      shortDescription: "внутренний и въездной туризм",
      suffix: "company"
    },
    {
      name: {
        ru: "Лучший турпродукт",
        kz: "",
        en: ""
      },
      shortDescription: "внутренний и въездной туризм",
      suffix: "product"
    },
    {
      name: {
        ru: "Лучший гид-экскурсовод",
        kz: "",
        en: ""
      },
      shortDescription: "",
      suffix: "guide"
    },
    {
      name: {
        ru: "Лучший объект гостиничной идустрии",
        kz: "",
        en: ""
      },
      shortDescription: "",
      suffix: "hotel"
    },
    {
      name: {
        ru: "Лучший проект по детско-юношенскому туризму",
        kz: "",
        en: ""
      },
      shortDescription: "",
      suffix: "youth"
    },
    {
      name: {
        ru: "Лучший культурно-познавательный маршрут",
        kz: "",
        en: ""
      },
      shortDescription: "маршрут, включающий выбор определенной тематической направленности",
      suffix: "culture"
    },
    {
      name: {
        ru: "Лучший интернет-сервис для туристов",
        kz: "",
        en: ""
      },
      shortDescription: "веб-ресуры мобильные приложения",
      suffix: "web"
    },
    {
      name: {
        ru: "Лучший журналист по освещению туристской тематики",
        kz: "",
        en: ""
      },
      shortDescription: "",
      suffix: "journalist"
    },
    {
      name: {
        ru: "Лучший медиа-проект по туризму",
        kz: "",
        en: ""
      },
      shortDescription: "",
      suffix: "media"
    },
    {
      name: {
        ru: "Лучший туристический путеводитель",
        kz: "",
        en: ""
      },
      shortDescription: "печатные издания туристических путеводителей",
      suffix: "guidebook"
    },
    {
      name: {
        ru: "Лучший туристический информационный центр",
        kz: "",
        en: ""
      },
      shortDescription: "оценивается деательность ТИЦ разработка и продвижение турмаршрутов",
      suffix: "info"
    },
    {
      name: {
        ru: "Лучшая идея маршрута",
        kz: "",
        en: ""
      },
      shortDescription: "туристский маршрут, который ранее не был реализован",
      suffix: "route"
    }
  ]

  insertDefaultNominations(nominations)
});
