var APP_DATA = {
  "scenes": [
    {
      "id": "0-tervetuloa",
      "name": "Tervetuloa",
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
        "yaw": 3.053596338101258,
        "pitch": 0.1547106795881561,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.297494107076476,
          "pitch": 0.17136737696028526,
          "rotation": 3.141592653589793,
          "target": "1-karhu"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7880622894937641,
          "pitch": 0.11704586454438726,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Polku alkaa</p>",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Polun alku on lapsille erittäin mielenkiintoinen, sillä matkalla tulee yllätyksiä.<br></p>"
        }
      ]
    },
    {
      "id": "1-karhu",
      "name": "Karhu",
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
        "yaw": 0.04923547013157048,
        "pitch": 0.10872364969764092,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3730335133631648,
          "pitch": -0.014345742018930352,
          "rotation": 0,
          "target": "0-tervetuloa"
        },
        {
          "yaw": 0.9645201391547147,
          "pitch": 0.004808139109288234,
          "rotation": 0,
          "target": "2-konttilampi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-konttilampi",
      "name": "Konttilampi",
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
        "yaw": 0.6126432477895101,
        "pitch": 0.05589993637653201,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.172537833223455,
          "pitch": -0.09204212958072944,
          "rotation": 0,
          "target": "1-karhu"
        },
        {
          "yaw": 2.1549292505406203,
          "pitch": 0.00542048829603381,
          "rotation": 0,
          "target": "3-laavu"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03999550987569833,
          "pitch": 0.13453698700910444,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Konttilampi&nbsp;&nbsp;</p>",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Konttilampi on Keski-Suomessa Uuraisissa Myllyperän kylän lähellä\nsijaitseva lampi.</p>"
        }
      ]
    },
    {
      "id": "3-laavu",
      "name": "Laavu",
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
        "yaw": 2.7699705858152566,
        "pitch": -0.023913169580122684,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6861774964347784,
          "pitch": 0.15648450077972242,
          "rotation": 3.141592653589793,
          "target": "2-konttilampi"
        },
        {
          "yaw": 0.8355033739879509,
          "pitch": 0.12536752133905438,
          "rotation": 0,
          "target": "4-tonttu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tonttu",
      "name": "Tonttu",
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
        "yaw": -0.635016375774109,
        "pitch": 0.07682503200081214,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.396533719579896,
          "pitch": 0.23193591170731231,
          "rotation": 3.141592653589793,
          "target": "3-laavu"
        },
        {
          "yaw": 1.5522316885864624,
          "pitch": -0.015524147087075946,
          "rotation": 0,
          "target": "5-polku"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.643503689368158,
          "pitch": 0.5020405939648995,
          "title": "Tonttuja?",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Joro–peikko syntyi toukokuussa 2005.&nbsp;</p><p style=\"margin-bottom: 0cm; line-height: 100%\"><br></p><p style=\"margin-bottom: 0cm; line-height: 100%\">Tekijä moottorisahalla oli\nJorma Roikonen Saarijärveltä.&nbsp;</p><p style=\"margin-bottom: 0cm; line-height: 100%\"><span style=\"font-family: inherit; font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;\">Maalauspuolen hoitivat Irma ja Kirsti.</span></p>"
        }
      ]
    },
    {
      "id": "5-polku",
      "name": "Polku",
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
          "yaw": -0.14357064649009388,
          "pitch": 0.3703607968298872,
          "rotation": 3.141592653589793,
          "target": "4-tonttu"
        },
        {
          "yaw": 2.857482764899194,
          "pitch": 0.016022850381855136,
          "rotation": 0,
          "target": "6-romula"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9346860030750523,
          "pitch": 0.06504785133113344,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Muurahaiset&nbsp;&nbsp;</p>",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Muurahaiset ovat tässä.</p>"
        }
      ]
    },
    {
      "id": "6-romula",
      "name": "Romula",
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
        "yaw": 1.1039986661672607,
        "pitch": 0.00963645250993217,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7881518788113109,
          "pitch": 0.06591412207782632,
          "rotation": 0,
          "target": "7-nktorni"
        },
        {
          "yaw": 1.5646818159114808,
          "pitch": -0.03670601456289546,
          "rotation": 3.9269908169872414,
          "target": "5-polku"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0505454906541,
          "pitch": 0.4104378333272827,
          "title": "Uuni",
          "text": "Alkeellinen uuni on tässä."
        },
        {
          "yaw": -0.5514142944074081,
          "pitch": 0.2681049434691545,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">&nbsp;Romula</p>",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Tässä on ollut vanha rakennus noin 200 vuotta sitten. Jäljellä on\nmuutama esine, jotka ovat löytyneet paikalta.</p><p style=\"margin-bottom: 0cm; line-height: 100%\"><br></p><p style=\"margin-bottom: 0cm; line-height: 100%\">Perimätietojen mukaan\npaikan nimi on ollut Romula.</p>"
        }
      ]
    },
    {
      "id": "7-nktorni",
      "name": "Näkötorni",
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
          "yaw": -0.15607684398912625,
          "pitch": 0.13246171726379075,
          "rotation": 0,
          "target": "8-nktorniss"
        },
        {
          "yaw": 2.63371921413494,
          "pitch": -0.17984620874370094,
          "rotation": 3.141592653589793,
          "target": "6-romula"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-nktorniss",
      "name": "Näkötornissä",
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
        "yaw": 0.4071967997302224,
        "pitch": -0.026148313100737397,
        "fov": 1.669502076368027
      },
      "linkHotspots": [
        {
          "yaw": 2.6968122383332904,
          "pitch": 0.6984225167760965,
          "rotation": 3.141592653589793,
          "target": "7-nktorni"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8947690233125574,
          "pitch": 0.481716440898051,
          "title": "Polku",
          "text": "Polku jatkuu Pieni Konttilammelle."
        }
      ]
    }
  ],
  "name": "Kontionjälki",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
