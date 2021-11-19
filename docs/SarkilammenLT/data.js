var APP_DATA = {
  "scenes": [
    {
      "id": "0-polku",
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
        "yaw": -0.1246628420797613,
        "pitch": 0.1192521801529196,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.080561245863162,
          "pitch": 0.06390669225387313,
          "rotation": 3.141592653589793,
          "target": "1-lhell"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2571634807734835,
          "pitch": 0.1376415773476367,
          "title": "Polku",
          "text": "Helppo ja erittäin lyhyt polku asfaltti tieltä."
        }
      ]
    },
    {
      "id": "1-lhell",
      "name": "Lähellä",
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
          "yaw": -0.49319423648819694,
          "pitch": 0.022961545618768398,
          "rotation": 0,
          "target": "0-polku"
        },
        {
          "yaw": -3.1138006344523514,
          "pitch": -0.41102402494837875,
          "rotation": 0,
          "target": "2-srkilammen-lintutornissa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8162741860894593,
          "pitch": 0.2168728845598178,
          "title": "Särkilammen lintutorni",
          "text": "Torni on rakennettu kesällä 2005 ympäristökeskuksen YTY-projektin toimesta."
        }
      ]
    },
    {
      "id": "2-srkilammen-lintutornissa",
      "name": "Särkilammen lintutornissa",
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
        "yaw": -0.2694073031155213,
        "pitch": 0.04998719363371151,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.058839531378858,
          "pitch": 0.18190360153470664,
          "rotation": 0.7853981633974483,
          "target": "3-srkilampi-lintutornista"
        },
        {
          "yaw": 2.981853688802804,
          "pitch": 0.5534926439548293,
          "rotation": 3.141592653589793,
          "target": "1-lhell"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2892717205355986,
          "pitch": 0.13705729877792372,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Lintuja</p>",
          "text": "Kevätmuuton aikaan tulvivalla lammella viivähtää vesilintuja ja kahlaajia. Laulujoutsen pesii. Huippuhavaintona on kuultu jänkäkurpan soidinta."
        }
      ]
    },
    {
      "id": "3-srkilampi-lintutornista",
      "name": "Särkilampi lintutornista",
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
        "yaw": 1.4959834949015214,
        "pitch": 0.2095271135311787,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8205128302197036,
          "pitch": 0.15276066923868292,
          "rotation": 5.497787143782138,
          "target": "2-srkilammen-lintutornissa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8984076527427876,
          "pitch": 0.15043443075918717,
          "title": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Särkilampi</p>",
          "text": "Särkilampi on lähes umpeenkasvanut suorantainen lampi, jota ollaan kunnostamassa lintuvedeksi lisäämällä avovesialueita ja nostamalla vedenpintaa. Särkilammelle on perustettu luonnonsuojelualue vuonna 2006."
        }
      ]
    }
  ],
  "name": "Särkilammen lintutorni",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
