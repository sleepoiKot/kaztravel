import { Meteor } from 'meteor/meteor';

import {
  insertDefaultUsers,
  insertDefaultNominations,
  insertDefaultNominationsStyling
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
      shortDescription: {
        ru: "фестивали конкурсы концерты спектакли",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-1-500x500.jpg",
      suffix: "event"
    },
    {
      name: {
        ru: "Лучшая туристская компания",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "внутренний и въездной туризм",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-13-500x1000.jpg",
      suffix: "company"
    },
    {
      name: {
        ru: "Лучший турпродукт",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "внутренний и въездной туризм",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-4-500x500.jpg",
      suffix: "product"
    },
    {
      name: {
        ru: "Лучший гид-экскурсовод",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-5-500x1000.jpg",
      suffix: "guide"
    },
    {
      name: {
        ru: "Лучший объект гостиничной идустрии",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-11-500x1000.jpg",
      suffix: "hotel"
    },
    {
      name: {
        ru: "Лучший проект по детско-юношенскому туризму",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-3-500x500.jpg",
      suffix: "youth"
    },
    {
      name: {
        ru: "Лучший культурно-познавательный маршрут",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "маршрут, включающий выбор определенной тематической направленности",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-7-500x1000.jpg",
      suffix: "culture"
    },
    {
      name: {
        ru: "Лучший интернет-сервис для туристов",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "веб-ресуры мобильные приложения",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-6-500x500.jpg",
      suffix: "web"
    },
    {
      name: {
        ru: "Лучший журналист по освещению туристской тематики",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-14-500x500.jpg",
      suffix: "journalist"
    },
    {
      name: {
        ru: "Лучший медиа-проект по туризму",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-8-500x500.jpg",
      suffix: "media"
    },
    {
      name: {
        ru: "Лучший туристический путеводитель",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "печатные издания туристических путеводителей",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-9-500x500.jpg",
      suffix: "guidebook"
    },
    {
      name: {
        ru: "Лучший туристический информационный центр",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "оценивается деательность ТИЦ разработка и продвижение турмаршрутов",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-10-500x500.jpg",
      suffix: "info"
    },
    {
      name: {
        ru: "Лучшая идея маршрута",
        kz: "",
        en: ""
      },
      shortDescription: {
        ru: "туристский маршрут, который ранее не был реализован",
        kz: "",
        en: ""
      },
      src: "/assets/img/portfolio-10-500x500.jpg",
      suffix: "route"
    }
  ]

  const styling = [
    {i: 1, position: 'absolute', left: '0%', top: 0},
    {i: 2, position: 'absolute', left: '25%', top: 0},
    {i: 3, position: 'absolute', left: '50%', top: 0},
    {i: 4, position: 'absolute', left: '75%', top: 0},

    {i: 5, position: 'absolute', left: '0%', top: 276},
    {i: 6, position: 'absolute', left: '50%', top: 276},

    {i: 7, position: 'absolute', left: '25%', top: 552},
    {i: 8, position: 'absolute', left: '75%', top: 552},

    {i: 9, position: 'absolute', left: '0%', top: 828},
    {i: 10, position: 'absolute', left: '25%', top: 828},
    {i: 11, position: 'absolute', left: '50%', top: 828},
    {i: 12, position: 'absolute', left: '75%', top: 828},

    {i: 13, position: 'absolute', left: '0%', top: 1104},
    {i: 14, position: 'absolute', left: '50%', top: 1104},

    {i: 15, position: 'absolute', left: '25%', top: 1380},
    {i: 16, position: 'absolute', left: '75%', top: 1380},

    {i: 17, position: 'absolute', left: '0%', top: 1656},
    {i: 18, position: 'absolute', left: '25%', top: 1656},
    {i: 19, position: 'absolute', left: '50%', top: 1656},
    {i: 20, position: 'absolute', left: '75%', top: 1656},
  ]

  insertDefaultNominationsStyling(styling)
  insertDefaultNominations(nominations)
});
