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
      name: "Лучший проект событийного туризма",
      shortDescription: "фестивали конкурсы концерты спектакли",
      suffix: "event"
    },
    {
      name: "Лучшая туристская компания",
      shortDescription: "внутренний и въездной туризм",
      suffix: "company"
    },
    {
      name: "Лучший турпродукт",
      shortDescription: "внутренний и въездной туризм",
      suffix: "product"
    },
    {
      name: "Лучший гид-экскурсовод",
      shortDescription: "",
      suffix: "guide"
    },
    {
      name: "Лучший объект гостиничной идустрии",
      shortDescription: "",
      suffix: "hotel"
    },
    {
      name: "Лучший проект по детско-юношенскому туризму",
      shortDescription: "",
      suffix: "youth"
    },
    {
      name: "Лучший культурно-познавательный маршрут",
      shortDescription: "маршрут, включающий выбор определенной тематической направленности",
      suffix: "culture"
    },
    {
      name: "Лучший интернет-сервис для туристов",
      shortDescription: "веб-ресуры мобильные приложения",
      suffix: "web"
    },
    {
      name: "Лучший журналист по освещению туристской тематики",
      shortDescription: "",
      suffix: "journalist"
    },
    {
      name: "Лучший медиа-проект по туризму",
      shortDescription: "",
      suffix: "media"
    },
    {
      name: "Лучший туристический путеводитель",
      shortDescription: "печатные издания туристических путеводителей",
      suffix: "guidebook"
    },
    {
      name: "Лучший туристический информационный центр",
      shortDescription: "оценивается деательность ТИЦ разработка и продвижение турмаршрутов",
      suffix: "info"
    },
    {
      name: "Лучшая идея маршрута",
      shortDescription: "туристский маршрут, который ранее не был реализован",
      suffix: "route"
    }
  ]

  insertDefaultNominations(nominations)
});
