var APP_DATA = {
  "scenes": [
    {
      "id": "0-pikku-kuukan-puiston-uimaranta",
      "name": "Pikku-Kuukan puiston uimaranta",
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
        "yaw": -0.37347858707562587,
        "pitch": 0.3086519640775425,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07260848786220642,
          "pitch": 0.021235891026217146,
          "rotation": 0,
          "target": "3-laiturilla"
        },
        {
          "yaw": -0.7096451443096505,
          "pitch": 0.188478225775512,
          "rotation": 0,
          "target": "1-veneess"
        }
      ],
      "infoHotspots": []
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8312597352312254,
          "pitch": 0.027622974817806067,
          "rotation": 3.141592653589793,
          "target": "0-pikku-kuukan-puiston-uimaranta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-grillikatos-aittovuorella",
      "name": "Grillikatos Aittovuorella",
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
        "yaw": 0.5349612154979635,
        "pitch": 0.1628237448974783,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8004669243627305,
          "pitch": 0.413111064122095,
          "rotation": 0,
          "target": "3-laiturilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-laiturilla",
      "name": "Laiturilla",
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
        "yaw": 0.10960495027200423,
        "pitch": 0.2213663341898915,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.057332236786763247,
          "pitch": -0.021993549197027562,
          "rotation": 0,
          "target": "2-grillikatos-aittovuorella"
        },
        {
          "yaw": -2.1785614914724576,
          "pitch": -0.10136681050608587,
          "rotation": 3.141592653589793,
          "target": "0-pikku-kuukan-puiston-uimaranta"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Aittovuori",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
