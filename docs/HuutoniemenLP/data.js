var APP_DATA = {
  "scenes": [
    {
      "id": "0-huutoniemen-uimaranta",
      "name": "Huutoniemen uimaranta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.08471972059171406,
        "pitch": 0.03209863811713731,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4766375874636246,
          "pitch": 0.13000411662084232,
          "rotation": 0,
          "target": "1-veneess"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0627008979219674,
          "pitch": 0.12089396390194906,
          "title": "Vaatteiden vaihtopaikka",
          "text": "Kunnan ylläpitämät uimarannat ovat kaikkien kuntalaisten käytössä. Uimarantojen veden laatua valvotaan säännöllisesti uintikaudella kesäkuun alusta elokuun loppuun asti. Uimarannoilla ei ole järjestettyä valvontaa ja uiminen tapahtuu omalla vastuulla."
        },
        {
          "yaw": -0.9843772956282155,
          "pitch": 0.08494779254343676,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Järvi Kyynämöinen</p>",
          "text": "Heikkilänlahti.&nbsp;<div><br></div>"
        }
      ]
    },
    {
      "id": "1-veneess",
      "name": "Veneessä",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.9478602954515605,
        "pitch": -0.042490829440424704,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6881584717889915,
          "pitch": -0.40043704105654143,
          "rotation": 3.141592653589793,
          "target": "0-huutoniemen-uimaranta"
        },
        {
          "yaw": -0.35288372002573354,
          "pitch": 0.03866198741872573,
          "rotation": 4.71238898038469,
          "target": "2-musta-muikku"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-musta-muikku",
      "name": "Musta-Muikku",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.33829493283008816,
        "pitch": -0.012595159550476964,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6710791167042665,
          "pitch": -0.007619715417474637,
          "rotation": 4.71238898038469,
          "target": "1-veneess"
        },
        {
          "yaw": -2.4964528741653425,
          "pitch": -0.009902997608607578,
          "rotation": 1.5707963267948966,
          "target": "3-polku-rannalla"
        },
        {
          "yaw": 2.900299444175949,
          "pitch": -0.00014247500775432798,
          "rotation": 0,
          "target": "7-kunnan-vuokramkki-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.17917421701096,
          "pitch": 0.021715204488270246,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Kuivakäymälä</p>",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Kuivakäymälä on tässä.</p>"
        }
      ]
    },
    {
      "id": "3-polku-rannalla",
      "name": "Polku rannalla",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.8812323708161216,
        "pitch": -0.0786889932848176,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3475891923463497,
          "pitch": 0.37292789183600306,
          "rotation": 0,
          "target": "2-musta-muikku"
        },
        {
          "yaw": 1.7334887328068866,
          "pitch": 0.3283761703677648,
          "rotation": 0,
          "target": "4-polku-jatkuu"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4133866438463887,
          "pitch": 0.23861651105041837,
          "title": "Polku&nbsp;",
          "text": "Polku Musta-Muikun rannalla.&nbsp;"
        },
        {
          "yaw": 0.8339117344094849,
          "pitch": -0.03782732081152851,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Jäkälät</p>",
          "text": "Polun varrella voit tutustua eri jäkälälajeihin."
        }
      ]
    },
    {
      "id": "4-polku-jatkuu",
      "name": "Polku jatkuu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.8627856448497937,
        "pitch": -0.027350068490219925,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0591563718450487,
          "pitch": 0.43207434752008034,
          "rotation": 0,
          "target": "3-polku-rannalla"
        },
        {
          "yaw": 1.1141097911158617,
          "pitch": 0.17461047953683106,
          "rotation": 5.497787143782138,
          "target": "5-polku-harjanteella"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-polku-harjanteella",
      "name": "Polku harjanteella",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.8410765864256415,
        "pitch": 0.031901043945923746,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.018621109051508,
          "pitch": 0.22552590159914132,
          "rotation": 0,
          "target": "4-polku-jatkuu"
        },
        {
          "yaw": -0.268492769386782,
          "pitch": 0.09541245226666462,
          "rotation": 0,
          "target": "6-jrvien-vliss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-jrvien-vliss",
      "name": "Järvien välissä",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.5575198174440494,
        "pitch": 0.11103962796372535,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.41980786702690764,
          "pitch": 0.1281536061463342,
          "rotation": 0.7853981633974483,
          "target": "7-kunnan-vuokramkki-"
        },
        {
          "yaw": -2.1430951694229528,
          "pitch": 0.13143658828988158,
          "rotation": 0,
          "target": "5-polku-harjanteella"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kunnan-vuokramkki-",
      "name": "Kunnan vuokramökki ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.9130285626518173,
        "pitch": -0.039984633493579835,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9061944978659113,
          "pitch": 0.10361251373627312,
          "rotation": 0.7853981633974483,
          "target": "2-musta-muikku"
        },
        {
          "yaw": -2.0725033251437655,
          "pitch": 0.11188008855438625,
          "rotation": 10.995574287564278,
          "target": "6-jrvien-vliss"
        },
        {
          "yaw": -0.29456840860372857,
          "pitch": 0.10321210999197916,
          "rotation": 0,
          "target": "8-rantasauna"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.592736704938133,
          "pitch": 0.24513948197481916,
          "title": "Kunnan vuokramökki",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Päärakennus Huutoniemessä.</p><p style=\"margin-bottom: 0cm; line-height: 100%\">Alueella sijaitsee päärakennus, rantasauna, nuotiopaikka ja vene, joiden vapaa käyttö sisältyy vuokraan. Vuodepaikkoja on 10 henkilölle.</p><p style=\"margin-bottom: 0cm; line-height: 100%\"><br></p>"
        }
      ]
    },
    {
      "id": "8-rantasauna",
      "name": "Rantasauna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.137175041154336,
          "pitch": 0.2609856183341357,
          "rotation": 5.497787143782138,
          "target": "7-kunnan-vuokramkki-"
        },
        {
          "yaw": -1.8061323403724572,
          "pitch": 0.02232199798144663,
          "rotation": 0,
          "target": "9-nuotiopaikka"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.843754087953667,
          "pitch": 0.055635040536129665,
          "title": "Vene ja p<span style=\"font-family: inherit; font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;\">äärakennus</span>",
          "text": "Vene on tässä, päärakennus on takana.&nbsp;"
        },
        {
          "yaw": -2.5615135675793663,
          "pitch": 0.11213792147852075,
          "title": "Rantasauna",
          "text": "Portaat rantasaunaaan.&nbsp;"
        }
      ]
    },
    {
      "id": "9-nuotiopaikka",
      "name": "Nuotiopaikka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.7753727430366624,
        "pitch": -0.002446317861728886,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9366751681492627,
          "pitch": 0.22310582463086348,
          "rotation": 0,
          "target": "8-rantasauna"
        },
        {
          "yaw": -1.2535888147633578,
          "pitch": 0.17898046930501188,
          "rotation": 7.0685834705770345,
          "target": "0-huutoniemen-uimaranta"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.798238489104456,
          "pitch": 0.11324676478723106,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Kuivakäymälä&nbsp;</p>",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Kuivakäymälä on tässä.&nbsp;</p>"
        }
      ]
    }
  ],
  "name": "Huutoniemen jäkäläpolku",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
